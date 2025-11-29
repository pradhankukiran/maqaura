import { Navigation } from "@/components/navigation"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={`container mx-auto px-4 py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] lg:text-[72px] font-bold lg:leading-[85px]">
            <span className="whitespace-nowrap">This is <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">MaqAura</span>,</span>
            <br />
            <span className="whitespace-nowrap">a MIDI tool from</span>
            <br />
            <span className="whitespace-nowrap"><span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Mohammed</span><span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Alguthmi</span></span>
          </h1>
        </div>

        <div className="lg:hidden">
          <Navigation />
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <img
              src="/hero-image.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
