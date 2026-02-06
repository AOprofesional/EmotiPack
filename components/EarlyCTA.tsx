
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Reveal from './Reveal';

const EarlyCTA: React.FC = () => {
    const CHECKOUT_URL = "https://pay.hotmart.com/T103511301C?checkoutMode=10";

    return (
        <section className="py-8 px-4 text-center">
            <Reveal animation="scale">
                <div className="flex flex-col gap-4 items-center w-full max-w-md mx-auto">
                    {/* Emotional CTA */}
                    <a
                        href={CHECKOUT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-black text-xl md:text-2xl rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
                    >
                        <span>QUIERO AYUDAR A MI HIJO</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />

                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine" />
                        </div>
                    </a>

                    {/* Rational CTA */}
                    <a
                        href={CHECKOUT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-gray-500 font-bold text-sm hover:text-gray-800 transition-colors uppercase tracking-wide border-b border-gray-300 hover:border-gray-800 pb-0.5"
                    >
                        <Download className="w-4 h-4" />
                        <span>Descargar el kit ahora</span>
                    </a>
                </div>

                <p className="mt-3 text-sm text-gray-400 font-medium">Descarga inmediata • Acceso de por vida</p>
            </Reveal>
        </section>
    );
};

export default EarlyCTA;
