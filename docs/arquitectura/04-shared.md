# `src/shared`: plantilla, UI y utilidades

**Última revisión:** 2026-09-14.

## Organización

| Carpeta | Función |
| --- | --- |
| `components/template/` | Composición de la página principal mediante `TemplateMain` |
| `components/ui/` | Header, SideBar, Footer, fondo, botones y capa de modal |
| `components/my-icons/` | SVG propios `MoonIcon` y `SunIcon` |
| `hooks/` | `useScrollSpy` para navegación entre secciones |
| `helpers/` | `cn` para combinar clases |
| `config/` | Resolución y validación de `SITE_URL` |

## Plantilla y controles

[TemplateMain.tsx](../../src/shared/components/template/TemplateMain.tsx) es cliente. Dentro de `<main>` monta `Header`, `SideBar`, `children` y `Footer`. Fuera del `<main>`, monta `ModalLayer` si está abierto el menú y `ProjectCarrousel` si está abierto el modal. El carrusel proviene del módulo `home`, de modo que la plantilla no es independiente del portafolio.

| Componente | Comportamiento actual |
| --- | --- |
| `Header` | Barra fija superior, navegación con nombre accesible y controles de tema y menú |
| `ButtonToggleSideBar` | Alterna apertura/cierre del menú; se oculta desde el breakpoint `lg`; cambia su etiqueta accesible |
| `ButtonToggleTheme` | Alterna entre claro y oscuro según `resolvedTheme`; usa iconos propios, título y etiqueta accesible |
| `SideBar` | Navegación local por botones a las cinco secciones; panel móvil y controles laterales en escritorio |
| `ModalLayer` | Fondo oscuro fijo con `z-30`, sin manejador de clic |
| `Footer` | Copyright con `new Date().getFullYear()` en el render |
| `ButtonPrimary` | Enlace `<a>` con texto, destino, target opcional y `rel="noopener noreferrer"` |
| `Background` | `next/image` posicionado absolutamente, `sizes="100vw"`, calidad 100, sin `priority` configurado |

Header y sidebar usan `z-40`; el carrusel declara su propio fondo `z-50` y contenido `z-[60]`. La capa del menú no es el fondo del carrusel.

## Navegación entre secciones

[SideBar.tsx](../../src/shared/components/ui/SideBar/SideBar.tsx) define su propio array `dataSideBar`, con los destinos `hero`, `about`, `resume`, `portfolio`, `contact`. Deben coincidir con los IDs de la página principal.

Al pulsar un botón, se cierra el menú mediante Context. El evento llega al `<li>` y ejecuta `scrollToSection(path)`. La navegación usa JavaScript sobre el documento actual; no cambia de ruta ni escribe un hash en la URL.

[useScrollSpy.tsx](../../src/shared/hooks/useScrollSpy.tsx) expone:

| Valor o función | Regla |
| --- | --- |
| `activeLink` | Inicia en `hero`; encuentra la sección que contiene la línea situada a 120 px del borde superior |
| `isScrolled` | Vale `true` si `window.scrollY > 300` |
| `scrollToSection(id)` | Busca el elemento y desplaza suavemente hasta su posición menos 49 px; si no existe, termina sin acción |

El hook registra un listener `scroll` en un efecto y lo retira al desmontar. Recorre los IDs desde el último al primero. Si no encuentra una sección en la línea de referencia, conserva el enlace activo previo. `SideBar` recibe `isScrolled`, pero actualmente lo combina con una cadena vacía y no produce un cambio visual.

El efecto tiene una lista de dependencias vacía a pesar de referenciar `determineActiveSection`; esta condición puede producir la advertencia `react-hooks/exhaustive-deps`. Los IDs actuales se declaran fuera del componente. No se implementa `aria-current` en el elemento activo.

## Clases, iconos y configuración

[cn.ts](../../src/shared/helpers/cn.ts) aplica `clsx` a los argumentos y después `twMerge`. Permite composición condicional de clases y resolución de conflictos de utilidades Tailwind.

`MoonIcon` y `SunIcon` reciben `className` y renderizan SVG decorativos con `aria-hidden` y `focusable="false"`. Las etiquetas accesibles corresponden al botón contenedor.

[site-url.ts](../../src/shared/config/site-url.ts) exporta `getSiteUrlOrThrow()` y `getSiteUrlObjectOrThrow()`. Es consumido por el layout, robots y sitemap. Su contrato completo está en [configuración](07-configuracion.md).

## Escenarios y límites

1. **Menú móvil:** abrirlo muestra el panel y `ModalLayer`, y bloquea el scroll del body. Pulsar una sección cierra el menú y desplaza el documento.
2. **Destino inexistente:** si se cambia un ID de la home sin actualizar `dataSideBar`, su botón deja de encontrar la sección.
3. **Cambio de tema:** el botón solicita el tema opuesto a `resolvedTheme`; no tiene una opción independiente para seleccionar «sistema».
4. **Detalle interno:** la página de proyecto no utiliza `TemplateMain`, por lo que allí no están los controles compartidos de navegación.

No hay cierre del menú por clic en `ModalLayer`, Escape ni gestión especial del foco. La plantilla tampoco añade un enlace para saltar al contenido. Estos puntos describen límites observados, no funcionalidades entregadas.
