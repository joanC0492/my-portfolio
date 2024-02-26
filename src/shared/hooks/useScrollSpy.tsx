import { useEffect, useRef, useState } from "react";

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeLink, setActiveLink] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const $element = document.getElementById(sectionId);
    if (!$element) return;
    const marginTop = 49; // height navbar
    const scrollToY =
      $element.getBoundingClientRect().top + window.scrollY - marginTop;
    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  };

  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const $section = document.getElementById(sectionIds[i]);
      if ($section) {
        const rect = $section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
      determineActiveSection();
    };

    if (!isMounted.current) handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    // properties
    activeLink,
    isScrolled,
    // methods
    scrollToSection,
  };
};
