import { IDataProjects, IDataRrss, IDataSkills, IResume } from "../_domain";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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

export const dataSkills: IDataSkills[] = [
  {
    id: 1,
    title: "HTML & CSS",
    percentage: 75,
  },
  {
    id: 2,
    title: "SASS",
    percentage: 75,
  },
  {
    id: 3,
    title: "JAVASCRIPT",
    percentage: 75,
  },
  {
    id: 4,
    title: "REACTJS",
    percentage: 75,
  },
  {
    id: 5,
    title: "TAILWIND",
    percentage: 75,
  },
  {
    id: 6,
    title: "NODEJS",
    percentage: 75,
  },
  {
    id: 7,
    title: "GIT",
    percentage: 75,
  },
  {
    id: 8,
    title: "WORDPRESS/CMS",
    percentage: 75,
  },
  {
    id: 9,
    title: "MONGODB",
    percentage: 75,
  },
  {
    id: 10,
    title: "MYSQL",
    percentage: 75,
  },
];

export const dataResumes: IResume[] = [
  {
    id: 0,
    position: "Frontend Developer",
    company: "FREELANCE",
    period: "(05/2022 - Actualmente)",
    experienceList: [
      `Desarrollo de landing pages en HubSpot CMS.`,
      `Sitio web para cirujano con WordPress y Elementor.`,
      `Personalización de WP-Rentals en proyecto wordpress, implementando: WooCommerce, Mercado Pago y mapas.`,
      `Mailings responsivos para BCP (Outlook Desktop compatible).`,
      `Desarrollo y mantenimiento de proyectos en ReactJS.`,
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
    ],
  },
  {
    id: 2,
    position: "CRO UX Analyst & Fullstack Developer",
    company: "HAVAS+ SAC",
    period: "(08/2021 - 04/2022)",
    experienceList: [
      `Implementar experimentos que ayudaron a incrementar la conversión de leads, para Movistar (<a href="https://www.movistar.com.pe/" target="_blank" rel="noopener">https://movistar.com.pe</a> ).`,
      `Desarrollo de nuevas funcionalidades en la web pública de Movistar.`,
      `Desarrollo de nuevas funcionalidades en el catálogo de Movistar ( <a href="https://catalogo.movistar.com.pe/" target="_blank" rel="noopener">https://catalogo.movistar.com.pe/</a> ).`,
      `Mantenimiento a la aplicación ganadores de Movistar.`,
      `Configuración de etiquetas con Google Tag Manager`,
      `Intervenciones de ladings utilizando scripts GTM`,
      `Creación de experimentos (A / B y otros), utilizando Google Optimize`,
      `Tecnologías utilizadas: Javascript, CSS3, Html5, VueJs, Gulp, GIT, Google Optimize, GTM, Hotjar`,
    ],
  },
  {
    id: 3,
    position: "Frontend Developer",
    company: "SRBURNS PERÚ",
    period: "(01/2021 - 07/2021)",
    experienceList: [
      `Mejoras en la web de Entel Empresas, tanto Frontend como Backend ( <a href="https://www.entel.pe/empresas/" target="_blank" rel="noopener">https://www.entel.pe/empresas/</a> ).`,
      `Desarrollo de Landings Pages, enfocado a la conversión de Leads`,
      `Mantenimiento y creación de funcionalidades`,
      `Tecnologías utilizadas: Javascript, CSS3, Html5, Pug, Jquery, PHP, Wordpress, MySql, Gulp, WebPack, GIT`,
    ],
  },
  {
    id: 4,
    position: "Web Developer",
    company: "IDEAS LATAM SAC",
    period: "(09/2020 - 01/2021)",
    experienceList: [
      `Creación de sistemas webs usando Wordpress`,
      `Implementación de Google Tag Manager y Google Analytic en Webs y Landing Pages`,
      `Tecnologías utilizadas: Javascript, CSS3, Less, Booststrap, Html5, Jquery, PHP y Wordpress`,
    ],
  },
  {
    id: 5,
    position: "Frontend Developer",
    company: "MEDIA IMPACT",
    period: "(2018 - 2020)",
    experienceList: [
      `Maquetación de sitios web`,
      `Web responsive`,
      `Mantenimiento de base de datos`,
      `Tecnologías usadas: Javascript, CSS3, Html5, Jquery, PHP, Laravel, MySql, VueJS, GIT`,
    ],
  },
];

export const dataProjects: IDataProjects[] = [  
  {
    id: 0,
    company: "Dr. Manuel Eduardo Flores Vilchez",
    stack: "WORDPRESS | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-dreduardoflorescirugia.webp",
    link: "https://joancochachi.online/dr-manuel-eduardo-flores-vilchez/",
  },
  {
    id: 1,
    company: "Spaciuz",
    stack: "WORDPRESS | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-spaciuz.webp",
    link: "https://joancochachi.online/spaciuz/",
  },
  {
    id: 2,
    company: "Colectivo23",
    stack: "HTML | CSS | JS | HubSpot CMS",
    img: "/images/portfolio/projects/project-the-unconference.webp",
    link: "https://joancochachi.online/the-unconference-23/",
  },
  {
    id: 3,
    company: "Movistar",
    stack: "HTML | CSS | JS | GA | OPTIMIZE | GTM",
    img: "/images/portfolio/projects/project-movistar.webp",
    link: "https://www.movistar.com.pe/",
  },
  {
    id: 4,
    company: "Entel Empresas",
    stack: "WORDPRESS | HTML | PUG | CSS | SCSS | JS",
    img: "/images/portfolio/projects/project-entel-empresas.webp",
    link: "https://www.entel.pe/empresas/",
  },
  {
    id: 5,
    company: "Innovación Digital",
    stack: "WORDPRESS | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-innovacion-digital.webp",
    link: "https://innovaciondigital.biz/",
  },
  {
    id: 6,
    company: "Exsa",
    stack: "LARAVEL | HTML | CSS | JS",
    img: "/images/portfolio/projects/project-exsa.webp",
    link: "https://exsa.net/es",
  },
  {
    id: 7,
    company: "Infopesa",
    stack: "LARAVEL | HTML | CSS | JS | VUE",
    img: "/images/portfolio/projects/project-infopesa.webp",
    link: "https://infopesa.com/",
  },
  {
    id: 8,
    company: "Pisco Viñas de Oro",
    stack: "NextJs | TS | Tailwindcss | WordPress | GraphQL",
    img: "/images/portfolio/projects/project-vinas-de-oro.webp",
    link: "https://www.piscovinasdeoro.com.pe/es",
  },
];
