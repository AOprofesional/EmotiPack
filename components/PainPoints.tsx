
import React from 'react';
import { XCircle, Lightbulb, Sparkles } from 'lucide-react';

import Reveal from './Reveal';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <Reveal animation="fade-up" className="h-full">
            <div className="rounded-[40px] overflow-hidden shadow-2xl order-2 md:order-1 h-full">
              <img
                src="https://i.imgur.com/txrBlk5.jpeg"
                alt="Padres e hijo usando EmotiPack"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={200} className="order-1 md:order-2">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Si sos mamá o papá, seguramente te pasó...
              </h2>
              <p className="text-lg text-gray-600 italic border-l-4 border-accent pl-4">
                "Tu hijo se enoja, se frustra o se pone triste… y cuando le preguntás qué le pasa, no sabe explicarlo."
              </p>

              <div className="space-y-4">
                <p className="font-bold text-primary">Vos querés ayudarlo, pero:</p>
                <ul className="space-y-4">
                  {[
                    "No tenés tiempo para métodos largos",
                    "No querés depender de pantallas",
                    "Dudás si lo estás haciendo “bien”"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contenedor de impacto con diseño de tarjeta de solución mejorado */}
        <Reveal delay={300} animation="fade-up">
          <div className="relative mt-12">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2962ff] to-[#a855f7] text-white px-10 py-3 rounded-full font-black text-xs md:text-sm shadow-xl uppercase tracking-widest whitespace-nowrap border-4 border-white transform rotate-1 z-20">
              LA VERDAD ES QUE...
            </div>

            <div className="bg-[#f8fafc] p-6 md:p-16 rounded-[50px] md:rounded-[60px] border border-blue-50 relative overflow-hidden z-10">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -ml-20 -mb-20"></div>

              <div className="max-w-3xl mx-auto text-center pt-8 relative z-10">
                <h3 className="text-2xl md:text-4xl font-black text-primary mb-6 leading-tight">
                  👉 No es que tu hijo no quiera expresarse.
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
                  Es que nadie le enseñó cómo hacerlo de una <span className="text-[#2962ff] font-black italic relative z-10">forma simple, segura<span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/30 -z-10 -rotate-1"></span></span> y adaptada a su nivel.
                </p>

                {/* TARJETA DE SOLUCIÓN ESTILO REFERENCIA */}
                <div className="relative max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="bg-white p-10 md:p-12 rounded-[50px] shadow-[0_30px_60px_-15px_rgba(41,98,255,0.15)] border-2 border-blue-100/50 flex flex-col items-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2962ff] via-[#a855f7] to-[#2962ff]"></div>

                    {/* Icono de bombilla en caja azul redondeada */}
                    <div className="bg-gradient-to-br from-[#2962ff] to-[#1e40af] p-5 rounded-[24px] shadow-[0_20px_40px_-10px_rgba(41,98,255,0.4)] mb-8 relative group">
                      <Lightbulb className="w-10 h-10 text-yellow-300 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse border-2 border-white"></div>
                    </div>

                    <div className="relative mb-6">
                      <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2962ff] to-[#a855f7] tracking-tight">
                        EmotiPack
                        <span className="block text-sm text-gray-400 font-medium tracking-normal mt-1 uppercase">La Solución Definitiva</span>
                      </h4>
                      <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-6 -right-8 animate-bounce delay-700" />
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
                      Convierte momentos difíciles en oportunidades de <span className="text-[#2d2159] font-extrabold underline decoration-wavy decoration-[#a855f7]/30 decoration-2 underline-offset-4">conexión emocional</span> usando materiales visuales.
                    </p>

                    {/* Badges Estilizados */}
                    <div className="flex flex-col gap-3 w-full max-w-[260px]">
                      <div className="bg-[#2962ff] text-white py-3 px-6 rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/20 transform -rotate-1">
                        100% VISUAL
                      </div>
                      <div className="bg-[#16a34a] text-white py-3 px-6 rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-green-500/20 transform rotate-1">
                        FÁCIL APLICACIÓN
                      </div>
                      <div className="bg-[#ea580c] text-white py-3 px-6 rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-500/20 transform -rotate-1">
                        CERO PANTALLAS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PainPoints;
