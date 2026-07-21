# Título

MoveMyBike: corrección del seguimiento de conversiones en Gravity Forms

## Resumen para tarjeta

Corregí el seguimiento de conversiones de Google Ads en dos formularios de Gravity Forms, asegurando que cada envío exitoso ejecutara la conversión correspondiente.

## Contexto

MoveMyBike es el sitio WordPress de una empresa del Reino Unido dedicada al transporte de motocicletas. El proyecto requería restablecer la medición de conversiones asociada a sus principales formularios de captación.

## Problema

El seguimiento de conversiones de Google Ads había dejado de ejecutarse correctamente en dos formularios con envío AJAX de Gravity Forms:

- Contact, formulario ID 2.
- Quick Quote, formulario ID 4.

Esto impedía registrar correctamente las conversiones generadas desde estos formularios.

## Mi participación

Realicé el diagnóstico técnico e implementé la corrección dentro de un child theme de Hello Elementor, manteniendo el código personalizado separado del tema padre para facilitar su mantenimiento y evitar que se perdiera durante futuras actualizaciones.

## Solución

Desarrollé un archivo JavaScript específico para el seguimiento de conversiones y escuché el evento `gform_confirmation_loaded` después de envíos AJAX exitosos.

Se configuró una conversión independiente para cada formulario:

- Contact ejecuta **Contact Completion**.
- Quick Quote ejecuta **Quote Completion** únicamente después del envío final exitoso.

La implementación se validó mediante la consola y la pestaña Network del navegador, comprobando que cada formulario enviara la conversión y el label correspondiente de Google Ads.

## Tecnologías

WordPress, PHP, JavaScript, Gravity Forms, Google Ads y Hello Elementor Child Theme.

## Resultado

El seguimiento de conversiones volvió a ejecutarse correctamente en ambos formularios y quedó validado técnicamente mediante las herramientas del navegador.

## URL pública

https://movemybike.co.uk/

## Slug

movemybike-conversiones-gravity-forms

## Texto alternativo

Sitio web de MoveMyBike con formularios de contacto y cotización en WordPress

## Estado

Contenido aprobado, imágenes pendientes.
