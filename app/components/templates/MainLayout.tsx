import React from 'react';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <Header />
            <main className="flex flex-col gap-12 sm:gap-16 md:gap-24 mt-24 sm:mt-28 pt-12">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

