"use client";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoDocumentOutline,
  IoJournalOutline,
  IoMailOutline,
} from "react-icons/io5";
import { cn } from "@/shared/helpers";
import { useUIContext } from "@/store/context/ui/UIContext";
import { useScrollSpy } from "@/shared/hooks";

const dataSideBar = [
  {
    id: 1,
    text: "Inicio",
    Icon: IoHomeOutline,
    path: "hero",
  },
  {
    id: 2,
    text: "Sobre mí",
    Icon: IoPersonOutline,
    path: "about",
  },
  {
    id: 3,
    text: "Experiencia",
    Icon: IoDocumentOutline,
    path: "resume",
  },
  {
    id: 4,
    text: "Portafolio",
    Icon: IoJournalOutline,
    path: "portfolio",
  },
  {
    id: 5,
    text: "Contacto",
    Icon: IoMailOutline,
    path: "contact",
  },
];
const sectionIds = dataSideBar.map((item) => item.path);

export const SideBar = () => {
  const { sideMenuOpen, closeSideMenu } = useUIContext();
  const { activeLink, isScrolled, scrollToSection } = useScrollSpy(sectionIds);

  return (
    <aside
      className={cn(
        "h-screen fixed left-0 top-0 bottom-0 z-40 bg-white w-[300px] flex items-center justify-center transition-all duration-[250ms] -translate-x-[300px]",
        "dark:bg-jc-gray-1",
        "dark:lg:bg-transparent",
        sideMenuOpen && "translate-x-0",
        isScrolled && "",
        "lg:bg-transparent lg:translate-x-0 lg:w-0"
      )}
    >
      <ul
        className={cn(
          "font-open-sans font-normal w-full mx-5 space-y-3",
          "lg:ml-10"
        )}
      >
        {dataSideBar.map(({ id, text, Icon, path }) => (
          <li
            key={id}
            onClick={() => scrollToSection(path)}
            className="lg:w-fit"
          >
            <button
              className={cn(
                "group w-full bg-jc-white-1 text-jc-dark-1 rounded-3xl px-5 py-3.5 transition-colors duration-200",
                "hover:bg-jc-blue-1 hover:text-white",
                activeLink === path && "bg-jc-blue-1 text-white",
                "lg:transition-all lg:duration-[250ms] lg:w-[52px] lg:h-[52px] lg:overflow-hidden lg:rounded-full lg:px-0 lg:py-0",
                "lg:hover:w-full"
              )}
              onClick={closeSideMenu}
            >
              <div className={cn("flex items-center lg:w-[155px]")}>
                <Icon className={cn("text-lg", "lg:w-[52px]")} />
                <span
                  className={cn(
                    "text-base ml-1.5",
                    "lg:opacity-0",
                    "group-hover:lg:-ml-2 group-hover:lg:opacity-100"
                  )}
                >
                  {text}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};
