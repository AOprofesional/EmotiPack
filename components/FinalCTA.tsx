import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#f8fafc] text-center relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-50 -z-10 animate-blob"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal animation="pop-in">
          <div className="mb-10 flex justify-center">
            <div className="bg-red-50 p-6 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.2)] animate-pulse">
              <Heart className="w-16 h-16 text-red-500 fill-red-500" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight tracking-tight">
            No se trata solo de emociones.
          </h2>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-xl md:text-3xl text-gray-600 mb-12 leading-relaxed font-medium">
            Se trata de entender a tu hijo, acompañarlo mejor y fortalecer el vínculo desde hoy. <br className="hidden md:block" />
            <span className="block mt-6 text-[#2962ff] font-black italic relative inline-block">
              Dale una forma clara y segura de decir lo que siente.
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/30 -z-10 -rotate-1"></span>
            </span>
          </p>
        </Reveal>

        <Reveal delay={600} animation="pop-in">
          <a href="https://pay.hotmart.com/T103511301C?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="bg-[#2962ff] hover:bg-[#1d4ed8] hover:scale-105 transition-all duration-300 text-white font-black px-12 py-6 rounded-full flex items-center justify-center gap-4 mx-auto text-xl md:text-2xl uppercase shadow-[0_20px_50px_rgba(37,99,235,0.4)] mb-10 w-fit group border-4 border-white/20">
            👉 EMPEZÁ HOY CON EMOTIPACK
            <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" />
          </a>
        </Reveal>

        <Reveal delay={800}>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">
            Pago único de USD 7 • Descarga inmediata
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
