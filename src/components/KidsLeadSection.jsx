import { useState } from 'react'

export function KidsLeadSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="prueba-nivel"
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="kids-lead-heading"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-12">
        <div className="relative flex justify-center lg:justify-start">
          <img
            src="/kidsteacher.png"
            alt=""
            className="max-h-[min(55dvh,480px)] w-full max-w-lg object-contain object-bottom sm:max-h-[min(70dvh,520px)]"
            decoding="async"
          />
        </div>

        <div className="relative z-[1] lg:py-4">
          <div className="-mx-4 px-4 sm:-mx-0 sm:px-0">
            <h2
              id="kids-lead-heading"
              className="font-eastman inline-block min-w-0 text-left text-xl font-bold leading-[0.85] tracking-tighter sm:text-2xl sm:leading-[0.82] md:text-3xl md:leading-[0.8] lg:text-4xl xl:text-5xl"
            >
              <span className="block w-max max-w-none whitespace-nowrap text-[#F39200]">
                Da el primer paso:
              </span>
              <span className="mt-0.5 block w-max max-w-none whitespace-nowrap text-[#002060] sm:mt-1 md:mt-1.5">
                conoce tu nivel de inglés hoy.
              </span>
            </h2>
          </div>

          <p className="font-eastman mt-3 text-lg font-bold tracking-tighter text-fyr-lime sm:mt-4 sm:text-2xl md:text-3xl lg:text-[1.75rem] xl:text-4xl">
            Agenda tu prueba de nivel
          </p>

          <form
            className="mt-6 max-w-xl space-y-4 sm:mt-8 sm:space-y-5 md:mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <label
                htmlFor="kids-email"
                className="font-eastman shrink-0 text-sm font-bold tracking-tighter text-fyr-blue sm:w-40 sm:text-base"
              >
                Correo <br className="hidden sm:block" /> electrónico
              </label>
              <input
                id="kids-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="font-eastman min-h-11 w-full flex-1 rounded-full border-0 bg-neutral-200 px-4 py-2.5 text-fyr-blue outline-none ring-2 ring-transparent transition focus:ring-fyr-pink/40"
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <label
                htmlFor="kids-phone"
                className="font-eastman shrink-0 text-sm font-bold tracking-tighter text-fyr-blue sm:w-40 sm:text-base"
              >
                Número de contacto
              </label>
              <input
                id="kids-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="font-eastman min-h-11 w-full flex-1 rounded-full border-0 bg-neutral-200 px-4 py-2.5 text-fyr-blue outline-none ring-2 ring-transparent transition focus:ring-fyr-pink/40"
              />
            </div>

            <div className="mx-auto flex w-full max-w-xs justify-center pt-1">
              <button
                type="submit"
                className="font-eastman rounded-full bg-fyr-pink px-18 py-3 text-lg font-bold tracking-tighter text-white shadow-md transition hover:opacity-95 active:scale-[0.99] sm:text-xl md:text-2xl"
              >
                {sent ? '¡Gracias!' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
