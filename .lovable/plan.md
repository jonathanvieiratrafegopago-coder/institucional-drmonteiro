# Plano de Implementação - Monteiro Ramalho Advogados Associados

Criação de um site institucional moderno e persuasivo para um escritório de advocacia com foco em conversão de leads (WhatsApp) para Direito Previdenciário e Trabalhista.

## Design System

- **Cores**: Fundo azul marinho escuro (`#0B1C2C`), Destaques em dourado (`#C8A96A`), Branco (`#FFFFFF`).
- **Tipografia**: `Playfair Display` (serifada, elegante) para títulos e `Inter` (sans-serif, moderna) para corpo de texto.
- **Visual**: Premium, sofisticado, confiável.

## Etapas de Desenvolvimento

### 1. Configuração Global
- Instalação das fontes via Google Fonts no root.
- Atualização do `src/styles.css` com as variáveis de cor (tokens semânticos) e estilos base.
- Configuração do modo escuro como padrão (site é dark-themed).

### 2. Componentes de UI (Baseados em shadcn/ui)
- **Navbar**: Logo do escritório e links de navegação suaves.
- **Hero Section**: Título forte, subtítulo persuasivo, imagem de fundo com overlay e CTA de WhatsApp.
- **Problemas (Qualification)**: Grid de cards ou accordion listando as situações de ajuda.
- **Prova Social**: Carrossel ou grid de depoimentos reais.
- **Como Funciona**: Seção de passos numerados explicativos.
- **Sobre o Escritório**: Texto institucional com imagem dos sócios.
- **Diferenciais**: Grid de ícones com pontos fortes.
- **Footer**: Informações de contato e aviso legal.
- **Floating CTA**: Botão flutuante de WhatsApp persistente.

### 3. Implementação da Página Principal (`src/routes/index.tsx`)
- Composição de todas as seções seguindo a estrutura solicitada.
- Adição de SEO (meta tags específicas para o escritório).

### 4. Refinamento de Conversão
- Garantir que todos os botões "Falar com um advogado" apontem para um link de WhatsApp (usando um placeholder configurável).
- Otimização mobile-first.

## Detalhes Técnicos
- **Framework**: TanStack Start (React 19).
- **Estilização**: Tailwind CSS v4.
- **Animações**: Framer Motion para entradas suaves e transições premium.
- **Iconografia**: Lucide React.
- **Responsividade**: Mobile-first completo.
