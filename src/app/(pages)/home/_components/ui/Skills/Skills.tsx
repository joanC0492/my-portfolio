import { cn } from "@/shared/helpers";
import { ISkills } from "../../../_domain";

interface IProps {
  className?: string;
  dataSkills: ISkills[];
  variant?: "primary" | "secondary";
}
export const Skills = ({
  dataSkills,
  className = "",
  variant = "primary",
}: IProps) => {
  return (
    <ul className={cn("flex flex-wrap gap-2.5", className)}>
      {dataSkills.map((skill) => (
        <li
          key={skill.id}
          className={cn(
            "inline-flex items-center rounded-full border font-raleway font-semibold transition-colors",
            "text-jc-dark-4 dark:text-jc-white-1",
            variant === "primary"
              ? "border-[rgba(5,99,187,0.18)] bg-[rgba(255,255,255,0.92)] px-3.5 py-2 text-sm shadow-sm dark:border-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.06)]"
              : "border-[rgba(114,131,148,0.18)] bg-[rgba(255,255,255,0.76)] px-3 py-1.5 text-[13px] dark:border-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.04)] md:text-sm"
          )}
        >
          <span>{skill.title}</span>
        </li>
      ))}
    </ul>
  );
};
