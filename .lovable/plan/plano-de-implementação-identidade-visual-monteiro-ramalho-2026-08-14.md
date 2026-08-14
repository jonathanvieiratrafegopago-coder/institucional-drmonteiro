# Plano de Implementação: Identidade Visual Monteiro Ramalho

Este plano detalha as alterações necessárias para alinhar o site com o estudo visual de marca fornecido no PDF, focando em cores, tipografia e refinamento estético.

## Alterações Visuais

### 1. Paleta de Cores (OKLCH)
Atualizar o `src/styles.css` para refletir as cores exatas do PDF:
- **Background Principal:** #101947 (Navy)
- **Destaque/Ação:** #EFA171 (Peach) -> Substituindo o dourado atual
- **Variações Web:** #04081E para backgrounds profundos e #FF8E2D para hover/atenção.

### 2. Tipografia
- **Títulos:** Implementar a fonte **Argent CF** (ou substituto via Google Fonts como *DM Serif Display* ou *Playfair Display* se Argent CF não estiver disponível, mantendo o estilo sofisticado).
- **Corpo:** Implementar **Source Sans 3** via Google Fonts.

### 3. Conteúdo e Layout
- Ajustar os espaçamentos para um estilo mais "minimalista e clean" como sugerido no PDF.
- Atualizar os elementos gráficos (bordas, sombras, gradientes) para usar as novas tonalidades de Navy e Peach.
- Refinar o tom de voz para ser mais "autêntico e memorável".

## Detalhes Técnicos
- Atualizar variáveis de tema no CSS.
- Substituir importações de fontes no `__root.tsx`.
- Ajustar componentes no `index.tsx` para usar as novas classes utilitárias e tokens semânticos.

## Verificação
- Validar contraste das novas cores.
- Confirmar carregamento das fontes.
- Verificar responsividade com o novo estilo clean.
