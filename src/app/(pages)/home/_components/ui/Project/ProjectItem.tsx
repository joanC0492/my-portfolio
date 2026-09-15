"use client";
import { cn } from "@/shared/helpers";
import { FaPaperclip, FaPlus } from "react-icons/fa6";
import { IDataProjects } from "../../../_domain";
import { getProjectUrl } from "../../../_domain/project-view";
import Image from "next/image";
import { useUIContext } from "@/store/context/ui/UIContext";

export const ProjectItem = ({
  id,
  company,
  stack,
  img,
  link,
  pageLink,
  type,
  publicUrl,
  viewMode,
  pageImage,
  title,
  alt,
}: IDataProjects) => {
  const { openModalCarrousel, changeProjectIndexActive } = useUIContext();
  const isCaseStudy = type === "case-study";
  const caseTitle = title || company;
  const stackItems = stack
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

  const projectUrl = getProjectUrl({
    viewMode,
    publicUrl,
    link,
    pageLink,
    pageImage,
  });

  const handleCarrousel = () => {
    changeProjectIndexActive(id);
    openModalCarrousel();
  };

  return (
    <article
      className={cn(
        "group relative rounded-xl overflow-hidden shadow-lg transition-all duration-[250ms]",
        "hover:shadow-gray-400",
        "col-span-12",
        "sm:col-start-2 sm:col-span-10",
        "md:col-start-0 md:col-span-6",
        "xl:col-start-0 xl:col-span-4"
      )}
    >
      <Image
        src={img}
        width={439}
        height={352}
        alt={alt || company}
        className={cn(
          "rounded-t-lg w-full h-full object-cover object-top aspect-video transition-all duration-[250ms]",
          "group-hover:scale-125"
        )}
      />
      <div
        className={cn(
          "flex items-center justify-center absolute left-0 top-0 w-full h-full bg-white/85 transition-all duration-300 scale-75 opacity-0",
          "group-hover:scale-100 group-hover:opacity-100"
        )}
      >
        <div className="text-center text-jc-dark-1 px-4 sm:px-5 w-full">
          {isCaseStudy ? (
            <>
              <p className="text-xl font-raleway font-bold">{company}</p>
              <p className="text-sm font-raleway font-semibold">{caseTitle}</p>
            </>
          ) : (
            <p className="text-xl font-raleway font-bold">{company}</p>
          )}
          <div className="mt-2 mb-2 flex flex-wrap justify-center gap-1.5 max-w-[22rem] mx-auto">
            {stackItems.map((tech) => (
              <span
                key={`${company}-${tech}`}
                className="font-open-sans text-xs font-semibold leading-relaxed px-2 py-0.5 rounded-md bg-white/60 text-jc-dark-1 border border-jc-dark-1/15 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center mt-4 gap-4">
            <button
              onClick={handleCarrousel}
              aria-label={`Ver detalles de ${company}`}
            >
              <FaPlus className="text-xl" />
            </button>
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar proyecto ${company}`}
              >
                <FaPaperclip className="text-xl" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
