import { TimelineResumeItem } from "./TimelineResumeItem";
import { cn } from "@/shared/helpers";
import { dataResumes } from "../../../_data";

interface IProps {
  className?: string;
}
export const TimelineResume = ({ className }: IProps) => {
  const Columns: JSX.Element[] = [];
  return (
    <ol
      className={cn(
        "container relative",
        "lg:grid lg:grid-cols-2 lg:gap-4",
        className
      )}
    >
      {dataResumes.map((data, index) => {
        if ((index + 1) % 2 === 0) {
          Columns.push(
            <li className={""} key={index}>
              <TimelineResumeItem {...dataResumes[index - 1]} />
              <TimelineResumeItem {...dataResumes[index]} />
            </li>
          );
          return null;
        }
      })}
      {Columns}
    </ol>
  );
};
