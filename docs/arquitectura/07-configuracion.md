# Configuración, estilos y ejecución

**Última revisión:** 2026-09-14.

## Dependencias y comandos

[package.json](../../package.json) declara Next.js **14.1.0**, React y React DOM **^18**, TypeScript **^5**, Tailwind **^3.3.0**, Sass **^1.71.0** y next-themes **^0.2.1**. Usa además react-icons, clsx y tailwind-merge. ESLint se configura con `eslint-config-next` **14.1.0**. Estos son valores declarados; [package-lock.json](../../package-lock.json) registra las resoluciones concretas para npm.

No hay `engines`, `packageManager`, Dockerfile ni pipeline de CI propios en los archivos versionados revisados. El entorno de esta revisión dispone de Node.js 22.22.2 y npm 10.9.7; esos valores no constituyen un requisito fijado por el repositorio.

| Comando | Script o propósito |
| --- | --- |
| `npm ci` | Instala lo resuelto en el lockfile |
| `npm run dev` | `next dev` |
| `npm run build` | `next build` |
| `npm run start` | `next start`, requiere compilación previa |
| `npm run lint` | `next lint` |
| `npx --no-install tsc --noEmit` | Comprobación adicional de tipos usando la dependencia local; no es un script propio |

No se ha definido `npm test` ni un framework de pruebas del producto. La ruta del repositorio dentro de XAMPP no implica que esta aplicación utilice PHP o se sirva solo con Apache; los comandos configurados ejecutan Next.js.

## Variable de entorno `SITE_URL`

La muestra [.env.example](../../.env.example) contiene `SITE_URL=`. [site-url.ts](../../src/shared/config/site-url.ts) lee esa variable, elimina espacios en los extremos y valida el resultado con `new URL()`.

| Entrada o entorno | Resultado implementado |
| --- | --- |
| Sin valor, `NODE_ENV !== "production"` | Advertencia y fallback `http://localhost:3000` |
| Sin valor, `NODE_ENV === "production"` | Error `Missing SITE_URL` |
| URL absoluta inválida | Error `Invalid SITE_URL value` |
| Protocolo diferente de HTTP/HTTPS | Error de protocolo |
| HTTP/HTTPS válido | URL normalizada mediante `URL.toString()`, sin barras finales |

`getSiteUrlOrThrow()` devuelve un string; `getSiteUrlObjectOrThrow()` construye un objeto URL añadiendo una barra final. Layout, robots y sitemap dependen de este contrato. El fallback es fijo: cambiar el puerto de desarrollo no lo modifica.

La validación no restringe el valor a un origen sin ruta, consulta o fragmento. Para conservar la composición de canonical y sitemap prevista por el código, configurar un origen absoluto como `https://dominio-del-portafolio.example`, sin esos componentes.

Ejemplo de compilación local en PowerShell, con URL explícita solo para esta sesión:

```powershell
$env:SITE_URL = 'http://localhost:3000'
npm run build
npm run start
```

Para un entorno desplegado, establecer su dominio público en `SITE_URL`. Alternativamente, copiar `.env.example` a `.env.local` si aún no existe y completar la variable. No sobrescribir un archivo de entorno existente. El dominio real de despliegue no se verificó en esta revisión.

## Archivos de configuración

| Archivo | Configuración observada |
| --- | --- |
| [next.config.mjs](../../next.config.mjs) | Imágenes SVG permitidas, disposición `attachment` y CSP restrictiva para el contenido de imágenes; sin exportación estática configurada |
| [tsconfig.json](../../tsconfig.json) | `strict`, `noEmit`, resolución `bundler`, plugin Next, alias `@/* → ./src/*`, inclusión de `.next/types` |
| [.eslintrc.json](../../.eslintrc.json) | Extiende `next/core-web-vitals` |
| [postcss.config.js](../../postcss.config.js) | Plugins Tailwind y Autoprefixer |
| [tailwind.config.ts](../../tailwind.config.ts) | Escaneo de app/shared/store y rutas convencionales adicionales, modo oscuro por clase, contenedor centrado y tokens propios |
| [.gitignore](../../.gitignore) | Excluye dependencias, salidas Next/build, cobertura, `.env*.local`, `.vercel`, artefactos TypeScript y otros archivos generados |

La CSP declarada está dentro de `images`; no equivale a una política de cabeceras globales para todas las páginas. No hay configuración propia de `headers`, redirects o proveedor de alojamiento en `next.config.mjs`.

## Estilos y fuentes

`globals.scss` carga las capas base, components y utilities de Tailwind. Define `.btn`, `.filter-none`, `.filter-grayscale` y elimina el outline de `input:focus-visible`. La mayor parte del diseño vive en clases de los componentes.

Tailwind añade colores con prefijo `jc-`, familias `raleway`, `open-sans` y `roboto`, y `darkMode: "class"`. El layout carga únicamente Raleway y Open Sans. `body` aplica `font-roboto`, pero `--font-roboto` no está definido en el código activo; la declaración de `:root` está comentada. Es una inconsistencia existente que esta entrega no corrige.

`next/font/google` obtiene las fuentes durante el proceso de compilación cuando no están disponibles en caché; una compilación puede necesitar acceso a Google Fonts. No hay archivos de fuentes locales configurados.

`.next/`, `node_modules/` y `.venv/` estaban presentes en el entorno inspeccionado. Las dos primeras son salidas/dependencias habituales; `.venv/` no participa en los scripts de la aplicación. No deben interpretarse como módulos funcionales del portafolio.

## Escenarios de comprobación

1. **Desarrollo sin URL:** iniciar `npm run dev` debe utilizar el fallback documentado para metadata y emitir la advertencia de configuración.
2. **Compilación sin URL:** `next build` utiliza modo producción y la ausencia de `SITE_URL` provoca error al evaluar sus consumidores.
3. **Protocolo no admitido:** una URL como `ftp://localhost` provoca error en el helper.
4. **Cambio de estilo global:** revisar los temas claro/oscuro y las secciones afectadas; un lint correcto no demuestra la corrección visual.

Estos escenarios describen el contrato del código. Consultar [mantenimiento](08-mantenimiento.md) para conocer las comprobaciones efectivamente realizadas en esta entrega.
