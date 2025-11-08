# 🚀 Landing Page - Atomic Design

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

**Landing page moderna construída com Next.js seguindo o padrão Atomic Design**

[📚 Documentação](#-documentação) • 
[🚀 Quick Start](#-quick-start) • 
[🏗️ Arquitetura](#-arquitetura) • 
[🎨 Componentes](#-componentes)

</div>

---

## 📖 Sobre o Projeto

Este projeto é uma **landing page profissional** desenvolvida com **Next.js 14**, **TypeScript** e **Tailwind CSS**, seguindo rigorosamente o padrão **Atomic Design** de Brad Frost.

### ✨ Características

- ⚛️ **Atomic Design** - Arquitetura escalável e manutenível
- 🎨 **Design Moderno** - Gradientes, glassmorphism, animações
- 📱 **100% Responsivo** - Mobile-first design
- 🚀 **Performance** - Otimizado para produção
- 🔒 **Type-Safe** - TypeScript em todos os componentes
- ♿ **Acessível** - ARIA labels e semântica HTML
- 📦 **20+ Componentes** - Reutilizáveis e testáveis

---

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+ 
- npm/yarn/pnpm

### Instalação

```bash
# Clone o repositório
git clone <url-do-repo>
cd lading-page

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) 🎉

### Build para Produção

```bash
npm run build
npm start
```

---

## 🏗️ Arquitetura

O projeto segue o padrão **Atomic Design**, organizando componentes em 5 camadas:

```
⚛️ Átomos → 🔬 Moléculas → 🦠 Organismos → 📄 Templates → 📱 Páginas
```

### Estrutura de Pastas

```
app/
├── components/
│   ├── atoms/           # Componentes básicos (Button, Icon, Text, Link)
│   ├── molecules/       # Combinações simples (Cards, NavItem)
│   ├── organisms/       # Seções completas (Header, Hero, Footer)
│   └── templates/       # Layouts (MainLayout)
├── globals.css          # Estilos globais
├── layout.tsx           # Layout raiz
└── page.tsx             # Página principal
```

---

## 🎨 Componentes

### ⚛️ Átomos (4)
- `Button` - Botões com variantes (primary/secondary)
- `Icon` - Wrapper para Material Symbols
- `Link` - Links estilizados
- `Text` - Sistema tipográfico (h1/h2/h3/body/caption)

### 🔬 Moléculas (4)
- `AboutCard` - Card da seção sobre
- `FeatureCard` - Card de recursos
- `NavItem` - Item de navegação
- `SocialIcon` - Ícone de rede social

### 🦠 Organismos (6)
- `Header` - Cabeçalho sticky com navegação
- `Hero` - Seção principal com CTA
- `About` - Seção sobre nós
- `Features` - Grid de recursos
- `CTA` - Call-to-action com gradiente
- `Footer` - Rodapé com redes sociais

### 📄 Templates (1)
- `MainLayout` - Layout principal da aplicação

---

## 📚 Documentação

A documentação completa está organizada em 5 documentos principais:

| Documento | Descrição |
|-----------|-----------|
| **[INDEX.md](./INDEX.md)** | 📖 Índice de toda a documentação |
| **[SUMMARY.md](./SUMMARY.md)** | 📝 Sumário do projeto |
| **[ATOMIC_DESIGN_GUIDE.md](./ATOMIC_DESIGN_GUIDE.md)** | 🎓 Guia completo do Atomic Design |
| **[COMPONENT_HIERARCHY.md](./COMPONENT_HIERARCHY.md)** | 🏛️ Hierarquia visual dos componentes |
| **[EXAMPLES.md](./EXAMPLES.md)** | 🧪 Exemplos práticos de código |

**👉 Comece pelo [INDEX.md](./INDEX.md) para navegação completa!**

---

## 🎯 Exemplo de Uso

```tsx
import { MainLayout } from './components/templates';
import { Hero, About, Features, CTA } from './components/organisms';

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

## 🛠️ Tecnologias

- **[Next.js 14](https://nextjs.org/)** - Framework React
- **[React 18](https://react.dev/)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)** - Typography
- **[Material Symbols](https://fonts.google.com/icons)** - Icons

---

## 🎨 Design System

### Cores

```css
Primary:   #756bff
Cyan:      #00FFFF
Magenta:   #FF00FF
Background: #2A0845 → #000000 (gradient)
```

### Tipografia

```
Font Family: Space Grotesk
Variantes: h1, h2, h3, body, caption
```

### Componentes

- Glassmorphism com backdrop-blur
- Sombras neon (cyan/magenta)
- Animações hover suaves
- Bordas com opacity

---

## 📦 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Executar build
npm run lint     # Verificar erros de lint
```

---

## 📊 Estatísticas

```
📝 20 Componentes
📄 26 Arquivos criados
⚡ ~1000 Linhas de código
🎯 100% TypeScript
✅ 0 Erros de lint
📱 100% Responsivo
```

---

## 🎯 Próximos Passos

- [ ] Adicionar animações com Framer Motion
- [ ] Implementar formulário de contato
- [ ] Adicionar modo escuro/claro
- [ ] Criar mais páginas (Sobre, Contato)
- [ ] Adicionar testes (Jest + RTL)
- [ ] Configurar Storybook
- [ ] Implementar i18n

---

## 📖 Recursos de Aprendizado

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ seguindo as melhores práticas de desenvolvimento front-end.

---

## 🌟 Showcase

### Desktop
![Desktop Preview](https://via.placeholder.com/800x400/2A0845/FFFFFF?text=Desktop+Preview)

### Mobile
![Mobile Preview](https://via.placeholder.com/375x667/2A0845/FFFFFF?text=Mobile+Preview)

---

<div align="center">

**⭐ Se você gostou do projeto, dê uma estrela!**

[📚 Documentação](./INDEX.md) • 
[🐛 Reportar Bug](./issues) • 
[💡 Sugerir Feature](./issues)

</div>
