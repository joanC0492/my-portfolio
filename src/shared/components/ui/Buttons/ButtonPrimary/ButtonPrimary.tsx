import { cn } from "@/shared/helpers";
interface IProps {
  href: string;
  text: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  className?: string;
}
export const ButtonPrimary = ({
  href,
  text,
  target,
  className = "",
}: IProps) => {
  return (
    <a
      target={target || ""}
      rel="noopener noreferrer"
      href={href}
      className={cn(
        "group translate-y-0 opacity-100 text-sm tracking-[4px] max-w-[220px] h-[50px] leading-[50px] inline-block text-center outline-0 border-none px-0 w-full relative",
        "lg:transition-all lg:duration-500",
        className
      )}
    >
      <div className="h-full overflow-hidden w-full relative">
        <span
          className={cn(
            "bg-jc-blue-1 absolute -left-[5%] w-0 h-full z-20 -skew-x-[10deg]",
            "lg:group-hover:w-[110%] lg:transition-all lg:duration-500"
          )}
        />
        <span
          className={cn(
            "border border-solid border-jc-blue-1 w-full h-full absolute z-10 left-0",
            "dark:border-jc-white-1"
          )}
        />
        <span
          className={cn(
            "text-jc-blue-1 absolute z-30 top-0 left-0 w-full h-full font-open-sans font-semibold",
            "lg:hover:text-jc-white-1",
            "dark:text-jc-white-1"
          )}
        >
          {text}
        </span>
      </div>
    </a>
  );
};
