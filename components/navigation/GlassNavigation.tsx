"use client"

import * as React from "react"
import Link from "next/link"
import { Search, Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface NavItem {
  title: string
  href: string
  id: string
}

const navItems: NavItem[] = [
  { title: "O nás", href: "#about", id: "about" },
  { title: "Služby", href: "#services", id: "services" },
  { title: "Reference", href: "#testimonials", id: "testimonials" },
  { title: "Ceny", href: "#pricing", id: "pricing" },
]

export function GlassNavigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string>("")

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      // Detekce aktivní sekce při scrollování
      const sections = navItems.map(item => item.id)
      let currentSection = ""
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section
            break
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <header
      className={cn(
        "fixed top-6 left-0 right-0 z-50 mx-auto w-[95%] max-w-6xl rounded-2xl transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          : "bg-white/30 backdrop-blur-md",
      )}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-green-700">
          SPORTOVEC 2.0
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                activeSection === item.id ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100/50",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Hledat..."
              className="w-48 rounded-xl border-none bg-gray-100/50 pl-10 pr-4 focus-visible:ring-green-500"
            />
          </div>

          <Button className="rounded-xl bg-green-700 text-white hover:bg-green-800 transition-colors">
            Kontaktujte nás
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-white/80 backdrop-blur-xl rounded-b-2xl">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  activeSection === item.id ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100/50",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-2">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Hledat..."
                  className="w-full rounded-xl border-none bg-gray-100/50 pl-10 pr-4 focus-visible:ring-green-500"
                />
              </div>
              <Button className="w-full rounded-xl bg-green-700 text-white hover:bg-green-800 transition-colors">
                Kontaktujte nás
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default GlassNavigation 