# Título

Veblen: separación de vacantes Active y Placed en WordPress

## Resumen para tarjeta

Analicé y definí una solución para separar correctamente vacantes Active y Placed, alineando consultas PHP, filtros, paginación y peticiones AJAX con el sistema vigente.

## Contexto

Veblen es un sitio WordPress de una empresa de reclutamiento que gestiona sus vacantes mediante un custom post type y una taxonomía de estados.

## Problema

Las vacantes se mostraban de forma inconsistente entre las distintas secciones del sitio.

En `/jobs-search/`:

- Se mezclaban vacantes Active y Placed.
- Los filtros y peticiones AJAX no garantizaban resultados únicamente Active.
- La cantidad de resultados por página era diferente entre la carga inicial y AJAX.

En `/roles-we-recruit/`:

- No se mostraban vacantes.
- Aparecía el mensaje “Job listings are unavailable”.
- La sección todavía dependía de un custom post type y un shortcode antiguos.

El sistema vigente utilizaba el custom post type `veblen_job` y la taxonomía `job_status`, con los términos `active` y `placed`.

## Mi participación

Analicé las consultas PHP, los filtros, la paginación y el comportamiento de las peticiones AJAX.

Identifiqué la diferencia entre el sistema antiguo y el sistema vigente, y definí la estrategia técnica para que cada página consultara únicamente las vacantes correspondientes a su función.

## Solución

Para `/jobs-search/`, se definió:

- Aplicar obligatoriamente el filtro `job_status=active`.
- Mantener el mismo filtro en la consulta inicial, búsquedas, paginación y AJAX.
- Unificar la cantidad de resultados por página.

Para `/roles-we-recruit/`, se propuso:

- Sustituir la consulta basada en el sistema antiguo.
- Consultar el custom post type `veblen_job`.
- Filtrar los resultados por `job_status=placed`.

De esta forma, cada sección mantendría una responsabilidad clara y un comportamiento consistente.

## Tecnologías

WordPress, PHP, JavaScript, AJAX, `WP_Query`, Custom Post Types, taxonomías, HTML, CSS y Git.

## Resultado

Se documentó una solución técnica para corregir la mezcla de estados en `/jobs-search/`, alinear la carga inicial con las peticiones AJAX y actualizar `/roles-we-recruit/` para que utilizara el sistema vigente de vacantes.

La implementación final y su validación en producción quedaron fuera del alcance documentado de este caso.

## URL pública

https://veblen-int.com/

## Slug

veblen-vacantes-active-placed

## Texto alternativo

Página de búsqueda de vacantes del sitio web de Veblen

## Estado

Contenido aprobado, imágenes pendientes.
