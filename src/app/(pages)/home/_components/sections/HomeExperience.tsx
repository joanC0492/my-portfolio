import { cn } from "@/shared/helpers";
import { TimelineResume, Title } from "../ui";

interface IProps extends React.ComponentPropsWithoutRef<"section"> {}
export const HomeExperience = (props: IProps) => {
  const { className, ...restProps } = props;
  return (
    <section
      className={cn("min-h-screen py-12 container", className)}
      {...restProps}
    >
      <div className={cn("grid px-4 mx-auto", "lg:grid-cols-12")}>
        <div className="lg:col-start-2 lg:col-span-10">
          <Title text="EXPERIENCIA" variant="h2" className="text-center" line />
          <TimelineResume className="mt-8" />
        </div>
      </div>
    </section>
  );
};
