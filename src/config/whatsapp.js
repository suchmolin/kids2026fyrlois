/** +1 (786) 578-5549 — define VITE_WHATSAPP_PHONE en .env para otro entorno */
const DEFAULT_DISPLAY = '+17865785549'

const digits = (import.meta.env.VITE_WHATSAPP_PHONE ?? DEFAULT_DISPLAY).replace(
  /\D/g,
  '',
)

export const WHATSAPP_PHONE = digits
export const whatsappHref = digits ? `https://wa.me/${digits}` : '#'
