import { Background } from "@/shared/components/ui/Background";
import { cn } from "@/shared/helpers";
import { ButtonPrimary } from "@/shared/components/ui/Buttons/ButtonPrimary";
import { RrssList, Title } from "../ui";

interface IProps extends React.ComponentPropsWithoutRef<"section"> {}
export const HomeHero = (props: IProps) => {
  const { className, ...restProps } = props;
  return (
    <section
      className={cn("h-screen relative container overflow-hidden", className)}
      {...restProps}
    >
      <Background
        // src="/images/portfolio/home-background.svg"
        src="/images/portfolio/home-background--compress.webp"
        name="Home Background"
        className={cn(
          "opacity-25 -left-16",
          "md:left-16",
          "lg:top-1/2 lg:left-1/2 lg:translate-x-[calc(50%-35rem)] lg:-translate-y-1/2"
        )}
      />
      <div className={cn("h-full grid items-center", "lg:grid-cols-12")}>
        <div
          className={cn(
            "text-center",
            "lg:text-left lg:col-start-2 lg:col-span-6"
          )}
        >
          <Title
            variant="h1"
            className="mb-2 lg:text-[64px]"
            text="Joan Cochachi"
          />
          <p
            className={cn(
              "text-xl/none font-raleway font-semibold tracking-wider text-jc-blue-1",
              "lg:text-[26px]/none lg:mt-6",
              "dark:text-jc-gray-2"
            )}
          >
            Frontend Developer
          </p>
          <p className="dark:text-jc-gray-2 lg:text-lg mx-auto lg:ml-0 max-w-[360px] lg:max-w-[576px] mt-1 px-4 md:px-0">
            Especializado en WordPress, React y Next.js. Creo sitios rápidos,
            accesibles y escalables.
          </p>
          <RrssList className="mt-6 lg:justify-start" />
          <ButtonPrimary
            href="/docs/cvcochachi2025.pdf?v=4"
            text="DESCARGA MI CV"
            target="_blank"
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
};
