import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dataProjects } from "../../home/_data";
import { isValidPageImage } from "../../home/_domain/project-view";

interface Props {
  params: {
    slug: string;
  };
}

const getProjectBySlug = (slug: string) =>
  dataProjects.find((project) => project.pageLink === slug);

export const generateStaticParams = () =>
  dataProjects
    .filter((project) => Boolean(project.pageLink))
    .map((project) => ({ slug: project.pageLink as string }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Joan Cochachi",
      description: "El proyecto solicitado no existe.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = project.title || project.company;
  const description =
    project.summary || project.description || `Proyecto ${project.company}`;
  const image = project.coverImage || project.heroImage || project.img;
  const canonicalPath = `/portafolio/${project.pageLink}`;

  return {
    title: `${title} | Joan Cochachi`,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      url: canonicalPath,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 675,
          alt: project.alt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
};

export default function PortafolioPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const pageImage = isValidPageImage(project.pageImage)
    ? project.pageImage
    : undefined;
  const image =
    pageImage?.src || project.heroImage || project.coverImage || project.img;

  return (
    <Image
      src={image}
      alt={project.alt || project.title || project.company}
      width={pageImage?.width || 1920}
      height={pageImage?.height || 1080}
      sizes="100vw"
      className="block w-full h-auto"
    />
  );
}
