import { NextPage } from "next";
import { TemplateMain } from "@/shared/components/template";
import {
  HomeAbout,
  HomeContact,
  HomeExperience,
  HomeHero,
  HomeProjects,
} from "./home/_components/sections";

const HomePage: NextPage = () => {
  return (
    <TemplateMain className="bg-white dark:bg-jc-gray-1">
      <HomeHero id="hero" />
      <HomeAbout id="about" />
      <HomeExperience id="resume" />
      <HomeProjects id="portfolio" />
      <HomeContact id="contact" />
    </TemplateMain>
  );
};

export default HomePage;
