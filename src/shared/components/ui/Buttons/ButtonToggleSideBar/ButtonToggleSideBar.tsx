"use client";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { cn } from "@/shared/helpers";
import { useUIContext } from "@/store/context/ui/UIContext";

interface IProps {
  className?: string;
}
export const ButtonToggleSideBar = ({ className = "" }: IProps) => {
  const { sideMenuOpen, openSideMenu, closeSideMenu } = useUIContext();
  return (
    <button
      className={cn(
        "group transition-all duration-[250ms] rounded-md p-1",
        "dark:hover:bg-gray-700",
        "lg:hidden",
        className
      )}
    >
      <RxHamburgerMenu
        className={`text-2xl ${sideMenuOpen ? "hidden" : ""}`}
        onClick={openSideMenu}
      />
      <RxCross2
        className={`text-2xl text-white ${sideMenuOpen ? "" : "hidden"}`}
        onClick={closeSideMenu}
      />
    </button>
  );
};
