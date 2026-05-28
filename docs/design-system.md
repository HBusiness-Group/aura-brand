# Aura Brand — Design System

## Princípios

1. **Quiet Luxury** — Sofisticação sem ostentação
2. **Editorial** — Cada página como uma spread de revista
3. **Feminilidade** — Não como clichê, mas como força
4. **Minimalismo cinematográfico** — Espaço, ritmo, pausa

## Tipografia

| Uso          | Fonte               | Weight | Tracking     |
|--------------|---------------------|--------|--------------|
| Hero display | Cormorant Garamond  | 300    | tight/normal |
| Headings     | Cormorant Garamond  | 300–400| normal       |
| Labels       | Jost                | 300    | ultra (0.35em)|
| Body         | Jost                | 300    | normal       |
| Buttons      | Jost                | 300    | ultra        |

## Componentes base

- `label-luxury` — texto de categoria/seção
- `btn-primary` — botão sólido charcoal/cream
- `btn-outline` — botão com borda
- `btn-ghost` — link com seta
- `card-product` — card de produto com hover scale
- `container-aura` — container com padding responsivo
- `section-padding` — espaçamento vertical de seção

## Animações

| Nome        | Uso                                 |
|-------------|-------------------------------------|
| fadeUp      | Entrada de conteúdo de texto        |
| FadeIn      | Componente com IntersectionObserver |
| RevealText  | Texto que sobe do clip              |
| Marquee     | Texto corrente contínuo             |
| Parallax    | Hero image com useScroll            |

## Regras de imagem

- Modelos: sempre `object-top` para preservar rosto
- Produtos: aspect 3/4
- Banners: fullwidth com overlay gradiente
- Fallback: gradiente elegante nos tons aura
