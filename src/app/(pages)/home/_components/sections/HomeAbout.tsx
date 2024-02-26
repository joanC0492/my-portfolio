import { cn } from "@/shared/helpers";
import { Skills, Title } from "../ui";
import Image from "next/image";

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
          <div className="text-jc-dark-5 px-4 mt-4 text-lg font-open-sans font-normal space-y-1 dark:text-jc-gray-2">
            <p>
              Hola ! Soy Joan, disfruto desarrollar sitios web implementando
              tecnologías eficientes y modernas.
            </p>
            <p>Una de mis mayores motivaciones es aprender.</p>
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:items-center">
            <Image
              src={"/images/portfolio/profile-laptop.svg"}
              width={165}
              height={89}
              alt="Home student"
              className={cn(
                "opacity-65 w-full px-1 mt-7 mx-auto",
                "md:max-w-lg",
                "lg:col-span-4",
                "2xl:max-w-full 2xl:col-start-2 2xl:col-span-4 2xl:mt-0"
              )}
            />
            <div
              className={cn(
                "w-full px-4 mx-auto text-left",
                "md:px-8",
                "lg:pl-4 lg:pr-0 lg:col-span-8",
                "2xl:col-span-6"
              )}
            >
              <Title
                text="Habilidades"
                variant="h3"
                className="mt-4 text-[26px] text-jc-dark-4"
              />
              <Skills
                className={cn(
                  "mt-5",
                  "lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-3"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
