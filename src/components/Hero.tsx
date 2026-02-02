import { useState, useEffect } from 'react';
import { PROTOTYPE_URL, INFOGRAPHIC_URL, MEDIUM_URL } from '../config';

export default function Hero() {
    const [videoError, setVideoError] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background or Fallback */}
            {!videoError ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={() => setVideoError(true)}
                >
                    <source src="./hero.mp4" type="video/mp4" />
                </video>
            ) : (
                /* Radar Rings Fallback */
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <div className="radar-ring"></div>
                    <div className="radar-ring"></div>
                    <div className="radar-ring"></div>
                </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 gradient-overlay"></div>

            {/* Content */}
            <div
                className={`relative z-10 h-full flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
                    <span className="text-gradient">JoyRadAR</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl lg:text-3xl text-zinc-300 font-light mb-10 max-w-2xl">
                    Descubre lo que te rodea.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <a
                        href={PROTOTYPE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Ver prototipo
                    </a>
                    <a
                        href={INFOGRAPHIC_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        Ver infografía
                    </a>
                    <a
                        href={MEDIUM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tertiary"
                    >
                        Leer en Medium
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 scroll-indicator">
                <div className="flex flex-col items-center gap-2 text-zinc-400">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
