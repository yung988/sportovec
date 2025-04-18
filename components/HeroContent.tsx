import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroContentProps {
  isMobile?: boolean;
}

export const HeroContent = ({ isMobile = false }: HeroContentProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
      <div className={`${isMobile ? 'max-w-full pt-16' : 'max-w-3xl'}`}>
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm text-white rounded-full">
          Sportovec 2.0
        </span>
        <h1 className={`${isMobile ? 'text-4xl sm:text-5xl' : 'text-5xl sm:text-7xl md:text-8xl'} font-bold mb-6 text-white leading-[1.1] tracking-tight`}>
          Vaše hra, <br />
          Vaše cesta
        </h1>
        <p className={`${isMobile ? 'text-lg' : 'text-xl'} mb-8 text-white/90 max-w-xl`}>
          Pomáháme profesionálním sportovcům úspěšně přejít do života po
          sportovní kariéře a najít novou identitu.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className={`rounded-full bg-white text-green-800 hover:bg-green-50 ${isMobile ? 'text-base px-6 py-5 w-full sm:w-auto' : 'text-lg px-8 py-6'}`}>
            Začít s přípravou <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent; 