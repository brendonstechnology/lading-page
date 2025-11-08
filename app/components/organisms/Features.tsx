import React from 'react';
import { Text } from '../atoms/Text';
import { FeatureCard } from '../molecules/FeatureCard';

export const Features: React.FC = () => {
  const features = [
    {
      icon: 'trending_up',
      title: 'Performance Otimizada',
      description: 'Aplicações ultrarrápidas que garantem a melhor experiência para o usuário e melhoram a conversão.'
    },
    {
      icon: 'security',
      title: 'Segurança Avançada',
      description: 'Protegemos seus dados e de seus clientes com as mais modernas práticas de segurança digital.'
    },
    {
      icon: 'devices',
      title: 'Design Intuitivo',
      description: 'Interfaces elegantes e fáceis de usar que cativam e engajam seu público-alvo.'
    },
    {
      icon: 'data_exploration',
      title: 'Escalabilidade',
      description: 'Nossas soluções crescem junto com o seu negócio, prontas para qualquer demanda futura.'
    }
  ];

  return (
    <section id="recursos">
      <Text variant="h2" className="px-4 pb-3 pt-20 text-center">
        Recursos
      </Text>
      <p className="text-center text-[#A0A0A0] max-w-3xl mx-auto px-4 mb-8">
        Descubra como nossas soluções podem transformar sua presença digital com 
        tecnologia de ponta e foco em resultados.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            variant="feature"
          />
        ))}
      </div>
    </section>
  );
};

