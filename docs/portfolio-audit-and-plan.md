# Portfolio Audit & Plan — joancochachi.dev

**Fecha:** 2026-07-20
**Estado:** Plan aprobado. Checkpoints 0, 1, 2 y 3 completados. Los textos de Hero, About y Contact reflejan el nuevo posicionamiento "WordPress & PHP Developer"; Fulltimeforce aparece como primera experiencia; `dataSkills` está reorganizado en 4 categorías sin porcentajes. `npm run lint` y `npm run build` finalizaron correctamente tras cada fase (solo un warning preexistente en `useScrollSpy.tsx`, ajeno a estas fases). Ningún otro componente, contenido, estilo, metadata o configuración del sitio ha sido modificado.
**Ámbito:** Reposicionar el portafolio Next.js del propietario de "Frontend Developer / Freelancer" a **WordPress & PHP Developer** para búsqueda de empleo remoto (WordPress · PHP · WooCommerce · Web Developer · WordPress Support), sin inventar experiencia, métricas ni tecnologías.

---

## 1. Resumen ejecutivo

El sitio, técnicamente sólido en su base (Next.js 14 App Router, TypeScript strict, Tailwind, `next/image`, `next/font`, dark mode con `next-themes`), presenta un **posicionamiento profesional desactualizado** respecto al objetivo declarado por el propietario:

- El `title` global, la sección hero, "sobre mí" y "contacto" siguen presentando al propietario como **Frontend Developer** y como **freelance**.
- La experiencia laboral **no incluye Fulltimeforce** (WordPress Developer, 2025 – julio 2026), pese a ser la posición más reciente y directamente alineada con el nuevo objetivo.
- Los proyectos destacados actuales son válidos pero mayoritariamente **frontend puro** (Movistar, Entel, Solgas) y no reflejan la especialización WordPress/PHP/WooCommerce que el propietario quiere comunicar.
- Las skills están hardcodeadas a **75 % en todos los ítems**, lo que no aporta información real y puede restar credibilidad.
- **SEO técnico muy pobre**: solo `title` + `description`, sin OpenGraph, sin JSON-LD, sin `sitemap.ts`, sin `robots.ts`, sin metadata dinámica por proyecto.
- **Accesibilidad parcial**: buen uso de `<button>` y `rel="noopener noreferrer"`, pero sin focus trap ni tecla `Escape` en modal/sidebar, sin `aria-label` en botones icon-only, sin skip-link y sin `aria-current` en la navegación scroll-spy.
- **Rendimiento excelente en base** (100 % `next/image`, WebP/SVG, `next/font`), aunque la imagen del hero (probable LCP) **no marca `priority`**.
- **Falso positivo reportado en el brief**: el footer usa `new Date().getFullYear()`, por lo que el año NO está hardcodeado a 2025.
- **CV**: el enlace del hero apunta a `/docs/cvcochachi2025.pdf?v=4`. El propietario ha decidido migrar a un nombre estable `/joan-cochachi-cv.pdf` cuando el nuevo PDF esté listo.

El plan se ejecuta en **checkpoints pequeños e independientes**. Cada uno se aprueba antes del siguiente.

---

## 2. Arquitectura actual

### 2.1 Stack y versiones

Fuente: [package.json](../package.json).

- **Next.js** 14.1.0 (App Router)
- **React** ^18 · **React DOM** ^18
- **TypeScript** ^5 (strict)
- **Tailwind CSS** 3.3.0 · **PostCSS** ^8 · **autoprefixer** ^10.0.1
- **SASS** ^1.71.0
- **next-themes** ^0.2.1 (dark mode)
- **react-icons** ^5.0.1 (Fa, Md, Io, Rx — tree-shakeable)
- **clsx** ^2.1.0 · **tailwind-merge** ^2.2.1
- **ESLint** ^8 + `eslint-config-next` 14.1.0
- **Scripts**: `dev`, `build`, `start`, `lint`

### 2.2 Configuración

- [next.config.mjs](../next.config.mjs): solo habilita SVG en `next/image` con CSP restrictiva. Sin i18n, sin redirects, sin headers, sin `remotePatterns` (todas las imágenes son locales).
- [tsconfig.json](../tsconfig.json): `strict: true`, `moduleResolution: "bundler"`, path alias `@/*` → `./src/*`.
- [tailwind.config.ts](../tailwind.config.ts): dark mode `class`, `content` escanea `src/pages`, `src/components`, `src/app`, `src/shared`, `src/store`. Paleta custom `jc-*` (grays, blues, darks). `fontFamily` con variables `--font-roboto`, `--font-raleway`, `--font-open-sans`. Sin plugins. Breakpoints default.
- [postcss.config.js](../postcss.config.js): `tailwindcss` + `autoprefixer`.
- [src/app/globals.scss](../src/app/globals.scss): base con `font-roboto`, capa `.btn`, utilidades `filter-*`. **Observación**: `--font-roboto` está referenciada en Tailwind y aplicada en `body`, pero no se importa vía `next/font` en el layout — parece cargar de Chrome default o de otra fuente implícita. Verificar en la próxima fase.

### 2.3 Estructura App Router

- Layout raíz: [src/app/layout.tsx](../src/app/layout.tsx).
  - `<html lang="es" suppressHydrationWarning>`.
  - Fuentes vía `next/font/google`: **Raleway** (400/600/700) → `--font-raleway`; **Open_Sans** (400/600) → `--font-open-sans`.
  - Providers: `UIProvider` (context UI) → `ChangeThemeProvider` (next-themes, `attribute="class"`, `defaultTheme="dark"`, `enableSystem`).
- Home: [src/app/(pages)/page.tsx](../src/app/(pages)/page.tsx) monta en orden `HomeHero → HomeAbout → HomeExperience → HomeProjects → HomeContact` dentro de `TemplateMain`.
- Ruta dinámica proyecto: [src/app/(pages)/portafolio/[slug]/page.tsx](../src/app/(pages)/portafolio/[slug]/page.tsx). Solo renderiza `Image` con `src={/images/portfolio/projects-page/${params.slug}.webp}`. **Sin `generateStaticParams`, sin `generateMetadata`, sin validación de slug.**

### 2.4 Store y hooks

- [src/store/context/ThemeProvider.tsx](../src/store/context/ThemeProvider.tsx): wrapper de `next-themes`.
- [src/store/context/ui/UIContext.tsx](../src/store/context/ui/UIContext.tsx): estado `{ sideMenuOpen, modalCarrouselOpen, projectIndexActive }` con acciones `openSideMenu`, `closeSideMenu`, `openModalCarrousel`, `closeModalCarrousel`, `changeProjectIndexActive`. Bloquea `overflow-hidden` en body al abrir sidebar.
- [src/store/redux/store.ts](../src/store/redux/store.ts): configurado pero **comentado** (`export const store = {}`). No se usa.
- [src/store/context/GlobalProvider.tsx](../src/store/context/GlobalProvider.tsx): archivo vacío / sin uso.
- [src/shared/helpers/cn.ts](../src/shared/helpers/cn.ts): `twMerge(clsx(args))`.
- [src/shared/hooks/useScrollSpy.tsx](../src/shared/hooks/useScrollSpy.tsx): `activeLink`, `isScrolled` (scrollY > 300), `scrollToSection(id)`. Usado por `SideBar`.

### 2.5 Componentes principales

Layout / shared:

- [src/shared/components/template/TemplateMain.tsx](../src/shared/components/template/TemplateMain.tsx) (`"use client"`): renderiza `Header` + `SideBar` + `{children}` + `Footer` y monta `ModalLayer` + `ProjectCarrousel` condicionalmente.
- [src/shared/components/ui/Header/Header.tsx](../src/shared/components/ui/Header/Header.tsx): navbar fija con `ButtonToggleTheme` + `ButtonToggleSideBar`.
- [src/shared/components/ui/Footer/Footer.tsx](../src/shared/components/ui/Footer/Footer.tsx): copyright con `new Date().getFullYear()` (año dinámico).
- [src/shared/components/ui/SideBar/SideBar.tsx](../src/shared/components/ui/SideBar/SideBar.tsx): 5 ítems (`Inicio`, `Sobre mí`, `Experiencia`, `Portafolio`, `Contacto`) con scroll-spy.
- [src/shared/components/ui/Modal/ModalLayer.tsx](../src/shared/components/ui/Modal/ModalLayer.tsx): overlay simple.
- [src/shared/components/ui/Background/Background.tsx](../src/shared/components/ui/Background/Background.tsx): `next/image` (SVG con fondo).
- [src/shared/components/ui/Buttons/ButtonPrimary/ButtonPrimary.tsx](../src/shared/components/ui/Buttons/ButtonPrimary/ButtonPrimary.tsx): link con efecto skew fill; añade `rel="noopener noreferrer"` cuando aplica.
- [src/shared/components/ui/Buttons/ButtonToggleTheme/ButtonToggleTheme.tsx](../src/shared/components/ui/Buttons/ButtonToggleTheme/ButtonToggleTheme.tsx): usa `useTheme()` de next-themes. Atributo `title="Switch to dark theme"` estático.
- [src/shared/components/ui/Buttons/ButtonToggleSideBar/ButtonToggleSideBar.tsx](../src/shared/components/ui/Buttons/ButtonToggleSideBar/ButtonToggleSideBar.tsx): sin `aria-label` ni `title`.

Home sections:

- [src/app/(pages)/home/_components/sections/HomeHero.tsx](../src/app/(pages)/home/_components/sections/HomeHero.tsx)
- [src/app/(pages)/home/_components/sections/HomeAbout.tsx](../src/app/(pages)/home/_components/sections/HomeAbout.tsx)
- [src/app/(pages)/home/_components/sections/HomeExperience.tsx](../src/app/(pages)/home/_components/sections/HomeExperience.tsx)
- [src/app/(pages)/home/_components/sections/HomeProjects.tsx](../src/app/(pages)/home/_components/sections/HomeProjects.tsx)
- [src/app/(pages)/home/_components/sections/HomeContact.tsx](../src/app/(pages)/home/_components/sections/HomeContact.tsx)

Home UI:

- [src/app/(pages)/home/_components/ui/TimelineResume/TimelineResumeItem.tsx](../src/app/(pages)/home/_components/ui/TimelineResume/TimelineResumeItem.tsx): renderiza `experienceList[]` con `dangerouslySetInnerHTML` (permite `<span class="font-bold">` en los bullets).
- [src/app/(pages)/home/_components/ui/Project/ProjectItem.tsx](../src/app/(pages)/home/_components/ui/Project/ProjectItem.tsx) (`"use client"`): `alt="Blog"` fijo en todas las tarjetas.
- [src/app/(pages)/home/_components/ui/Project/ProjectList.tsx](../src/app/(pages)/home/_components/ui/Project/ProjectList.tsx): grid `sm:grid-cols-12`.
- [src/app/(pages)/home/_components/ui/Project/ProjectCarrousel.tsx](../src/app/(pages)/home/_components/ui/Project/ProjectCarrousel.tsx): modal con `description` via `dangerouslySetInnerHTML`, prev/next y cerrar.
- [src/app/(pages)/home/_components/ui/Skills/Skills.tsx](../src/app/(pages)/home/_components/ui/Skills/Skills.tsx): lista con icon + título (sin renderizar el porcentaje visualmente, aunque está en los datos).
- [src/app/(pages)/home/_components/ui/RrssList/RrssList.tsx](../src/app/(pages)/home/_components/ui/RrssList/RrssList.tsx): 3 enlaces con `target="_blank"` y `rel="noopener noreferrer"`.

### 2.6 Public assets

Directorio [public/](../public/).

- [public/docs/](../public/docs/) — PDFs de CV:
  - `cvcochachi.pdf`
  - `cvcochachi2024.pdf`
  - `cvcochachi2025.pdf` ← enlace activo desde el hero (`?v=4`)
  - `_cvcochachi2024.pdf`, `_cvcochachi2025.pdf`, `_cvcochachi2025-v2.pdf`
- [public/images/portfolio/](../public/images/portfolio/) — raíz:
  - `home-background.svg` + `home-background--compress.webp`
  - `profile-laptop.svg` + `profile-laptop--compress.webp`
- [public/images/portfolio/projects/](../public/images/portfolio/projects/) — 26 archivos WebP (11 proyectos × 2 versiones full/min + 4 legacy: `cineplanet`, `miperfil`).
- [public/images/portfolio/projects-page/](../public/images/portfolio/projects-page/) — 9 archivos WebP para páginas de detalle: `dreduardoflorescirugia`, `entel`, `infopesa`, `movistar`, `solgas`, `spaciuz`, `the-unconference-23`, `tiosaji`, `vinas-de-oro`.
- **Ausencias**: sin `favicon.ico`, sin `apple-touch-icon.png`, sin `robots.txt`, sin `sitemap.xml`, sin imagen OpenGraph por defecto.

---

## 3. Inventario de contenido

### 3.1 Metadata global — [src/app/layout.tsx](../src/app/layout.tsx)

- `title: "JC | Front End Developer | Freelancer"`
- `description: "Hola ! Soy Joan, disfruto desarrollar sitios web implementando tecnologías eficientes y modernas. Una de mis mayores motivaciones es aprender."`
- `<html lang="es">`

### 3.2 Datos centralizados — [src/app/(pages)/home/_data/portfolio.data.ts](../src/app/(pages)/home/_data/portfolio.data.ts)

**Redes sociales (`dataRrss`)**

- Email: `mailto:joan0492@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/joancochachi04/`
- GitHub: `https://github.com/joanC0492`
- WhatsApp: comentado (desactivado)

**Skills (`dataSkills`)** — todos con `percentage: 75`

- Frontend: HTML & CSS, JavaScript (ES6+), ReactJS, Next.js, Tailwind CSS, SASS
- Backend, CMS y DB: Laravel, WordPress / CMS, Shopify (Liquid), MySQL, MongoDB
- Herramientas y entorno: Git & GitHub, Node.js, Vite

**Experiencia (`dataResumes`)** — orden actual, textual:

1. **FREELANCE** — "Frontend Developer" (05/2022 – Actualmente). Stack: WordPress, Elementor, WooCommerce, Shopify (Liquid), HubSpot CMS, Laravel, React, Next.js, MySQL, Git.
2. **AMAZON ARGUZ S.A.C.** — "Desarrollador WordPress" (Julio 2024 – Marzo 2025). Stack: WordPress, WooCommerce, PHP, MySQL, LearnPress, GamiPress, Elementor, DIVI.
3. **HAVAS+ SAC** — "CRO UX Analyst & Fullstack Developer" (08/2021 – 04/2022). Stack: JavaScript, CSS3, HTML5, VueJs, Gulp, Git, Google Optimize, GTM, Hotjar.
4. **SRBURNS PERÚ** — "Frontend Developer" (01/2021 – 07/2021). Stack: JavaScript, HTML5, CSS3, PHP, WordPress, MySQL, Pug, Gulp, Webpack, Git, jQuery.
5. **IDEAS LATAM SAC** — "Web Developer" (09/2020 – 01/2021). Stack: JavaScript, CSS3, Bootstrap, HTML5, jQuery, PHP y WordPress.
6. **MEDIA IMPACT** — "Frontend Developer" (2018 – 2020). Stack: JavaScript, PHP, Laravel, MySQL, jQuery, Vue.js, HTML5, CSS3, Git.

**Fulltimeforce no está presente**.

**Proyectos (`dataProjects`)** — 11 items, orden actual:

| # | Empresa | Stack declarado | Enlace |
|---|---------|-----------------|--------|
| 0 | Tío Saji | SHOPIFY \| LIQUID \| HTML \| CSS \| JS | https://tiosaji.com/ |
| 1 | Solgas | NEXT.JS \| LARAVEL \| TAILWIND \| SQL SERVER | https://www.solgas.com.pe/verifica-tu-balon |
| 2 | Dr. Manuel Eduardo Flores Vilchez | WORDPRESS \| HTML \| CSS \| JS | https://dreduardoflorescirugia.pe/ |
| 3 | Spaciuz | WORDPRESS \| HTML \| CSS \| JS | https://spaciuz.com/ |
| 4 | Colectivo23 | HubSpot CMS \| HTML \| CSS \| JS | — (The Unconference 2025) |
| 5 | Movistar | HTML \| CSS \| JS \| GA \| OPTIMIZE \| GTM | https://www.movistar.com.pe/ |
| 6 | Entel Empresas | WORDPRESS \| HTML \| PUG \| CSS \| SCSS \| JS | https://www.entel.pe/empresas/ |
| 7 | Innovación Digital | WORDPRESS \| HTML \| CSS \| JS | https://innovaciondigital.biz/ |
| 8 | Exsa | LARAVEL \| HTML \| CSS \| JS | https://exsa.net/es |
| 9 | Infopesa | LARAVEL \| HTML \| CSS \| JS \| VUE | https://infopesa.com/ |
| 10 | Pisco Viñas de Oro | NextJs \| TS \| Tailwindcss \| WordPress \| GraphQL | https://www.piscovinasdeoro.com.pe/es |

### 3.3 Textos hardcodeados por sección

**Hero** ([src/app/(pages)/home/_components/sections/HomeHero.tsx](../src/app/(pages)/home/_components/sections/HomeHero.tsx))

- Título: "Joan Cochachi"
- Subtítulo: "Frontend Developer"
- Descripción: "Especializado en WordPress, React y Next.js. Creo sitios rápidos, accesibles y escalables."
- CTA: "DESCARGA MI CV" → `/docs/cvcochachi2025.pdf?v=4`

**About** ([src/app/(pages)/home/_components/sections/HomeAbout.tsx](../src/app/(pages)/home/_components/sections/HomeAbout.tsx))

- Título: "SOBRE MÍ"
- Texto: "¡Hola! Soy Joan, desarrollador frontend con enfoque en soluciones modernas, eficientes y bien estructuradas. Apasionado por el aprendizaje constante, me especializo en construir interfaces funcionales, escalables y fáciles de mantener."
- Subtítulo: "Habilidades" (renderiza `dataSkills`).

**Experience** ([src/app/(pages)/home/_components/sections/HomeExperience.tsx](../src/app/(pages)/home/_components/sections/HomeExperience.tsx))

- Título: "EXPERIENCIA" (renderiza `dataResumes` con `TimelineResume`).

**Projects** ([src/app/(pages)/home/_components/sections/HomeProjects.tsx](../src/app/(pages)/home/_components/sections/HomeProjects.tsx))

- Título: "PORTAFOLIO"
- Subtítulo: "ALGUNAS COSAS QUE HE CONSTRUIDO"

**Contact** ([src/app/(pages)/home/_components/sections/HomeContact.tsx](../src/app/(pages)/home/_components/sections/HomeContact.tsx))

- Título: "CONTACTO"
- Encabezado: "Joan Cochachi"
- Subtítulo: "Frontend Developer"
- Texto: "Estoy disponible para el trabajo independiente. Conéctese conmigo a través de los siguientes medios."

**SideBar** ([src/shared/components/ui/SideBar/SideBar.tsx](../src/shared/components/ui/SideBar/SideBar.tsx))

- Items: Inicio, Sobre mí, Experiencia, Portafolio, Contacto.

**Footer** ([src/shared/components/ui/Footer/Footer.tsx](../src/shared/components/ui/Footer/Footer.tsx))

- "© {año dinámico}. Developed by Joan Cochachi"

---

## 4. Problemas encontrados

### 4.1 Posicionamiento (bloqueante para el objetivo)

1. `title` global "Front End Developer | Freelancer" contradice el objetivo WordPress/PHP.
2. Hero + Contact declaran "Frontend Developer" y "trabajo independiente" (freelance) en lugar de posicionamiento WP/PHP + trabajo remoto.
3. About habla de "desarrollador frontend" y "construir interfaces" (foco cliente, no WP/PHP).
4. **Fulltimeforce ausente** en la timeline de experiencia.
5. **Freelance solapa** con AMAZON ARGUZ (05/2022 – Actualmente vs. Julio 2024 – Marzo 2025): coherente si son proyectos paralelos, pero puede confundir al reclutador; conviene aclarar en la descripción o alinear fechas reales.

### 4.2 Contenido y datos

6. Skills con **75 % hardcodeado** en todos los ítems — métrica no verificable, restar credibilidad.
7. `dataProjects` mezcla proyectos altamente frontend (Movistar A/B, Entel Pug) con casos WordPress; para reclutadores WP/PHP el ratio no es favorable.
8. `alt="Blog"` fijo para todos los `ProjectItem`.
9. Descripciones de proyecto vía `dangerouslySetInnerHTML` — funcional, pero acopla contenido y HTML; para casos de estudio conviene una estructura tipada.
10. **Falso positivo del brief**: el footer NO está fijado a 2025; usa `new Date().getFullYear()`.

### 4.3 SEO

11. Metadata mínima: solo `title` + `description`. Faltan `metadataBase`, `openGraph`, `twitter`, `alternates.canonical`, `robots`, `keywords`, `authors`, `creator`, `icons`, `viewport`.
12. **Errata** en description: `"Hola ! Soy Joan"` (espacio antes del signo).
13. Sin JSON-LD (`Person`, `WebSite`, `BreadcrumbList`).
14. Sin `src/app/sitemap.ts` ni `src/app/robots.ts`.
15. Ruta dinámica `/portafolio/[slug]` sin `generateStaticParams` ni `generateMetadata`. Sin validación de slug (permite renderizar cualquier string → 404 de imagen).

### 4.4 Accesibilidad

16. `ButtonToggleSideBar` icon-only sin `aria-label` ni `title`.
17. `ButtonToggleTheme` con `title="Switch to dark theme"` estático (no refleja el estado actual) y sin `aria-label` dinámico.
18. `ModalLayer` (ProjectCarrousel) y `SideBar` **sin focus trap** y **sin cierre con `Escape`**. Verificado: 0 listeners `keydown/keyup/keyPress` en el codebase.
19. `SideBar` no marca el ítem activo con `aria-current="page"` pese a tener `activeLink` del scroll-spy.
20. `alt="Blog"` genérico en `ProjectItem`.
21. Sin skip-link ("Saltar al contenido") ni `id` estable en el landmark `<main>`.

### 4.5 Rendimiento

22. **`Background` del hero sin `priority`** (probable LCP element). Sin `fetchPriority="high"` ni `sizes` explícito.
23. Home tiene un Server Component en la raíz, pero `TemplateMain` es cliente y arrastra el árbol — aceptable por ahora, no romper por optimización prematura.
24. Bundle sin librerías pesadas ni imports globales problemáticos.

### 4.6 Otros

25. `src/store/context/GlobalProvider.tsx` vacío y `src/store/redux/store.ts` comentado — código muerto no crítico; posible limpieza futura.
26. `--font-roboto` referenciado en Tailwind y `globals.scss` pero no cargado por `next/font` en el layout — verificar.

---

## 5. Nueva estrategia profesional

**Perfil objetivo (headline):**
"WordPress & PHP Developer con foco en WooCommerce, temas y plugins a medida. Disponible para trabajo remoto."

**Posiciones objetivo:** WordPress Developer, PHP Developer, WooCommerce Developer, Web Developer, WordPress Support Developer.

**Tono e idioma:** español principal, con nombres de tecnologías y cargos en inglés cuando corresponda (WordPress Developer, PHP Developer, WooCommerce, APIs REST, debugging, etc.). Sin switcher bilingüe en esta iteración.

**Diferenciadores a comunicar (basados en experiencia real declarada):**

- Temas WordPress / child themes / plugins personalizados con PHP.
- WooCommerce (personalización de tiendas, integraciones de pago).
- Hooks, shortcodes, AJAX y consultas personalizadas.
- Elementor, ACF, Gravity Forms, Contact Form 7.
- Integraciones con APIs REST, Mailchimp, Stripe, Google Ads, GTM y Analytics.
- Debugging, optimización, migraciones y mantenimiento.
- Git, GitHub, SSH, cPanel; entornos local, staging y producción.
- Conocimientos complementarios: Laravel, React, Angular, Next.js, Shopify Liquid, HubSpot CMS.

**Restricciones (recogidas del brief):**

- No inventar experiencia, resultados, métricas ni tecnologías.
- No exponer información confidencial, código privado, credenciales ni datos internos de clientes.
- No modificar plugins de terceros (regla del propietario para proyectos WordPress).

---

## 6. Nueva estructura propuesta

### 6.1 Orden de secciones (sin cambios estructurales mayores)

1. **Hero** — Nombre + nuevo headline WP/PHP + descripción corta + CTA "Descargar CV" + redes.
2. **Sobre mí** — Reescrito en clave WP/PHP + skills reagrupadas sin porcentajes.
3. **Experiencia** — Timeline con **Fulltimeforce arriba**, resto cronológico inverso.
4. **Portafolio**:
   - **Casos de estudio destacados** (6): H&H Classics, MoveMyBike, My Chef Steph, Veblen, Offitravel, Tokenovate.
   - **Otros proyectos** (11 actuales): plegado o con toggle, mismo grid.
5. **Contacto** — Nombre + nuevo cargo + "Disponible para trabajo remoto" + redes.

### 6.2 Skills reagrupadas (sin porcentajes)

Propuesta de categorías (a validar contra tu experiencia real):

- **WordPress & CMS**: WordPress · WooCommerce · Elementor · ACF · Gravity Forms · Contact Form 7 · Themes / Child themes · Plugins a medida.
- **Lenguajes & Backend**: PHP · JavaScript (ES6+) · HTML · CSS · MySQL · APIs REST · AJAX · Hooks · Shortcodes.
- **Herramientas & DevOps**: Git · GitHub · SSH · cPanel · Entornos local / staging / producción · Debugging · Optimización de rendimiento · Migraciones.
- **Integraciones**: Mailchimp · Stripe · Google Ads · Google Tag Manager · Google Analytics.
- **Complementarias**: Laravel · React · Next.js · Angular · Shopify (Liquid) · HubSpot CMS.

### 6.3 Extensión de `IDataProjects`

Añadir campos opcionales para caso de estudio (sin romper compatibilidad con proyectos legacy):

```ts
export interface IDataProjects {
  id: number;
  company: string;
  stack: string;                 // legacy, mantener
  img: string;
  link: string;
  pageLink?: string;
  description: string;           // legacy, mantener
  // Nuevos (opcionales):
  context?: string;
  problem?: string;
  role?: string;
  solution?: string;
  technologies?: string[];
  result?: string;               // solo si es verificable
  year?: number | string;
  featured?: boolean;            // marca casos de estudio destacados
}
```

Los 11 proyectos actuales se conservan sin `featured` y los 6 nuevos se marcan `featured: true`. La sección "Portafolio" filtra en dos listas.

---

## 7. Auditoría SEO y accesibilidad

### 7.1 SEO — estado actual

| Elemento | Estado | Fuente |
|----------|--------|--------|
| `title` | Presente (a reformular) | [src/app/layout.tsx](../src/app/layout.tsx) |
| `description` | Presente (con errata) | [src/app/layout.tsx](../src/app/layout.tsx) |
| `metadataBase` | Ausente | — |
| `openGraph` | Ausente | — |
| `twitter` | Ausente | — |
| `alternates.canonical` | Ausente | — |
| `robots` | Ausente | — |
| `keywords` / `authors` / `creator` | Ausente | — |
| `icons` / favicon | Ausente | — |
| `viewport` / `themeColor` | Ausente | — |
| JSON-LD `Person` / `WebSite` | Ausente | — |
| `sitemap.ts` | Ausente | — |
| `robots.ts` / `robots.txt` | Ausente | — |
| `generateStaticParams` en `/portafolio/[slug]` | Ausente | [src/app/(pages)/portafolio/[slug]/page.tsx](../src/app/(pages)/portafolio/[slug]/page.tsx) |
| `generateMetadata` en `/portafolio/[slug]` | Ausente | idem |
| `<html lang>` | Correcto (`es`) | [src/app/layout.tsx](../src/app/layout.tsx) |

### 7.2 SEO — plan de mejora (referido a checkpoints 5–8)

- Definir `metadataBase: new URL("https://joancochachi.dev")`.
- `title.default` + `title.template: "%s | Joan Cochachi"`.
- Description reescrita, sin errata, en clave WP/PHP.
- `openGraph`: `type: "website"`, `url`, `siteName: "Joan Cochachi"`, `locale: "es_PE"`, `images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "..." }]`.
- `twitter`: `card: "summary_large_image"`, `title`, `description`, `images`.
- `alternates.canonical: "/"` en home; canonical dinámico por slug en `/portafolio/[slug]`.
- `robots: { index: true, follow: true, googleBot: { index: true, follow: true } }`.
- `keywords`: WordPress Developer, PHP Developer, WooCommerce, freelance remoto, etc. (uso moderado).
- `icons`: favicon, apple-touch, icon-192, icon-512 (requieren assets).
- JSON-LD `Person` con `name`, `url`, `image`, `sameAs` (LinkedIn + GitHub), `jobTitle`, `knowsAbout`, `worksFor` opcional.
- JSON-LD `WebSite` con `url`, `name`, `inLanguage: "es"`.
- `src/app/sitemap.ts`: home + slugs derivados de `dataProjects[].pageLink`.
- `src/app/robots.ts`: allow all + referencia al sitemap absoluto.
- Ruta dinámica: `generateStaticParams` (slugs válidos), `generateMetadata` (title/description/OG por proyecto), y render de caso de estudio real.

### 7.3 Accesibilidad — estado actual

| Área | Estado | Notas |
|------|--------|-------|
| `<html lang="es">` | OK | — |
| Semántica de botones | OK | Todos los `onClick` viven dentro de `<button>` o `<a>`. |
| `rel="noopener noreferrer"` en externos | OK | En `RrssList`, `ButtonPrimary`, `ProjectItem`, `HomeContact`. |
| `alt` en `<Image>` | Parcial | `alt="Blog"` fijo en `ProjectItem`. Resto OK. |
| `aria-label` en icon-only | Faltante | `ButtonToggleSideBar`, `ButtonToggleTheme`. |
| `aria-current` en nav activa | Faltante | `SideBar` conoce `activeLink` pero no lo expone. |
| Focus trap en modal | Ausente | `ProjectCarrousel`. |
| Cierre con `Escape` | Ausente | Modal + sidebar. |
| Skip-link | Ausente | — |
| Landmarks (`<main>` con `id`) | Parcial | `TemplateMain` usa `<main>`, sin `id="main-content"`. |
| Formularios (`<label>` / `<input>`) | N/A | No hay formularios. |
| Dark mode y contraste | Bien implementado | `next-themes` + clases `dark:`. Contraste a validar con Lighthouse. |

### 7.4 Accesibilidad — plan de mejora (referido a checkpoints 9–11)

- `aria-label` dinámicos: "Abrir menú" / "Cerrar menú" en `ButtonToggleSideBar`; "Cambiar a tema claro" / "Cambiar a tema oscuro" en `ButtonToggleTheme`.
- `aria-label` en enlaces de `RrssList` (Email, LinkedIn, GitHub).
- `alt` descriptivo por proyecto en `ProjectItem` (usar `company` o texto específico).
- `aria-current="page"` en el ítem activo del sidebar.
- Hook `useModalA11y({ isOpen, onClose, containerRef })`: `Escape` cierra; foco al primer elemento focusable al abrir; devolver foco al elemento origen al cerrar; loop Tab dentro del contenedor.
- Aplicar hook en `ModalLayer` (ProjectCarrousel) y `SideBar`.
- Skip-link `<a href="#main-content" className="sr-only focus:not-sr-only ...">Saltar al contenido</a>` al inicio del layout + `id="main-content"` en el `<main>` de `TemplateMain`.

---

## 8. Auditoría de rendimiento

| Área | Estado | Notas |
|------|--------|-------|
| Imágenes | Excelente | 100 % `next/image`, 0 tags `<img>`. WebP y SVG. Versiones `min` disponibles pero no siempre usadas. |
| Fuentes | Excelente | `next/font/google` con variables CSS. Sin `<link>` externo ni `@import`. |
| Bundle | Bueno | Sin librerías pesadas (no `framer-motion`, no `lodash`, no MUI). `react-icons` tree-shakeable. |
| Client vs Server | Correcto | Home es Server Component; solo componentes interactivos son `"use client"`. |
| `priority` en LCP | Faltante | `Background` del hero no marca `priority` ni `fetchPriority="high"`. |
| `sizes` en `<Image>` responsive | Revisar | No auditado exhaustivamente; asegurar en tarjetas de proyecto. |
| `next.config.mjs` | Minimalista | Sin `remotePatterns` (no necesarios). SVG habilitado con CSP restrictiva. |

**Prioridad de acción (CP12)**: añadir `priority` (+ `fetchPriority="high"`) al `Background` del hero. Validar LCP < 2.5 s en móvil vía Lighthouse.

---

## 9. Propuesta de casos de estudio

**Objetivo**: transformar los 6 proyectos WP/PHP nuevos en casos de estudio con estructura homogénea, sin inventar métricas ni tecnologías.

### 9.1 Plantilla común

Cada caso de estudio contiene:

- **Contexto**: 1–2 frases sobre el negocio o vertical.
- **Problema**: qué necesidad concreta se debía resolver.
- **Mi participación**: rol exacto, trabajo individual o en equipo, foco de tu contribución.
- **Solución**: qué se implementó (funcionalidades WP/PHP/WooCommerce, integraciones, personalizaciones).
- **Tecnologías**: array tipado (no string libre).
- **Resultado**: solo si es verificable públicamente. Si no hay métrica pública, se omite el campo.
- **Enlace público**: URL final si el proyecto está online.
- **Imágenes**: tarjeta 1200×675 (WebP) + detalle 1920×1080 (WebP).

### 9.2 Casos de estudio a desarrollar

Estado inicial: **todos los datos textuales están pendientes de aportación por el propietario**. Se listan para bloquear el placeholder y evitar contenido inventado.

1. **H&H Classics** — datos pendientes.
2. **MoveMyBike** — datos pendientes.
3. **My Chef Steph** — datos pendientes.
4. **Veblen** — datos pendientes.
5. **Offitravel** — datos pendientes. *(Nota: el propietario ha declarado la regla "en Offitravel los plugins nunca se modifican; cambios en child theme, snippets o capas propias del proyecto". Esto debe reflejarse en la sección "Solución" del caso.)*
6. **Tokenovate** — datos pendientes.

### 9.3 Migración de proyectos existentes

Los 11 proyectos actuales se conservan en `dataProjects` con `featured: false` (o en un array `dataProjectsSecondary`). Se renderizan bajo un subheading "Otros proyectos" dentro de la sección Portafolio, opcionalmente plegados con un toggle "Ver más".

No se eliminan proyectos en esta iteración.

---

## 10. Plan dividido por checkpoints

Cada checkpoint (CP) se aprueba antes de pasar al siguiente. Los que dependen de datos externos (Fulltimeforce, casos de estudio, CV nuevo, imagen OG) quedan bloqueados hasta que el propietario aporte la información.

### CP0 — Documento de auditoría y plan (este archivo)

- **Objetivo**: Publicar el plan aprobado.
- **Archivos**: `docs/portfolio-audit-and-plan.md` (nuevo).
- **Cambios**: creación del documento.
- **Riesgos**: ninguno (no altera código ni configuración).
- **Pruebas**: revisión editorial por el propietario.
- **Criterio de aceptación**: propietario confirma el contenido y aprueba avanzar a CP1.

### CP1 — Reposicionamiento de textos (Hero, About, Contact)

- **Objetivo**: cambiar el posicionamiento a "WordPress & PHP Developer" y "trabajo remoto".
- **Archivos**: [src/app/(pages)/home/_components/sections/HomeHero.tsx](../src/app/(pages)/home/_components/sections/HomeHero.tsx), [src/app/(pages)/home/_components/sections/HomeAbout.tsx](../src/app/(pages)/home/_components/sections/HomeAbout.tsx), [src/app/(pages)/home/_components/sections/HomeContact.tsx](../src/app/(pages)/home/_components/sections/HomeContact.tsx).
- **Cambios**: sustituir "Frontend Developer" y "trabajo independiente"; reescribir descripción del hero y párrafo de about; ajustar CTA si aplica (el enlace del CV se conserva hasta CP14).
- **Riesgos**: bajos. Solo strings visibles.
- **Pruebas**: revisión visual light/dark; sin cambios en layout ni estilos; `npm run lint` y `npm run build` sin errores.
- **Criterio de aceptación**: los tres bloques reflejan el nuevo posicionamiento; no aparece "Frontend Developer" como cargo actual en la home.

### CP2 — Datos de experiencia (`dataResumes`) con Fulltimeforce ✅ Completado

- **Objetivo**: añadir Fulltimeforce y ajustar textos sin inventar datos.
- **Archivos**: [src/app/(pages)/home/_data/portfolio.data.ts](../src/app/(pages)/home/_data/portfolio.data.ts).
- **Cambios aplicados**: insertado Fulltimeforce como primer item (WordPress Developer, período confirmado **Septiembre 2025 – Julio 2026**) con bullets y stack aportados por el propietario. IDs del resto de items re-numerados manteniendo el orden y los textos originales intactos.
- **Riesgos**: mitigados. Período confirmado por el propietario.
- **Pruebas**: `npm run lint` y `npm run build` pasaron correctamente (solo warning preexistente en `useScrollSpy.tsx`, ajeno a este CP).
- **Criterio de aceptación**: cumplido. Fulltimeforce visible en primera posición de la timeline con datos aprobados por el propietario.

### CP3 — Skills sin porcentajes (`dataSkills` + `Skills.tsx`) ✅ Completado

- **Objetivo**: eliminar los porcentajes del 75 % y reagrupar por categorías reales.
- **Archivos modificados**: [src/app/(pages)/home/_data/portfolio.data.ts](../src/app/(pages)/home/_data/portfolio.data.ts), [src/app/(pages)/home/_domain/portfolio.interface.ts](../src/app/(pages)/home/_domain/portfolio.interface.ts).
- **Cambios aplicados**: `dataSkills` reorganizado en 4 categorías (**WordPress & eCommerce**, **Desarrollo web**, **Herramientas e integraciones**, **Tecnologías complementarias**) con los iconos correspondientes (`MdLaptopMac`, `MdDeveloperMode`, `MdSettings`, `MdDns`). Propiedad `percentage` eliminada por completo de los datos y de la interfaz `ISkills`.
- **Skills.tsx**: no requirió modificaciones — ya consumía únicamente `skill.id` y `skill.title`.
- **Pruebas**: `npm run lint` y `npm run build` pasaron correctamente (solo warning preexistente en `useScrollSpy.tsx`, ajeno a este CP). Tipos TypeScript válidos.
- **Criterio de aceptación**: cumplido. No hay porcentajes ni niveles visibles; skills agrupadas en 4 categorías orientadas al posicionamiento WordPress & PHP.

### CP4 — Proyectos: extensión de interfaz + 6 casos de estudio + "Otros proyectos"

- **Objetivo**: introducir los 6 casos WP/PHP como destacados y degradar los 11 actuales.
- **Archivos**: [src/app/(pages)/home/_domain/portfolio.interface.ts](../src/app/(pages)/home/_domain/portfolio.interface.ts), [src/app/(pages)/home/_data/portfolio.data.ts](../src/app/(pages)/home/_data/portfolio.data.ts), [src/app/(pages)/home/_components/sections/HomeProjects.tsx](../src/app/(pages)/home/_components/sections/HomeProjects.tsx), [src/app/(pages)/home/_components/ui/Project/ProjectList.tsx](../src/app/(pages)/home/_components/ui/Project/ProjectList.tsx) y/o [ProjectItem.tsx](../src/app/(pages)/home/_components/ui/Project/ProjectItem.tsx) si hace falta ajustar el card.
- **Cambios**: ampliar `IDataProjects` con campos opcionales de caso de estudio (`context`, `problem`, `role`, `solution`, `technologies`, `result`, `year`, `featured`); añadir 6 nuevos objetos con `featured: true`; añadir imágenes bajo `public/images/portfolio/projects/` y `projects-page/`; render en dos grupos ("Casos destacados" + "Otros proyectos" con toggle).
- **Riesgos**: publicar con datos incompletos → mitigación: los 6 casos no se despliegan a producción hasta que el propietario apruebe cada uno.
- **Pruebas**: build; revisión visual; verificar que las tarjetas legacy siguen funcionando; validar enlaces.
- **Criterio de aceptación**: 6 casos destacados visibles con contenido real aprobado; 11 proyectos previos accesibles bajo "Otros proyectos"; sin datos placeholder en producción.

#### CP4.1 — Extensión de interfaz de proyectos ✅ Completado

- **Objetivo**: extender `IDataProjects` para soportar casos de estudio sin romper compatibilidad legacy.
- **Archivo modificado**: [src/app/(pages)/home/_domain/portfolio.interface.ts](../src/app/(pages)/home/_domain/portfolio.interface.ts).
- **Cambios aplicados**: `IDataProjects` fue extendida con propiedades opcionales para casos de estudio (`type`, `featured`, `title`, `summary`, `context`, `problem`, `role`, `solution`, `result`, `alt`, `coverImage`, `heroImage`, `gallery`, `publicUrl`, `technologies`) manteniendo intactas las propiedades existentes.
- **Alcance confirmado**:
  - no se modificó `dataProjects`.
  - no se modificaron componentes, rutas ni imágenes.
  - `npm run lint` y `npm run build` finalizaron correctamente.
  - los proyectos existentes continúan compilando.
- **Criterio de aceptación**: cumplido.

#### CP4.2 — Carga de 6 casos de estudio y separación visual

- **Estado**: pendiente.
- **Objetivo**: incorporar los 6 casos WP/PHP aprobados en datos y UI, manteniendo la compatibilidad con proyectos legacy.

### CP5 — Metadata global completa

- **Objetivo**: metadata SEO completa para la home.
- **Archivos**: [src/app/layout.tsx](../src/app/layout.tsx).
- **Cambios**: añadir `metadataBase`, `title.default` + `title.template`, `description` corregida, `openGraph`, `twitter`, `alternates.canonical`, `robots`, `keywords`, `authors`, `creator`, `icons`, `viewport`.
- **Riesgos**: si faltan assets (icons / OG image), fallback a defaults sin romper el build; validar con `next build` que no aparezcan warnings.
- **Pruebas**: inspeccionar HTML SSR; validar OpenGraph con https://cards-dev.twitter.com/validator o preview manual; Lighthouse SEO ≥ 95.
- **Criterio de aceptación**: metadata completa presente en el HTML servido; sin erratas.

### CP6 — JSON-LD (Person + WebSite)

- **Objetivo**: datos estructurados para buscadores.
- **Archivos**: [src/app/layout.tsx](../src/app/layout.tsx) (inyección de `<script type="application/ld+json">`).
- **Cambios**: `Person` (name, url, image, sameAs, jobTitle, knowsAbout) y `WebSite` (url, name, inLanguage).
- **Riesgos**: schema inválido → mitigación: validar con https://validator.schema.org/.
- **Pruebas**: validador oficial; snapshot del HTML SSR.
- **Criterio de aceptación**: ambos schemas pasan validación sin errores.

### CP7 — `sitemap.ts` y `robots.ts`

- **Objetivo**: indexación adecuada.
- **Archivos**: `src/app/sitemap.ts` (nuevo), `src/app/robots.ts` (nuevo).
- **Cambios**: emitir `/` + slugs derivados de `dataProjects[].pageLink`; robots allow all + referencia al sitemap absoluto.
- **Riesgos**: URLs relativas mal formadas → usar `metadataBase`.
- **Pruebas**: abrir `/sitemap.xml` y `/robots.txt` en local y producción.
- **Criterio de aceptación**: sitemap accesible con todas las URLs válidas; robots correcto.

### CP8 — Ruta dinámica `/portafolio/[slug]` como caso de estudio

- **Objetivo**: convertir la ruta dinámica en detalle real de caso de estudio.
- **Archivos**: [src/app/(pages)/portafolio/[slug]/page.tsx](../src/app/(pages)/portafolio/[slug]/page.tsx).
- **Cambios**: implementar `generateStaticParams` (slugs de proyectos con `pageLink`), `generateMetadata` (title/description/OG por proyecto), y layout real (contexto/problema/participación/solución/tecnologías/resultado/enlace/imagen). Manejar `notFound()` si el slug no existe.
- **Riesgos**: depende de CP4. Sin datos reales, el detalle se queda en "pendiente".
- **Pruebas**: navegar a cada slug destacado; inspeccionar metadata dinámica; Lighthouse en al menos un detalle.
- **Criterio de aceptación**: cada slug destacado renderiza contenido tipado, con metadata única.

### CP9 — Accesibilidad: ARIA, `aria-current`, `alt`

- **Objetivo**: labels correctos en icon-only, `alt` descriptivo, nav activa expuesta.
- **Archivos**: [src/shared/components/ui/Buttons/ButtonToggleSideBar/ButtonToggleSideBar.tsx](../src/shared/components/ui/Buttons/ButtonToggleSideBar/ButtonToggleSideBar.tsx), [src/shared/components/ui/Buttons/ButtonToggleTheme/ButtonToggleTheme.tsx](../src/shared/components/ui/Buttons/ButtonToggleTheme/ButtonToggleTheme.tsx), [src/app/(pages)/home/_components/ui/RrssList/RrssList.tsx](../src/app/(pages)/home/_components/ui/RrssList/RrssList.tsx), [src/app/(pages)/home/_components/ui/Project/ProjectItem.tsx](../src/app/(pages)/home/_components/ui/Project/ProjectItem.tsx), [src/shared/components/ui/SideBar/SideBar.tsx](../src/shared/components/ui/SideBar/SideBar.tsx).
- **Cambios**: `aria-label` dinámicos, `alt` con `company`, `aria-current="page"` según `useScrollSpy`.
- **Riesgos**: bajos.
- **Pruebas**: axe DevTools 0 issues críticos; NVDA/VoiceOver anuncia estado correcto.
- **Criterio de aceptación**: Lighthouse A11y ≥ 95; 0 issues críticos en axe.

### CP10 — Focus trap + `Escape` en modal y sidebar

- **Objetivo**: navegación por teclado usable.
- **Archivos**: `src/shared/hooks/useModalA11y.tsx` (nuevo), [src/shared/components/ui/Modal/ModalLayer.tsx](../src/shared/components/ui/Modal/ModalLayer.tsx), [src/app/(pages)/home/_components/ui/Project/ProjectCarrousel.tsx](../src/app/(pages)/home/_components/ui/Project/ProjectCarrousel.tsx), [src/shared/components/ui/SideBar/SideBar.tsx](../src/shared/components/ui/SideBar/SideBar.tsx).
- **Cambios**: hook reutilizable para Escape + trap + restauración de foco; aplicar en modal de proyectos y sidebar móvil.
- **Riesgos**: focus trap agresivo puede molestar → limitar a cuando `isOpen`.
- **Pruebas**: Tab/Shift+Tab dentro del contenedor; Escape cierra y devuelve foco al trigger.
- **Criterio de aceptación**: modal y sidebar cumplen navegación por teclado; sin regresiones visuales.

### CP11 — Skip-link y landmark `<main>`

- **Objetivo**: accesibilidad de navegación.
- **Archivos**: [src/shared/components/template/TemplateMain.tsx](../src/shared/components/template/TemplateMain.tsx), [src/app/layout.tsx](../src/app/layout.tsx) (o en el propio template).
- **Cambios**: skip-link inicial con clases `sr-only focus:not-sr-only`; `id="main-content"` en `<main>`.
- **Riesgos**: nulos.
- **Pruebas**: Tab desde el inicio muestra el skip-link; funciona al pulsar Enter.
- **Criterio de aceptación**: Lighthouse A11y sube o se mantiene ≥ 95; foco salta correctamente al contenido.

### CP12 — LCP: `priority` en hero

- **Objetivo**: mejorar LCP.
- **Archivos**: [src/shared/components/ui/Background/Background.tsx](../src/shared/components/ui/Background/Background.tsx), [src/app/(pages)/home/_components/sections/HomeHero.tsx](../src/app/(pages)/home/_components/sections/HomeHero.tsx).
- **Cambios**: exponer prop `priority` en `Background` (o pasarla directamente en el `<Image>`) y activarla desde el hero. Añadir `sizes` explícito si aplica.
- **Riesgos**: nulos si se aplica solo al hero.
- **Pruebas**: Lighthouse mobile Performance ≥ 90; LCP < 2.5 s.
- **Criterio de aceptación**: LCP identificado en el hero background y sirve con alta prioridad.

### CP13 — Verificación de `next.config.mjs`

- **Objetivo**: revisar que no falten flags relevantes.
- **Archivos**: [next.config.mjs](../next.config.mjs).
- **Cambios**: probablemente ninguno. Confirmar que la config actual sigue vigente.
- **Riesgos**: nulos.
- **Pruebas**: `npm run build`.
- **Criterio de aceptación**: build limpio.

### CP14 — CV con nombre estable

- **Objetivo**: URL de CV persistente entre años.
- **Archivos**: [src/app/(pages)/home/_components/sections/HomeHero.tsx](../src/app/(pages)/home/_components/sections/HomeHero.tsx) (y cualquier otro punto con el link), `public/joan-cochachi-cv.pdf` (nuevo, aportado por el propietario).
- **Cambios**: colocar el nuevo PDF en `public/joan-cochachi-cv.pdf`; actualizar el `href` a `/joan-cochachi-cv.pdf` sin query string.
- **Riesgos**: enlace apuntando a fichero inexistente si el PDF no se sube antes → bloqueo hasta recibirlo.
- **Pruebas**: descargar desde producción y verificar cabeceras.
- **Criterio de aceptación**: descarga funciona en producción.

### CP15 — Limpieza de CVs antiguos (requiere confirmación explícita)

- **Objetivo**: eliminar `public/docs/cvcochachi*.pdf` y `_cvcochachi*.pdf` obsoletos tras validar CP14.
- **Archivos**: `public/docs/*.pdf`.
- **Cambios**: `git rm` de los archivos listados en la sección 2.6.
- **Riesgos**: se pierde el histórico si no hay copia local. Mitigación: acción reversible en git.
- **Pruebas**: `grep` en el codebase antes de borrar para asegurar que no queda ningún enlace vivo.
- **Criterio de aceptación**: 0 referencias en el código y ningún 404 en producción.

---

## 11. Preguntas pendientes

### Bloqueantes para implementación

1. **Datos de los 6 casos de estudio** (CP4 y CP8). Por cada uno se necesita:
   - URL pública (o marca de "privado / no publicable").
   - Contexto de negocio (1–2 frases).
   - Problema concreto.
   - Rol / participación real (individual o en equipo).
   - Solución técnica (funcionalidades WP/PHP/WooCommerce concretas).
   - Tecnologías utilizadas.
   - Resultado verificable (opcional; se omite si no hay métrica pública).
   - Imagen de tarjeta (WebP, 1200×675) y detalle (WebP, 1920×1080).
   - Slug canónico.
2. **Imagen OpenGraph global** (1200×630) para `src/app/opengraph-image.(png|jpg)` (CP5).
3. **Favicon** e íconos (favicon.ico, apple-touch-icon 180×180, icon-192, icon-512) para CP5. Opción: omitir en esta iteración y añadir después.
4. **CV nuevo** en formato PDF para colocar como `public/joan-cochachi-cv.pdf` (CP14).

### No bloqueantes (pueden decidirse después)

5. **Foto personal / avatar profesional** para JSON-LD `Person.image` (CP6). Sin foto se omite el campo o se usa un placeholder de dominio.
6. **Confirmación de URLs sameAs** para JSON-LD: `https://www.linkedin.com/in/joancochachi04/`, `https://github.com/joanC0492` (ya presentes en `dataRrss`). ¿Definitivas?
7. **Sección "Servicios"** opcional (WP a medida · WooCommerce · Optimización · Migraciones · Integraciones API). Fuera del alcance base; posible mejora futura.
8. **Formulario de contacto real** (react-hook-form + Resend/Formspree). Fuera del alcance base.
9. **README.md** — actualizar al final del proceso.
10. **Limpieza de código muerto**: `src/store/context/GlobalProvider.tsx` (vacío) y `src/store/redux/store.ts` (comentado). Fuera del alcance base.
11. **Fuente `Roboto`** referenciada en Tailwind y `globals.scss` sin importarse por `next/font`. Verificar y decidir si se elimina la referencia o se importa formalmente.

---

## 12. Restricciones y principios

- **No inventar** experiencia, resultados, métricas ni tecnologías. Si falta información, se marca como pendiente y se detiene el checkpoint afectado.
- **No exponer** información confidencial, código privado, credenciales ni datos internos de clientes.
- **No modificar plugins de terceros** (regla del propietario para proyectos WordPress; los cambios van en child themes, snippets o capas propias).
- **Cambios reversibles** vía git.
- **Un checkpoint = una entrega revisable.** El siguiente no arranca sin aprobación explícita.
- **Salidas ES + términos técnicos en inglés** cuando corresponde. Sin i18n bilingüe en esta iteración.

---

## 13. Estado actual

- **CP0**: completado (este documento).
- **CP1**: completado. Textos actualizados en [HomeHero.tsx](../src/app/(pages)/home/_components/sections/HomeHero.tsx), [HomeAbout.tsx](../src/app/(pages)/home/_components/sections/HomeAbout.tsx) y [HomeContact.tsx](../src/app/(pages)/home/_components/sections/HomeContact.tsx). `npm run lint` y `npm run build` finalizaron correctamente (solo warning preexistente en `useScrollSpy.tsx`, no relacionado con CP1). Enlace del CV conservado hasta CP14.
- **CP2**: completado. **Fulltimeforce** añadido como primera experiencia en [portfolio.data.ts](../src/app/(pages)/home/_data/portfolio.data.ts) con el período confirmado **Septiembre 2025 – Julio 2026**, cargo **WordPress Developer**, bullets de responsabilidades reales y stack aprobado por el propietario. IDs del resto de experiencias re-numerados sin alterar contenidos originales. **Solo se modificó `portfolio.data.ts`**; ningún otro archivo del sitio fue tocado. `npm run lint` y `npm run build` finalizaron correctamente (solo warning preexistente en `useScrollSpy.tsx`, no relacionado con CP2).
- **CP3**: completado. `dataSkills` reorganizado en 4 categorías (WordPress & eCommerce, Desarrollo web, Herramientas e integraciones, Tecnologías complementarias). `percentage` eliminado de datos e interfaz `ISkills`. `Skills.tsx` no requirió cambios. Archivos modificados: [portfolio.data.ts](../src/app/(pages)/home/_data/portfolio.data.ts) y [portfolio.interface.ts](../src/app/(pages)/home/_domain/portfolio.interface.ts). `npm run lint` y `npm run build` finalizaron correctamente.
- **CP4.1**: completado. `IDataProjects` extendida con propiedades opcionales para casos de estudio en [portfolio.interface.ts](../src/app/(pages)/home/_domain/portfolio.interface.ts). No se modificó `dataProjects`; no se modificaron componentes, rutas ni imágenes. `npm run lint` y `npm run build` finalizaron correctamente. Los proyectos existentes continúan compilando.
- **CP4.2 – CP15**: pendientes de aprobación / datos.

Este documento sirve como fuente de verdad del alcance. Cualquier cambio al plan se refleja aquí antes de tocar código.
