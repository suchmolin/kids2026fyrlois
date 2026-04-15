const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE?.replace(/\D/g, '') ?? ''
const whatsappHref = WHATSAPP_PHONE
  ? `https://wa.me/${WHATSAPP_PHONE}`
  : '#'

export function KidsClassesCtaSection() {
  return (
    <section
      className="overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
      aria-labelledby="kids-classes-cta-heading"
    >
      <div className="mx-auto">
        <div className="sm:-mx-4 sm:px-4 sm:-mx-0 sm:px-0">
          <h2
            id="kids-classes-cta-heading"
            className="font-eastman mx-auto w-max max-w-none text-center text-[0.6rem] min-[350px]:text-[0.65rem] min-[390px]:text-[0.75rem] font-bold leading-snug text-fyr-blue sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl [&_span]:leading-[1]"
          >
            <span className="block whitespace-nowrap">
              Clases de inglés{' '}
              <span className="box-decoration-clone rounded-sm bg-fyr-orange px-1.5 py-0.5 text-white sm:px-2 sm:py-1">
                presenciales en Caracas
              </span>{' '}
              o
            </span>
            <span className="mt-1 block whitespace-nowrap sm:mt-1.5">
              <span className="box-decoration-clone rounded-sm bg-fyr-orange px-1.5 py-0.5 text-white sm:px-2 sm:py-1">
                100% online,
              </span>{' '}
              diseñadas para que los niños aprendan
            </span>
            <span className="mt-1 block whitespace-nowrap sm:mt-1.5">
              jugando y se preparen para un futuro exitoso.
            </span>
          </h2>
        </div>

        <div className="mt-10 -mx-4 overflow-x-auto px-4 sm:mt-12 sm:-mx-0 sm:px-0">
          <div className="flex w-full flex-col gap-4 sm:mx-auto sm:w-max sm:flex-row sm:flex-nowrap sm:justify-center sm:gap-5">
            <a
              href={whatsappHref}
              {...(WHATSAPP_PHONE
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="font-eastman inline-flex min-h-0 w-full shrink-0 items-center justify-center gap-2 rounded-sm bg-fyr-blue px-4 py-2 text-base font-bold shadow-md transition-[opacity,transform] hover:opacity-95 active:scale-[0.99] sm:w-auto sm:min-w-[240px] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-lg md:min-w-[260px] md:gap-3 md:px-6 md:py-3 md:text-xl lg:text-2xl xl:text-3xl"
            >
              <img
                src="/ws.png"
                alt=""
                className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12"
                width={48}
                height={48}
                decoding="async"
                aria-hidden
              />
              <span className="whitespace-nowrap text-left">
                <span className="text-white">Empieza tu </span>
                <span className="text-fyr-orange">futuro</span>
                <span className="text-white"> hoy</span>
              </span>
            </a>

            <a
              href="#informacion"
              className="font-eastman inline-flex min-h-0 w-full shrink-0 items-center justify-center gap-2 rounded-sm bg-fyr-lime px-4 py-2 text-base font-bold text-fyr-blue shadow-md transition-[opacity,transform] hover:opacity-95 active:scale-[0.99] sm:w-auto sm:min-w-[240px] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-lg md:min-w-[260px] md:gap-3 md:px-6 md:py-3 md:text-xl lg:text-2xl xl:text-3xl"
            >
              <span className="whitespace-nowrap">
                <span className="text-white">Más </span>
                <span className="text-fyr-blue">información</span>
              </span>
              <img
                src="/cursor.png"
                alt=""
                className="h-7 w-7 shrink-0 sm:h-8 sm:w-8 md:h-12 md:w-12"
                decoding="async"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
