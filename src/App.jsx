import { KidsClassesCtaSection } from './components/KidsClassesCtaSection.jsx'
import { KidsHeroSection } from './components/KidsHeroSection.jsx'
import { KidsLeadSection } from './components/KidsLeadSection.jsx'
import { KidsMethodsSection } from './components/KidsMethodsSection.jsx'
import { KidsSiteHeader } from './components/KidsSiteHeader.jsx'
import { KidsTestimonialSection } from './components/KidsTestimonialSection.jsx'
import { KidsWhySection } from './components/KidsWhySection.jsx'
import { WhatsAppFloatButton } from './components/WhatsAppFloatButton.jsx'

function App() {
  return (
    <div className="flex min-h-dvh min-w-0 flex-col overflow-x-hidden bg-white">
      <KidsSiteHeader />

      <main className="min-w-0 flex-1 bg-white">
        <KidsHeroSection />
        <KidsClassesCtaSection />
        <KidsMethodsSection />
        <KidsWhySection />
        <KidsTestimonialSection />
        <KidsLeadSection />
        {/*
        */}
      </main>
      <WhatsAppFloatButton />
    </div>
  )
}

export default App
