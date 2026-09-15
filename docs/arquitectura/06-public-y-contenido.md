# `public` y `docs`: recursos y contenido editorial

**Última revisión:** 2026-09-15.

## Recursos públicos

Los archivos de `public/` se sirven desde la raíz del sitio. Por ejemplo, `public/docs/cvcochachi2025.pdf` corresponde a `/docs/cvcochachi2025.pdf`. La carpeta `docs/` de la raíz del repositorio tiene otro propósito y no se publica automáticamente como contenido de páginas.

| Carpeta o archivo | Contenido y uso observado |
| --- | --- |
| [public/docs/](../../public/docs/) | Siete versiones de CV en PDF; la home enlaza `cvcochachi2025.pdf?v=4` |
| [public/images/portfolio/case-studies/](../../public/images/portfolio/case-studies/) | Doce WebP: dos variantes de portada por cada uno de los seis casos |
| [public/images/portfolio/projects/](../../public/images/portfolio/projects/) | Imágenes de tarjetas de proyectos anteriores, con variantes `-min` disponibles |
| [public/images/portfolio/projects-page/](../../public/images/portfolio/projects-page/) | Nueve capturas completas conectadas por `pageImage`; carpeta común para futuros proyectos y casos destacados |
| [public/images/portfolio/](../../public/images/portfolio/) | Fondos y laptop en SVG y WebP comprimido |
| [public/images/placeholder.webp](../../public/images/placeholder.webp) | Recurso disponible, sin fallback automático de proyectos implementado |
| [public/next.svg](../../public/next.svg), [public/vercel.svg](../../public/vercel.svg) | Recursos remanentes del arranque; sin uso en los componentes revisados |

Las tarjetas y el carrusel usan `project.img`. Para los seis casos, `img` y `coverImage` apuntan a las variantes `*-cover-1200x675.webp`. El detalle prioriza `pageImage` con sus dimensiones reales. Las nueve capturas existentes están asignadas explícitamente en los datos; la ruta no deduce su ubicación a partir del slug. Sin una `pageImage` válida conserva `heroImage || coverImage || img`. Actualmente ningún proyecto define `heroImage`.

La imagen de fondo activa es `home-background--compress.webp`. La laptop de About utiliza `profile-laptop--compress.webp`, aunque el elemento está oculto con `hidden`.

## Casos de estudio editoriales

Para nuevas capturas completas, usar `projects-page/<pageLink>.webp` tanto en proyectos anteriores como en casos destacados. Conservar la captura vertical completa, sin convertirla a 16:9 ni ampliarla artificialmente. Las portadas para tarjetas continúan en sus carpetas actuales. Para un cambio de modo paso a paso, consultar [el ejemplo de MoveMyBike](03-home-datos-y-dominio.md#ejemplo-cambiar-movemybike-a-captura).

[docs/case-studies/](../case-studies/) contiene seis documentos: `movemybike.md`, `handh-classics.md`, `my-chef-steph.md`, `veblen.md`, `offitravel.md` y `tokenovate.md`.

Comparten apartados de título, resumen para tarjeta, contexto, problema, participación, solución, tecnologías, resultado, URL pública, slug, texto alternativo y estado. Son la referencia editorial de los casos. La web consume la copia de contenido de `portfolio.data.ts`, no estos Markdown.

La sincronización es manual. Los títulos cortos de las tarjetas pueden diferir deliberadamente del título editorial completo. Los resultados deben conservar sus matices: H&H Classics y Offitravel mencionan validaciones pendientes; Veblen no afirma una implementación final en producción. No convertir esos textos en resultados concluyentes sin evidencia nueva.

## Documentos históricos y diferencias detectadas

- [portfolio-audit-and-plan.md](../portfolio-audit-and-plan.md) registra una auditoría de 2026-07-20, alcance aprobado y checkpoints. Mezcla diagnóstico inicial, propuestas y avances. Por ejemplo, mantiene pendiente la carga de casos y la creación de sitemap/robots, aunque esos elementos ya existen en el árbol revisado.
- Los seis Markdown editoriales terminan con «Contenido aprobado, imágenes pendientes». Esa nota editorial no refleja la existencia actual de las doce imágenes, ni permite deducir una nueva aprobación visual o de publicación.
- El [README de imágenes](../../public/images/portfolio/case-studies/README.md) también las describe como pendientes. Sus nombres y recomendaciones sirven como contexto histórico, no como inventario actualizado.
- [docs/superpowers/plans/](../superpowers/plans/) registra el plan de la entrega documental. Las guías de `docs/arquitectura/` son la referencia que se mantiene para el funcionamiento presente.

Los documentos previos se conservaron en esta revisión. Las discrepancias se hacen explícitas aquí para evitar tomar un checkpoint o una nota histórica como evidencia de lo que ejecuta hoy la aplicación.

## Escenarios y mantenimiento

1. **Cambio de portada:** añadir el archivo a `public/` y revisar `img`, `coverImage` y, si corresponde, la imagen social global. Cambiar solo `coverImage` no modifica la imagen de tarjeta o carrusel.
2. **Cambio de CV:** revisar el archivo servido y el `href` literal en `HomeHero`. La fecha del nombre y el parámetro `v=4` no se actualizan automáticamente.
3. **Nuevo recurso de detalle:** guardar una imagen en `projects-page/` con nombre `<pageLink>.webp`, completar `pageImage` con su ruta pública y dimensiones reales, y seleccionar `viewMode: "image"` para que tarjeta y modal abran la página interna.
4. **Cambio editorial:** revisar conjuntamente Markdown y objeto TypeScript; documentar cualquier diferencia intencional y mantener las aprobaciones aplicables.

La revisión documental inicial comprobó la existencia de recursos sin validación visual. Las comprobaciones de la implementación de `viewMode` están registradas en [mantenimiento](08-mantenimiento.md). Los PDFs y la disponibilidad de sitios externos quedan fuera de esa verificación.
