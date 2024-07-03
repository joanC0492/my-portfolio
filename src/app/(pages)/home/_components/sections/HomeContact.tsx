import { cn } from "@/shared/helpers";
import { RrssList, Title } from "../ui";

interface IProps extends React.ComponentPropsWithoutRef<"section"> {}
export const HomeContact = (props: IProps) => {
  const { className, ...restProps } = props;
  // py-32
  return (
    <section className={cn("h-screen container", className)} {...restProps}>
      <div className={cn("grid h-full", "lg:grid-cols-12 items-center")}>
        <div className="lg:col-start-2 lg:col-span-10">
          <Title variant="h2" className="text-center" text="CONTACTO" line />
          <div
            className={cn(
              "text-center mx-auto px-4 mt-8 text-lg font-open-sans text-jc-dark-4 dark:text-jc-white-1"
            )}
          >
            <h3 className="font-bold text-[26px]">Joan Cochachi</h3>
            <p className="mt-4">Frontend Developer</p>
            <p className="mt-4">
              Estoy disponible para el trabajo independiente.
            </p>
            <p>Conéctese conmigo a través de los siguientes medios.</p>
            {/* <ul className="mt-4 text-left inline-block">
              <li>
                <span className="mr-2">Celular:</span>
                <a
                  href="tel:51900556665"
                  target="_blank"
                  className="text-jc-blue-1"
                >
                  +51 900556665
                </a>
              </li>
              <li className="mt-0.5">
                <span className="mr-2">Correo:</span>
                <a
                  href="mailto:joan0492@gmail.com"
                  target="_blank"
                  className="text-jc-blue-1"
                >
                  joan0492@gmail.com
                </a>
              </li>
            </ul> */}
            <div className="max-w-screen-sm mx-auto">
              <hr className="my-5 opacity-20" />
            </div>
            <RrssList className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
