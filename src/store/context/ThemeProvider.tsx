"use client";
import { ThemeProvider } from "next-themes";

interface IProps {
  children: React.ReactNode;
}
export const ChangeThemeProvider = ({ children }: IProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
};
