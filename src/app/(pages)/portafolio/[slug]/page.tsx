import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}
export default function PortafolioPage({ params }: Props) {
  return (
    <Image
      src={`/images/portfolio/projects-page/${params.slug}.webp`}
      alt={params.slug}
      width={1920}
      height={1080}
      className="w-full h-auto object-cover"
    />
  );
}
