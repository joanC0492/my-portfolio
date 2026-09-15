import { cn } from "@/shared/helpers";
import { ProjectItem, ProjectList, Title } from "../ui";
import { dataProjects } from "../../_data";

interface IProps extends React.ComponentPropsWithoutRef<"section"> {}
export const HomeProjects = (props: IProps) => {
  const { className, ...restProps } = props;
  const featuredCaseStudies = dataProjects.filter(
    (project) => project.type === "case-study" && project.featured === true
  );
  const legacyProjects = dataProjects.filter(
    (project) => project.type !== "case-study"
  );

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

          <h3 className="mt-8 text-left font-raleway text-2xl font-bold text-jc-dark-5 dark:text-white">
            Casos destacados
          </h3>
          <ProjectList>
            {featuredCaseStudies.map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </ProjectList>

          <h3 className="mt-12 text-left font-raleway text-2xl font-bold text-jc-dark-5 dark:text-white">
            Otros proyectos
          </h3>
          <ProjectList>
            {legacyProjects.map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </ProjectList>
        </div>
      </div>
    </section>
  );
};
