# `src/store`: estado de interfaz y tema

**Última revisión:** 2026-09-14.

## Implementación activa

El [layout raíz](../../src/app/layout.tsx) monta `UIProvider` y `ChangeThemeProvider`. El primero utiliza Context y `useReducer`; el segundo envuelve `ThemeProvider` de `next-themes`.

| Archivo | Responsabilidad |
| --- | --- |
| [context/ui/UIContext.tsx](../../src/store/context/ui/UIContext.tsx) | Estado inicial, métodos públicos, efectos sobre el body y hook `useUIContext` |
| [context/ui/UIReducer.ts](../../src/store/context/ui/UIReducer.ts) | Transiciones de estado |
| [context/ThemeProvider.tsx](../../src/store/context/ThemeProvider.tsx) | Configuración del tema mediante next-themes |
| [context/index.ts](../../src/store/context/index.ts) | Reexporta `ChangeThemeProvider`; no reexporta el contexto UI |

## Estado inicial y API

| Campo | Inicial | Significado |
| --- | --- | --- |
| `sideMenuOpen` | `false` | Visibilidad del menú móvil y su fondo |
| `modalCarrouselOpen` | `false` | Montaje del carrusel de proyectos |
| `projectIndexActive` | `0` | ID del proyecto seleccionado, no posición en el array |

| Método | Acción del reducer | Efecto adicional |
| --- | --- | --- |
| `openSideMenu()` | `UI - Open Sidebar` | Añade `overflow-hidden` al body |
| `closeSideMenu()` | `UI - Close Sidebar` | Elimina `overflow-hidden` del body |
| `openModalCarrousel()` | `UI - Open Modal` | Añade `overflow-hidden` al body |
| `closeModalCarrousel()` | `UI - Close Modal` | Elimina `overflow-hidden` del body |
| `changeProjectIndexActive(id)` | `UI - Change Carrousel` | Envía el ID como payload |

El reducer copia el estado y cambia el campo correspondiente. El tipo de payload admite `boolean | number`, pero la selección de proyecto lo convierte a `number` mediante una aserción, sin comprobar la existencia del proyecto.

`useUIContext()` utiliza un contexto inicial convertido con `{} as ContextProps`; no incluye una comprobación que lance un error descriptivo por uso fuera del provider. Los componentes que consumen esta API deben estar bajo `UIProvider`.

## Tema

`ChangeThemeProvider` usa `attribute="class"`, `defaultTheme="dark"` y `enableSystem`. El estilo depende de clases `dark:*` y de `darkMode: "class"` en Tailwind. La persistencia y resolución del tema se delegan a `next-themes`; no existe una implementación propia de almacenamiento.

El botón de tema consulta `resolvedTheme` y utiliza `setTheme` para alternar entre `light` y `dark`. La UI no expone un tercer botón para elegir el tema de sistema, aunque el provider habilita ese soporte.

## Archivos sin integración funcional

| Archivo | Estado inspeccionado |
| --- | --- |
| [context/GlobalProvider.tsx](../../src/store/context/GlobalProvider.tsx) | Vacío |
| [reducer/GlobalReducer.tsx](../../src/store/reducer/GlobalReducer.tsx) | Vacío |
| [redux/store.ts](../../src/store/redux/store.ts) | Ejemplo de Redux Toolkit comentado y `export const store = {}` |
| [redux/index.ts](../../src/store/redux/index.ts) | Reexporta ese objeto vacío |
| [redux/auth/authSlice.ts](../../src/store/redux/auth/authSlice.ts) | Vacío |

`@reduxjs/toolkit` y `react-redux` no están en `package.json`. No hay autenticación ni Redux Provider montado. El nombre de las carpetas no implica que esas funcionalidades existan.

## Escenarios y límites

1. **Abrir proyecto:** la tarjeta actualiza primero el ID y abre después el modal. `TemplateMain` monta el carrusel con ese estado.
2. **Cerrar proyecto:** el modal se desmonta y el body recupera el scroll. El ID permanece seleccionado; no se reinicia al cerrar.
3. **Recarga completa:** el estado UI vuelve a los valores iniciales; no se persiste el menú o proyecto abierto.
4. **Overlays simultáneos:** el contexto permite que menú y modal estén abiertos a la vez. Cerrar cualquiera elimina la clase de bloqueo aunque el otro siga abierto; no hay contador ni coordinación de bloqueo de scroll.

Las funciones de apertura/cierre manipulan el DOM. No deben tratarse como funciones utilizables en servidor. No se implementa limpieza adicional al desmontar el provider ni exclusión mutua de overlays.

Si cambia el contrato del estado, actualizar también [componentes de home](02-home-componentes.md) y [shared](04-shared.md).
