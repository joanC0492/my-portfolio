# `home/_components`: secciones e interacción

**Última revisión:** 2026-09-15. **Carpeta:** `src/app/(pages)/home/_components/`.

## Secciones

La [página principal](../../src/app/(pages)/page.tsx) fija el orden y los IDs. Cada sección recibe propiedades de un elemento `section`, extrae `className` y combina estilos con `cn`.

| Componente | ID | Contenido y dependencias |
| --- | --- | --- |
| [HomeHero](../../src/app/(pages)/home/_components/sections/HomeHero.tsx) | `hero` | Nombre, WordPress & PHP Developer, presentación, fondo, `RrssList` y enlace al CV |
| [HomeAbout](../../src/app/(pages)/home/_components/sections/HomeAbout.tsx) | `about` | Presentación y categorías de habilidades desde `dataSkills` |
| [HomeExperience](../../src/app/(pages)/home/_components/sections/HomeExperience.tsx) | `resume` | Título y `TimelineResume` |
| [HomeProjects](../../src/app/(pages)/home/_components/sections/HomeProjects.tsx) | `portfolio` | Dos grupos de tarjetas derivados de `dataProjects` |
| [HomeContact](../../src/app/(pages)/home/_components/sections/HomeContact.tsx) | `contact` | Disponibilidad y enlaces de correo, LinkedIn y GitHub |

Los textos de presentación están directamente en las secciones. Contacto no contiene un formulario ni envía mensajes desde el servidor. El enlace del CV abre `/docs/curriculum-joan-omar-cochachi-chiuyari-2026.pdf?v=1` en otra pestaña; el botón no utiliza el atributo HTML `download`.

`HomeAbout` considera principales las primeras dos categorías mediante `slice(0, 2)`; las restantes son complementarias. La imagen de laptop está declarada, pero tiene la clase `hidden`. Las habilidades se muestran como etiquetas, sin porcentajes ni barras.

## Componentes de UI del módulo

| Carpeta | Responsabilidad |
| --- | --- |
| `Title/` | Encabezados `h1` a `h6`, con línea decorativa opcional |
| `RrssList/` | Lista de enlaces con iconos desde `dataRrss`, reutilizada en hero y contacto |
| `Skills/` | Etiquetas con variantes `primary` y `secondary` |
| `TimelineResume/` | Agrupación de experiencias y presentación de sus responsabilidades |
| `Project/` | Rejillas, tarjetas y modal con navegación entre proyectos |

Los archivos `index.ts` de estas carpetas y de `sections/` reexportan los componentes.

## Selección y presentación de proyectos

`HomeProjects` separa los datos así:

```ts
const featuredCaseStudies = dataProjects.filter(
  (project) => project.type === "case-study" && project.featured === true
);
const legacyProjects = dataProjects.filter(
  (project) => project.type !== "case-study"
);
```

Actualmente aparecen seis casos destacados y once proyectos anteriores. Ambos grupos se muestran directamente, sin un control para expandir u ocultar «Otros proyectos». Un caso de estudio con `featured: false` o sin `featured` no aparecería en ninguno de los dos grupos, aunque seguiría dentro de los datos, el carrusel y, si tiene slug, las rutas.

[ProjectList.tsx](../../src/app/(pages)/home/_components/ui/Project/ProjectList.tsx) aporta una rejilla. [ProjectItem.tsx](../../src/app/(pages)/home/_components/ui/Project/ProjectItem.tsx) presenta `img`, aplica un overlay al pasar el puntero y convierte `stack`, separado por `|`, en etiquetas. Para casos muestra empresa y `title || company`; para los demás, empresa. La tarjeta no renderiza `summary` ni `description`.

La tarjeta tiene un botón para abrir detalles y un enlace para visitar el proyecto, ambos con `aria-label`. Al abrir detalles, primero guarda `id` en Context y luego abre el modal.

## Enlaces y carrusel

La tarjeta y [ProjectCarrousel.tsx](../../src/app/(pages)/home/_components/ui/Project/ProjectCarrousel.tsx) llaman a la misma función `getProjectUrl` de [project-view.ts](../../src/app/(pages)/home/_domain/project-view.ts). La elección es manual e independiente de `type` y `featured`:

| Condición | Destino |
| --- | --- |
| `viewMode === "external"` | `publicUrl \|\| link`, si es una URL absoluta HTTP/HTTPS válida |
| `viewMode === "image"` | `/portafolio/<pageLink>`, si hay slug y `pageImage` válida |
| Configuración incompleta o modo ausente | Omite el enlace de tarjeta y el botón «VER PROYECTO»; el botón de detalles sigue disponible |

Los enlaces conservan `target="_blank"` y `rel="noopener noreferrer"`. No se cambia silenciosamente de modo si falta configuración y no se comprueba si una web externa está caída. Actualmente hay seis destinos externos y once internos: My Chef Steph y Veblen son casos destacados configurados en modo `image`. Un caso destacado puede elegir `image`, y un proyecto anterior puede elegir `external`, sin cambiar su clasificación.

El carrusel se monta condicionalmente desde `TemplateMain`. Muestra `img`, stack, empresa, descripción y «VER PROYECTO». Renderiza `description` como HTML mediante `dangerouslySetInnerHTML`; no procesa Markdown ni los campos extensos del caso.

Aunque el estado se llama `projectIndexActive`, contiene el **ID del proyecto**. Para avanzar, el carrusel localiza su posición en `dataProjects`, suma o resta una posición, aplica vuelta al principio/final y guarda el ID del siguiente objeto. Recorre los 17 proyectos en el orden completo del array, sin separar grupos.

## Experiencia y límites observados

[TimelineResume.tsx](../../src/app/(pages)/home/_components/ui/TimelineResume/TimelineResume.tsx) crea una columna cada vez que `(index + 1) % 3 === 0`, incorporando el elemento actual y los dos anteriores. No procesa el grupo final incompleto. Con siete experiencias, renderiza seis y deja fuera MEDIA IMPACT. En pantallas grandes, las columnas se organizan en una rejilla de dos columnas.

[TimelineResumeItem.tsx](../../src/app/(pages)/home/_components/ui/TimelineResume/TimelineResumeItem.tsx) muestra cargo, empresa, período y bullets. Cada bullet utiliza `dangerouslySetInnerHTML`, porque algunos datos contienen enlaces o etiquetas de formato.

El modal no implementa cierre con Escape, cierre por clic en el fondo, captura/restauración de foco ni semántica de diálogo. Sus controles de flecha y cierre carecen de nombres accesibles explícitos. La búsqueda del proyecto usa una aserción `!`; un ID inexistente no tiene vista de recuperación. Las tarjetas dependen del hover para revelar su overlay; la experiencia táctil y por teclado requiere una revisión específica. `RrssList` contiene enlaces solo con iconos y sin etiqueta accesible explícita.

## Escenarios del comportamiento actual

1. **Abrir MoveMyBike:** el botón de detalles guarda ID 11; el modal muestra MoveMyBike, no el elemento situado en el índice 11 del array.
2. **Navegación circular:** avanzar desde Pisco Viñas de Oro (último elemento, ID 10) lleva a MoveMyBike (primero, ID 11). Retroceder desde MoveMyBike lleva al último.
3. **Nuevo caso no destacado:** si se añade con `type: "case-study"` y `featured: false`, no tendrá tarjeta en la home con los filtros actuales.
4. **Experiencia adicional incompleta:** con siete elementos, el séptimo no se muestra debido a la agrupación descrita.

Cambios en esta área pueden requerir actualizar [datos](03-home-datos-y-dominio.md), [estado](05-store.md), [shared](04-shared.md) y [rutas](01-app-rutas-y-seo.md).
