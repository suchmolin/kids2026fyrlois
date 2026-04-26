import { WHATSAPP_PHONE, whatsappHref } from '../config/whatsapp.js'

const bandMinHeight =
  'min-h-[min(56dvh,420px)] sm:min-h-[min(52dvh,480px)] md:min-h-[min(50dvh,540px)] lg:min-h-[min(50dvh,600px)] xl:min-h-[min(52dvh,680px)]'

const promoLinkClass =
  'inline-block w-full max-w-[min(96vw,40rem)] shrink-0 rounded-xl outline-none ring-offset-2 transition-transform duration-200 ease-out hover:scale-110 focus-visible:scale-110 focus-visible:ring-2 focus-visible:ring-fyr-pink sm:max-w-[min(94vw,46rem)] md:max-w-[min(92vw,50rem)]'

/* md+: más grande, pero con tope en vw para no tapar tanto el fondo think */
const promoLinkClassLg =
  'inline-block w-full shrink-0 rounded-xl outline-none ring-offset-2 transition-transform duration-200 ease-out hover:scale-110 focus-visible:scale-110 focus-visible:ring-2 focus-visible:ring-fyr-pink ' +
  'max-w-[min(56vw,34rem)] sm:max-w-[min(54vw,38rem)] md:max-w-[min(52vw,44rem)] lg:max-w-[min(50vw,50rem)] xl:max-w-[min(48vw,56rem)] 2xl:max-w-[min(46vw,60rem)]'

function PromoWhatsAppLink({ className }) {
  return (
    <a
      href={whatsappHref}
      {...(WHATSAPP_PHONE
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`whatsapp-link ${className}`}
      aria-label="Escribir por WhatsApp"
    >
      <img
        src="/promo25.png"
        alt=""
        className="h-auto w-full object-contain"
        width={1200}
        height={700}
        decoding="async"
      />
    </a>
  )
}

export function KidsLeadSection() {
  return (
    <section
      id="prueba-nivel"
      className="relative isolate w-full overflow-x-hidden bg-white"
      aria-label="Contacto por WhatsApp para prueba de nivel"
    >
      {/* max-md (móvil): think arriba, promo abajo */}
      <div className="flex flex-col md:hidden">
        <div className="relative w-full min-h-[min(48dvh,340px)] sm:min-h-[min(52dvh,400px)]">
          <img
            src="/think.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[10%_center] sm:object-left"
       
            decoding="async"
          />
        </div>
        <div className="flex w-full justify-center px-4 pb-0 pt-0 sm:px-6 sm:pb-5 sm:pt-3 -mt-8 sm:-mt-0">
          <PromoWhatsAppLink className={promoLinkClass} />
        </div>
      </div>

      {/* md+: fondo think + promo a la derecha */}
      <div
        className={`relative hidden w-full flex-col md:flex ${bandMinHeight}`}
      >
        <img
          src="/think.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left"
          decoding="async"
        />
        <div className="relative z-10 flex w-full min-w-0 flex-1 items-center justify-end overflow-x-clip px-4 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16 xl:px-14">
          <PromoWhatsAppLink className={promoLinkClassLg} />
        </div>
      </div>
    </section>
  )
}
