import { useState, useEffect } from "react"
import { ThemeToggle } from "../theme-toggle"
import { LanguageToggle } from "../language-toggle"
import { cn } from "../../lib/utils"
// import { Button } from "../ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 border-b border-transparent",
      scrolled && "bg-background/80 backdrop-blur-md border-border py-2"
    )}>
      <div className="flex items-center gap-2">
        <span className="text-xl font-display font-bold tracking-tighter">
          MK<span className="text-accent">.</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Navigation items can go here for Desktop */}

        <div className="flex items-center gap-2 border-l border-border pl-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
