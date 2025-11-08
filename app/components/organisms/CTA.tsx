import React from 'react';
import { Button } from '../atoms/Button';

export const CTA: React.FC = () => {
  return (
    <section className="my-12" id="contato">
      <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-gradient-to-r from-magenta/20 to-cyan/20 p-8 sm:p-12 text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.02em]">
          Pronto para elevar seu projeto?
        </h2>
        <p className="text-[#EAEAEA] max-w-xl">
          Vamos construir o futuro juntos. Entre em contato e descubra como podemos 
          transformar suas ideias em realidade.
        </p>
        <Button variant="secondary">
          Entre em Contato
        </Button>
      </div>
    </section>
  );
};

