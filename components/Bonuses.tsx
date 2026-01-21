
import React from 'react';
import { Sparkles, MessageCircle, Calendar, Gift } from 'lucide-react';

const Bonuses: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-black font-black px-6 py-2 rounded-full text-xs mb-4 shadow-sm">
            <Gift className="w-4 h-4 fill-black" />
            ¡REGALOS ADICIONALES PARA VOS!
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            Si te sumás hoy, recibís <br />
            <span className="text-blue-600 italic">estos 2 bonos exclusivos</span>
          </h2>
          <p className="text-gray-500 font-medium">Diseñados para complementar tu experiencia y darte resultados más rápidos.</p>
        </div>

        <div className="space-y-6 md:space-y-12 max-w-5xl mx-auto">
          {/* Bono #1 - TEMA VIOLETA (Coincide con Personajes) */}
          <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-xl overflow-hidden border border-purple-100 flex flex-col md:flex-row items-stretch group hover:shadow-[0_20px_60px_rgba(142,36,170,0.15)] transition-all duration-500">
            <div className="p-6 md:p-12 md:w-3/5 flex flex-col justify-center order-2 md:order-1">
              <div className="bg-[#8E24AA]/10 text-[#8E24AA] w-fit px-3 py-1 md:px-4 md:py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 md:mb-6 border border-[#8E24AA]/20">
                BONO EXCLUSIVO #1
              </div>
              <h3 className="text-xl md:text-3xl font-black text-primary mb-2 md:mb-4 leading-tight">
                Tarjetas de Frases Guía para Padres
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-lg mb-4 md:mb-8">
                ¿No sabés qué decir cuando hay un berrinche o tristeza profunda? Estas tarjetas te dan <span className="font-bold text-[#8E24AA]">el guion exacto</span> para validar sus emociones sin perder la calma. Sabrás qué decir, qué no decir y cómo conectar en segundos.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-[#8E24AA] text-white p-2 rounded-lg shadow-lg shadow-purple-200">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-[#8E24AA] font-black text-xs md:text-sm uppercase tracking-widest">
                  VALOR: USD 15 — <span className="underline decoration-[#ffde00] decoration-4 text-black">¡GRATIS HOY!</span>
                </span>
              </div>
            </div>

            {/* Contenedor de imagen */}
            <div className="h-48 md:h-auto md:w-2/5 bg-[#8E24AA]/5 flex items-center justify-center p-6 md:p-8 relative overflow-hidden group-hover:bg-[#8E24AA]/10 transition-colors order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8E24AA]/10 to-transparent"></div>
              <img
                src="https://i.imgur.com/7nMtEbX.png"
                alt="Bono Tarjetas de Frases"
                className="relative z-10 h-full w-auto object-contain drop-shadow-[0_15px_30px_rgba(142,36,170,0.3)] transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-[#8E24AA] w-24 h-24 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>

          {/* Bono #2 - TEMA AMARILLO/DORADO (Coincide con Cartas) */}
          <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-xl overflow-hidden border border-yellow-100 flex flex-col md:flex-row-reverse items-stretch group hover:shadow-[0_20px_60px_rgba(253,216,53,0.15)] transition-all duration-500">
            <div className="p-6 md:p-12 md:w-3/5 flex flex-col justify-center order-2 md:order-1">
              <div className="bg-[#FBC02D]/10 text-[#F9A825] w-fit px-3 py-1 md:px-4 md:py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 md:mb-6 border border-[#FBC02D]/20">
                BONO EXCLUSIVO #2
              </div>
              <h3 className="text-xl md:text-3xl font-black text-primary mb-2 md:mb-4 leading-tight">
                Mini Reto de 7 Días: Conexión Diaria
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-lg mb-4 md:mb-8">
                Tu hoja de ruta para implementar EmotiPack sin esfuerzo. Una <span className="font-bold text-[#F9A825]">guía paso a paso</span> de una semana para transformar la rutina familiar en un espacio de confianza y expresión saludable. Ideal para familias con poco tiempo.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-[#FBC02D] text-white p-2 rounded-lg shadow-lg shadow-yellow-200">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-[#F9A825] font-black text-xs md:text-sm uppercase tracking-widest">
                  VALOR: USD 12 — <span className="underline decoration-[#ffde00] decoration-4 text-black">¡GRATIS HOY!</span>
                </span>
              </div>
            </div>

            {/* Contenedor de imagen */}
            <div className="h-48 md:h-auto md:w-2/5 bg-[#fff9c4]/30 flex items-center justify-center p-6 md:p-8 relative overflow-hidden group-hover:bg-[#fff9c4]/50 transition-colors order-1 md:order-2 md:order-reverse">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FBC02D]/10 to-transparent"></div>
              <img
                src="https://i.imgur.com/oX7KMIP.png"
                alt="Bono Reto 7 Días"
                className="relative z-10 h-full w-auto object-contain drop-shadow-[0_15px_30px_rgba(251,192,45,0.3)] transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 bg-[#FBC02D] w-24 h-24 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-primary text-white p-8 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
          <Sparkles className="absolute top-4 right-4 w-12 h-12 text-accent/20" />
          <p className="text-lg md:text-xl font-bold leading-relaxed relative z-10">
            "No solo te llevás el juego, te llevás las herramientas para <span className="text-accent">convertirte en el guía emocional</span> que tu hijo necesita hoy."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
