import React from 'react';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

export const Hero: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-16" id="hero">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[480px] flex-col gap-6 items-center justify-center p-4 text-center">
            <div className="flex flex-col gap-4">
              <Text variant="h1">
                Transforme seu mundo digital com tecnologia de ponta
              </Text>
              <Text variant="body" className="max-w-2xl mx-auto">
                Desenvolvemos soluções inovadoras com foco em performance otimizada, 
                segurança avançada e design intuitivo para levar seu projeto ao próximo nível.
              </Text>
            </div>
            <Button variant="primary">
              Explorar Soluções
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

