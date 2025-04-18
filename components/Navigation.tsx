"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./navigation/Logo";
import DesktopNav from "./navigation/DesktopNav";
import MobileMenu from "./navigation/MobileMenu";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 flex h-20 items-center justify-between">
        <Logo />
        
        {/* Mobilní menu tlačítko */}
        <button 
          className="md:hidden p-2 text-gray-700" 
          onClick={toggleMobileMenu}
          aria-label="Otevřít menu"
          type="button"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        {/* Desktop navigace */}
        <DesktopNav />
      </div>
      
      {/* Mobilní menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Navigation; 