const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE?.replace(/\D/g, '') ?? ''
const whatsappHref = WHATSAPP_PHONE
  ? `https://wa.me/${WHATSAPP_PHONE}`
  : '#'

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  )
}

function PointerIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14.5 3.5 3 14.5l4 1 2 5.5 3.5-2.5-2-5 4-1.5-10-8.5Z" />
    </svg>
  )
}

export function KidsClassesCtaSection() {
  return (
    <section
      className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="kids-classes-cta-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="-mx-4 px-4 sm:-mx-0 sm:px-0">
          <h2
            id="kids-classes-cta-heading"
            className="font-eastman mx-auto flex w-max flex-col items-center gap-0 text-center text-xl font-bold leading-[1] tracking-tighter text-fyr-blue sm:text-2xl md:text-3xl lg:text-[1.65rem] xl:text-4xl"
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

        <div className="mt-10 -mx-4 overflow-x-auto px-4 sm:-mx-0 sm:px-0">
          <div className="mx-auto flex w-full max-w-md flex-col gap-4 sm:mx-auto sm:w-max sm:flex-row sm:flex-nowrap sm:justify-center sm:gap-5">
            <a
              href={whatsappHref}
              {...(WHATSAPP_PHONE
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="font-eastman inline-flex min-h-0 w-full shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-fyr-blue px-5 py-2.5 text-lg font-bold tracking-tighter text-white shadow-md transition-[opacity,transform] hover:opacity-95 active:scale-[0.99] sm:w-auto sm:gap-3 sm:px-6 sm:py-3 sm:text-2xl"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppGlyph className="h-5 w-5" />
              </span>
              <span className="text-left">
                <span className="text-white">Empieza tu </span>
                <span className="text-fyr-orange">futuro</span>
                <span className="text-white"> hoy</span>
              </span>
            </a>

            <a
              href="#informacion"
              className="font-eastman inline-flex min-h-0 w-full shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-fyr-lime px-5 py-2.5 text-lg font-bold tracking-tighter text-fyr-blue shadow-md transition-[opacity,transform] hover:opacity-95 active:scale-[0.99] sm:w-auto sm:gap-3 sm:px-6 sm:py-3 sm:text-2xl"
            >
              <span>
                <span className="text-white">Más </span>
                <span className="text-fyr-blue">información</span>
              </span>
              <PointerIcon className="h-6 w-6 shrink-0 text-white sm:h-7 sm:w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
