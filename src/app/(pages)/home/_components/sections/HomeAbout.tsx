import { cn } from "@/shared/helpers";
import { Skills, Title } from "../ui";
import Image from "next/image";
import { dataSkills } from "../../_data";

interface IProps extends React.ComponentPropsWithoutRef<"section"> {}
export const HomeAbout = (props: IProps) => {
  const { className, ...restProps } = props;
  return (
    <section className={cn("lg:h-screen py-12", "", className)} {...restProps}>
      <div
        className={cn(
          "grid items-center h-full text-center",
          "lg:grid-cols-12"
        )}
      >
        <div className="lg:col-start-2 lg:col-span-10">
          <Title variant="h2" className="text-[32px]" text="SOBRE MÍ" line />
          {/* <div className="text-jc-dark-5 px-4 mt-4 text-lg font-open-sans font-normal space-y-1 dark:text-jc-gray-2"> */}
          <div className="text-jc-dark-5 px-4 mt-4 text-lg font-open-sans font-normal space-y-1 dark:text-jc-white-1">
            <p>
              ¡Hola! Soy Joan, desarrollador frontend con enfoque en soluciones
              modernas, eficientes y bien estructuradas.
            </p>
            <p>
              Apasionado por el aprendizaje constante, me especializo en
              construir interfaces funcionales, escalables y fáciles de
              mantener.
            </p>
          </div>
          <div
            className={cn(
              "mx-auto",
              "",
              "lg:max-w-6xl lg:grid lg:grid-cols-12 lg:items-center",
              "2xl:max-w-screen-xl"
            )}
          >
            {/* 2xl:mt-0 */}
            <Image
              src={"/images/portfolio/profile-laptop.svg"}
              width={165}
              height={89}
              alt="Home student"
              className={cn(
                "opacity-65 w-full px-1 mt-7 mx-auto",
                "md:max-w-lg",
                "lg:col-span-3 lg:mt-5",
                "2xl:max-w-full 2xl:col-start-2"
              )}
            />
            <div
              className={cn(
                "w-full px-4 mx-auto text-left",
                "md:px-8",
                "lg:col-span-8 lg:pl-4 lg:pr-0",
                ""
              )}
            >
              <Title
                text="Habilidades"
                variant="h3"
                className="mt-4 text-[26px] text-jc-dark-4"
              />

              <ul className="flex flex-wrap [&_li:last-child]:w-full">
                {dataSkills.map((skillCategory) => (
                  <li key={skillCategory.id} className="w-1/2 | md:flex-1">
                    <div className="inline-flex gap-1 items-center mt-5">
                      <skillCategory.Icon className="" />
                      <Title
                        text={skillCategory.title}
                        variant="h5"
                        className="text-sm md:text-[18px] text-jc-dark-4 leading-none"
                      />
                    </div>
                    <Skills
                      dataSkills={skillCategory.skills}
                      className={cn("mt-2", "flex flex-wrap")}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
