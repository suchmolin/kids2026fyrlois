import { useState } from 'react'

function QuoteMark({ closing, className }) {
  return (
    <span
      className={`pointer-events-none select-none font-serif font-bold leading-none text-black/20 ${className ?? ''}`}
      aria-hidden
    >
      {closing ? '\u201D' : '\u201C'}
    </span>
  )
}

function StarRating({ className }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-fyr-orange ${className ?? ''}`}
      aria-label="5 de 5 estrellas"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

export function KidsTestimonialSection() {
  const [avatarFailed, setAvatarFailed] = useState(false)

  return (
    <section
      className="relative isolate overflow-hidden bg-fyr-pink px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24"
      aria-labelledby="kids-testimonial-heading"
    >
      <QuoteMark className="absolute left-1 top-2 text-[6rem] sm:left-4 sm:top-4 sm:text-[8.5rem] lg:left-8 lg:text-[10rem]" />
      <QuoteMark
        closing
        className="absolute bottom-2 right-1 text-[6rem] sm:right-4 sm:text-[8.5rem] lg:right-8 lg:text-[10rem]"
      />

      <div className="relative mx-auto max-w-4xl">
        <h2 id="kids-testimonial-heading" className="sr-only">
          Testimonio
        </h2>

        <div className="-mx-4 px-4 sm:-mx-0 sm:px-0">
          <blockquote className="font-eastman text-center text-lg font-semibold leading-relaxed tracking-tight text-white sm:text-xl lg:text-2xl">
            <p className="flex flex-col items-center gap-0">
              <span className="block w-max whitespace-nowrap">
                Este curso de inglés, me parece muy bueno, para todas las edades,
                tanto para adultos
              </span>
              <span className="mt-1 block w-max whitespace-nowrap sm:mt-1.5">
                como para niños. Para los niños tiene un toque especial, es un
                curso familiar, que fomenta
              </span>
              <span className="mt-1 block w-max whitespace-nowrap sm:mt-1.5">
                su confianza, no les da ese miedo que usualmente tienen al
                aprender un nuevo idioma,
              </span>
              <span className="mt-1 block w-max whitespace-nowrap sm:mt-1.5">
                realmente en Fyr Lois ellos aprenden jugando.
              </span>
            </p>
          </blockquote>
        </div>

        <footer className="mt-10 flex flex-col items-start gap-4 sm:mt-12 sm:flex-row sm:gap-5 lg:mt-14">
          <div className="relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white/40 sm:h-[5rem] sm:w-[5rem]">
            {!avatarFailed ? (
              <img
                src="/testimonial-photo.png"
                alt="José Ramón Zerpa"
                className="h-full w-full object-cover object-top"
                width={80}
                height={80}
                onError={() => setAvatarFailed(true)}
              />
            ) : (
              <span
                className="text-lg font-black tracking-tighter text-fyr-blue sm:text-xl"
                aria-hidden
              >
                JR
              </span>
            )}
          </div>

          <div className="flex min-w-0 flex-col items-start tracking-tighter text-left">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <cite className="not-italic">
                <span className="text-xl font-black text-sky-200 sm:text-2xl lg:text-3xl">
                  José Ramón Zerpa
                </span>
              </cite>
              <StarRating />
            </div>
            <p className="mt-1.5 text-xl font-bold text-white sm:mt-2 sm:text-2xl lg:text-3xl">
              Ex alumno y representante de estudiante.
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}
