# 🏛️ Hierarquia de Componentes

## 📊 Diagrama de Estrutura

```
┌─────────────────────────────────────────────────────────┐
│                        PAGE                              │
│                     (app/page.tsx)                       │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                    TEMPLATE                              │
│                   MainLayout                             │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Header (organism)                              │    │
│  └─────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Main Content (children)                        │    │
│  │  ┌───────────────────────────────────────────┐  │    │
│  │  │  Hero (organism)                          │  │    │
│  │  └───────────────────────────────────────────┘  │    │
│  │  ┌───────────────────────────────────────────┐  │    │
│  │  │  About (organism)                         │  │    │
│  │  └───────────────────────────────────────────┘  │    │
│  │  ┌───────────────────────────────────────────┐  │    │
│  │  │  Features (organism)                      │  │    │
│  │  └───────────────────────────────────────────┘  │    │
│  │  ┌───────────────────────────────────────────┐  │    │
│  │  │  CTA (organism)                           │  │    │
│  │  └───────────────────────────────────────────┘  │    │
│  └─────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Footer (organism)                              │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

## 🔍 Detalhamento por Organismo

### 📌 Header (Organism)
```
Header
├── Icon (atom) - Logo Upcode
├── Text (h2) - "Upcode"
└── Nav
    ├── NavItem (molecule) - "Sobre"
    ├── NavItem (molecule) - "Recursos"
    └── NavItem (molecule) - "Contato"
        └── Link (atom)
```

### 🚀 Hero (Organism)
```
Hero
├── Text (h1) - Título principal
├── Text (body) - Descrição
└── Button (atom) - CTA
```

### 💡 About (Organism)
```
About
├── Text (h2) - "Sobre Nós"
├── Text (p) - Descrição
└── Grid de AboutCard (molecule) x3
    ├── AboutCard - Inovação
    │   ├── Icon (atom) - "rocket_launch"
    │   ├── Text (h3) - Título
    │   └── Text (caption) - Descrição
    ├── AboutCard - Performance
    └── AboutCard - Design
```

### ⚡ Features (Organism)
```
Features
├── Text (h2) - "Recursos"
├── Text (p) - Descrição
└── Grid de FeatureCard (molecule) x4
    ├── FeatureCard - Performance
    │   ├── Icon (atom) - "trending_up"
    │   ├── Text (h3) - Título
    │   └── Text (caption) - Descrição
    ├── FeatureCard - Segurança
    ├── FeatureCard - Design
    └── FeatureCard - Escalabilidade
```

### 📞 CTA (Organism)
```
CTA
├── Text (h2) - Título
├── Text (p) - Descrição
└── Button (atom) - "Entre em Contato"
```

### 🔗 Footer (Organism)
```
Footer
├── Text (p) - Copyright
└── Social Links
    ├── SocialIcon (molecule) - LinkedIn
    │   └── SVG Icon
    └── SocialIcon (molecule) - GitHub
        └── SVG Icon
```

## 🎯 Fluxo de Dados

```
┌──────────────────────────────────────────────┐
│  Props Flow (Top-Down)                       │
└──────────────────────────────────────────────┘

page.tsx
   │
   ├─> MainLayout
   │     │
   │     ├─> Header (sem props)
   │     │     └─> NavItem (href, children)
   │     │
   │     ├─> Hero (sem props)
   │     │     ├─> Text (variant, children)
   │     │     └─> Button (variant, children)
   │     │
   │     ├─> About (sem props)
   │     │     └─> AboutCard (icon, title, description)
   │     │           ├─> Icon (name, className)
   │     │           └─> Text (variant, children)
   │     │
   │     ├─> Features (sem props)
   │     │     └─> FeatureCard (icon, title, description, variant)
   │     │           ├─> Icon (name, className)
   │     │           └─> Text (variant, children)
   │     │
   │     ├─> CTA (sem props)
   │     │     ├─> Text (variant, children)
   │     │     └─> Button (variant, children)
   │     │
   │     └─> Footer (sem props)
   │           └─> SocialIcon (href, icon, ariaLabel)
```

## 🧩 Mapa de Reutilização

### Átomos mais usados:
```
Icon:    ✓✓✓✓✓✓✓✓✓ (9x) - Usado em todo lugar
Text:    ✓✓✓✓✓✓✓✓✓✓✓✓✓✓ (14x) - Títulos, parágrafos, legendas
Button:  ✓✓ (2x) - Hero e CTA
Link:    ✓✓✓ (3x) - Navegação
```

### Moléculas:
```
FeatureCard:  ✓✓✓✓ (4x) - Seção Features
AboutCard:    ✓✓✓ (3x) - Seção About
NavItem:      ✓✓✓ (3x) - Header
SocialIcon:   ✓✓ (2x) - Footer
```

### Organismos:
```
Cada organismo é usado 1x na página principal
```

## 📦 Imports por Componente

### Página Principal
```tsx
import { MainLayout } from './components/templates/MainLayout';
import { Hero, About, Features, CTA } from './components/organisms';
```

### MainLayout
```tsx
import { Header, Footer } from '../organisms';
```

### Header
```tsx
import { Icon } from '../atoms/Icon';
import { NavItem } from '../molecules/NavItem';
```

### Hero
```tsx
import { Button, Text } from '../atoms';
```

### About
```tsx
import { Text } from '../atoms/Text';
import { AboutCard } from '../molecules/AboutCard';
```

### AboutCard
```tsx
import { Icon, Text } from '../atoms';
```

### Features
```tsx
import { Text } from '../atoms/Text';
import { FeatureCard } from '../molecules/FeatureCard';
```

### FeatureCard
```tsx
import { Icon, Text } from '../atoms';
```

### CTA
```tsx
import { Button } from '../atoms/Button';
```

### Footer
```tsx
import { SocialIcon } from '../molecules/SocialIcon';
```

## 🎨 Padrões de Design

### Cores por Contexto
```
cyan (#00FFFF):
  - Botão primário (Hero)
  - Hover em links
  - Ícones de Features
  - Gradiente no CTA

magenta (#FF00FF):
  - Botão secundário (CTA)
  - Ícones de About
  - Border dos cards About
  - Gradiente no CTA
```

### Variantes de Text
```
h1:      Hero principal
h2:      Títulos de seções (About, Features)
h3:      Títulos de cards
body:    Descrições longas
caption: Descrições de cards
```

### Variantes de Button
```
primary:   Hero (cyan + shadow cyan)
secondary: CTA (magenta + shadow magenta)
```

## 📊 Estatísticas do Projeto

```
Total de Componentes:    20
├─ Átomos:               4
├─ Moléculas:            4
├─ Organismos:           6
├─ Templates:            1
└─ Páginas:              1

Linhas de Código:       ~800
Arquivos TypeScript:    21
Arquivos de Config:     5

Tamanho estimado:
├─ Componentes:         ~15KB
├─ Estilos:             ~5KB
└─ Build otimizado:     ~50KB (gzip)
```

## 🔄 Ciclo de Vida dos Componentes

```
1. Montagem (Mount)
   page.tsx → MainLayout → Header/Main/Footer

2. Renderização
   Organismos → Moléculas → Átomos

3. Interação
   User clicks → Event handlers (onClick, onSubmit)

4. Atualização (quando houver estado)
   State change → Re-render affected components

5. Desmontagem (Unmount)
   Navigate away → Cleanup
```

## 🎯 Próximos Passos Sugeridos

1. ✅ Adicionar animações (Framer Motion)
2. ✅ Implementar formulário de contato
3. ✅ Adicionar dark/light mode toggle
4. ✅ Criar mais páginas (About, Contact)
5. ✅ Adicionar testes unitários (Jest/RTL)
6. ✅ Implementar i18n (internacionalização)
7. ✅ Adicionar CMS (Contentful, Sanity)
8. ✅ Otimizar imagens (next/image)

