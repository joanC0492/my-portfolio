import { cn } from "@/shared/helpers";
import { dataSkills } from "../../../_data";

interface IProps {
  className?: string;
}
export const Skills = ({ className = "" }: IProps) => {
  return (
    <ul className={cn("space-y-3 lg:space-y-0", className)}>
      {dataSkills.map((skill) => (
        <li key={skill.id}>
          <span className="text-jc-dark-4/75 font-raleway font-semibold text-xs dark:text-white">
            {skill.title}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-jc-blue-1 h-2.5 rounded-full"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
