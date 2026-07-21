# Título

H&H Classics: carga progresiva y mejoras de interacción en galerías de vehículos

## Resumen para tarjeta

Participé en la mejora de una galería de vehículos en WordPress mediante carga progresiva por AJAX y ajustes en la interacción entre imagen principal, miniaturas, slider y vista ampliada.

## Contexto

H&H Classics es un sitio WordPress de una casa de subastas de vehículos clásicos del Reino Unido, con un alto volumen de imágenes, fichas de vehículos y contenido multimedia.

## Problema

Las páginas individuales de vehículos cargaban desde el inicio galerías con decenas de imágenes, aumentando la cantidad de recursos necesarios durante la primera carga.

También se detectaron inconsistencias en la interacción:

- El zoom podía abrir una imagen diferente a la seleccionada.
- La imagen principal podía desplazarse al slide incorrecto.
- Existían casos de imágenes duplicadas dentro de la galería.

## Mi participación

Analicé la estructura de la galería y participé en la implementación de una carga progresiva mediante AJAX. También trabajé en ajustes de interacción entre la imagen principal, las miniaturas, el slider y el popup de vista completa.

## Solución

Se creó un endpoint AJAX para recuperar imágenes adicionales y un archivo JavaScript dedicado al comportamiento de la galería.

También se realizaron ajustes en la plantilla individual de vehículos y en el popup de vista completa para mejorar la relación entre la imagen seleccionada y la vista ampliada.

La implementación permitió reducir la necesidad de solicitar todas las imágenes durante la primera carga y facilitó la realización de pruebas sobre casos de duplicación y comportamientos inconsistentes.

## Tecnologías

WordPress, PHP, JavaScript, AJAX, HTML, CSS y Git.

## Resultado

La galería quedó preparada para cargar imágenes adicionales de manera progresiva. También se aplicaron mejoras sobre la selección de imágenes y la vista ampliada, aunque el comportamiento continuó requiriendo validaciones e iteraciones en determinados escenarios.

## URL pública

https://handh.co.uk/

## Slug

handh-classics-galeria-ajax

## Texto alternativo

Ficha de un vehículo clásico en H&H Classics con galería de imágenes

## Estado

Contenido aprobado, imágenes pendientes.
