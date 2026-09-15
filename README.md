# Portafolio de Joan Cochachi

Sitio personal construido con Next.js App Router, React y TypeScript. Presenta el perfil WordPress & PHP Developer, habilidades, experiencia, proyectos y enlaces de contacto. El contenido se mantiene en archivos locales del repositorio.

## Documentación del proyecto

La explicación del funcionamiento actual empieza en [el índice de arquitectura](docs/arquitectura/README.md). Está dividida por carpetas y responsabilidades, con escenarios de comportamiento y limitaciones conocidas.

- [Visión general y mapa de carpetas](docs/arquitectura/00-vision-general.md).
- [Rutas, layout y SEO](docs/arquitectura/01-app-rutas-y-seo.md).
- [Secciones y componentes de la home](docs/arquitectura/02-home-componentes.md).
- [Datos e interfaces](docs/arquitectura/03-home-datos-y-dominio.md).
- [Componentes y utilidades compartidas](docs/arquitectura/04-shared.md).
- [Estado global y tema](docs/arquitectura/05-store.md).
- [Recursos públicos y contenido editorial](docs/arquitectura/06-public-y-contenido.md).
- [Configuración y ejecución](docs/arquitectura/07-configuracion.md).
- [Mantenimiento y verificación](docs/arquitectura/08-mantenimiento.md).

Las instrucciones para actualizar esta documentación junto con los cambios están en [AGENTS.md](AGENTS.md).

## Desarrollo local

Con Node.js y npm disponibles:

```powershell
npm ci
npm run dev
```

Abrir [el sitio local](http://localhost:3000). Sin `SITE_URL`, el código usa esa dirección para la metadata en desarrollo y emite una advertencia.

## Compilación y ejecución de producción

Definir `SITE_URL` con el dominio absoluto del entorno. Ejemplo para comprobar una compilación local en PowerShell:

```powershell
$env:SITE_URL = 'http://localhost:3000'
npm run build
npm run start
```

En un despliegue real, sustituir ese valor por el dominio público. También se puede crear `.env.local` a partir de [.env.example](.env.example) y completar el valor. La compilación falla si falta `SITE_URL` en producción. La carga de fuentes usa `next/font/google`.

Comprobaciones disponibles: `npm run lint` y `node --test tests/project-view.test.cjs` para los destinos de proyectos. No hay un script `npm test` configurado. Consultar [la guía de configuración](docs/arquitectura/07-configuracion.md) para detalles y límites.
