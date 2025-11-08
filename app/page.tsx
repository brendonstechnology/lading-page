import { MainLayout } from './components/templates/MainLayout';
import { Hero } from './components/organisms/Hero';
import { About } from './components/organisms/About';
import { Features } from './components/organisms/Features';
import { CTA } from './components/organisms/CTA';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Features />
      <CTA />
    </MainLayout>
  );
}
