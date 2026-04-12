export function KidsSiteHeader() {
  return (
    <header className="bg-white px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-6">
      <div className="mx-auto relative flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
        <a href="/" className="inline-block shrink-0 absolute left-10">
          <img
            src="/logoFyrlois.png"
            alt="Fyr Lois"
            className="h-12 w-auto sm:h-14 lg:h-16"
            width={240}
            height={64}
          />
        </a>
        <p className="font-eastman text-center text-xl font-bold leading-tight tracking-tighter whitespace-nowrap sm:text-right sm:text-2xl lg:text-5xl">
          <span className="text-fyr-blue">¡Su crecimiento </span>
          <span className="text-fyr-orange">comienza aquí!</span>
        </p>
      </div>
    </header>
  )
}
