import { cn } from "@/shared/helpers";
import { ButtonToggleSideBar, ButtonToggleTheme } from "../Buttons";

export const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <nav
        className={cn(
          "border-b border-gray-700/15 w-full flex backdrop-blur-lg py-2 px-3 shadow-sm",
          "dark:border-gray-200/15"
        )}
      >
        <div className="ml-auto">
          <div className="flex items-center gap-x-2">
            <ButtonToggleTheme />
            <ButtonToggleSideBar />
          </div>
        </div>
      </nav>
    </header>
  );
};
