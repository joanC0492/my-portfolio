"use client";
import { cn } from "@/shared/helpers";
import { FaPaperclip, FaPlus } from "react-icons/fa6";
import { IDataProjects } from "../../../_domain";
import Image from "next/image";
import { useUIContext } from "@/store/context/ui/UIContext";

export const ProjectItem = ({
  id,
  company,
  stack,
  img,
  link,
}: IDataProjects) => {
  const { openModalCarrousel, changeProjectIndexActive } = useUIContext();

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
        alt="Blog"
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
        <div className="text-center text-jc-dark-1">
          <p className="text-xl font-raleway font-bold">{company}</p>
          <p className="font-open-sans font-bold text-sm">{stack}</p>
          <div className="flex items-center justify-center mt-4 gap-4">
            <button>
              <FaPlus className="text-xl" onClick={handleCarrousel} />
            </button>
            <a href={link} target="_blank">
              <FaPaperclip className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
