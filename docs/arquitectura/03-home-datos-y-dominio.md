# `home/_data` y `home/_domain`: contenido y contratos

**Última revisión:** 2026-09-14.

## Fuentes y consumidores

[portfolio.data.ts](../../src/app/(pages)/home/_data/portfolio.data.ts) exporta cuatro arrays tipados. [portfolio.interface.ts](../../src/app/(pages)/home/_domain/portfolio.interface.ts) contiene sus contratos. Cada carpeta tiene un `index.ts` que reexporta su archivo principal.

| Array | Contenido actual | Consumidores |
| --- | --- | --- |
| `dataRrss` | 3 enlaces activos: correo, LinkedIn, GitHub | `RrssList` |
| `dataSkills` | 4 categorías, con listas de habilidades | `HomeAbout` y `Skills` |
| `dataResumes` | 7 experiencias, en el orden definido manualmente | `TimelineResume` |
| `dataProjects` | 17 proyectos: 6 casos y 11 anteriores | Home, tarjetas, carrusel, detalle y sitemap |

No hay fetch, API, parser Markdown ni sincronización automática desde `docs/`. Las referencias a iconos son componentes `IconType` importados de `react-icons`; estos datos no son un documento JSON serializable sin adaptación.

## Contratos

| Interfaz | Campos |
| --- | --- |
| `IDataRrss` | `id`, `Icon`, `url` |
| `ISkills` | `id`, `title` |
| `IDataSkills` | `id`, `title`, `Icon`, `skills: ISkills[]` |
| `IResume` | `id`, `position`, `company`, `period`, `experienceList: string[]` |

`IDataProjects` mantiene los campos obligatorios `id`, `company`, `stack`, `img`, `link` y `description`. Sus extensiones son opcionales:

| Campos opcionales | Uso actual |
| --- | --- |
| `pageLink` | Slug para búsqueda, parámetros estáticos, sitemap y enlaces internos de proyectos anteriores |
| `type: "case-study" \| "project"`, `featured` | Clasificación de la home y selección del tipo de enlace |
| `title` | Título de caso en la tarjeta y metadata; fallback de texto alternativo |
| `summary` | Descripción SEO preferida; no se muestra en la tarjeta actual |
| `alt` | Texto alternativo de tarjeta, detalle y metadata social |
| `coverImage`, `heroImage` | Selección de imagen en detalle y metadata |
| `publicUrl` | URL preferida para enlaces de casos de estudio |
| `context`, `problem`, `role`, `solution`, `result`, `technologies` | Contenido disponible en los casos, sin vista detallada implementada |
| `gallery` | Campo previsto por la interfaz, sin valores ni renderizado en el estado revisado |

No hay un campo `year` en la interfaz actual. `heroImage` está definido como posibilidad, pero no está asignado en los proyectos revisados. Los campos opcionales mantienen compatibilidad con los proyectos anteriores que no declaran `type`.

## Inventario de proyectos y slugs

| ID | Proyecto | `pageLink` |
| --- | --- | --- |
| 11 | MoveMyBike | `movemybike-conversiones-gravity-forms` |
| 12 | H&H Classics | `handh-classics-galeria-ajax` |
| 13 | My Chef Steph | `my-chef-steph-gift-cards-mailchimp` |
| 14 | Veblen | `veblen-vacantes-active-placed` |
| 15 | Offitravel | `offitravel-checkout-dos-pasos` |
| 16 | Tokenovate | `tokenovate-rutas-navegacion-cta` |
| 0 | Tío Saji | `tiosaji` |
| 1 | Solgas | `solgas` |
| 2 | Dr. Manuel Eduardo Flores Vilchez | `dreduardoflorescirugia` |
| 3 | Spaciuz | `spaciuz` |
| 4 | Colectivo23 | `the-unconference-23` |
| 5 | Movistar | `movistar` |
| 6 | Entel Empresas | `entel` |
| 7 | Innovación Digital | Sin slug |
| 8 | Exsa | Sin slug |
| 9 | Infopesa | `infopesa` |
| 10 | Pisco Viñas de Oro | `vinas-de-oro` |

Los primeros seis son `case-study` con `featured: true`; los once anteriores omiten `type`. Los IDs no coinciden con las posiciones del array. La aplicación busca por ID en el carrusel y por `pageLink` en rutas; mantener ambos únicos evita selecciones ambiguas. TypeScript no comprueba esa unicidad.

## Convenciones de contenido

- `stack` es texto separado por `|`; las tarjetas lo dividen en etiquetas. `technologies` es una lista independiente y no reemplaza automáticamente a `stack`.
- `description` y `experienceList` pueden contener HTML local. Sus consumidores lo insertan directamente, sin sanitizador propio. Mantenerlos bajo control editorial; una fuente externa requeriría revisar este contrato.
- Los textos extensos de los casos contienen saltos de línea y algunas marcas Markdown. No hay una transformación Markdown a HTML en la aplicación.
- El orden de categorías determina la jerarquía visual de habilidades; el orden de proyectos determina la navegación del carrusel.
- El `link` de Solgas apunta actualmente a una URL asociada al proyecto del doctor, mientras que su descripción enlaza a Solgas. Su tarjeta utiliza el slug interno, por lo que no consume ese `link` mientras exista `pageLink`.
- My Chef Steph tiene como URL pública configurada una dirección `projectbeta.co.uk`. Su disponibilidad o carácter definitivo no se verificó en esta revisión.

## Escenarios del comportamiento actual

1. **Cambio editorial:** editar un Markdown en `docs/case-studies/` no cambia lo que muestra la web; también debe revisarse el objeto correspondiente en `portfolio.data.ts`.
2. **Nuevo slug:** añadir un `pageLink` hace que el proyecto participe en `generateStaticParams` y sitemap. La URL de su tarjeta sigue las reglas de `type` descritas en [componentes](02-home-componentes.md).
3. **Cambio de orden:** mover un proyecto dentro del array cambia su vecino en el carrusel, aunque su ID permanezca igual.
4. **Campo extenso añadido:** completar `solution` no añade una sección a la página interna, porque esa ruta actualmente solo muestra una imagen.

Para editar casos, contrastar el contenido con [recursos y documentación editorial](06-public-y-contenido.md). Mantener las restricciones y matices de los resultados reales; por ejemplo, Veblen describe análisis y solución propuesta, sin implementación final validada en producción.
