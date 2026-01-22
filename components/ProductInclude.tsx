
import React, { useState, useEffect } from 'react';
import { BookOpen, Gamepad2, Users, Palette, Dice6, ClipboardList, Map as MapIcon, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

const ProductInclude: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://i.imgur.com/f484YJB.png",
    "https://i.imgur.com/xWdR30c.png",
    "https://i.imgur.com/UrgxYkn.png",
    "https://i.imgur.com/EYYfSTt.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      icon: <MapIcon />,
      title: "1 Tablero de juego emocional",
      desc: "Guía la experiencia y estructura el juego.",
      color: "bg-[#1E88E5]",
      border: "border-[#1E88E5]/30",
      hover: "hover:bg-[#1E88E5]/10",
      shadow: "hover:shadow-[0_10px_40px_rgba(30,136,229,0.2)]",
      text: "text-[#1E88E5]"
    },
    {
      icon: <BookOpen />,
      title: "48 Cartas de emociones",
      desc: "Para identificar, nombrar y comprender lo que sienten.",
      color: "bg-[#FDD835]",
      border: "border-[#FDD835]/30",
      hover: "hover:bg-[#FDD835]/10",
      shadow: "hover:shadow-[0_10px_40px_rgba(253,216,53,0.2)]",
      text: "text-[#FDD835]"
    },
    {
      icon: <Gamepad2 />,
      title: "18 Fichas de memoria emocional",
      desc: "Refuerzan el aprendizaje a través del juego.",
      color: "bg-[#7CB342]",
      border: "border-[#7CB342]/30",
      hover: "hover:bg-[#7CB342]/10",
      shadow: "hover:shadow-[0_10px_40px_rgba(124,179,66,0.2)]",
      text: "text-[#7CB342]"
    },
    {
      icon: <Users />,
      title: "9 Personajes para el tablero",
      desc: "Facilitan la identificación y hacen el juego más cercano.",
      color: "bg-[#8E24AA]",
      border: "border-[#8E24AA]/30",
      hover: "hover:bg-[#8E24AA]/10",
      shadow: "hover:shadow-[0_10px_40px_rgba(142,36,170,0.2)]",
      text: "text-[#8E24AA]"
    },
    {
      icon: <Palette />,
      title: "1 Pizarra de emociones",
      desc: "Para expresar cómo se siente cada día y observar cambios.",
      color: "bg-[#E53935]",
      border: "border-[#E53935]/30",
      hover: "hover:bg-[#E53935]/10",
      shadow: "hover:shadow-[0_10px_40px_rgba(229,57,53,0.2)]",
      text: "text-[#E53935]"
    },
    {
      icon: <Dice6 />,
      title: "1 Dado de juego",
      desc: "Aporta dinamismo y participación.",
      color: "bg-[#039BE5]",
      border: "border-[#039BE5]/30",
      hover: "hover:bg-[#039BE5]/10",
      shadow: "hover:shadow-[0_10px_40px_rgba(3,155,229,0.2)]",
      text: "text-[#039BE5]"
    }
  ];

  return (
    <section id="product-include" className="py-24 bg-primary text-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block bg-accent text-black font-black px-4 py-1 rounded-lg text-xs mb-4 uppercase tracking-widest">
              🎁 PACK COMPLETO
            </div>
            <h2 className="text-3xl md:text-5xl font-black">Mirá todo lo que incluye tu acceso</h2>
          </div>
        </Reveal>

        {/* Mockup Principal */}
        <Reveal delay={200}>
          <div className="mb-24 flex justify-center">
            <div className="relative max-w-5xl w-full">
              <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full"></div>
              <img
                src="https://i.imgur.com/R776Ihq.png"
                alt="Mockup completo de EmotiPack"
                className="relative z-10 w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </Reveal>

        {/* Sección Destacada de Cartas con Slider */}
        <Reveal delay={300}>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-white/5 p-8 md:p-12 rounded-[50px] border border-white/10">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 text-accent font-bold mb-4 uppercase tracking-wider text-sm">
                <Sparkles className="w-4 h-4" />
                DISEÑO PROFESIONAL
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                48 Cartas diseñadas para <span className="text-accent italic">conectar</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cada carta ha sido creada con ilustraciones claras y colores específicos que ayudan a los niños a asociar conceptos abstractos con imágenes concretas.
              </p>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li className="flex items-center gap-2">✅ Formato fácil de manipular</li>
                <li className="flex items-center gap-2">✅ Lenguaje adaptado a su edad</li>
                <li className="flex items-center gap-2">✅ Alta calidad visual</li>
              </ul>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>

              {/* Slider Container */}
              <div className="relative z-10 group overflow-hidden rounded-[40px] border-4 border-white/10 shadow-2xl aspect-square md:aspect-auto md:h-[500px] bg-black/20 flex items-center justify-center">
                <div
                  className="flex transition-transform duration-500 ease-out h-full w-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((src, index) => (
                    <div key={index} className="w-full h-full shrink-0 flex items-center justify-center p-8">
                      <img
                        src={src}
                        alt={`Carta EmotiPack ${index + 1}`}
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index ? 'bg-accent w-8' : 'bg-white/40 hover:bg-white/60'}`}
                      aria-label={`Ir a la imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100} animation="pop-in" className="h-full">
              <div
                className={`bg-white/5 border ${item.border} p-8 rounded-3xl ${item.hover} ${item.shadow} transition-all duration-300 group h-full`}
              >
                <div className={`${item.color} text-white p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="bg-white text-primary p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-10 shadow-2xl">
            <div className="bg-primary/5 p-6 rounded-3xl shrink-0">
              <ClipboardList className="w-16 h-16 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-4">Manual de Instrucciones</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Incluye distintas formas de uso del juego y sus piezas, para adaptarlo a la edad, el momento emocional y el tiempo disponible. No dejamos nada al azar.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductInclude;
