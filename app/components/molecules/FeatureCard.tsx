import React from 'react';
import { Icon } from '../atoms/Icon';
import { Text } from '../atoms/Text';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'about' | 'feature';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  variant = 'feature'
}) => {
  const variantStyles = {
    about: "border-magenta/30",
    feature: "border-cyan/30 hover:border-cyan/80"
  };

  const iconColor = variant === 'about' ? 'text-magenta' : 'text-cyan';

  return (
    <div className={`flex flex-col gap-4 rounded-xl border ${variantStyles[variant]} bg-black/20 p-6 backdrop-blur-sm transition-all`}>
      <Icon name={icon} className={iconColor} />
      <div className="flex flex-col gap-1">
        <Text variant="h3">{title}</Text>
        <Text variant="caption">{description}</Text>
      </div>
    </div>
  );
};

