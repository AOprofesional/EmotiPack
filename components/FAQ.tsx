import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Reveal from './Reveal';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "¿Necesito experiencia previa?", a: "No. Todo está explicado paso a paso en el Manual de Instrucciones. Está diseñado para que cualquier madre o padre pueda aplicarlo desde el primer minuto sin complicaciones." },
    { q: "¿Cuánto tiempo lleva?", a: "Solo necesitas entre 10 y 15 minutos al día. El kit está diseñado para integrarse fácilmente en la rutina diaria, ya sea antes de dormir, después de la escuela o en un momento de calma." },
    { q: "¿Funciona si mi hijo es tímido?", a: "Sí, definitivamente. El juego reduce drásticamente la presión de “tener que hablar”. Al usar elementos visuales y personajes, el niño se siente más seguro proyectando lo que siente en el juego." },
    { q: "¿Es digital?", a: "Es 100% imprimible, lo que significa que no hay pantallas de por medio. Recibes los archivos PDF en alta calidad y puedes imprimirlos las veces que necesites." }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mb-6 shadow-sm">
              <HelpCircle className="w-10 h-10 text-[#0ea5e9]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              ¿Tenés dudas?
            </h2>
            <p className="text-xl text-gray-600 font-medium">Aquí está todo lo que necesitas saber</p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} question={faq.q} answer={faq.a} index={idx} />
          ))}
        </div>

        <Reveal delay={600} animation="fade-up">
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest border border-gray-100 inline-block px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm">
              💡 Ideal para empezar hoy mismo y notar cambios en solo una semana.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<{ question: string, answer: string, index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Alternating colors
  const isEven = index % 2 === 0;
  // Sky Blue for even, Purple for odd
  const activeBorder = isEven ? 'border-[#0ea5e9]' : 'border-[#a855f7]';
  const activeText = isEven ? 'text-[#0ea5e9]' : 'text-[#a855f7]';
  const bgOpen = isEven ? 'bg-[#0ea5e9]/5' : 'bg-[#a855f7]/5';
  const ringColor = isEven ? 'ring-[#0ea5e9]' : 'ring-[#a855f7]';

  return (
    <Reveal delay={index * 100} animation="fade-up">
      <div className={`border rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? `${activeBorder} shadow-lg ring-1 ring-opacity-50 ${ringColor}` : 'border-gray-100 hover:border-gray-200'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors group"
        >
          <span className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? activeText : 'text-gray-700 group-hover:text-gray-900'}`}>{question}</span>
          {isOpen ? (
            <ChevronUp className={`w-6 h-6 ${activeText}`} />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
          )}
        </button>
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <div className="overflow-hidden">
            <div className={`p-6 pt-2 ${bgOpen} text-gray-600 text-base md:text-lg leading-relaxed`}>
              {answer}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default FAQ;
