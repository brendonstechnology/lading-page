# Estrutura Atomic Design

Este projeto segue o padrão **Atomic Design**, uma metodologia criada por Brad Frost que organiza componentes em uma hierarquia de complexidade crescente.

## 📁 Estrutura de Pastas

```
app/components/
├── atoms/           # Componentes básicos e indivisíveis
├── molecules/       # Combinações simples de átomos
├── organisms/       # Componentes complexos com funcionalidades completas
└── templates/       # Layouts e estruturas de páginas
```

## ⚛️ Átomos (Atoms)

Componentes básicos e indivisíveis que não podem ser quebrados em partes menores:

- **Button**: Botões com variantes (primary, secondary)
- **Icon**: Ícones do Material Symbols
- **Link**: Links de navegação com variantes
- **Text**: Componente de texto com diferentes variantes tipográficas (h1, h2, h3, body, caption)

### Exemplo de uso:
```tsx
import { Button, Icon, Text } from '@/app/components/atoms';

<Button variant="primary">Clique aqui</Button>
<Icon name="rocket_launch" size="lg" />
<Text variant="h1">Título Principal</Text>
```

## 🔬 Moléculas (Molecules)

Grupos de átomos funcionando juntos como uma unidade:

- **FeatureCard**: Card de recurso com ícone, título e descrição
- **AboutCard**: Card da seção sobre com layout centralizado
- **NavItem**: Item de navegação do menu
- **SocialIcon**: Ícone de rede social com SVG

### Exemplo de uso:
```tsx
import { FeatureCard, NavItem } from '@/app/components/molecules';

<FeatureCard 
  icon="trending_up"
  title="Performance"
  description="Apps ultrarrápidos"
  variant="feature"
/>

<NavItem href="#sobre">Sobre</NavItem>
```

## 🦠 Organismos (Organisms)

Componentes complexos que formam seções distintas da interface:

- **Header**: Cabeçalho com logo e navegação
- **Hero**: Seção hero com título, subtítulo e CTA
- **About**: Seção sobre com cards de características
- **Features**: Seção de recursos com grid de cards
- **CTA**: Call-to-action com gradiente
- **Footer**: Rodapé com copyright e redes sociais

### Exemplo de uso:
```tsx
import { Hero, About, Features } from '@/app/components/organisms';

<Hero />
<About />
<Features />
```

## 📄 Templates

Estruturas de páginas que combinam organismos:

- **MainLayout**: Layout principal com header, main e footer

### Exemplo de uso:
```tsx
import { MainLayout } from '@/app/components/templates';

<MainLayout>
  <Hero />
  <About />
</MainLayout>
```

## 🎨 Benefícios do Atomic Design

1. **Reutilização**: Componentes podem ser reutilizados em diferentes contextos
2. **Consistência**: Design system unificado em toda a aplicação
3. **Manutenibilidade**: Mudanças em átomos refletem em toda a aplicação
4. **Escalabilidade**: Fácil adicionar novos componentes seguindo a hierarquia
5. **Testabilidade**: Componentes pequenos são mais fáceis de testar
6. **Documentação**: Estrutura clara facilita onboarding de novos desenvolvedores

## 🚀 Como adicionar novos componentes

### 1. Identifique o nível apropriado:
- É um elemento básico? → **Átomo**
- Combina 2-3 átomos? → **Molécula**
- É uma seção completa? → **Organismo**
- É um layout? → **Template**

### 2. Crie o componente na pasta correspondente

### 3. Exporte no arquivo `index.ts` da pasta

### 4. Use o componente onde necessário

## 🎯 Convenções

- Todos os componentes são funções React com TypeScript
- Props são tipadas com interfaces
- Componentes usam `React.FC<Props>`
- Estilos seguem Tailwind CSS
- Variantes são controladas por props

## 📚 Recursos

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

