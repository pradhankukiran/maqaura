import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  return (
    <div className={`container mx-auto px-2 sm:px-4 pt-4 sm:pt-8 pb-4 ${className}`}>
      <nav className="flex items-center justify-between bg-white border-4 border-black max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-2 sm:px-6 py-4 sm:py-7 rounded-none gap-1 sm:gap-4">
        <a href="#home" className="text-[16px] sm:text-[24px] font-bold hover:opacity-70 transition-opacity leading-[20px] sm:leading-[28px] truncate">
          Home
        </a>

        <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-3 sm:px-5 h-10 sm:h-12 min-w-[40px] sm:min-w-[48px] flex-shrink-0">
          <Mail className="w-6 sm:w-10 h-6 sm:h-10" strokeWidth={2.5} />
        </Button>

        <a href="#portfolio" className="text-[16px] sm:text-[24px] font-bold leading-[20px] sm:leading-[28px] hover:opacity-70 transition-opacity truncate">
          Portfolio
        </a>
      </nav>
    </div>
  )
}
