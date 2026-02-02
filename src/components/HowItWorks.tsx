import { useEffect, useRef, useState } from 'react';

const steps = [
    {
        number: '01',
        title: 'Ubicación',
        description: 'Detectamos tu posición y exploramos lo que hay a tu alrededor.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Descubrimiento',
        description: 'Te mostramos eventos, rutas y experiencias personalizadas.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Decisión',
        description: 'Elige con criterio. Sin ruido, sin algoritmos opacos.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
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
            className="py-24 px-6 bg-zinc-950"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Cómo <span className="text-joy-blue">funciona</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Tres pasos hacia una nueva experiencia cultural.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-joy-orange via-joy-blue to-joy-orange transform -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`flex flex-col items-center text-center transition-all ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms`, transitionDuration: '700ms' }}
                            >
                                {/* Step Circle */}
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 rounded-full bg-black border-2 border-joy-blue flex items-center justify-center">
                                        <span className="text-joy-blue">{step.icon}</span>
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-joy-orange text-black text-sm font-bold flex items-center justify-center">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step Content */}
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-zinc-400 max-w-xs">{step.description}</p>

                                {/* Arrow (Mobile only) */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden mt-6 text-zinc-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
