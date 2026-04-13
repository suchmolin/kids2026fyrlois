const WHY_ARROW_SRC = '/arrow.png'

function ListArrowIcon({ className }) {
  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12 md:h-14 md:w-14 ${className ?? ''}`}
      aria-hidden
    >
      <img
        src={WHY_ARROW_SRC}
        alt=""
        className="h-full w-full object-contain object-center"
        loading="lazy"
        decoding="async"
      />
    </span>
  )
}

export function KidsWhySection() {
  return (
    <section
      className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="kids-why-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 sm:gap-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <h2
          id="kids-why-heading"
          className="font-eastman max-w-xl text-balance text-center text-2xl font-bold leading-tight tracking-tighter text-[#001f5c] sm:text-3xl md:text-4xl lg:max-w-none lg:text-left lg:text-[2.25rem] xl:text-4xl"
        >
          <span className="block">¿Por qué es importante</span>
          <span className="mt-1 block text-3xl font-extrabold text-fyr-green sm:mt-1.5 sm:text-4xl md:text-5xl lg:text-6xl">
            aprender inglés
          </span>
          <span className="mt-1 block text-2xl font-extrabold text-fyr-orange sm:mt-1.5 sm:text-3xl md:text-4xl lg:ml-0 lg:text-5xl xl:text-6xl">
            desde pequeños?
          </span>
        </h2>

        <ul className="font-eastman flex w-full max-w-xl flex-col justify-center space-y-4 text-base leading-snug tracking-tight text-neutral-900 sm:max-w-none sm:space-y-5 sm:text-lg md:space-y-6 md:text-xl lg:justify-start lg:text-2xl">
          <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
            <ListArrowIcon className="mt-0.5" />
            <span>
              El inglés abre puertas en la escuela, viajes y futuro laboral
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
            <ListArrowIcon className="mt-0.5" />
            <span>
              Mejora la memoria, concentración y habilidades cognitivas
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
            <ListArrowIcon className="mt-0.5" />
            <span>
              Desarrolla confianza al comunicarse desde temprano
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
