import React from 'react';
import { Icon } from '../atoms/Icon';
import { Text } from '../atoms/Text';

interface AboutCardProps {
  icon: string;
  title: string;
  description: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({ 
  icon, 
  title, 
  description
}) => {
  return (
    <div className="flex flex-1 gap-3 rounded-xl border border-magenta/30 bg-black/20 p-6 flex-col items-center text-center backdrop-blur-sm">
      <div className="text-magenta text-4xl mb-2">
        <Icon name={icon} size="lg" />
      </div>
      <div className="flex flex-col gap-1">
        <Text variant="h3">{title}</Text>
        <Text variant="caption">{description}</Text>
      </div>
    </div>
  );
};

