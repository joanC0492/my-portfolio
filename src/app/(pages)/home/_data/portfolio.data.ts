import { IDataProjects, IDataRrss, IDataSkills, IResume } from "../_domain";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import {
  MdDeveloperMode,
  MdDns,
  MdEmail,
  MdLaptopMac,
  MdSettings,
  MdTerminal,
} from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export const dataRrss: IDataRrss[] = [
  {
    id: 0,
    Icon: MdEmail,
    url: "mailto:joan0492@gmail.com",
  },
  {
    id: 1,
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/joancochachi04/",
  },
  {
    id: 2,
    Icon: FaGithub,
    url: "https://github.com/joanC0492",
  },

  // {
  //   id: 3,
  //   Icon: FaWhatsapp,
  //   url: "https://wa.me/+51900556665?text=Hola%20te%20contacto%20desde%20joancochachi.com",
  // },
];

// export const dataSkills: IDataSkills[] = [
export const dataSkills: IDataSkills[] = [
  {
    id: 0,
    Icon: MdLaptopMac,
    title: "WordPress & eCommerce",
    skills: [
      { id: 0, title: "WordPress" },
      { id: 1, title: "WooCommerce" },
      { id: 2, title: "Elementor" },
      { id: 3, title: "ACF" },
      { id: 4, title: "Gravity Forms" },
      { id: 5, title: "Contact Form 7" },
      { id: 6, title: "Themes y child themes" },
      { id: 7, title: "Plugins personalizados" },
    ],
  },
  {
    id: 1,
    Icon: MdDeveloperMode,
    title: "Desarrollo web",
    skills: [
      { id: 0, title: "PHP" },
      { id: 1, title: "JavaScript (ES6+)" },
      { id: 2, title: "HTML5" },
      { id: 3, title: "CSS3" },
      { id: 4, title: "MySQL" },
      { id: 5, title: "APIs REST" },
      { id: 6, title: "AJAX" },
      { id: 7, title: "Hooks" },
      { id: 8, title: "Shortcodes" },
    ],
  },
  {
    id: 2,
    Icon: MdSettings,
    title: "Herramientas e integraciones",
    skills: [
      { id: 0, title: "Git y GitHub" },
      { id: 1, title: "SSH" },
      { id: 2, title: "cPanel" },
      { id: 3, title: "Mailchimp" },
      { id: 4, title: "Stripe" },
      { id: 5, title: "Google Ads" },
      { id: 6, title: "Google Tag Manager" },
      { id: 7, title: "Google Analytics" },
    ],
  },
  {
    id: 3,
    Icon: MdDns,
    title: "Tecnologías complementarias",
    skills: [
      { id: 0, title: "Laravel" },
      { id: 1, title: "React" },
      { id: 2, title: "Next.js" },
      { id: 3, title: "Angular" },
      { id: 4, title: "Shopify Liquid" },
      { id: 5, title: "HubSpot CMS" },
    ],
  },
];

export const dataResumes: IResume[] = [
  {
    id: 0,
    position: "WordPress Developer",
    company: "FULLTIMEFORCE",
    period: "(Septiembre 2025 - Julio 2026)",
    experienceList: [
      `Desarrollo y mantenimiento remoto de sitios WordPress y WooCommerce para clientes internacionales.`,
      `Creación y modificación de funcionalidades mediante PHP, JavaScript, hooks, shortcodes, consultas personalizadas y AJAX.`,
      `Personalización de themes, child themes y plugins, trabajando con Elementor, ACF, Gravity Forms y Contact Form 7.`,
      `Integraciones con APIs, Mailchimp, Stripe, Google Ads, Google Tag Manager y herramientas de analítica.`,
      `Diagnóstico y solución de errores, optimización de rendimiento, migraciones y trabajo en entornos locales, staging y producción.`,
      `Uso de Git, GitHub, SSH, cPanel y MySQL para despliegues, mantenimiento y resolución de incidencias.`,
      `<span class="font-bold">Tecnologías: WordPress, WooCommerce, PHP, JavaScript, HTML, CSS, MySQL, Elementor, ACF, Gravity Forms, Contact Form 7, Git, GitHub, SSH y cPanel</span>`,
    ],
  },
  {
    id: 1,
    position: "Frontend Developer",
    company: "FREELANCE",
    period: "(05/2022 - Actualmente)",
    experienceList: [
      `Desarrollo de sitios WordPress personalizados con Elementor y WP-Rentals, integrando WooCommerce, Mercado Pago, Culqi y mapas interactivos.`,
      `Creación de landing pages en HubSpot CMS.`,
      `Personalización de temas Shopify mediante Liquid, configuración de campos dinámicos y ajustes visuales.`,
      `Elaboración de mailings responsivos compatibles con clientes como Outlook Desktop.`,
      `Consumo e integración de APIs RESTful desarrolladas en Laravel, incluyendo conexión con múltiples bases de datos.`,
      `Desarrollo y mantenimiento de aplicaciones frontend con ReactJS y Next.js.`,
      `<span class="font-bold">Tecnologías: WordPress, Elementor, WooCommerce, Shopify (Liquid), HubSpot CMS, Laravel, React, Next.js, MySQL, Git</span>`,
    ],
  },
  {
    id: 2,
    position: "Desarrollador WordPress",
    company: "AMAZON ARGUZ S.A.C.",
    period: "(Julio 2024 - Marzo 2025)",
    experienceList: [
      `Desarrollo de sitios WordPress personalizados con temas hijos, Elementor y DIVI, optimizados para móviles.`,
      `Integración de pagos con Culqi y Mercado Pago, y personalización de tiendas con WooCommerce.`,
      `Programación de funciones a medida con PHP, shortcodes y hooks nativos.`,
      `Optimización de velocidad y SEO técnico (caché, lazy load, estructura de encabezados).`,
      `Implementación de sistemas educativos y de gamificación con LearnPress y GamiPress.`,
      `<span class="font-bold">Tecnologías: WordPress, WooCommerce, PHP, MySQL, LearnPress, GamiPress, Elementor, DIVI</span>`,
    ],
  },
  {
    id: 3,
    position: "CRO UX Analyst & Fullstack Developer",
    company: "HAVAS+ SAC",
    period: "(08/2021 - 04/2022)",
    experienceList: [
      `Desarrollo de funcionalidades en la web pública y catálogo de Movistar.`,
      `Creación de experimentos A/B y personalización de landings usando Google Optimize y GTM.`,
      `Configuración avanzada de etiquetas en GTM, con análisis de comportamiento vía Hotjar.`,
      `<span class="font-bold">Tecnologías utilizadas: Javascript, CSS3, Html5, VueJs, Gulp, GIT, Google Optimize, GTM, Hotjar</span>`,
    ],
  },
  {
    id: 4,
    position: "Frontend Developer",
    company: "SRBURNS PERÚ",
    period: "(01/2021 - 07/2021)",
    experienceList: [
      `Desarrollo de landing pages para Entel Empresas con foco en conversión.`,
      `Implementación de funcionalidades frontend y backend para la web de Entel.`,
      `Mantenimiento técnico y mejora de componentes reutilizables.`,
      `<span class="font-bold">Tecnologías: JavaScript, HTML5, CSS3, PHP, WordPress, MySQL, Pug, Gulp, Webpack, Git, jQuery</span>`,
    ],
  },
  {
    id: 5,
    position: "Web Developer",
    company: "IDEAS LATAM SAC",
    period: "(09/2020 - 01/2021)",
    experienceList: [
      `Creación de sistemas web con WordPress.`,
      `Implementación de Google Tag Manager y Google Analytics para seguimiento en landing pages.`,
      `<span class="font-bold">Tecnologías utilizadas: Javascript, CSS3, Booststrap, Html5, Jquery, PHP y Wordpress</span>`,
    ],
  },
  {
    id: 6,
    position: "Frontend Developer",
    company: "MEDIA IMPACT",
    period: "(2018 - 2020)",
    experienceList: [
      `Maquetación de sitios web responsive.`,
      `Mantenimiento y gestión básica de bases de datos.`,
      `Apoyo en desarrollo de componentes frontend personalizados.`,
      `<span class="font-bold">Tecnologías: JavaScript, PHP, Laravel, MySQL, jQuery, Vue.js, HTML5, CSS3, Git</span>`,
    ],
  },
];

export const dataProjects: IDataProjects[] = [
  {
    id: 11,
    viewMode: "external",
    company: "MoveMyBike",
    stack: "WORDPRESS | JAVASCRIPT | GRAVITY FORMS | GOOGLE ADS",
    img: "/images/portfolio/case-studies/movemybike-cover-1200x675.webp",
    link: "https://movemybike.co.uk/",
    // Enlace a la página del caso de estudio
    pageLink: "movemybike-conversiones-gravity-forms",
    description:
      "Corregí el seguimiento de conversiones de Google Ads en dos formularios de Gravity Forms, asegurando que cada envío exitoso ejecutara la conversión correspondiente.",
    type: "case-study",
    featured: true,
    title: "Seguimiento de conversiones",
    summary:
      "Corregí el seguimiento de conversiones de Google Ads en dos formularios de Gravity Forms, asegurando que cada envío exitoso ejecutara la conversión correspondiente.",
    context:
      "MoveMyBike es el sitio WordPress de una empresa del Reino Unido dedicada al transporte de motocicletas. El proyecto requería restablecer la medición de conversiones asociada a sus principales formularios de captación.",
    problem: `El seguimiento de conversiones de Google Ads había dejado de ejecutarse correctamente en dos formularios con envío AJAX de Gravity Forms:\n\n- Contact, formulario ID 2.\n- Quick Quote, formulario ID 4.\n\nEsto impedía registrar correctamente las conversiones generadas desde estos formularios.`,
    role: "Realicé el diagnóstico técnico e implementé la corrección dentro de un child theme de Hello Elementor, manteniendo el código personalizado separado del tema padre para facilitar su mantenimiento y evitar que se perdiera durante futuras actualizaciones.",
    solution: `Desarrollé un archivo JavaScript específico para el seguimiento de conversiones y escuché el evento \`gform_confirmation_loaded\` después de envíos AJAX exitosos.\n\nSe configuró una conversión independiente para cada formulario:\n\n- Contact ejecuta **Contact Completion**.\n- Quick Quote ejecuta **Quote Completion** únicamente después del envío final exitoso.\n\nLa implementación se validó mediante la consola y la pestaña Network del navegador, comprobando que cada formulario enviara la conversión y el label correspondiente de Google Ads.`,
    result:
      "El seguimiento de conversiones volvió a ejecutarse correctamente en ambos formularios y quedó validado técnicamente mediante las herramientas del navegador.",
    alt: "Sitio web de MoveMyBike con formularios de contacto y cotización en WordPress",
    coverImage: "/images/portfolio/case-studies/movemybike-cover-1200x675.webp",
    publicUrl: "https://movemybike.co.uk/",
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Gravity Forms",
      "Google Ads",
      "Hello Elementor Child Theme",
    ],
  },
  {
    id: 12,
    viewMode: "external",
    company: "H&H Classics",
    stack: "WORDPRESS | PHP | JAVASCRIPT | AJAX",
    img: "/images/portfolio/case-studies/handh-classics-cover-1200x675.webp",
    link: "https://handh.co.uk/",
    pageLink: "handh-classics-galeria-ajax",
    description:
      "Participé en la mejora de una galería de vehículos en WordPress mediante carga progresiva por AJAX y ajustes en la interacción entre imagen principal, miniaturas, slider y vista ampliada.",
    type: "case-study",
    featured: true,
    title: "Galerías de vehículos",
    summary:
      "Participé en la mejora de una galería de vehículos en WordPress mediante carga progresiva por AJAX y ajustes en la interacción entre imagen principal, miniaturas, slider y vista ampliada.",
    context:
      "H&H Classics es un sitio WordPress de una casa de subastas de vehículos clásicos del Reino Unido, con un alto volumen de imágenes, fichas de vehículos y contenido multimedia.",
    problem: `Las páginas individuales de vehículos cargaban desde el inicio galerías con decenas de imágenes, aumentando la cantidad de recursos necesarios durante la primera carga.\n\nTambién se detectaron inconsistencias en la interacción:\n\n- El zoom podía abrir una imagen diferente a la seleccionada.\n- La imagen principal podía desplazarse al slide incorrecto.\n- Existían casos de imágenes duplicadas dentro de la galería.`,
    role: "Analicé la estructura de la galería y participé en la implementación de una carga progresiva mediante AJAX. También trabajé en ajustes de interacción entre la imagen principal, las miniaturas, el slider y el popup de vista completa.",
    solution: `Se creó un endpoint AJAX para recuperar imágenes adicionales y un archivo JavaScript dedicado al comportamiento de la galería.\n\nTambién se realizaron ajustes en la plantilla individual de vehículos y en el popup de vista completa para mejorar la relación entre la imagen seleccionada y la vista ampliada.\n\nLa implementación permitió reducir la necesidad de solicitar todas las imágenes durante la primera carga y facilitó la realización de pruebas sobre casos de duplicación y comportamientos inconsistentes.`,
    result:
      "La galería quedó preparada para cargar imágenes adicionales de manera progresiva. También se aplicaron mejoras sobre la selección de imágenes y la vista ampliada, aunque el comportamiento continuó requiriendo validaciones e iteraciones en determinados escenarios.",
    alt: "Ficha de un vehículo clásico en H&H Classics con galería de imágenes",
    coverImage:
      "/images/portfolio/case-studies/handh-classics-cover-1200x675.webp",
    publicUrl: "https://handh.co.uk/",
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "AJAX",
      "HTML",
      "CSS",
      "Git",
    ],
  },
  {
    id: 13,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/my-chef-_steph.webp",
      width: 3840,
      height: 14154,
    },
    company: "My Chef Steph",
    stack: "WORDPRESS | WOOCOMMERCE | PHP | MAILCHIMP",
    img: "/images/portfolio/case-studies/my-chef-steph-cover-1200x675.webp",
    link: "https://mychefsteph-bqha9.projectbeta.co.uk/",
    pageLink: "my-chef-steph-gift-cards-mailchimp",
    description:
      "Adapté el flujo de gift cards en WooCommerce y participé en la definición de una estructura de etiquetado en Mailchimp basada en formularios, compras e intereses del cliente.",
    type: "case-study",
    featured: true,
    title: "Gift Cards y Mailchimp",
    summary:
      "Adapté el flujo de gift cards en WooCommerce y participé en la definición de una estructura de etiquetado en Mailchimp basada en formularios, compras e intereses del cliente.",
    context:
      "My Chef Steph es un sitio WordPress con WooCommerce para una marca gastronómica que ofrece comidas semanales, catering, clases de cocina, cenas especiales, gift cards y donaciones.",
    problem: `El proyecto requería reorganizar varias funcionalidades comerciales dentro de WordPress y WooCommerce.\n\nLos principales puntos fueron:\n\n- Sustituir el sistema de gift cards basado en YITH por WooCommerce Gift Cards.\n- Configurar montos personalizados y valores predefinidos.\n- Gestionar campos adicionales como destinatario, correo, mensaje y organización benéfica.\n- Aplicar validaciones, precio dinámico y cantidad fija.\n- Definir cómo relacionar formularios de Gravity Forms con tags de Mailchimp.\n- Identificar qué tags podían automatizarse mediante compras o selecciones del formulario.\n- Documentar los casos donde todavía no existía un trigger automático claro.`,
    role: "Participé en el análisis, desarrollo y adaptación de funcionalidades dentro de WordPress y WooCommerce. Implementé lógica PHP personalizada para las gift cards y colaboré en la definición de los flujos de formularios, compras y etiquetado en Mailchimp.",
    solution: `Se implementó una adaptación personalizada sobre WooCommerce Gift Cards, incorporando lógica PHP para mostrar, validar y guardar los campos adicionales necesarios.\n\nTambién se configuraron:\n\n- Montos personalizados y valores predefinidos.\n- Precio dinámico.\n- Cantidad fija.\n- Una plantilla específica para la página de gift cards.\n\nPara Mailchimp, se propuso reutilizar un formulario general con el campo **Area of Interest** y asociar cada opción con el tag correspondiente.\n\nAdemás, se plantearon automatizaciones mediante eventos de WooCommerce para determinados escenarios y se documentaron los casos que requerían confirmación del cliente antes de implementarse.`,
    result:
      "El flujo de gift cards quedó adaptado al sistema de WooCommerce Gift Cards. También se definió una estructura clara para relacionar formularios, compras y tags de Mailchimp, dejando identificados los puntos que todavía requerían confirmación antes de su automatización.",
    alt: "Página de gift cards de My Chef Steph en WordPress y WooCommerce",
    coverImage:
      "/images/portfolio/case-studies/my-chef-steph-cover-1200x675.webp",
    publicUrl: "https://mychefsteph-bqha9.projectbeta.co.uk/",
    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "Gravity Forms",
      "Mailchimp",
      "WooCommerce Gift Cards",
      "HTML",
      "CSS",
      "Git",
    ],
  },
  {
    id: 14,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/veblen-home-page.jpg",
      width: 3840,
      height: 20672,
    },
    company: "Veblen",
    stack: "WORDPRESS | PHP | AJAX | WP_QUERY",
    img: "/images/portfolio/case-studies/veblen-cover-1200x675.webp",
    link: "https://veblen-int.com/",
    pageLink: "veblen-vacantes-active-placed",
    description:
      "Analicé y definí una solución para separar correctamente vacantes Active y Placed, alineando consultas PHP, filtros, paginación y peticiones AJAX con el sistema vigente.",
    type: "case-study",
    featured: true,
    title: "Gestión de vacantes",
    summary:
      "Analicé y definí una solución para separar correctamente vacantes Active y Placed, alineando consultas PHP, filtros, paginación y peticiones AJAX con el sistema vigente.",
    context:
      "Veblen es un sitio WordPress de una empresa de reclutamiento que gestiona sus vacantes mediante un custom post type y una taxonomía de estados.",
    problem: `Las vacantes se mostraban de forma inconsistente entre las distintas secciones del sitio.\n\nEn /jobs-search/:\n\n- Se mezclaban vacantes Active y Placed.\n- Los filtros y peticiones AJAX no garantizaban resultados únicamente Active.\n- La cantidad de resultados por página era diferente entre la carga inicial y AJAX.\n\nEn /roles-we-recruit/:\n\n- No se mostraban vacantes.\n- Aparecía el mensaje “Job listings are unavailable”.\n- La sección todavía dependía de un custom post type y un shortcode antiguos.\n\nEl sistema vigente utilizaba el custom post type veblen_job y la taxonomía job_status, con los términos active y placed.`,
    role: "Analicé las consultas PHP, los filtros, la paginación y el comportamiento de las peticiones AJAX.\n\nIdentifiqué la diferencia entre el sistema antiguo y el sistema vigente, y definí la estrategia técnica para que cada página consultara únicamente las vacantes correspondientes a su función.",
    solution: `Para /jobs-search/, se definió:\n\n- Aplicar obligatoriamente el filtro job_status=active.\n- Mantener el mismo filtro en la consulta inicial, búsquedas, paginación y AJAX.\n- Unificar la cantidad de resultados por página.\n\nPara /roles-we-recruit/, se propuso:\n\n- Sustituir la consulta basada en el sistema antiguo.\n- Consultar el custom post type veblen_job.\n- Filtrar los resultados por job_status=placed.\n\nDe esta forma, cada sección mantendría una responsabilidad clara y un comportamiento consistente.`,
    result:
      "Se documentó una solución técnica para corregir la mezcla de estados en /jobs-search/, alinear la carga inicial con las peticiones AJAX y actualizar /roles-we-recruit/ para que utilizara el sistema vigente de vacantes.\n\nLa implementación final y su validación en producción quedaron fuera del alcance documentado de este caso.",
    alt: "Página de búsqueda de vacantes del sitio web de Veblen",
    coverImage: "/images/portfolio/case-studies/veblen-cover-1200x675.webp",
    publicUrl: "https://veblen-int.com/",
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "AJAX",
      "WP_Query",
      "Custom Post Types",
      "taxonomías",
      "HTML",
      "CSS",
      "Git",
    ],
  },
  {
    id: 15,
    viewMode: "external",
    company: "Offitravel",
    stack: "WORDPRESS | WOOCOMMERCE | STRIPE | JAVASCRIPT",
    img: "/images/portfolio/case-studies/offitravel-cover-1200x675.webp",
    link: "https://www.offitravel.es/",
    pageLink: "offitravel-checkout-dos-pasos",
    description:
      "Participé en la adaptación del checkout clásico de WooCommerce a un flujo de dos pasos y en la preparación de eventos de seguimiento asociados a cada etapa de la compra.",
    type: "case-study",
    featured: true,
    title: "Checkout en dos pasos",
    summary:
      "Participé en la adaptación del checkout clásico de WooCommerce a un flujo de dos pasos y en la preparación de eventos de seguimiento asociados a cada etapa de la compra.",
    context:
      "Offitravel es un sitio WordPress con WooCommerce para una empresa de viajes y reservas, con pagos procesados mediante Stripe.",
    problem: `El checkout requería dividirse en dos pasos para organizar mejor el proceso de compra y facilitar la medición del avance del usuario.\n\nEl flujo debía:\n\n- Separar los datos personales de la información de pago.\n- Mantener los datos ingresados al avanzar entre pasos.\n- Mostrar un resumen lateral del pedido.\n- Contemplar eventos de seguimiento para cada etapa del proceso.\n\nLos eventos previstos eran:\n\n- \`InitiateCheckout\` al comenzar el checkout.\n- \`AddPaymentInfo\` al avanzar al paso de pago.\n- \`Purchase\` después de completar correctamente la compra.`,
    role: "Participé en la adaptación del checkout clásico dentro de un child theme.\n\nTrabajé en la estructura visual, la navegación entre pasos, el mantenimiento de los datos del formulario y la preparación de los eventos de seguimiento del embudo de compra.",
    solution: `Se adaptó el checkout clásico de WooCommerce para presentarlo en dos pasos:\n\n1. Datos personales.\n2. Información y confirmación del pago.\n\nTambién se trabajó en:\n\n- Separar visualmente los bloques del checkout.\n- Añadir controles para avanzar y retroceder.\n- Mantener visible el resumen lateral del pedido.\n- Conservar la información introducida en el primer paso.\n- Preparar los eventos \`InitiateCheckout\`, \`AddPaymentInfo\` y \`Purchase\`.\n\nLa implementación se realizó mediante un child theme, plantillas, JavaScript y código personalizado, sin modificar directamente plugins de terceros.`,
    result:
      "El checkout quedó estructurado visualmente en dos pasos y se preparó la lógica de seguimiento para las distintas etapas del proceso de compra.\n\nLa validación completa de la persistencia de datos, el comportamiento final del checkout y todos los eventos requería pruebas adicionales.",
    alt: "Checkout de Offitravel en WooCommerce con resumen del pedido y formulario de pago",
    coverImage:
      "/images/portfolio/case-studies/offitravel-cover-1200x675.webp",
    publicUrl: "https://www.offitravel.es/",
    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "Stripe",
      "HTML",
      "CSS",
      "Meta Pixel",
      "Git",
    ],
  },
  {
    id: 16,
    viewMode: "external",
    company: "Tokenovate",
    stack: "WORDPRESS | PHP | REDIRECCIONES | BROWSERSTACK",
    img: "/images/portfolio/case-studies/tokenovate-cover-1200x675.webp",
    link: "https://www.tokenovate.com/",
    pageLink: "tokenovate-rutas-navegacion-cta",
    description:
      "Configuré una redirección 301, unifiqué la terminología de navegación y corregí el destino del CTA de solicitud de demo para mantener la consistencia funcional y de contenido del sitio.",
    type: "case-study",
    featured: true,
    title: "Actualizaciones web",
    summary:
      "Configuré una redirección 301, unifiqué la terminología de navegación y corregí el destino del CTA de solicitud de demo para mantener la consistencia funcional y de contenido del sitio.",
    context:
      "Tokenovate es un sitio corporativo en WordPress orientado a tecnología financiera y normalización de datos.",
    problem:
      "El sitio requería actualizar una ruta antigua, alinear textos visibles en el header y footer, y corregir el destino de una llamada a la acción.\n\nEsto generaba inconsistencias entre la URL disponible, la terminología utilizada en la navegación y el flujo hacia la página de solicitud de demo.",
    role: "Realicé los ajustes en WordPress y validé que la redirección, los enlaces y los textos fueran consistentes entre las distintas áreas del sitio.\n\nTambién revisé el comportamiento en diferentes navegadores y resoluciones.",
    solution: `Se configuró una redirección 301 desde:\n\n\`/use-cases/trade-data-normalisation/\`\n\nhacia:\n\n\`/use-cases/data-normalisation/\`\n\nAdemás:\n\n- Se actualizaron los textos del header y footer para utilizar **Data Normalisation**.\n- Se corrigió el enlace del CTA **Request a Demo** para dirigirlo a \`/book-a-demo/\`.\n- Se realizaron pruebas funcionales y visuales.\n- Se validó el comportamiento mediante BrowserStack.`,
    result:
      "La URL anterior quedó redirigida permanentemente hacia la nueva. La navegación pasó a utilizar una terminología consistente y el CTA **Request a Demo** quedó enlazado correctamente con la página de reserva de demo.",
    alt: "Página de Tokenovate con navegación Data Normalisation y botón Request a Demo",
    coverImage:
      "/images/portfolio/case-studies/tokenovate-cover-1200x675.webp",
    publicUrl: "https://www.tokenovate.com/",
    technologies: [
      "WordPress",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "redirecciones HTTP",
      "BrowserStack",
      "Git",
    ],
  },
  {
    id: 0,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/tiosaji.webp",
      width: 1360,
      height: 5404,
    },
    company: "Tío Saji",
    stack: "SHOPIFY | LIQUID | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-tio-saji.webp",
    link: "",
    pageLink: "tiosaji",
    description: `Tienda personalizada en Shopify.<br />
    Modificaciones en Liquid, campos dinámicos y ajustes visuales para adaptar el diseño a la identidad de la marca.<br />
    <a class="underline" href="https://tiosaji.com/" target="_blank" rel="noopener noreferrer">https://tiosaji.com/</a>
    `,
  },
  {
    id: 1,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/solgas.webp",
      width: 1360,
      height: 1496,
    },
    company: "Solgas",
    stack: "NEXT.JS | LARAVEL | TAILWIND | SQL SERVER",
    img: "/images/portfolio/projects/project-solgas.webp",
    link: "https://joancochachi.online/dr-manuel-eduardo-flores-vilchez/",
    pageLink: "solgas",
    description: `
    Desarrollo de la sección <strong>Verifica tu balón</strong> en el sitio oficial de Solgas.<br />
    Implementación con <strong>Next.js</strong> y <strong>Laravel</strong>, incluyendo integración con bases de datos <strong>MySQL</strong> y <strong>SQL Server</strong> mediante API REST personalizada.<br />
    <a class="underline" href="https://www.solgas.com.pe/verifica-tu-balon" target="_blank" rel="noopener noreferrer">
    https://www.solgas.com.pe/verifica-tu-balon
    </a>`,
  },
  {
    id: 2,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/dreduardoflorescirugia.webp",
      width: 1826,
      height: 5436,
    },
    company: "Dr. Manuel Eduardo Flores Vilchez",
    stack: "WORDPRESS | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-dreduardoflorescirugia.webp",
    link: "https://joancochachi.online/dr-manuel-eduardo-flores-vilchez/",
    pageLink: "dreduardoflorescirugia",
    description: `
    Desarrollo de un sitio WordPress con <strong>tema personalizado desde cero</strong>, basado en un diseño aprobado en Illustrator.  
    Integración con plugins gratuitos y maquetación responsive compatible con Elementor.<br />
    <a class="underline" href="https://dreduardoflorescirugia.pe/" target="_blank" rel="noopener noreferrer">
      https://dreduardoflorescirugia.pe/
    </a>
    `,
  },
  {
    id: 3,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/spaciuz.webp",
      width: 1826,
      height: 2620,
    },
    company: "Spaciuz",
    stack: "WORDPRESS | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-spaciuz.webp",
    link: "https://joancochachi.online/spaciuz/",
    pageLink: "spaciuz",
    description: `
    Personalización del tema <strong>WP Rentals</strong> en WordPress para un sitio de publicación y búsqueda de espacios de alquiler.<br />
    Ajustes visuales con CSS y configuración del mapa interactivo mediante panel administrativo.<br />
    <a class="underline" href="https://spaciuz.com/" target="_blank" rel="noopener noreferrer">
      https://spaciuz.com/
    </a>
    `,
  },
  {
    id: 4,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/the-unconference-23.webp",
      width: 1440,
      height: 8102,
    },
    company: "Colectivo23",
    stack: "HubSpot CMS | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-the-unconference.webp",
    link: "https://joancochachi.online/the-unconference-23/",
    pageLink: "the-unconference-23",
    description: `
    Maquetación desde cero en <strong>HubSpot CMS</strong> para la landing del evento <strong>The Unconference 2025</strong>.<br />
    Se implementó diseño responsive, <strong>contador dinámico</strong> y campos editables personalizados para permitir la gestión de contenidos por parte del cliente.`,
  },
  {
    id: 5,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/movistar.webp",
      width: 1360,
      height: 6519,
    },
    company: "Movistar",
    stack: "HTML | CSS | JS | GA | OPTIMIZE | GTM",
    img: "/images/portfolio/projects/project-movistar.webp",
    link: "https://www.movistar.com.pe/",
    pageLink: "movistar",
    description: `
      Desarrollo de funcionalidades en la web pública y catálogo de Movistar, junto a la implementación de <strong>experimentos A/B</strong> usando Google Optimize.<br />
      Personalización de landings y configuración avanzada de etiquetas en <strong>Google Tag Manager</strong>, con análisis de comportamiento mediante Hotjar.<br />
      <a class="underline" href="https://www.movistar.com.pe/" target="_blank" rel="noopener noreferrer">
        https://www.movistar.com.pe/
      </a>
    `,
  },
  {
    id: 6,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/entel.webp",
      width: 1360,
      height: 6528,
    },
    company: "Entel Empresas",
    stack: "WORDPRESS | HTML | PUG | CSS | SCSS | JS",
    img: "/images/portfolio/projects/project-entel-empresas.webp",
    link: "https://www.entel.pe/empresas/",
    pageLink: "entel",
    description: `
      Desarrollo de <strong>landing pages orientadas a conversión</strong> y mejoras técnicas en la web de Entel Empresas.<br />
      Implementación de funcionalidades frontend y backend con PHP y WordPress, y refactorización de componentes reutilizables.<br />
      <a class="underline" href="https://www.entel.pe/empresas/" target="_blank" rel="noopener noreferrer">
        https://www.entel.pe/empresas/
      </a>
    `,
  },
  {
    id: 7,
    viewMode: "external",
    company: "Innovación Digital",
    stack: "WORDPRESS | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-innovacion-digital.webp",
    link: "https://innovaciondigital.biz/",
    description: `
      Desarrollo de sitio web en <strong>WordPress</strong> para una agencia de servicios digitales.<br />
      Implementación de Google Tag Manager y Google Analytics para medición de conversiones en secciones clave.<br />      
    `,
  },
  {
    id: 8,
    viewMode: "external",
    company: "Exsa",
    stack: "LARAVEL | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-exsa.webp",
    link: "https://exsa.net/es",
    description: ``,
  },
  {
    id: 9,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/infopesa.webp",
      width: 1360,
      height: 1182,
    },
    company: "Infopesa",
    stack: "LARAVEL | HTML | CSS | JS | VUE",
    img: "/images/portfolio/projects/project-infopesa.webp",
    link: "https://infopesa.com/",
    pageLink: "infopesa",
    description: ``,
  },
  {
    id: 10,
    viewMode: "image",
    pageImage: {
      src: "/images/portfolio/projects-page/vinas-de-oro.webp",
      width: 1360,
      height: 3208,
    },
    company: "Pisco Viñas de Oro",
    stack: "NextJs | TS | Tailwindcss | WordPress | GraphQL",
    img: "/images/portfolio/projects/project-vinas-de-oro.webp",
    link: "https://www.piscovinasdeoro.com.pe/es",
    pageLink: "vinas-de-oro",
    description: ``,
  },
];
