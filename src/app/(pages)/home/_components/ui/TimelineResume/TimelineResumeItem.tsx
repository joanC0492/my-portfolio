import { cn } from "@/shared/helpers";
import { IResume } from "../../../_domain";

interface IProps extends IResume {
  className?: string;
}
export const TimelineResumeItem = ({
  position,
  company,
  period,
  experienceList,
  className = "",
}: IProps) => {
  return (
    <div
      className={cn(
        "mb-4 ms-6 relative  dark:border-gray-700",
        "[&:before]:content-[''] [&:before]:bg-gray-200 [&:before]:absolute [&:before]:top-0 [&:before]:-left-6 [&:before]:w-[1px] [&:before]:h-full",
        className
      )}
    >
      <span className="-left-9 top-2 absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          className="w-2.5 h-2.5 text-jc-blue-1 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>

      <h3 className="flex items-center mb-1 text-[26px] font-raleway font-bold text-gray-900 dark:text-white">
        {position}
      </h3>
      <h4 className="font-open-sans font-semibold text-jc-blue-1 mt-4">
        {company}
      </h4>
      <span className="font-raleway font-semibold mt-[10px] text-base inline-block py-[5px] px-[15px] bg-jc-gray-3 dark:text-jc-gray-2 dark:bg-jc-dark-3/85">
        {period}
      </span>
      <ul
        className={cn(
          "px-4 mt-[10px] list-disc font-open-sans font-normal text-lg",
          "[&_a]:underline [&_a]:text-jc-blue-1 hover:[&_a]:text-jc-blue-1/75",
          "dark:text-jc-gray-3"
        )}
      >
        {experienceList.map((item, i) => (
          <li key={i} className="">
            <span
              className=""
              dangerouslySetInnerHTML={{
                __html: item,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};