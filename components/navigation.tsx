import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  return (
    <div className={`container mx-auto px-4 pt-8 pb-4 ${className}`}>
      <nav className="flex items-center justify-between bg-white border-4 border-black max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-7 rounded-none">
        <a href="#home" className="text-[24px] font-bold hover:opacity-70 transition-opacity leading-[28px]">
          Home
        </a>

        <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <Mail className="w-10 h-10" strokeWidth={2.5} />
        </Button>

        <a href="#portfolio" className="text-[24px] font-bold leading-[28px] hover:opacity-70 transition-opacity">
          Portfolio
        </a>
      </nav>
    </div>
  )
}
