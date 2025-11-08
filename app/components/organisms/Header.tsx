'use client';
import React from 'react';
import { NavItem } from '../molecules/NavItem';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-center whitespace-nowrap border-b border-solid border-b-white/20 px-4 sm:px-10 py-3 fixed top-0 left-0 right-0 bg-[#2A0845]/50 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between w-full max-w-[960px]">
        {/* Espaço vazio à esquerda para balancear */}
        <div className="hidden sm:block w-[200px]">
          <Image src="/images/logo1.png" alt="Upcode" width={50} height={50} />
        </div>

        {/* Logo centralizado */}
        <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => router.push('/')}>
          <div className="text-cyan">
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Upcode</h2>
          </div>
        </div>

        {/* Navegação à direita */}
        <nav className="hidden sm:flex justify-end w-[200px]">
          <div className="flex items-center gap-6">
            <NavItem href="#sobre">Sobre</NavItem>
            <NavItem href="#recursos">Recursos</NavItem>
            <NavItem className="bg-primary hover:bg-primary/80 px-2 py-1 rounded-xl" href="#contato">Contato</NavItem>
          </div>
        </nav>
      </div>
    </header>
  );
};

