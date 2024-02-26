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

export interface IDataSkills {
  id: number;
  title: string;
  percentage: number;
}

export interface IDataProjects {
  id: number;
  company: string;
  stack: string;
  img: string;
  link: string;
}
