import { Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-0 py-7 rounded-none">
        

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center leading-7 tracking-[0.15em]">
          <a href="#home" className="text-[18px] font-bold hover:opacity-70 transition-opacity leading-[20px]">
            Home
          </a>
          
          <a href="#portfolio" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Portfolio
          </a>
          
          
        </div>

        <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <Mail className="w-10 h-10" strokeWidth={2.5} />
        </Button>
      </nav>
    </div>
  )
}
