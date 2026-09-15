# `src/app`: rutas, layout y SEO

**Última revisión:** 2026-09-14.

## Responsabilidad y archivos

| Archivo | Función |
| --- | --- |
| [layout.tsx](../../src/app/layout.tsx) | HTML global, fuentes, estilos, providers y metadata por defecto |
| [(pages)/page.tsx](../../src/app/(pages)/page.tsx) | Página `/` con las cinco secciones dentro de `TemplateMain` |
| [portafolio/[slug]/page.tsx](../../src/app/(pages)/portafolio/[slug]/page.tsx) | Búsqueda del proyecto, parámetros estáticos, metadata y vista de imagen |
| [robots.ts](../../src/app/robots.ts) | Respuesta de `/robots.txt` |
| [sitemap.ts](../../src/app/sitemap.ts) | Respuesta de `/sitemap.xml` |
| [globals.scss](../../src/app/globals.scss) | Estilos globales y capas de Tailwind |
| [favicon.ico](../../src/app/favicon.ico) | Recurso de favicon de App Router |

## Layout raíz

`RootLayout` declara `lang="es"` y `suppressHydrationWarning` en `<html>`. Carga Raleway (400, 600, 700) y Open Sans (400, 600) con `next/font/google`, y aplica sus variables al `<body>`.

El orden es `UIProvider → ChangeThemeProvider → children`. La plantilla visual de navegación se añade en la página principal, no en el layout raíz. Por eso el detalle hereda fuentes y providers, pero no el header, sidebar, footer ni modal de `TemplateMain`.

## Rutas y detalle de proyectos

| URL | Comportamiento actual |
| --- | --- |
| `/` | Secciones `hero`, `about`, `resume`, `portfolio`, `contact` |
| `/portafolio/<pageLink>` | Busca igualdad exacta con `project.pageLink` y muestra su imagen |
| `/portafolio/<slug-desconocido>` | Ejecuta `notFound()`; no hay diseño propio de `not-found.tsx` |
| `/robots.txt` | Permite el rastreo de `/` para cualquier agente e incluye host y sitemap |
| `/sitemap.xml` | Incluye la raíz y todos los proyectos con `pageLink` |

`generateStaticParams` devuelve los 15 slugs actualmente definidos. No filtra por `type` o `featured`. Los proyectos sin `pageLink` no generan parámetros ni entradas de sitemap. No existe una página de índice `/portafolio` en el árbol actual.

La imagen visible del detalle se elige con `heroImage || coverImage || img`. Se renderiza con `next/image`, dimensiones declaradas 1920 × 1080 y clases para ocupar el ancho. El `alt` usa `alt || title || company`. No hay renderer de Markdown, galería, narración del caso ni navegación de regreso implementados en esa página.

## Metadata

El layout resuelve `SITE_URL` al evaluar el módulo mediante [site-url.ts](../../src/shared/config/site-url.ts). Lo utiliza como `metadataBase`. Define canonical `/`, Open Graph de tipo `website`, locale `es_PE`, Twitter `summary_large_image` y robots con indexación y seguimiento habilitados.

La imagen global es `/images/portfolio/case-studies/movemybike-cover-1200x675.webp`. El título global es `JC | Front End Developer | Freelancer`; la descripción comienza con `Hola ! Soy Joan`. Este texto no está sincronizado con el posicionamiento WordPress & PHP de la home.

Para un proyecto existente, `generateMetadata` utiliza:

- Título: `title || company`, con ` | Joan Cochachi` en el título de página.
- Descripción: `summary || description || "Proyecto <company>"`.
- Canonical: `/portafolio/<pageLink>`.
- Imagen social: `coverImage || heroImage || img`, con dimensiones declaradas 1200 × 675.
- Open Graph de tipo `article` y tarjeta grande de Twitter.

La prioridad de imágenes sociales es distinta de la imagen visible del detalle. Las descripciones de proyectos anteriores pueden contener HTML; esta función no elimina esas etiquetas antes de utilizarlas como metadata.

Para un slug inexistente, se devuelve metadata de proyecto no encontrado con `index: false` y `follow: false`, además del `notFound()` de la página. No se implementa JSON-LD.

El sitemap usa prioridad 1 y frecuencia semanal para `/`, y 0.8 y frecuencia mensual para proyectos. `lastModified` se calcula con `new Date()` al ejecutar la función; no representa una fecha editorial almacenada por proyecto. Actualmente produce 16 entradas.

## Escenarios del comportamiento actual

1. **Slug existente:** al visitar `/portafolio/movemybike-conversiones-gravity-forms`, la búsqueda encuentra MoveMyBike, genera su metadata y presenta una imagen. Los textos de contexto y solución no aparecen en el cuerpo.
2. **Slug inexistente:** al solicitar un valor ausente de los datos, la página llama a `notFound()`.
3. **Proyecto sin slug:** Exsa e Innovación Digital están en la home, pero no forman parte de los parámetros estáticos ni del sitemap.
4. **Producción sin URL:** al cargar el layout sin `SITE_URL` en modo producción, la función de configuración lanza un error. Véase [configuración](07-configuracion.md).

Al modificar rutas, slugs o metadata, actualizar esta guía, [datos y dominio](03-home-datos-y-dominio.md) y los escenarios de verificación correspondientes.
