import { useEffect, useRef, useState } from 'react';

const features = [
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Geolocalización',
        description: 'Eventos culturales cerca de ti, en tiempo real, sobre un mapa interactivo.',
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: 'Criterio editorial',
        description: 'Rutas de autor, contexto cultural y recomendaciones con sentido.',
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'IA inteligente',
        description: 'Filtramos el ruido para mostrarte solo lo que realmente vale la pena.',
    },
];

export default function WhatIs() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 bg-black"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        ¿Qué es <span className="text-joy-orange">JoyRadAR</span>?
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Una nueva forma de descubrir cultura en tu ciudad.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`card text-center transition-all ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '700ms' }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-joy-orange/10 text-joy-orange mb-5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
