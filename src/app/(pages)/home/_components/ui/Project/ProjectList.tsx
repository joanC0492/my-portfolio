import { cn } from "@/shared/helpers";

interface IProps {
  className?: string;
  children: React.ReactNode;
}
export const ProjectList = ({ children, className = "" }: IProps) => {
  return (
    <div className={cn("mt-6 mx-4 grid gap-4", "sm:grid-cols-12", className)}>
      {children}
    </div>
  );
};
