
import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Check } from 'lucide-react';

import Reveal from './Reveal';

const Pricing: React.FC = () => {
  return (
    <section id="pricing-section" className="py-20 md:py-32 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          {/* Encabezado Principal con más fuerza */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#1a133d] mb-4 md:mb-6 uppercase tracking-tighter leading-none">
              EMPIEZA <span className="text-[#2563eb]">HOY MISMO</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2">
              Un método probado para trabajar emociones desde casa, sin materiales costosos ni sesiones largas.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} animation="pop-in">
          {/* Card de Precio de Alto Impacto */}
          <div className="relative max-w-4xl mx-auto mb-16">
            {/* Badge de Oferta Dinámico */}
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 z-30 w-max">
              <div className="bg-[#ffde00] text-[#1a133d] font-black px-6 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(255,222,0,0.5)] border-[3px] md:border-[4px] border-white animate-pulse">
                OFERTA DE LANZAMIENTO
              </div>
            </div>

            {/* Caja Azul de Alto Impacto (#2563eb) */}
            <div className="bg-[#2563eb] rounded-[35px] md:rounded-[50px] p-6 md:p-8 shadow-[0_30px_60px_rgba(37,99,235,0.25)] text-white relative overflow-hidden border-t-4 border-white/10 max-w-2xl mx-auto">

              {/* Decoraciones de fondo modernas (Reducidas) */}
              <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-black/10 rounded-full -ml-20 -mb-20 blur-2xl"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Sección Superior: Precio (Reducido) */}
                <div className="flex flex-col items-center mb-6">
                  <div className="flex items-center gap-2 mb-1 text-white/60">
                    <span className="text-xs md:text-sm font-black tracking-widest uppercase">VALOR REAL: <span className="line-through decoration-red-400 decoration-2">USD 21</span></span>
                  </div>
                  <div className="text-[70px] md:text-[100px] font-black leading-none tracking-tighter drop-shadow-xl">
                    USD 7
                  </div>
                </div>

                {/* MOCKUP VISUAL (Más pequeño) */}
                <div className="relative w-full max-w-[200px] md:max-w-[280px] mb-8 transform hover:scale-105 transition-transform duration-500 ease-out">
                  <div className="absolute inset-0 bg-white/20 blur-[40px] rounded-full scale-75 opacity-50"></div>
                  <img
                    src="https://i.imgur.com/8PSWnmp.png"
                    alt="EmotiPack Mockup"
                    className="relative z-10 w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* LISTA RESUMIDA DE VALOR - Compacta */}
                <div className="w-full max-w-sm bg-white/5 backdrop-blur-md rounded-[25px] p-5 md:p-6 border border-white/10 mb-6 text-left">
                  <h4 className="text-center font-black text-[#ffde00] mb-3 uppercase tracking-widest text-xs md:text-sm border-b border-white/10 pb-2">
                    ¿QUÉ TE LLEVÁS HOY?
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "48 Cartas de Emociones PDF",
                      "Tablero + Personajes Guía",
                      "Pizarra de Seguimiento Diario",
                      "Bono #1: Frases para Padres",
                      "Bono #2: Reto Conexión 7 Días"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <div className="bg-[#ffde00] rounded-full p-0.5 shrink-0">
                          <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#1a133d]" strokeWidth={4} />
                        </div>
                        <span className="text-xs md:text-sm font-bold text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>



                {/* Caja Único Pago Estilizada (Compacta) */}
                <div className="bg-[#1a133d]/40 border border-[#ffde00]/40 rounded-2xl px-6 py-3 mb-8 backdrop-blur-sm shadow-inner group">
                  <div className="text-[#ffde00] font-black text-lg md:text-xl uppercase tracking-tighter mb-0.5 group-hover:scale-105 transition-transform">
                    ÚNICO PAGO
                  </div>
                  <div className="text-white/80 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-80">
                    SIN SUSCRIPCIONES OCULTAS
                  </div>
                </div>

                {/* Botón de Descarga (Compacto pero impactante) */}
                <a href="https://pay.hotmart.com/T103511301C?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm bg-[#ffde00] hover:bg-[#ffe533] hover:scale-[1.03] active:scale-95 transition-all text-[#1a133d] font-black px-5 py-4 md:py-5 rounded-[20px] md:rounded-[25px] flex items-center justify-center gap-3 text-lg md:text-2xl shadow-[0_15px_30px_rgba(255,222,0,0.4)] border-b-[5px] md:border-b-[6px] border-[#e6c800] uppercase mb-8 group">
                  DESCARGAR AHORA
                  <ArrowRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" strokeWidth={4} />
                </a>

                {/* Badges de Confianza Rápidos (Compactos) */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center opacity-70">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffde00]" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">PAGO SEGURO</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffde00]" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">ENVÍO INSTANTÁNEO</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffde00]" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">SOPORTE 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CAJA DE GARANTÍA EXTERNA PREMIUM */}
        <Reveal delay={400} animation="fade-up">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-gray-50 rounded-[40px] md:rounded-[50px] p-10 md:p-16 border-4 border-dashed border-gray-200 relative group hover:border-[#2563eb]/30 transition-colors">
              <div className="flex flex-col items-center">
                <div className="bg-[#2563eb] p-5 rounded-full mb-8 shadow-2xl transform group-hover:rotate-12 transition-transform">
                  <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-[#1a133d] mb-4 uppercase tracking-tighter">
                  GARANTÍA DE <span className="text-[#2563eb]">7 DÍAS</span>
                </h3>
                <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-lg italic font-medium">
                  "Si EmotiPack no cumple tus expectativas, solicitá tu reembolso completo. Sin preguntas, sin vueltas. <span className="text-[#1a133d] font-bold">Tu tranquilidad es lo primero.</span>"
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
