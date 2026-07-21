# Título

Offitravel: checkout en dos pasos y seguimiento por etapas en WooCommerce

## Resumen para tarjeta

Participé en la adaptación del checkout clásico de WooCommerce a un flujo de dos pasos y en la preparación de eventos de seguimiento asociados a cada etapa de la compra.

## Contexto

Offitravel es un sitio WordPress con WooCommerce para una empresa de viajes y reservas, con pagos procesados mediante Stripe.

## Problema

El checkout requería dividirse en dos pasos para organizar mejor el proceso de compra y facilitar la medición del avance del usuario.

El flujo debía:

- Separar los datos personales de la información de pago.
- Mantener los datos ingresados al avanzar entre pasos.
- Mostrar un resumen lateral del pedido.
- Contemplar eventos de seguimiento para cada etapa del proceso.

Los eventos previstos eran:

- `InitiateCheckout` al comenzar el checkout.
- `AddPaymentInfo` al avanzar al paso de pago.
- `Purchase` después de completar correctamente la compra.

## Mi participación

Participé en la adaptación del checkout clásico dentro de un child theme.

Trabajé en la estructura visual, la navegación entre pasos, el mantenimiento de los datos del formulario y la preparación de los eventos de seguimiento del embudo de compra.

## Solución

Se adaptó el checkout clásico de WooCommerce para presentarlo en dos pasos:

1. Datos personales.
2. Información y confirmación del pago.

También se trabajó en:

- Separar visualmente los bloques del checkout.
- Añadir controles para avanzar y retroceder.
- Mantener visible el resumen lateral del pedido.
- Conservar la información introducida en el primer paso.
- Preparar los eventos `InitiateCheckout`, `AddPaymentInfo` y `Purchase`.

La implementación se realizó mediante un child theme, plantillas, JavaScript y código personalizado, sin modificar directamente plugins de terceros.

## Tecnologías

WordPress, WooCommerce, PHP, JavaScript, Stripe, HTML, CSS, Meta Pixel y Git.

## Resultado

El checkout quedó estructurado visualmente en dos pasos y se preparó la lógica de seguimiento para las distintas etapas del proceso de compra.

La validación completa de la persistencia de datos, el comportamiento final del checkout y todos los eventos requería pruebas adicionales.

## URL pública

https://www.offitravel.es/

## Slug

offitravel-checkout-dos-pasos

## Texto alternativo

Checkout de Offitravel en WooCommerce con resumen del pedido y formulario de pago

## Estado

Contenido aprobado, imágenes pendientes.
