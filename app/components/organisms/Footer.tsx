import React from 'react';
import { SocialIcon } from '../molecules/SocialIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-solid border-white/20 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
        <p className="text-[#A0A0A0] text-sm">
          © 2024 Upcode. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <SocialIcon href="#" icon="linkedin" ariaLabel="LinkedIn" />
          <SocialIcon href="#" icon="github" ariaLabel="GitHub" />
        </div>
      </div>
    </footer>
  );
};

