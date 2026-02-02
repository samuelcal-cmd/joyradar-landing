import { useEffect, useRef, useState } from 'react';

export default function EditorialValue() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 bg-black relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-joy-orange blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-joy-blue blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    {/* Main Content Card */}
                    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-zinc-800">
                        {/* Quote Icon */}
                        <div className="text-joy-orange mb-6">
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Criterio sobre algoritmo
                        </h2>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-8">
                            Transformamos la ciudad en narrativa. No te damos un listado: te damos una historia.
                            Cada ruta, cada evento, cada recomendación tiene un porqué.
                        </p>

                        {/* Example Card */}
                        <div className="bg-black/50 rounded-xl p-6 border border-zinc-700">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-joy-orange/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-joy-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-joy-blue mb-1 block">
                                        Ruta de autor
                                    </span>
                                    <h3 className="text-lg font-semibold mb-1">
                                        Santiago oculto: leyendas de piedra
                                    </h3>
                                    <p className="text-zinc-400 text-sm">
                                        Un paseo por los rincones secretos del casco histórico, donde cada esquina guarda una historia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
