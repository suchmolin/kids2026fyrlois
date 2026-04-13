import { useState } from 'react'

function StarRating({ className }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-fyr-orange ${className ?? ''}`}
      aria-label="5 de 5 estrellas"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 md:h-7 md:w-7"
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
      className="relative isolate z-10  bg-fyr-pink px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24"
      aria-labelledby="kids-testimonial-heading"
    >
      <img
        src="/open2.png"
        alt=""
        decoding="async"
        className="pointer-events-none absolute left-1 -top-10 h-32 w-auto max-w-[min(42vw,14rem)] select-none object-contain object-left-top sm:left-4 sm:-top-20 sm:h-48 sm:max-w-[min(38vw,18rem)] md:h-56 lg:left-8 lg:h-72 lg:max-w-none xl:-top-40 xl:h-[22rem]"
        aria-hidden
      />
      <img
        src="/close2.png"
        alt=""
        decoding="async"
        className="pointer-events-none absolute -bottom-10 right-1 z-10 h-32 w-auto max-w-[min(42vw,14rem)] select-none object-contain object-right-bottom sm:right-4 sm:h-48 sm:max-w-[min(38vw,18rem)] md:h-56 lg:right-8 lg:h-72 lg:max-w-none xl:-bottom-40 xl:h-[22rem]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl">
        <h2 id="kids-testimonial-heading" className="sr-only">
          Testimonio
        </h2>

        <div className="z-10 -mx-4 px-4 sm:-mx-0 sm:px-0">
          <blockquote className="font-eastman text-center text-base font-bold leading-snug tracking-tight text-white sm:leading-[1.2] md:text-base lg:text-xl xl:text-2xl">
            <p className="md:hidden">
              Este curso de inglés me parece muy bueno para todas las edades,
              tanto para adultos como para niños. Para los niños tiene un toque
              especial: es un curso familiar que fomenta su confianza y no les
              da ese miedo que usualmente tienen al aprender un nuevo idioma.
              Realmente en Fyr Lois ellos aprenden jugando.
            </p>
            <p className="hidden flex-col items-center gap-0 md:flex">
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

        <footer className="mt-8 flex flex-col items-start gap-3 sm:mt-12 sm:flex-row sm:gap-5 lg:mt-14">
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white/30 sm:h-[4.5rem] sm:w-[4.5rem] md:h-[5rem] md:w-[5rem]">
            {!avatarFailed ? (
              <img
                src="/PAPA.png"
                alt="José Ramón Zerpa"
                className="h-full w-full object-cover object-top"
                width={80}
                height={80}
                onError={() => setAvatarFailed(true)}
              />
            ) : (
              <span
                className="text-lg font-black tracking-tighter text-fyr-blue sm:text-xl md:text-2xl"
                aria-hidden
              >
                JR
              </span>
            )}
          </div>

          <div className="flex min-w-0 flex-col items-start tracking-tighter text-left">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <cite className="not-italic">
                <span className="text-lg font-black text-sky-200 sm:text-xl md:text-2xl lg:text-3xl">
                  José Ramón Zerpa
                </span>
              </cite>
              <StarRating />
            </div>
            <p className="mt-1 text-xl font-bold text-white sm:mt-1.5 sm:text-2xl md:text-3xl lg:text-4xl">
              Ex alumno y representante de estudiante.
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}
