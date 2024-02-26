"use client";
import { Header } from "../ui/Header";
import { SideBar } from "../ui/SideBar";
import { Footer } from "../ui/Footer";
import { ModalLayer } from "../ui/Modal";
import { useUIContext } from "@/store/context/ui/UIContext";
import { ProjectCarrousel } from "@/app/(pages)/home/_components/ui";

interface IProps {
  children: React.ReactNode;
  className?: string;
}
export const TemplateMain = ({ children, className = "" }: IProps) => {
  const { sideMenuOpen, modalCarrouselOpen } = useUIContext();
  return (
    <>
      <main className={className}>
        <Header />
        <SideBar />
        {children}
        <Footer />
      </main>
      {sideMenuOpen && <ModalLayer />}
      {modalCarrouselOpen && <ProjectCarrousel />}
    </>
  );
};
