import { useMemo } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useUIContext } from "@/store/context/ui/UIContext";
import Image from "next/image";
import { dataProjects } from "../../../_data";
import { ButtonPrimary } from "@/shared/components/ui/Buttons/ButtonPrimary";

export const ProjectCarrousel = () => {
  const {
    changeProjectIndexActive,
    projectIndexActive: index,
    closeModalCarrousel,
  } = useUIContext();

  const handleClickButton = (increment: number) => () => {
    let indexActive: number = index + increment;
    if (indexActive < 0) indexActive = dataProjects.length - 1;
    if (indexActive > dataProjects.length - 1) indexActive = 0;
    changeProjectIndexActive(indexActive);
  };

  const project = useMemo(
    () => dataProjects.find((proj) => proj.id === index)!,
    [index]
  );

  return (
    <>
      <div className="bg-black/75 h-screen fixed z-50 inset-0" />
      <div className="h-screen fixed z-[60] inset-0 container flex items-center justify-center">
        <div className="relative p-8 rounded-lg bg-jc-white-1 text-jc-gray-1 dark:bg-jc-gray-1 dark:text-jc-white-1">
          <div className="max-w-sm rounded-lg shadow">
            <Image
              src={project.img}
              width={439}
              height={393}
              className="rounded-lg aspect-video object-cover object-top shadow-md"
              alt={project.company}
            />

            <div className="pt-2.5">
              <p>{project.stack}</p>
              <h5 className="my-2.5 text-[28px] font-bold tracking-tight">
                {project.company}
              </h5>
              {project.description && (
                <div
                  className="mb-4 -mt-2"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              )}
              <ButtonPrimary
                href={
                  project.pageLink
                    ? `/portafolio/${project.pageLink}`
                    : project.link
                }
                text="VER PROYECTO"
                className=""
                target="_blank"
              />
            </div>
          </div>

          <div className="z-10 absolute top-1/2 left-0 w-full flex items-center justify-between -translate-y-1/2">
            <button>
              <FaAngleLeft
                className="text-3xl"
                onClick={handleClickButton(-1)}
              />
            </button>
            <button>
              <FaAngleRight
                className="text-3xl"
                onClick={handleClickButton(1)}
              />
            </button>
          </div>
          <button
            className="absolute top-0 right-0 p-1.5"
            onClick={closeModalCarrousel}
          >
            <RxCross2 className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};
