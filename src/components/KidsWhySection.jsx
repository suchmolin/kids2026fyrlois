function ListArrowIcon({ className }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fyr-orange ${className ?? ''}`}
      aria-hidden
    >
      <svg
        className="h-[1.125rem] w-[1.125rem] text-white sm:h-5 sm:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h8M13 9l5 3M13 15l5-3" />
      </svg>
    </span>
  )
}

export function KidsWhySection() {
  return (
    <section
      className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="kids-why-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <h2
          id="kids-why-heading"
          className="font-eastman text-balance text-2xl font-black leading-[0.8] tracking-tighter sm:text-3xl lg:text-4xl xl:text-[2.75rem] text-nowrap text-center lg:text-left"
        >
          <span className="block text-[#001f5c]">¿Por qué es importante</span>
          <span className="block text-fyr-green  text-7xl font-extrabold">aprender inglés</span>
          <span className=" block text-fyr-orange  text-6xl ml-10">desde pequeños?</span>
        </h2>

        <ul className="font-eastman space-y-5 text-lg leading-snug tracking-tight text-neutral-900 sm:space-y-6 sm:text-xl lg:text-2xl flex flex-col justify-center lg:justify-start">
          <li className="flex items-start gap-3 sm:gap-4">
            <ListArrowIcon className="mt-0.5" />
            <span>
              <span className="block">El inglés abre puertas en la escuela,</span>
              <span className="block">viajes y futuro laboral</span>
            </span>
          </li>
          <li className="flex items-start gap-3 sm:gap-4">
            <ListArrowIcon className="mt-0.5" />
            <span>
              <span className="block">Mejora la memoria, concentración</span>
              <span className="block">y habilidades cognitivas</span>
            </span>
          </li>
          <li className="flex items-start gap-3 sm:gap-4">
            <ListArrowIcon className="mt-0.5" />
            <span>
              <span className="block">Desarrolla confianza al</span>
              <span className="block">comunicarse desde temprano</span>
            </span>
          </li>
        </ul>
      </div>
 
    </section>
  )
}
