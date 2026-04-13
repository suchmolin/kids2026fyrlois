function HeroTitle({ className, id, variant }) {
  const isMobile = variant === 'mobile'

  /* Móvil: tipografía grande; línea 4 claramente mayor */
  const bodyMobile =
    'block w-full max-w-full min-w-0 [overflow-wrap:anywhere] text-white text-[clamp(1.1875rem,4vw+0.65rem,2.5rem)]'

  const lastMobile =
    'mt-2.5 block w-full max-w-full min-w-0 [overflow-wrap:anywhere] text-fyr-blue text-[clamp(1.4375rem,4.85vw+0.65rem,3rem)] sm:mt-2'

  return (
    <h2 {...(id ? { id } : {})} className={className}>
      <span className={isMobile ? bodyMobile : 'block w-full text-white'}>
        ¡Aprender inglés no
      </span>
      <span className={isMobile ? bodyMobile : 'block w-full text-white'}>
        solo es divertido, pero
      </span>
      <span
        className={`mt-0.5 block w-full max-w-full min-w-0 text-white ${isMobile ? bodyMobile : 'whitespace-nowrap'}`}
      >
        super efectivo para
      </span>
      <span
        className={
          isMobile
            ? lastMobile
            : 'mt-2.5 block w-full whitespace-nowrap text-fyr-blue text-xl sm:mt-2 sm:text-[2.0625rem] lg:text-[3.0625rem]'
        }
      >
        el futuro de sus hijos!
      </span>
    </h2>
  )
}

export function KidsHeroSection() {
  return (
    <section
      className="min-w-0 max-w-full overflow-x-hidden"
      aria-labelledby="kids-hero-heading"
    >
      {/* Móvil: texto sobre verde + imagen */}
      <div className="flex w-full min-w-0 max-w-full flex-col md:hidden">
        <div className="box-border w-full min-w-0 max-w-full overflow-x-hidden bg-fyr-green px-3 py-5 sm:px-4">
          <HeroTitle
            variant="mobile"
            id="kids-hero-heading"
            className="font-eastman flex w-full min-w-0 max-w-full flex-col items-start gap-0 text-left font-bold leading-snug [&>span]:leading-snug"
          />
        </div>
        <img
          src="/headermobile.png"
          alt=""
          className="block h-auto w-full object-cover object-center"
          width={1200}
          height={400}
          decoding="async"
        />
      </div>

      {/* Desktop: banner + titular */}
      <div className="relative hidden min-h-[240px] w-full sm:min-h-[300px] lg:min-h-[min(52dvh,520px)] md:block">
        <img
          src="/bannerkids.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative z-10 flex min-h-[240px] flex-col justify-center py-10 pl-6 pr-4 sm:min-h-[300px] sm:py-12 sm:pl-8 sm:pr-10 lg:min-h-[min(52dvh,520px)] lg:py-14 lg:pl-12 lg:pr-10 xl:pl-16">
          <HeroTitle
            variant="desktop"
            className="font-eastman flex w-full max-w-xl flex-col items-start gap-0 text-left text-lg font-bold leading-[1.08] text-nowrap text-white sm:text-3xl md:text-3xl lg:text-[2.75rem] [&>span]:leading-[1.08]"
          />
        </div>
      </div>
    </section>
  )
}
