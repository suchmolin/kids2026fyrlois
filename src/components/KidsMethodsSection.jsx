export function KidsMethodsSection() {
  return (
    <section
      id="informacion"
      className="bg-fyr-blue px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-20"
      aria-labelledby="kids-methods-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="kids-methods-heading"
          className="font-eastman text-center text-xl font-black leading-tight tracking-tighter text-white sm:text-2xl md:text-4xl lg:text-5xl"
        >
          Inglés para niños con métodos
        </h2>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:mt-2 sm:gap-3">
          <span className="rounded-sm bg-fyr-pink px-2 py-1 text-sm font-bold text-white sm:px-2 sm:py-1 sm:text-2xl md:text-4xl lg:text-5xl">
            didácticos
          </span>
          <span className="rounded-sm bg-fyr-lime px-2 py-1 text-sm font-bold text-white sm:px-2 sm:py-1 sm:text-2xl md:text-4xl lg:text-5xl">
            dinámicos
          </span>
          <span className="rounded-sm bg-fyr-orange px-2 py-1 text-sm font-bold text-white sm:px-2 sm:py-1 sm:text-2xl md:text-4xl lg:text-5xl">
            divertidos
          </span>
        </div>

        <div className="mt-6 px-0 sm:mt-8 md:mt-10">
          <p className="font-eastman mx-auto max-w-4xl text-center text-sm font-bold leading-snug tracking-tight text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            <span className="md:hidden">
              Donde cada clase es una aventura que fortalece la confianza y las
              habilidades reales, como nuestros estudiantes que están aprendiendo
              palabras mientras sonríen y bailan.
            </span>
            <span className="hidden md:block">
              <span className="block whitespace-nowrap">
                Donde cada clase es una aventura que fortalece la confianza y las
              </span>
              <span className="mt-0.5 block whitespace-nowrap sm:mt-1">
                habilidades reales como nuestros estudiantes que están aprendiendo
              </span>
              <span className="mt-0.5 block whitespace-nowrap sm:mt-1">
                palabras mientras sonríen y bailan:
              </span>
            </span>
          </p>
        </div>

        <img
          src="/kidsphoto.png"
          alt=""
          className="mx-auto mt-8 w-full max-w-2xl rounded-2xl object-cover sm:mt-10 md:mt-12"
          decoding="async"
        />
      </div>
    </section>
  )
}
