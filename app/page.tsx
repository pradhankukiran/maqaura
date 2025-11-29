import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] flex flex-col">
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <HeroSection />
    </main>
  )
}
