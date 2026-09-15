# Instrucciones para trabajar en este proyecto

## Contexto y documentación viva

- Antes de modificar el proyecto, leer [el índice de arquitectura](docs/arquitectura/README.md), [la visión general](docs/arquitectura/00-vision-general.md) y las guías de las áreas afectadas.
- La documentación técnica se escribe en español. Conservar los nombres reales de archivos, símbolos, rutas y tecnologías.
- En cada cambio de comportamiento, estructura, datos, dependencias, configuración o recursos, actualizar los Markdown afectados dentro de la misma entrega. No dar por terminado el cambio con documentación desactualizada.
- Usar [la matriz de mantenimiento](docs/arquitectura/08-mantenimiento.md) para localizar los documentos que deben cambiar. Actualizar el índice cuando se añadan, muevan o eliminen áreas.
- Documentar lo que hace el código actual, con archivos de referencia y escenarios verificables. Identificar explícitamente las limitaciones y las propuestas; no presentar funcionalidades pendientes como implementadas.
- Actualizar la fecha de revisión únicamente en las guías revisadas. Registrar qué se comprobó y qué no, sin trasladar resultados históricos como si fueran pruebas de esta entrega.
- Los archivos de `docs/case-studies/` son contenido editorial; no se cargan automáticamente en la aplicación. Si se modifica ese contenido, revisar también `src/app/(pages)/home/_data/portfolio.data.ts` y documentar cualquier diferencia intencional.
- `docs/portfolio-audit-and-plan.md` contiene el alcance y los checkpoints de un trabajo anterior. Consultarlo cuando la tarea corresponda a ese plan y respetar sus aprobaciones aplicables; contrastar sus afirmaciones de estado con el código y las guías actuales.

## Convenciones del repositorio

- El alias `@/` apunta a `src/`. La ruta principal está en `src/app/(pages)/page.tsx`; la carpeta `home` agrupa módulos y no tiene página propia.
- La fuente de datos consumida por la web es `portfolio.data.ts`; sus contratos están en `_domain/portfolio.interface.ts`.
- `projectIndexActive` guarda el **ID** del proyecto, no su posición en el array. Mantener IDs y `pageLink` únicos al editar proyectos.
- El estado activo usa Context y `next-themes`. La carpeta `redux` contiene un esqueleto sin integración funcional.
- Revisar `git status` antes de editar y conservar los cambios previos del usuario, incluidos los preparados en el índice.
- Ejecutar las comprobaciones apropiadas al cambio. Para documentación, verificar enlaces y correspondencia con el código; para cambios de aplicación, consultar los comandos y requisitos de `SITE_URL` en la guía de configuración.
- No inventar experiencia, resultados, métricas ni aprobaciones de publicación de los casos de estudio.
