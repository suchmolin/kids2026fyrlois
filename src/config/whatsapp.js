/** +1 (689) 322-5402 — define VITE_WHATSAPP_PHONE en .env para otro entorno */
const DEFAULT_DISPLAY = '16893225402'

const digits = (import.meta.env.VITE_WHATSAPP_PHONE ?? DEFAULT_DISPLAY).replace(
  /\D/g,
  '',
)

export const WHATSAPP_PHONE = digits
export const whatsappHref = digits ? `https://wa.me/${digits}` : '#'
