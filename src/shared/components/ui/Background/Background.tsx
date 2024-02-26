import { cn } from "@/shared/helpers";
import Image from "next/image";

interface IProps {
  src: string;
  name: string;
  className?: string;
}
export const Background = ({ name, src, className = "" }: IProps) => {
  return (
    <Image
      src={src}
      alt={name}
      sizes="100vw"
      quality={100}
      width={976}
      height={826}
      className={cn("absolute z-0 left-0 max-w-none [&+*]:relative", className)}
    />
  );
};