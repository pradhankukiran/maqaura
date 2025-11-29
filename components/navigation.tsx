import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  return (
    <div className={`w-full flex justify-center px-4 py-4 ${className}`}>
      <nav className="flex items-center justify-between gap-4 bg-white border-4 border-black px-4 py-5 sm:px-6 sm:py-7 w-full max-w-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a href="#home" className="text-base sm:text-xl font-bold hover:opacity-70 transition-opacity">
          Home
        </a>

        <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-3 sm:px-5 h-10 sm:h-12 flex-shrink-0">
          <Mail className="w-5 sm:w-6 h-5 sm:h-6" strokeWidth={2.5} />
        </Button>

        <a href="#portfolio" className="text-base sm:text-xl font-bold hover:opacity-70 transition-opacity">
          Portfolio
        </a>
      </nav>
    </div>
  )
}
