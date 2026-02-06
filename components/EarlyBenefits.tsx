
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const EarlyBenefits: React.FC = () => {
    return (
        <section className="py-12 px-4 bg-blue-50/50">
            <div className="max-w-xl mx-auto">
                <Reveal>
                    <ul className="space-y-4">
                        {[
                            "Ayuda a identificar emociones",
                            "Facilita conversaciones que antes no salían",
                            "Se usa en casa, sin pantallas"
                        ].map((text, i) => (
                            <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-blue-100">
                                <div className="bg-green-100 rounded-full p-1 shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={3} />
                                </div>
                                <span className="text-gray-700 font-bold text-lg leading-snug">{text}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
};

export default EarlyBenefits;
