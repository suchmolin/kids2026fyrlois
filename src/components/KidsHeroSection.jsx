export function KidsHeroSection() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]"
      aria-labelledby="kids-hero-heading"
    >
      <div className="relative flex min-h-[260px] items-center bg-fyr-green px-5 py-10 sm:min-h-[300px] sm:px-8 sm:py-12 lg:min-h-[min(52dvh,520px)] lg:px-40 lg:py-14">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[32%] min-w-[3.5rem] bg-gradient-to-l from-fyr-green from-20% via-fyr-green/70 to-transparent lg:w-[36%]"
          aria-hidden
        />
        <div className="relative z-10 w-full">
          <h2
            id="kids-hero-heading"
            className="font-eastman text-left text-2xl font-bold leading-[1.12] tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-5xl"
          >
            <span className="block w-max max-w-none whitespace-nowrap">
              ¡Aprender inglés no
            </span>
            <span className="mt-0.5 block w-max max-w-none whitespace-nowrap sm:mt-1">
              solo es divertido, pero
            </span>
            <span className="mt-0.5 block w-max max-w-none whitespace-nowrap sm:mt-1">
              super efectivo para
            </span>
            <span className="mt-0.5 block w-max max-w-none whitespace-nowrap text-fyr-navy-line sm:mt-1">
              el futuro de sus hijos!
            </span>
          </h2>
        </div>
      </div>

      <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[min(52dvh,520px)]">
        <img
          src="/hero-kids-photo.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}
