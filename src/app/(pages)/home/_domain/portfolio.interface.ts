import { IconType } from "react-icons";

export interface IResume {
  id: number;
  position: string;
  company: string;
  period: string;
  experienceList: string[];
}

export interface IDataRrss {
  id: number;
  Icon: IconType;
  url: string;
}

export interface ISkills {
  id: number;
  title: string;
}
export interface IDataSkills {
  id: number;
  title: string;
  Icon: IconType;
  skills: ISkills[];
}

export interface IDataProjects {
  id: number;
  company: string;
  stack: string;
  img: string;
  link: string;
  pageLink?: string;
  description: string;
  type?: "case-study" | "project";
  featured?: boolean;
  title?: string;
  summary?: string;
  context?: string;
  problem?: string;
  role?: string;
  solution?: string;
  result?: string;
  alt?: string;
  coverImage?: string;
  heroImage?: string;
  gallery?: string[];
  publicUrl?: string;
  technologies?: string[];
}
