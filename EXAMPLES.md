# 🧪 Exemplos Práticos de Uso

## 📚 Guia de Exemplos

Este documento contém exemplos práticos de como usar cada componente do projeto.

---

## ⚛️ ÁTOMOS

### 🔘 Button

```tsx
import { Button } from '@/app/components/atoms';

// Botão primário (cyan)
<Button variant="primary">
  Explorar Soluções
</Button>

// Botão secundário (magenta)
<Button variant="secondary">
  Entre em Contato
</Button>

// Com onClick
<Button 
  variant="primary" 
  onClick={() => console.log('Clicou!')}
>
  Clique Aqui
</Button>

// Desabilitado
<Button 
  variant="primary" 
  disabled
>
  Desabilitado
</Button>

// Com classes customizadas
<Button 
  variant="primary"
  className="w-full"
>
  Botão Full Width
</Button>
```

---

### 🎨 Icon

```tsx
import { Icon } from '@/app/components/atoms';

// Tamanhos
<Icon name="rocket_launch" size="sm" />   // pequeno
<Icon name="speed" size="md" />           // médio (padrão)
<Icon name="security" size="lg" />        // grande
<Icon name="devices" size="xl" />         // extra grande

// Com cores
<Icon name="hub" className="text-cyan" />
<Icon name="trending_up" className="text-magenta" />
<Icon name="star" className="text-yellow-400" />

// Combinações
<div className="flex items-center gap-2">
  <Icon name="check_circle" className="text-green-500" />
  <span>Tarefa concluída</span>
</div>
```

---

### 🔗 Link

```tsx
import { Link } from '@/app/components/atoms';

// Link de navegação
<Link variant="nav" href="#sobre">
  Sobre
</Link>

// Link padrão
<Link variant="default" href="https://exemplo.com">
  Visite nosso site
</Link>

// Link externo
<Link 
  variant="default" 
  href="https://github.com" 
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</Link>

// Com ícone
<Link variant="nav" href="#contato" className="flex items-center gap-2">
  <Icon name="mail" size="sm" />
  Contato
</Link>
```

---

### 📝 Text

```tsx
import { Text } from '@/app/components/atoms';

// Títulos
<Text variant="h1">
  Título Principal da Página
</Text>

<Text variant="h2">
  Título de Seção
</Text>

<Text variant="h3">
  Título de Card
</Text>

// Parágrafos
<Text variant="body">
  Este é um parágrafo com texto descritivo mais longo.
</Text>

<Text variant="caption">
  Texto pequeno para legendas ou descrições curtas.
</Text>

// Com classes customizadas
<Text variant="h1" className="text-center mb-8">
  Título Centralizado
</Text>

// Combinações
<div className="space-y-2">
  <Text variant="h2">Bem-vindo</Text>
  <Text variant="body">Descrição aqui</Text>
</div>
```

---

## 🔬 MOLÉCULAS

### 📇 AboutCard

```tsx
import { AboutCard } from '@/app/components/molecules';

// Card básico
<AboutCard 
  icon="rocket_launch"
  title="Inovação"
  description="Criamos soluções futuristas que redefinem o mercado."
/>

// Múltiplos cards em grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <AboutCard 
    icon="speed"
    title="Performance"
    description="Sistemas rápidos e eficientes."
  />
  <AboutCard 
    icon="design_services"
    title="Design"
    description="Interfaces intuitivas."
  />
  <AboutCard 
    icon="security"
    title="Segurança"
    description="Proteção avançada."
  />
</div>

// Customizando
<div className="hover:scale-105 transition-transform">
  <AboutCard 
    icon="star"
    title="Qualidade"
    description="Excelência em cada detalhe."
  />
</div>
```

---

### 🎴 FeatureCard

```tsx
import { FeatureCard } from '@/app/components/molecules';

// Card de recurso
<FeatureCard 
  icon="trending_up"
  title="Performance Otimizada"
  description="Aplicações ultrarrápidas com foco em UX."
  variant="feature"
/>

// Card estilo about
<FeatureCard 
  icon="rocket_launch"
  title="Inovação"
  description="Tecnologia de ponta."
  variant="about"
/>

// Grid de recursos
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <FeatureCard 
    icon="security"
    title="Segurança"
    description="Proteção de dados avançada."
    variant="feature"
  />
  <FeatureCard 
    icon="devices"
    title="Multi-plataforma"
    description="Funciona em qualquer dispositivo."
    variant="feature"
  />
  <FeatureCard 
    icon="cloud"
    title="Cloud Native"
    description="Escalável e confiável."
    variant="feature"
  />
  <FeatureCard 
    icon="analytics"
    title="Analytics"
    description="Insights em tempo real."
    variant="feature"
  />
</div>
```

---

### 🧭 NavItem

```tsx
import { NavItem } from '@/app/components/molecules';

// Navegação básica
<nav className="flex gap-8">
  <NavItem href="#home">Home</NavItem>
  <NavItem href="#sobre">Sobre</NavItem>
  <NavItem href="#recursos">Recursos</NavItem>
  <NavItem href="#contato">Contato</NavItem>
</nav>

// Menu mobile
<div className="flex flex-col gap-4 p-4">
  <NavItem href="#home">🏠 Home</NavItem>
  <NavItem href="#sobre">ℹ️ Sobre</NavItem>
  <NavItem href="#recursos">⚡ Recursos</NavItem>
  <NavItem href="#contato">📧 Contato</NavItem>
</div>

// Com ícones
<nav className="flex items-center gap-6">
  <NavItem href="#dashboard">
    <Icon name="dashboard" size="sm" /> Dashboard
  </NavItem>
  <NavItem href="#settings">
    <Icon name="settings" size="sm" /> Configurações
  </NavItem>
</nav>
```

---

### 🔗 SocialIcon

```tsx
import { SocialIcon } from '@/app/components/molecules';

// Ícones básicos
<div className="flex gap-4">
  <SocialIcon 
    href="https://linkedin.com" 
    icon="linkedin" 
    ariaLabel="LinkedIn"
  />
  <SocialIcon 
    href="https://github.com" 
    icon="github" 
    ariaLabel="GitHub"
  />
</div>

// Em linha vertical
<div className="flex flex-col gap-3">
  <SocialIcon 
    href="#" 
    icon="linkedin" 
    ariaLabel="Conecte no LinkedIn"
  />
  <SocialIcon 
    href="#" 
    icon="github" 
    ariaLabel="Siga no GitHub"
  />
</div>

// Com wrapper customizado
<div className="flex justify-center gap-6 p-4 bg-black/20 rounded-lg">
  <SocialIcon href="#" icon="linkedin" ariaLabel="LinkedIn" />
  <SocialIcon href="#" icon="github" ariaLabel="GitHub" />
</div>
```

---

## 🦠 ORGANISMOS

### 🎯 Header

```tsx
import { Header } from '@/app/components/organisms';

// Uso básico
<Header />

// Em um layout
<div className="min-h-screen">
  <Header />
  <main>{/* conteúdo */}</main>
</div>

// O Header já inclui:
// - Logo Brendon's Technology
// - Menu de navegação (Sobre, Recursos, Contato)
// - Sticky positioning
// - Backdrop blur
```

---

### 🚀 Hero

```tsx
import { Hero } from '@/app/components/organisms';

// Uso básico
<Hero />

// Em uma página
<main className="flex flex-col gap-16">
  <Hero />
  {/* outras seções */}
</main>

// O Hero já inclui:
// - Título principal
// - Subtítulo descritivo
// - Botão CTA
// - Centralização
```

---

### 💡 About

```tsx
import { About } from '@/app/components/organisms';

// Uso básico
<About />

// Em sequência
<main className="space-y-24">
  <Hero />
  <About />
  <Features />
</main>

// O About já inclui:
// - Título "Sobre Nós"
// - Texto introdutório
// - 3 cards (Inovação, Performance, Design)
```

---

### ⚡ Features

```tsx
import { Features } from '@/app/components/organisms';

// Uso básico
<Features />

// Com ID customizado
<section id="nossos-recursos">
  <Features />
</section>

// O Features já inclui:
// - Título "Recursos"
// - Texto descritivo
// - Grid 2x2 de recursos
```

---

### 📞 CTA

```tsx
import { CTA } from '@/app/components/organisms';

// Uso básico
<CTA />

// Com espaçamento
<section className="my-16">
  <CTA />
</section>

// O CTA já inclui:
// - Título chamativo
// - Descrição
// - Botão de contato
// - Gradiente magenta/cyan
```

---

### 🔗 Footer

```tsx
import { Footer } from '@/app/components/organisms';

// Uso básico
<Footer />

// No final da página
<div className="min-h-screen flex flex-col">
  <main className="flex-1">
    {/* conteúdo */}
  </main>
  <Footer />
</div>

// O Footer já inclui:
// - Copyright
// - Links para redes sociais
```

---

## 📄 TEMPLATES

### 🏗️ MainLayout

```tsx
import { MainLayout } from '@/app/components/templates';
import { Hero, About, Features, CTA } from '@/app/components/organisms';

// Layout completo
export default function Page() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Features />
      <CTA />
    </MainLayout>
  );
}

// Com seção customizada
export default function CustomPage() {
  return (
    <MainLayout>
      <Hero />
      
      <section className="py-16">
        <h2>Minha Seção Custom</h2>
        <p>Conteúdo personalizado aqui</p>
      </section>
      
      <CTA />
    </MainLayout>
  );
}

// O MainLayout já inclui:
// - Header (fixo no topo)
// - Main container (responsivo)
// - Footer (no final)
// - Espaçamento adequado
```

---

## 🎨 COMPOSIÇÕES COMPLETAS

### 📄 Página Completa

```tsx
// app/page.tsx
import { MainLayout } from './components/templates';
import { 
  Hero, 
  About, 
  Features, 
  CTA 
} from './components/organisms';

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
```

---

### 📄 Página "Sobre"

```tsx
// app/sobre/page.tsx
import { MainLayout } from '../components/templates';
import { Text, Button } from '../components/atoms';
import { AboutCard } from '../components/molecules';

export default function SobrePage() {
  return (
    <MainLayout>
      <section className="py-16 text-center">
        <Text variant="h1" className="mb-4">
          Nossa História
        </Text>
        <Text variant="body" className="max-w-2xl mx-auto mb-8">
          Desde 2020, transformamos ideias em realidade digital.
        </Text>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <AboutCard 
            icon="people"
            title="50+"
            description="Clientes satisfeitos"
          />
          <AboutCard 
            icon="rocket_launch"
            title="100+"
            description="Projetos entregues"
          />
          <AboutCard 
            icon="star"
            title="5.0"
            description="Avaliação média"
          />
        </div>

        <Button variant="primary" className="mt-12">
          Fale Conosco
        </Button>
      </section>
    </MainLayout>
  );
}
```

---

### 📄 Página de Contato

```tsx
// app/contato/page.tsx
import { MainLayout } from '../components/templates';
import { Text, Button } from '../components/atoms';
import { Icon } from '../components/atoms';

export default function ContatoPage() {
  return (
    <MainLayout>
      <section className="py-16 max-w-2xl mx-auto">
        <Text variant="h1" className="text-center mb-8">
          Entre em Contato
        </Text>
        
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Nome</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
              placeholder="Seu nome"
            />
          </div>
          
          <div>
            <label className="block mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label className="block mb-2">Mensagem</label>
            <textarea 
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 h-32"
              placeholder="Sua mensagem..."
            />
          </div>
          
          <Button variant="primary" className="w-full">
            Enviar Mensagem
          </Button>
        </form>

        <div className="mt-12 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Icon name="mail" className="text-cyan" />
            <span>brendonstechnology@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="phone" className="text-cyan" />
            <span>(61) 98279-6638</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="location_on" className="text-cyan" />
            <span>Valparaíso de Goiás, GO</span>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
```

---

## 🎯 DICAS DE USO

### ✅ Boas Práticas

```tsx
// ✅ BOM: Imports organizados
import { Button, Text, Icon } from '@/app/components/atoms';
import { FeatureCard } from '@/app/components/molecules';
import { Header, Footer } from '@/app/components/organisms';

// ❌ RUIM: Imports repetitivos
import { Button } from '@/app/components/atoms/Button';
import { Text } from '@/app/components/atoms/Text';
import { Icon } from '@/app/components/atoms/Icon';
```

```tsx
// ✅ BOM: Composição clara
<section className="py-16">
  <Text variant="h2">Título</Text>
  <div className="grid grid-cols-3 gap-4">
    <FeatureCard {...props1} />
    <FeatureCard {...props2} />
    <FeatureCard {...props3} />
  </div>
</section>

// ❌ RUIM: Muita aninhação
<div>
  <div>
    <div>
      <FeatureCard {...props} />
    </div>
  </div>
</div>
```

---

### 🎨 Customização

```tsx
// Estendendo estilos
<Button 
  variant="primary" 
  className="w-full shadow-2xl"
>
  Botão Customizado
</Button>

// Sobrescrevendo comportamento
<Button 
  variant="primary"
  onClick={() => {
    console.log('Custom action');
    // sua lógica aqui
  }}
>
  Ação Customizada
</Button>
```

---

## 🚀 Conclusão

Estes exemplos cobrem os casos de uso mais comuns. Para casos mais específicos, consulte:

- `app/components/README.md` - Documentação de componentes
- `ATOMIC_DESIGN_GUIDE.md` - Guia completo
- `COMPONENT_HIERARCHY.md` - Hierarquia e estrutura

**Happy Coding! 🎉**

