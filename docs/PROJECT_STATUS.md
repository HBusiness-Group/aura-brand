# Aura Brand — Status do Projeto

**Última atualização:** 28/05/2026  
**Desenvolvido por:** AbraCadabra — [abracadabra.srv.br](https://abracadabra.srv.br)  
**Site ao vivo:** [hbusiness-group.github.io/aura-brand](https://hbusiness-group.github.io/aura-brand/)  
**Repositório:** [github.com/HBusiness-Group/aura-brand](https://github.com/HBusiness-Group/aura-brand)

---

## Objetivo do Projeto

Criar uma experiência digital premium para a Aura Brand, boutique feminina de moda localizada em Manaus/AM. O site deve transmitir sofisticação editorial, luxo acessível e feminilidade autêntica — sem parecer marketplace, template genérico ou loja popular.

- **Público-alvo:** mulheres sofisticadas, com poder aquisitivo acima da média, que valorizam autenticidade e curadoria
- **Canal de entrada:** pedido via WhatsApp (`+55 92 99603-6580`)
- **Modelo de negócio atual:** atendimento exclusivo e personalizado
- **Evolução prevista:** catálogo digital com checkout próprio

---

## Stack Utilizada

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 |
| Build | Vite 5 |
| Estilização | TailwindCSS 3 |
| Animações | Framer Motion 11 |
| Roteamento | React Router DOM 6 |
| Reveal on scroll | React Intersection Observer |
| Hospedagem | GitHub Pages |
| CI/CD | GitHub Actions |
| Repositório | GitHub / HBusiness-Group |
| Pronto para | Cloudflare Pages (arquivos `_redirects` e `_headers` já configurados) |

---

## Identidade Visual

| Token | Hex | Uso |
|-------|-----|-----|
| Branco principal | `#F8F6F2` | Background geral |
| Dourado | `#C6A16E` | Acentos, labels, CTAs |
| Preto | `#111111` | Textos, fundos escuros |
| Bege apoio | `#E8DFD3` | Cards, seções secundárias |
| Cinza elegante | `#B8B2AA` | Textos secundários, bordas |

**Tipografia:**
- Display / Títulos: `Cormorant Garamond` (elegância editorial)
- Body / UI: `Inter` (leitura limpa e moderna)

**Diretrizes:** sem rosa exagerado, sem neon, sem sombras fortes, sem animações rápidas, sem visual marketplace ou TikTok.

---

## Estrutura de Pastas Criada

```
sites/Aura Brand/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← CI/CD GitHub Actions
├── assets/                     ← Assets originais da cliente
│   ├── logo/
│   │   └── aura_brand.png
│   ├── models/
│   │   ├── hero-main.png       ← Imagem principal do Hero
│   │   ├── models-001.png
│   │   ├── models-002.png
│   │   └── models-003.png
│   └── store/
│       ├── ab_store-001.png
│       └── ab_store-002.png
├── public/                     ← Arquivos estáticos servidos na raiz
│   ├── _headers                ← Headers Cloudflare Pages
│   ├── _redirects              ← SPA routing Cloudflare Pages
│   ├── 404.html                ← SPA routing GitHub Pages
│   ├── logo/
│   └── models/
├── src/
│   ├── assets/
│   │   └── models/
│   │       └── hero-main.png   ← Import bundled pelo Vite
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx      ← Parallax scroll + menu mobile animado
│   │   │   └── Footer.jsx      ← Newsletter + WhatsApp + Instagram + AbraCadabra
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx      ← Parallax cinematográfico
│   │   │   ├── ManifestoSection.jsx ← Fundo escuro, texto staggered
│   │   │   ├── FeaturedSection.jsx  ← Grid editorial com offset
│   │   │   ├── EditorialSection.jsx ← Imagem + texto com frame decorativo
│   │   │   └── MarqueeSection.jsx   ← Ticker infinito
│   │   └── ui/
│   │       ├── FadeIn.jsx           ← Reveal por IntersectionObserver
│   │       ├── PageTransition.jsx   ← Fade entre rotas
│   │       └── RevealText.jsx       ← Clip reveal
│   ├── data/
│   │   ├── navigation.js
│   │   └── products.js         ← 6 produtos de demonstração
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   ├── useMousePosition.js
│   │   └── useMediaQuery.js
│   ├── pages/
│   │   ├── Home.jsx            ← Hero → Marquee → Featured → Manifesto → Editorial
│   │   ├── Collection.jsx      ← Grid com filtro por categoria
│   │   ├── Story.jsx           ← Timeline + manifesto da marca
│   │   └── Contact.jsx         ← Formulário + FAQ accordion
│   ├── styles/
│   │   └── globals.css         ← Tailwind + classes customizadas
│   ├── utils/
│   │   ├── animations.js       ← Variantes Framer Motion reutilizáveis
│   │   └── formatters.js       ← formatCurrency, formatDate, slugify
│   └── App.jsx                 ← Router com basename dinâmico
├── docs/
│   ├── design-system.md
│   └── PROJECT_STATUS.md       ← Este arquivo
├── CLAUDE.md                   ← Instruções para IA no projeto
├── README.md
├── index.html
├── package.json
├── vite.config.js              ← base: '/aura-brand/'
├── tailwind.config.js
└── postcss.config.js
```

---

## Assets Organizados

### Hero Principal
- **Arquivo:** `hero-main.png`
- **Localização original:** `assets/models/hero-main.png` (pasta da cliente)
- **Localização bundled:** `src/assets/models/hero-main.png` (import Vite com fingerprint)
- **Localização estática:** `public/models/hero-main.png` (fallback)
- **Tratamento aplicado:** parallax cinematográfico com overlay gradiente elegante, grain sutil, animações suaves de entrada. Objetivo: preservar o protagonismo das modelos sem sobrecarregar a imagem.

### Logo
- **Arquivo:** `aura_brand.png`
- **Localização:** `assets/logo/` e `public/logo/`
- **Uso:** Navbar com fallback para wordmark tipográfico caso a imagem não carregue

### Outros Modelos
- `models-001.png`, `models-002.png`, `models-003.png` — disponíveis em `assets/models/` para uso futuro em seções e produtos

### Store
- `ab_store-001.png`, `ab_store-002.png` — fotos da loja física, disponíveis para uso futuro

---

## Hero Section

- **Imagem principal:** `hero-main.png` — modelo em primeiro plano
- **Efeito parallax:** `useScroll` + `useSpring` do Framer Motion, deslocamento suave de 18% no scroll
- **Overlay:** gradiente `#111111/80` ascendente + lateral sutil para manter legibilidade sem esconder a modelo
- **Grain:** textura SVG com opacidade `0.025` para profundidade cinematográfica
- **Headline (exata):** *"A elegância começa na presença."*
- **Subheadline (exata):** *"Peças versáteis para mulheres que vestem autenticidade."*
- **CTAs:**
  - "Explorar coleção" → `/collection`
  - "Atendimento exclusivo" → `wa.me/5592996036580`
- **Scroll indicator:** linha animada em dourado no canto inferior direito

---

## GitHub

- **Repositório:** `github.com/HBusiness-Group/aura-brand`
- **Owner:** HBusiness-Group
- **Visibilidade:** Público
- **Branch principal:** `main`
- **Branch de deploy:** `gh-pages` (gerado automaticamente pelo CI)
- **Autenticação:** `gh` CLI instalado via Homebrew, login via dispositivo com scopes `repo` + `workflow`
- **Commit inicial:** 51 arquivos, incluindo todos os assets da cliente

---

## GitHub Pages — Histórico de Problemas e Soluções

### Problema 1: Tela branca — base path incorreto
- **Sintoma:** Site abre em branco em `hbusiness-group.github.io/aura-brand/`
- **Causa:** Vite sem `base` configurado — assets gerados com path `/assets/` em vez de `/aura-brand/assets/`
- **Solução:** Adicionado `base: '/aura-brand/'` em `vite.config.js`

### Problema 2: React Router sem basename
- **Sintoma:** Tela branca persistia mesmo com base path correto
- **Causa:** `BrowserRouter` tentava rotear a partir de `/`, mas o app estava em `/aura-brand/`
- **Solução:** `<Router basename={import.meta.env.BASE_URL}>` — usa `/aura-brand/` em prod e `/` em dev

### Problema 3: GitHub Pages servindo código-fonte (`/src/main.jsx 404`)
- **Sintoma:** Erro no console — GitHub Pages servindo `index.html` de desenvolvimento
- **Causa:** Conflito entre dois sistemas de deploy simultâneos (`actions/deploy-pages` + `pages-build-deployment` legado)
- **Solução:** Migração para `JamesIves/github-pages-deploy-action` publicando diretamente no branch `gh-pages`, e configuração de GitHub Pages para modo `legacy` apontando para esse branch

### Problema 4: CDN desatualizado
- **Sintoma:** Live URL ainda servia conteúdo antigo após deploy correto
- **Causa:** Cache do CDN do GitHub Pages não tinha sido invalidado
- **Solução:** Forçado novo build via `POST /repos/.../pages/builds` pela API do GitHub

### Configuração final funcional
```yaml
# .github/workflows/deploy.yml
- uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: dist
    branch: gh-pages
    clean: true
```
GitHub Pages → Source: branch `gh-pages`, path `/`

---

## Status Atual

- ✅ Site online e funcional em `hbusiness-group.github.io/aura-brand/`
- ✅ Deploy automático a cada push em `main` (~25 segundos)
- ✅ Identidade visual correta (cores, tipografia, tom editorial)
- ✅ Hero cinematográfico com imagem da cliente
- ✅ WhatsApp e Instagram integrados
- ✅ Rodapé com crédito AbraCadabra e link
- ✅ 4 páginas funcionais: Home, Coleção, História, Contato
- ✅ Mobile-first com safe area para iPhone
- ✅ Animações suaves com Framer Motion
- ⏳ Cliente irá avaliar primeira versão e enviar feedback

---

## Próximas Melhorias Previstas

### Visual e UX
- [ ] Refinamento mobile (especialmente iPhone — foco prioritário)
- [ ] Animações premium adicionais (cursor personalizado, hover effects)
- [ ] Galeria editorial com fotos reais dos produtos
- [ ] Lightbox de produto com zoom
- [ ] Modo escuro opcional

### Produto e Catálogo
- [ ] Catálogo inteligente com filtros reais
- [ ] Página de produto individual com galeria
- [ ] Variações de cor e tamanho
- [ ] Integração com sistema de estoque

### Comercial
- [ ] Integração WhatsApp refinada (mensagem pré-formatada por produto)
- [ ] Botão flutuante WhatsApp
- [ ] Formulário de pedido inteligente
- [ ] Futura área administrativa para gestão de produtos

### Marketing e Performance
- [ ] SEO (meta tags, sitemap, robots.txt, schema.org)
- [ ] Pixel Meta (Facebook/Instagram Ads)
- [ ] Google Analytics / Clarity
- [ ] Open Graph com imagens de produto

### Infraestrutura
- [ ] Migração para Cloudflare Pages (arquivos já preparados)
- [ ] Domínio próprio (ex: `aurabrand.com.br`)
- [ ] Compressão de imagens no pipeline de build
- [ ] Lazy loading avançado para hero e galeria

---

## Observações Estratégicas

Este projeto tem valor além da Aura Brand:

1. **Case AbraCadabra** — demonstra capacidade de entregar experiências digitais premium em velocidade e qualidade de boutique
2. **Modelo replicável** — arquitetura, identidade visual e stack podem ser reutilizados para outras boutiques e marcas femininas com custo de setup reduzido
3. **Base para stack comercial** — a estrutura criada (componentes, hooks, design system) pode evoluir para um produto SaaS de sites para moda

---

*Projeto pausado temporariamente aguardando feedback da cliente para próxima rodada de refinamentos.*
