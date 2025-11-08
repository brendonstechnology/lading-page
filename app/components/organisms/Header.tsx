'use client';
import React from 'react';
import { Icon } from '../atoms/Icon';
import { NavItem } from '../molecules/NavItem';
import { useRouter } from 'next/navigation';


export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-white/20 px-4 sm:px-10 py-3 fixed top-0 left-0 right-0 bg-[#2A0845]/50 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => router.push('/')}>
        <div className="size-5 text-cyan">
          <Icon name="hub" size="md" />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Brendon&apos;s Technology
        </h2>
      </div>
      <nav className="hidden sm:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <NavItem href="#sobre">Sobre</NavItem>
          <NavItem href="#recursos">Recursos</NavItem>
          <NavItem className="bg-primary hover:bg-primary/80 px-2 py-1 rounded-xl" href="#contato">Contato</NavItem>
        </div>
      </nav>
    </header>
  );
};

