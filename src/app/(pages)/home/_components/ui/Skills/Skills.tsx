import { cn } from "@/shared/helpers";
import { dataSkills } from "../../../_data";

interface IProps {
  className?: string;
}
export const Skills = ({ className = "" }: IProps) => {
  return (
    <ul className={cn("space-y-2", className)}>
      {dataSkills.map((skill) => (
        <li
          key={skill.id}
          className="flex items-center gap-x-2 xl:gap-x-4 grow shrink-0 basis-1/2 max-w-[50%]"
        >
          <svg
            className="h-6 w-6 flex-none fill-jc-blue-1 stroke-jc-gray-1 stroke-2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
          </svg>
          <span className="text-jc-dark-4/75 font-raleway font-semibold text-sm lg:text-base dark:text-white">
            {skill.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
