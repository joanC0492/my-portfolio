# Mantenimiento de la documentación y verificación

**Última revisión:** 2026-09-15.

## Regla de trabajo

Cada modificación debe dejar actualizada la explicación de las áreas afectadas dentro de la misma entrega. [AGENTS.md](../../AGENTS.md) conserva esta instrucción para las siguientes sesiones. No existe un generador ni un monitor que actualice los Markdown automáticamente: el mantenimiento forma parte del trabajo de quien modifica el proyecto.

Antes de empezar, leer el índice y las guías relevantes, revisar el código real y detectar cambios locales previos. Al terminar, sustituir descripciones obsoletas, actualizar escenarios y límites, verificar enlaces y registrar la fecha de revisión de los documentos afectados.

## Matriz de impacto

| Cambio | Documentación que debe revisarse |
| --- | --- |
| Rutas, layout, providers o SEO | [01 · App](01-app-rutas-y-seo.md); [00 · Visión](00-vision-general.md) si cambia el flujo general |
| Secciones, habilidades visibles, tarjetas, experiencia o carrusel | [02 · Componentes](02-home-componentes.md); [03 · Datos](03-home-datos-y-dominio.md) si cambia su consumo |
| Proyectos, slugs, interfaces, categorías o redes | [03 · Datos](03-home-datos-y-dominio.md); [01 · App](01-app-rutas-y-seo.md) para slugs y sitemap; [02 · Componentes](02-home-componentes.md) para filtros/conteos |
| Header, sidebar, botones, plantilla, hooks o helpers | [04 · Shared](04-shared.md); [02 · Componentes](02-home-componentes.md) si afecta la home |
| Context, reducer, tema o nueva gestión de estado | [05 · Store](05-store.md); guías de sus consumidores |
| Imágenes, CV o contenido de casos | [06 · Recursos](06-public-y-contenido.md); [03 · Datos](03-home-datos-y-dominio.md); Markdown editorial correspondiente |
| Dependencias, scripts, estilos globales o variables | [07 · Configuración](07-configuracion.md); [README raíz](../../README.md) si cambia cómo ejecutar |
| Nueva carpeta o subsistema | Crear una guía, enlazarla en el [índice](README.md) y actualizar [00 · Visión](00-vision-general.md) |
| Cambio de proceso o convención | Esta guía y [AGENTS.md](../../AGENTS.md) |

Esta matriz es un punto de partida: seguir los imports y consumidores reales si un cambio cruza varias áreas. Los conteos e inventarios son parte de la documentación y deben revisarse cuando cambien los datos.

## Formato para nuevas guías

Mantener una responsabilidad por documento. Incluir:

1. Título, carpeta o área cubierta y fecha de revisión.
2. Propósito y archivos principales con enlaces relativos válidos.
3. Datos de entrada, dependencias, estado y comportamiento observable.
4. Escenarios con condiciones y resultados concretos, derivados del código.
5. Límites actuales y documentación relacionada.

Las propuestas se identifican como tales y se mantienen separadas del comportamiento actual. Para cambios amplios puede utilizarse un documento de propuesta con motivación, alcance, áreas afectadas y comprobaciones, seguido de la actualización de estas guías al implementar. No es necesario añadir un plan por cada edición pequeña ni introducir herramientas OpenSpec para mantener estos archivos.

## Lista de cierre de cada cambio

- [ ] Los documentos explican el comportamiento final del código, incluidos sus límites.
- [ ] Se revisaron los consumidores de campos, rutas, estado o recursos modificados.
- [ ] Los enlaces locales y los nombres de archivos/símbolos siguen siendo correctos.
- [ ] Los conteos, slugs y ejemplos afectados están actualizados.
- [ ] Las propuestas pendientes no aparecen como funcionalidades implementadas.
- [ ] Las comprobaciones realizadas tienen resultados reales; lo no comprobado queda explícito.
- [ ] Se preservaron los cambios anteriores del usuario y se revisó el diff de la entrega.

## Verificación según el tipo de cambio

Para documentación, comprobar rutas y enlaces, contrastar las afirmaciones con el código y revisar el diff. No hace falta crear tests que repitan el texto de las guías.

Para cambios de aplicación, usar `npm run lint`, comprobación de tipos o `npm run build` según el alcance. La compilación requiere `SITE_URL` en producción y puede necesitar acceso a fuentes. No sustituir una prueba visual por el resultado de lint.

Los escenarios manuales relevantes incluyen navegación móvil y de escritorio, cambio de tema, apertura y navegación circular del carrusel, enlaces internos y externos, un slug válido, uno inexistente, CV, robots y sitemap. Comprobar solamente los afectados por la entrega, ampliando si aparecen fallos o incertidumbres.

## Registro de la revisión documental inicial (2026-09-14)

El análisis se realizó sobre los archivos locales el 2026-09-14, con cambios previos preparados y sin preparar en Git. No se toma como evidencia de un despliegue en producción.

- Se inspeccionaron rutas, layout, componentes, datos, interfaces, Context, reducer, helpers, hooks y configuración.
- Se leyó el módulo local de datos mediante TypeScript: 17 proyectos, 6 casos destacados, 15 slugs, 7 experiencias, 4 categorías de habilidades y 3 redes activas.
- Las imágenes definidas por `img`, `coverImage` y `heroImage` en los datos existen en `public/`.
- La agrupación por tres de `TimelineResume` explica que solo se presenten seis de las siete experiencias. Es un hallazgo de lectura, no una prueba de navegador.
- Se verificaron 119 enlaces locales en los 13 Markdown de la entrega: no se encontraron destinos inexistentes, bloques de código sin cerrar ni caracteres de sustitución por errores de codificación.
- Se compararon hashes SHA-256 con la copia inicial de 145 archivos: los 144 distintos del README raíz conservaron su contenido. El código, los recursos y los documentos previos no fueron modificados. Se añadieron 12 Markdown y se actualizó el README raíz.
- `git diff --check -- README.md` terminó sin errores de espacios. Las guías nuevas se comprobaron también directamente, ya que los archivos sin seguimiento no aparecen en ese diff.

No se ejecutaron build, lint, pruebas de navegador, auditorías Lighthouse ni validaciones de despliegue como parte de este análisis documental. Tampoco se comprobó la disponibilidad de los enlaces externos ni el contenido visual de imágenes/PDFs. Los resultados de pruebas citados en el plan anterior son históricos y no se atribuyen a esta entrega.

## Implementación de destinos manuales (2026-09-15)

- `viewMode` elige el destino de cada proyecto; `pageImage` conecta capturas completas con dimensiones reales. La tarjeta y el modal comparten `getProjectUrl`.
- Las pruebas de regresión se ejecutan con `node --test tests/project-view.test.cjs`; cubren independencia de categoría, prioridad de URL y omisión de configuraciones incompletas. No requieren paquetes nuevos.
- Al agregar o modificar una captura, comprobar su existencia local y que `width`/`height` coincidan con el archivo. La función cliente no consulta el sistema de archivos ni comprueba disponibilidad por red.
- Se verificaron en navegador las nueve páginas internas a 1365 px y 390 px: imágenes cargadas, proporción correcta y ausencia de desbordamiento horizontal en las 18 vistas.
- Se contrastaron los 17 destinos de tarjetas y los enlaces del modal de MoveMyBike y Spaciuz: conservan sus destinos y la apertura en otra pestaña.
- La ruta interna de MoveMyBike sigue mostrando su portada y conserva canonical, sin header ni footer. No se cambió su enlace externo.

La verificación final de esta implementación terminó con estos resultados:

- `node --test tests/project-view.test.cjs`: 18 pruebas aprobadas y 0 fallos.
- `npx --no-install tsc --noEmit`: sin errores de tipos.
- `npm run lint`: finalizó correctamente; conserva la advertencia previa de `react-hooks/exhaustive-deps` en `src/shared/hooks/useScrollSpy.tsx:40`.
- `SITE_URL=http://localhost:3000 npm run build`: compilación correcta y 22 páginas estáticas generadas. También informa la advertencia previa de `useScrollSpy.tsx` y que la base local de Browserslist está desactualizada.
- Playwright comprobó 17 enlaces de tarjeta —ocho externos y nueve internos—, la coincidencia entre tarjeta y modal para MoveMyBike y Spaciuz, y las nueve capturas a 1365 px y 390 px. Las 18 vistas cargaron una única imagen completa, sin header, footer, texto visible ni desbordamiento horizontal.
- La ruta interna existente de MoveMyBike mantuvo su portada y canonical; un slug desconocido respondió con 404.

El trabajo comenzó desde un árbol limpio en el commit `2a9312c`, que ya contenía los cambios previos del propietario.

## Cambios locales posteriores revisados (2026-09-15)

- `HomeHero` ahora enlaza el botón de CV a `/docs/curriculum-joan-omar-cochachi-chiuyari-2026.pdf?v=1`; el PDF correspondiente existe en `public/docs/`.
- My Chef Steph y Veblen cambiaron de `viewMode: "external"` a `viewMode: "image"`; el total actual es de seis destinos externos y once internos.
- Se añadieron `my-chef-_steph.webp` y `veblen-home-page.jpg` en `public/images/portfolio/projects-page/`. Sus dimensiones físicas se midieron como 3840 × 14154 px y 3840 × 20672 px, respectivamente.
- Los objetos `pageImage` de ambos proyectos se corrigieron con sus dimensiones físicas medidas. Las guías de datos, rutas y recursos reflejan ahora la proporción original; las verificaciones de nueve capturas y ocho enlaces externos de la sección anterior no cubren estos dos destinos internos posteriores.
- Se revisaron las rutas locales de los Markdown y la correspondencia entre los datos, el hero y los recursos añadidos. No se modificó el código ni los recursos proporcionados por el propietario durante esta actualización documental.
