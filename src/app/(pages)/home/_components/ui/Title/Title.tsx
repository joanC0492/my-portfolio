import { cn } from "@/shared/helpers";
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface IProps {
  text: string;
  variant: HeadingLevel;
  className?: string;
  line?: boolean;
}
export const Title = ({
  text,
  variant,
  className = "",
  line = false,
}: IProps) => {
  const Component = variant || "div";
  return (
    <Component
      className={cn(
        "font-raleway font-bold text-4xl text-jc-dark-1 relative",
        line && [
          "pb-4 before:content-[''] before:absolute before:block before:w-[120px] before:h-[1px] before:bg-jc-gray-3 before:bottom-[1px] before:left-[calc(50%-60px)]",
          "after:content-[''] after:absolute after:block after:w-10 after:h-[3px] after:bg-jc-blue-1 after:bottom-0 after:left-[calc(50%-20px)]",
        ],
        "dark:text-jc-white-1",
        className
      )}
    >
      {text}
    </Component>
  );
};
