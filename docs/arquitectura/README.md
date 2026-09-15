# Arquitectura y funcionamiento actual

**Última revisión:** 2026-09-14. **Base:** archivos presentes en el árbol de trabajo, incluidos cambios locales sin commit.

Estos documentos explican cómo funciona hoy el portafolio. Usan una organización ligera inspirada en especificaciones: propósito, archivos, comportamiento, escenarios y límites. No se ha instalado OpenSpec ni se afirma compatibilidad con su herramienta; la estructura elegida es Markdown dentro de `docs/arquitectura/`.

## Orden de lectura

| Documento | Carpetas o responsabilidad |
| --- | --- |
| [00 · Visión general](00-vision-general.md) | Arquitectura completa y flujo entre módulos |
| [01 · App, rutas y SEO](01-app-rutas-y-seo.md) | `src/app/`, rutas, layout, metadata y buscadores |
| [02 · Componentes de la home](02-home-componentes.md) | `src/app/(pages)/home/_components/` |
| [03 · Datos y dominio](03-home-datos-y-dominio.md) | `home/_data/` y `home/_domain/` |
| [04 · Compartidos](04-shared.md) | `src/shared/`: plantilla, UI, hooks, helpers y URL |
| [05 · Estado](05-store.md) | `src/store/`: Context, reducer, tema y esqueleto Redux |
| [06 · Recursos y contenido](06-public-y-contenido.md) | `public/` y documentos editoriales de `docs/` |
| [07 · Configuración](07-configuracion.md) | Dependencias, estilos, entorno y comandos de la raíz |
| [08 · Mantenimiento](08-mantenimiento.md) | Qué actualizar en cada cambio y cómo verificarlo |

## Cómo interpretar estas guías

- **Comportamiento actual:** se deriva del código inspeccionado; no implica una prueba visual o un despliegue validado.
- **Escenario:** describe una entrada y su resultado según la implementación. Sirve como referencia para comprobar cambios posteriores.
- **Límite conocido:** comportamiento parcial, dependencia o problema detectado. Su descripción no autoriza por sí sola una corrección.
- **Propuesta:** intención futura, que no debe confundirse con el funcionamiento actual.

El código determina el comportamiento ejecutable. Estas guías deben reflejarlo y mantenerse con cada cambio, según [AGENTS.md](../../AGENTS.md). El [plan de auditoría anterior](../portfolio-audit-and-plan.md) conserva su alcance y sus aprobaciones; contiene estados históricos que ya no describen completamente el árbol actual.
