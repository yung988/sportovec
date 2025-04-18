import { useState, useEffect, useRef } from 'react';
import HeroImagesSection from './HeroImagesSection';
import HeroContent from './HeroContent';
import HeroTrustBar from './HeroTrustBar';

export const Hero = () => {
	const heroRef = useRef<HTMLElement>(null);
	const [cursorX, setCursorX] = useState(50);
	const [isMobile, setIsMobile] = useState(false);

	// Detekce mobilního zařízení a nastavení výchozího view
	useEffect(() => {
		const checkMobile = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Animace pro mobilní zařízení - posouvání pozice dělící linie
	useEffect(() => {
		let animationFrameId: number;
		let direction = 1;
		let position = 50;

		const animateSplit = () => {
			if (isMobile) {
				position += 0.2 * direction;

				if (position >= 70) {
					direction = -1;
				} else if (position <= 30) {
					direction = 1;
				}

				setCursorX(position);
				animationFrameId = requestAnimationFrame(animateSplit);
			}
		};

		if (isMobile) {
			animationFrameId = requestAnimationFrame(animateSplit);
		}

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, [isMobile]);

	// Desktop efekt pohybu myši
	useEffect(() => {
		if (isMobile) return; // Přeskočit na mobilních zařízeních

		const handleMouseMove = (e: MouseEvent) => {
			if (heroRef.current) {
				const rect = heroRef.current.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const percentX = Math.min(100, Math.max(0, (x / rect.width) * 100));
				setCursorX(percentX);
			}
		};

		const heroElement = heroRef.current;
		if (heroElement) {
			heroElement.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			if (heroElement) {
				heroElement.removeEventListener('mousemove', handleMouseMove);
			}
		};
	}, [isMobile]);

	return (
		<section 
			ref={heroRef} 
			id="hero-section" 
			className={`pt-20 relative overflow-hidden bg-white ${
				isMobile 
					? 'h-[100vh]' 
					: 'h-[120vh] max-h-[950px] min-h-[700px]'
			}`}
			style={{ position: 'relative', zIndex: 10 }}
		>
			<HeroImagesSection cursorX={cursorX} isMobile={isMobile} />
			<HeroContent isMobile={isMobile} />
			<HeroTrustBar isMobile={isMobile} />
			
			{/* Spodní zakrývací lišta */}
			<div className="absolute bottom-0 left-0 right-0 h-6 bg-white" style={{ zIndex: 20 }} />
		</section>
	);
};

export default Hero;