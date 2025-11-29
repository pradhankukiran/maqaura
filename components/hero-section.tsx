import { Navigation } from "@/components/navigation"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={`w-full px-4 py-8 md:py-12 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden space-y-6">
          {/* H1 */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-snug md:text-4xl">
              <div className="whitespace-nowrap">This is <span className="bg-[#FF6B7B] text-white px-2 py-1">MaqAura</span>,</div>
              <div className="whitespace-nowrap">a MIDI tool from</div>
              <div className="whitespace-nowrap"><span className="bg-[#2F81F7] text-white px-2 py-1">Mohammed</span> <span className="bg-[#2F81F8] text-white px-2 py-1">Alguthmi</span></div>
            </h1>
          </div>

          {/* Navigation - Mobile Only */}
          <Navigation />

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs bg-[#FDB927] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="aspect-square">
                <img
                  src="/hero-image.png"
                  alt="Illustrated character avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* H1 */}
          <div className="text-left">
            <h1 className="text-6xl font-bold leading-tight">
              <div className="whitespace-nowrap">This is <span className="bg-[#FF6B7A] text-white px-3 py-1">MaqAura</span>,</div>
              <div className="whitespace-nowrap">a MIDI tool from</div>
              <div className="whitespace-nowrap"><span className="bg-[#2F81F7] text-white px-3 py-1">Mohammed</span> <span className="bg-[#2F81F7] text-white px-3 py-1">Alguthmi</span></div>
            </h1>
          </div>

          {/* Image */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-md bg-[#FDB927] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="aspect-square">
                <img
                  src="/hero-image.png"
                  alt="Illustrated character avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
