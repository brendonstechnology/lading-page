import React from 'react';
import { Link } from '../atoms/Link';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({ href, children, className }) => {
  return <Link variant="nav" href={href} className={className}>{children}</Link>;
};

