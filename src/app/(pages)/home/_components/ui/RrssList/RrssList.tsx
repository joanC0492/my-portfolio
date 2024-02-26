import { cn } from "@/shared/helpers";
import { dataRrss } from "../../../_data";

interface IProps {
  className?: string;
}
export const RrssList = ({ className = "" }: IProps) => {
  return (
    <ul className={cn("flex gap-4 justify-center items-center", className)}>
      {dataRrss.map((item) => (
        <li key={item.id}>
          <a href={item.url} target="_blank" className="text-2xl">
            <item.Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};
