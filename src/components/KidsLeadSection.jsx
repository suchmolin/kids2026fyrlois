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
      

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-12">
        <div className="relative flex justify-center lg:justify-start">
          <img
            src="/lead-kids-group.png"
            alt=""
            className="max-h-[min(70dvh,520px)] w-full max-w-lg object-contain object-bottom"
          />
        </div>

        <div className="relative -ml-20 z-[1] lg:py-4">
          <div className="-mx-4 px-4 sm:-mx-0 sm:px-0">
            <h2
              id="kids-lead-heading"
              className="font-eastman inline-block text-left text-3xl font-bold leading-[1] tracking-tighter sm:text-4xl lg:text-5xl"
            >
              <span className="block w-max whitespace-nowrap text-[#F39200]">
                Da el primer paso:
              </span>
              <span className="mt-1 block w-max whitespace-nowrap text-[#002060] sm:mt-1.5">
                conoce tu nivel de inglés hoy.
              </span>
            </h2>
          </div>

          <p className="font-eastman text-2xl font-bold tracking-tighter text-fyr-lime sm:text-3xl lg:text-[1.75rem] xl:text-4xl">
            Agenda tu prueba de nivel
          </p>

          <form
            className="mt-8 max-w-xl space-y-5 sm:mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <label
                htmlFor="kids-email"
                className="font-eastman shrink-0 text-sm font-bold tracking-tighter text-fyr-blue sm:w-40 sm:text-base"
              >
                Correo <br /> electrónico
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
            
            <div className="w-full max-w-xs mx-auto flex justify-center">
              <button
                type="submit"
                className="font-eastman rounded-full bg-fyr-pink px-18 py-3 text-xl font-bold tracking-tighter text-white shadow-md transition hover:opacity-95 active:scale-[0.99] sm:text-2xl"
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
