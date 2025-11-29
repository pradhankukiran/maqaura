import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">John Carter</span>, a Web Designer from{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">New York</span>
          </h1>

          

          
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/v0_image-2-waVjaVl1GHlxe6cv9hqXbY0Jxt9wp4.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
