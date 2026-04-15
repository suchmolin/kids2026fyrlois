export function KidsSiteHeader() {
  return (
    <header className="w-full min-w-0 overflow-x-hidden bg-white px-4 pt-4 pb-3 sm:px-6 sm:pt-5 sm:pb-4 lg:px-10 lg:pt-6">
      <div className="mx-auto flex w-full min-w-0 max-w-full flex-col items-center gap-3 sm:flex-row sm:flex-nowrap sm:justify-center sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
        <a href="/" className="inline-block max-w-full shrink-0">
          <img
            src="/logoFyrlois.png"
            alt="Fyr Lois"
            className="h-24 w-auto max-w-[min(100%,460px)] object-contain object-left sm:h-[6.125rem] md:h-[7.75rem] lg:h-[8rem] xl:h-36 2xl:h-40"
            width={320}
            height={86}
          />
        </a>
        <p className="-mt-8 sm:-mt-0 font-eastman w-full min-w-0 max-w-full text-center text-[clamp(0.9375rem,3.4vw+0.35rem,1.375rem)] font-bold leading-tight tracking-tight whitespace-nowrap sm:max-w-none sm:w-auto sm:shrink-0 sm:text-[clamp(1.375rem,2.35vw+0.65rem,2.375rem)] md:text-[clamp(1.5rem,2.5vw+0.5rem,2.625rem)] lg:text-[clamp(1.625rem,2.35vw+0.65rem,2.75rem)] xl:text-[clamp(1.75rem,2.2vw+0.75rem,2.875rem)]">
          <span className="text-fyr-blue">¡Su crecimiento </span>
          <span className="text-fyr-orange">comienza aquí!</span>
        </p>
      </div>
    </header>
  )
}
