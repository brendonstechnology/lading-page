import React from 'react';
import { Text } from '../atoms/Text';
import { AboutCard } from '../molecules/AboutCard';

export const About: React.FC = () => {
  const features = [
    {
      icon: 'rocket_launch',
      title: 'Inovação',
      description: 'Criamos soluções futuristas que redefinem o mercado.'
    },
    {
      icon: 'speed',
      title: 'Performance',
      description: 'Garantimos sistemas rápidos, eficientes e escaláveis.'
    },
    {
      icon: 'design_services',
      title: 'Design',
      description: 'Desenvolvemos interfaces intuitivas e experiências memoráveis.'
    }
  ];

  return (
    <section id="sobre">
      <Text variant="h2" className="px-4 pb-3 pt-20 text-center">
        Sobre Nós
      </Text>
      <p className="text-center text-[#A0A0A0] max-w-3xl mx-auto px-4 mb-8">
        Nossa missão é impulsionar a inovação, combinando expertise técnica com design 
        centrado no usuário para criar produtos digitais que não apenas funcionam, mas encantam.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {features.map((feature, index) => (
          <AboutCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

