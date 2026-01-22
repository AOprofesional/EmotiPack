
import React from 'react';
import { CheckCircle2, UserCheck, HeartPulse } from 'lucide-react';
import Reveal from './Reveal';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Lo que lograrás con este juego
        </h2>
        <p className="text-gray-500">Transforma la dinámica familiar desde el primer día.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Children Benefits */}
        {/* Children Benefits */}
        <Reveal delay={200} animation="fade-up">
          <div className="bg-[#0ea5e9] p-8 md:p-10 rounded-[40px] shadow-xl text-white relative overflow-hidden h-full transform hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-sm"><UserCheck className="text-white w-6 h-6" /></div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-sm md:text-base">Tu hijo podrá:</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Reconocer y nombrar sus emociones",
                "Expresarse sin explotar ni cerrarse",
                "Reducir la frustración con apoyo visual",
                "Sentirse escuchado y comprendido",
                "Desarrollar seguridad emocional"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white/95 font-bold text-lg leading-snug shadow-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Parents Benefits */}
        <Reveal delay={400} animation="fade-up">
          <div className="bg-[#a855f7] p-8 md:p-10 rounded-[40px] shadow-xl text-white relative overflow-hidden h-full transform hover:scale-[1.02] transition-transform">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-sm"><HeartPulse className="text-white w-6 h-6" /></div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-sm md:text-base">Y vos vas a poder:</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Acompañarlo con más claridad",
                "Dejar de improvisar en momentos difíciles",
                "Sentirte tranquilo/a sabiendo que lo estás ayudando"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white/95 font-bold text-lg leading-snug shadow-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 text-center bg-gray-50 p-10 rounded-3xl border border-dashed border-gray-300">
        <p className="text-gray-600 font-bold text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          "Para lograr estos cambios, diseñamos un kit físico (imprimible) que transforma cada emoción en una aventura de juego. <span className="text-blue-600 underline decoration-accent decoration-4">Mirá todo lo que incluye tu EmotiPack:</span>"
        </p>
      </div>
    </section>
  );
};

export default Benefits;
