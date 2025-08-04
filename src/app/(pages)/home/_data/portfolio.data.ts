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
    title: "Tecnologías frontend",
    skills: [
      {
        id: 0,
        title: "HTML & CSS",
        percentage: 75,
      },
      {
        id: 1,
        title: "JavaScript (ES6+)",
        percentage: 75,
      },

      {
        id: 2,
        title: "ReactJS",
        percentage: 75,
      },
      {
        id: 3,
        title: "Next.js",
        percentage: 75,
      },
      {
        id: 4,
        title: "Tailwind CSS",
        percentage: 75,
      },
      {
        id: 5,
        title: "SASS",
        percentage: 75,
      },
    ],
  },
  {
    id: 1,
    Icon: MdDns,
    title: "Backend, CMS y DB",
    skills: [
      {
        id: 0,
        title: "Laravel",
        percentage: 75,
      },
      {
        id: 1,
        title: "WordPress / CMS",
        percentage: 75,
      },
      {
        id: 2,
        title: "Shopify (Liquid)",
        percentage: 75,
      },

      {
        id: 3,
        title: "MySQL",
        percentage: 75,
      },
      {
        id: 4,
        title: "MongoDB",
        percentage: 75,
      },
    ],
  },
  {
    id: 2,
    Icon: MdTerminal,
    title: "Herramientas y entorno",
    skills: [
      {
        id: 0,
        title: "Git & GitHub",
        percentage: 75,
      },
      {
        id: 1,
        title: "Node.js",
        percentage: 75,
      },

      {
        id: 2,
        title: "Vite",
        percentage: 75,
      },
    ],
  },
];

export const dataResumes: IResume[] = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 0,
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
    company: "Exsa",
    stack: "LARAVEL | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-exsa.webp",
    link: "https://exsa.net/es",
    description: ``,
  },
  {
    id: 9,
    company: "Infopesa",
    stack: "LARAVEL | HTML | CSS | JS | VUE",
    img: "/images/portfolio/projects/project-infopesa.webp",
    link: "https://infopesa.com/",
    pageLink: "infopesa",
    description: ``,
  },
  {
    id: 10,
    company: "Pisco Viñas de Oro",
    stack: "NextJs | TS | Tailwindcss | WordPress | GraphQL",
    img: "/images/portfolio/projects/project-vinas-de-oro.webp",
    link: "https://www.piscovinasdeoro.com.pe/es",
    pageLink: "vinas-de-oro",
    description: ``,
  },
];
