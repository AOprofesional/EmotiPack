
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Reveal from './Reveal';

const NotForYou: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-red-50/50">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6 text-xl md:text-3xl leading-snug text-gray-800">
            <p className="font-medium">No es que tu hijo no quiera hablar.</p>
            <p className="font-semibold text-gray-500">A veces no sabe cómo.</p>
            <div className="pt-4">
              <p className="font-black text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                Y eso también se aprende.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default NotForYou;
