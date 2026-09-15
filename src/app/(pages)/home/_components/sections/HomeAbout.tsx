import { cn } from "@/shared/helpers";
import { Skills, Title } from "../ui";
import Image from "next/image";
import { dataSkills } from "../../_data";

interface IProps extends React.ComponentPropsWithoutRef<"section"> {}
export const HomeAbout = (props: IProps) => {
  const { className, ...restProps } = props;
  const mainSkillCategories = dataSkills.slice(0, 2);
  const secondarySkillCategories = dataSkills.slice(2);

  return (
    <section
      className={cn("py-16 lg:min-h-screen lg:py-20", className)}
      {...restProps}
    >
      <div
        className={cn(
          "grid items-center h-full text-center",
          "lg:grid-cols-12"
        )}
      >
        <div className="lg:col-start-2 lg:col-span-10">
          <Title variant="h2" className="text-[32px]" text="SOBRE MÍ" line />
          <div className="mx-auto mt-6 max-w-4xl px-4 text-jc-dark-5 font-open-sans text-lg font-normal leading-8 space-y-4 dark:text-jc-white-1 md:px-8">
            <p>
              Soy desarrollador web especializado en WordPress, WooCommerce y
              PHP. Tengo experiencia en mantenimiento, desarrollo de
              funcionalidades, personalización de themes y plugins,
              integraciones con servicios externos, optimización de rendimiento
              y resolución de errores.
            </p>
            <p>
              También trabajo con JavaScript, MySQL, Git, SSH y tecnologías
              complementarias como React, Next.js, Angular y Laravel.
            </p>
          </div>
          <div
            className={cn(
              "mx-auto mt-14 max-w-6xl px-4",
              "lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:px-2",
              "2xl:max-w-screen-xl"
            )}
          >
            <Image
              src={"/images/portfolio/profile-laptop--compress.webp"}
              width={165}
              height={89}
              alt="Home student"
              className={cn(
                "hidden",
                "mx-auto mt-8 w-full max-w-[180px] px-1 opacity-15",
                "md:max-w-[200px]",
                "lg:col-span-2 lg:mt-20 lg:max-w-[220px] lg:self-start",
                "2xl:max-w-[240px]"
              )}
            />
            <div
              className={cn(
                "mx-auto w-full max-w-5xl text-left",
                "lg:col-span-12"
              )}
            >
              <Title
                text="Habilidades"
                variant="h3"
                className="mt-4 text-[26px] text-jc-dark-4 lg:mt-0"
              />

              <div className="mt-8 space-y-8 lg:mt-10 lg:space-y-10">
                <div>
                  <p className="mb-4 font-raleway text-xs font-bold uppercase tracking-[0.24em] text-jc-blue-1 md:text-sm">
                    Stack principal
                  </p>
                  <ul className="grid gap-4 lg:grid-cols-2 lg:gap-5">
                    {mainSkillCategories.map((skillCategory) => (
                      <li
                        key={skillCategory.id}
                        className="rounded-2xl border border-[rgba(5,99,187,0.18)] bg-[rgba(5,99,187,0.06)] p-5 shadow-sm dark:border-[rgba(255,255,255,0.08)] dark:bg-[rgba(255,255,255,0.03)]"
                      >
                        <div className="flex items-center gap-2">
                          <skillCategory.Icon className="text-lg text-jc-blue-1" />
                          <Title
                            text={skillCategory.title}
                            variant="h5"
                            className="text-base text-jc-dark-4 md:text-[20px]"
                          />
                        </div>
                        <Skills
                          dataSkills={skillCategory.skills}
                          className="mt-4"
                          variant="primary"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-4 font-raleway text-xs font-bold uppercase tracking-[0.24em] text-jc-gray-3 dark:text-jc-white-1/70 md:text-sm">
                    Herramientas y complementarias
                  </p>
                  <ul className="grid gap-4 lg:grid-cols-2 lg:gap-5">
                    {secondarySkillCategories.map((skillCategory) => (
                      <li
                        key={skillCategory.id}
                        className="rounded-2xl border border-[rgba(114,131,148,0.16)] bg-[rgba(114,131,148,0.06)] p-4 dark:border-[rgba(255,255,255,0.08)] dark:bg-[rgba(255,255,255,0.02)]"
                      >
                        <div className="flex items-center gap-2">
                          <skillCategory.Icon className="text-base text-jc-gray-3 dark:text-jc-white-1/80" />
                          <Title
                            text={skillCategory.title}
                            variant="h5"
                            className="text-sm text-jc-dark-4 md:text-[17px]"
                          />
                        </div>
                        <Skills
                          dataSkills={skillCategory.skills}
                          className="mt-3"
                          variant="secondary"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
