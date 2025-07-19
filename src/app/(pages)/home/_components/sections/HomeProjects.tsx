import { cn } from "@/shared/helpers";
import { ProjectItem, ProjectList, Title } from "../ui";
import { dataProjects } from "../../_data";

interface IProps extends React.ComponentPropsWithoutRef<"section"> {}
export const HomeProjects = (props: IProps) => {
  const { className, ...restProps } = props;
  return (
    <section
      className={cn("py-12 container", className)}
      {...restProps}
    >
      <div
        className={cn(
          "text-center grid ",
          "lg:grid-cols-12 lg:items-center lg:h-full"
        )}
      >
        <div
          className={cn(
            "lg:col-start-2 lg:col-span-10",
            // "2xl:col-start-2 2xl:col-span-10"
          )}
        >
          <Title variant="h2" text="PORTAFOLIO" className="text-center" line />
          <p className="mt-8 font-open-sans font-normal text-lg text-jc-dark-5 dark:text-white">
            ALGUNAS COSAS QUE HE CONSTRUIDO
          </p>
          <ProjectList>
            {dataProjects.map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </ProjectList>
        </div>
      </div>
    </section>
  );
};
