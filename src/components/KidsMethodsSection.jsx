export function KidsMethodsSection() {
  return (
    <section
      id="informacion"
      className="bg-fyr-blue px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-20"
      aria-labelledby="kids-methods-heading"
    >
      <div className="mx-auto">
        <h2
          id="kids-methods-heading"
          className="font-eastman text-center text-2xl font-black leading-tight tracking-tighter text-white sm:text-3xl lg:text-5xl"
        >
          Inglés para niños con métodos
        </h2>

        <div className="mt-1 flex flex-nowrap items-center justify-center gap-2 sm:mt-1 sm:gap-3">
          <span className=" px-1 py-1.5 text-base font-bold text-white sm:px-2 sm:py-1 sm:text-5xl bg-fyr-pink">
            didácticos
          </span>
          <span className=" bg-fyr-lime px-1 py-1.5 text-base font-bold text-white sm:px-2 sm:py-1 sm:text-5xl">
            dinámicos
          </span>
          <span className=" bg-fyr-orange px-1 py-1.5 text-base font-bold text-white sm:px-2 sm:py-1 sm:text-5xl">
            divertidos
          </span>
        </div>

        <div className=" mt-8 px-4 sm:-mx-0 sm:mt-10 sm:px-0">
          <p className="font-eastman text-center mx-auto text-center text-base font-bold leading-[1] tracking-tight text-white sm:text-lg lg:text-3xl">
            <span className="block whitespace-nowrap">
              Donde cada clase es una aventura que fortalece la confianza y las
            </span>
            <span className="mt-0.5 block whitespace-nowrap sm:mt-1">
              habilidades reales como nuestros estudiantes que están aprendiendo
            </span>
            <span className="mt-0.5 block whitespace-nowrap sm:mt-1">
              palabras mientras sonrien y bailan:
            </span>
          </p>
        </div>

        <div
          className="mx-auto mt-10 flex aspect-video max-w-2xl items-center justify-center rounded-2xl bg-[#000c2e] sm:mt-12"
          role="img"
          aria-label="Video"
        >
          <span className="font-eastman text-2xl font-bold text-white sm:text-3xl">
            Video
          </span>
        </div>
      </div>
    </section>
  )
}
