export default function Footer() {
    return (
        <footer className="py-12 px-6 bg-zinc-950 border-t border-zinc-800">
            <div className="max-w-6xl mx-auto text-center">
                {/* Brand */}
                <div className="mb-6">
                    <span className="text-xl font-semibold text-gradient">JoyRadAR</span>
                </div>

                {/* Copyright */}
                <p className="text-zinc-400 mb-6">
                    JoyRadAR · 2026
                </p>

                {/* Transparency Note */}
                <div className="max-w-xl mx-auto">
                    <p className="text-zinc-500 text-sm leading-relaxed">
                        Vídeo de fondo generado con IA. La lógica y la interfaz se muestran en el prototipo.
                    </p>
                </div>

                {/* Divider */}
                <div className="mt-8 pt-6 border-t border-zinc-800">
                    <p className="text-zinc-600 text-xs">
                        Diseñado con ❤️ para amantes de la cultura
                    </p>
                </div>
            </div>
        </footer>
    );
}
