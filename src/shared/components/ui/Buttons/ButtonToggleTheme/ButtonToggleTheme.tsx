"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/shared/components/my-icons";
import { cn } from "@/shared/helpers";

interface IProps {
  className?: string;
}
export const ButtonToggleTheme = ({ className = "" }: IProps) => {
  const { setTheme, resolvedTheme } = useTheme();

  const changedTheme = (): void =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <button
      className={cn(
        `group/switch relative rounded-xl block w-12 h-6 shrink-0 bg-[#8e96aa23] border-[#c2c2c4] border border-solid transition-colors duration-[250ms]`,
        `dark:border-[#3c3f44] dark:bg-[#65758528]`,
        className
      )}
      type="button"
      title="Switch to dark theme"
      onClick={changedTheme}
    >
      <span
        className={cn(
          "bg-white absolute top-0 left-0 w-[22px] h-[22px] rounded-[50%] transition-transform duration-[250ms]",
          "dark:bg-black dark:translate-x-6 dark:-left-[2px]"
        )}
      >
        <span className="relative block w-[22px] h-[22px] rounded-[50%] overflow-hidden">
          <SunIcon className="absolute top-[3px] left-[4px] w-4 h-4 fill-[#3c3c43c6] transition-opacity duration-[250ms] dark:opacity-0" />
          <MoonIcon className="absolute top-[3px] left-[4px] w- h-4 fill-[#fffff5db] transition-opacity duration-[250ms] opacity-0 dark:opacity-100" />
        </span>
      </span>
    </button>
  );
};
