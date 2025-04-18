import Image from 'next/image';

type HeroImagesSectionProps = {
  cursorX: number;
};

export const HeroImagesSection = ({ cursorX }: HeroImagesSectionProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <div className="relative w-full h-full">
        {/* První obrázek (pozadí) */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <Image
            src="/hero-second.jpg"
            alt="Podnikatel po kariéře sportovce"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Druhý obrázek (oříznutý podle pohybu myši) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${cursorX}% 0, ${cursorX}% 100%, 0 100%)`,
            WebkitClipPath: `polygon(0 0, ${cursorX}% 0, ${cursorX}% 100%, 0 100%)`,
            zIndex: 2
          }}
        >
          <Image
            src="/hero-first.jpg"
            alt="Fotbalista v akci"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Linie předělu */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
          style={{
            left: `${cursorX}%`,
            zIndex: 3
          }}
        />

        {/* Tmavý gradient přes fotky */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-green-600/40" style={{ zIndex: 2 }} />
        
        {/* Bílý překryv dole, který skryje případný trávník */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-white" style={{ zIndex: 10 }} />
      </div>
    </div>
  );
};

export default HeroImagesSection; 