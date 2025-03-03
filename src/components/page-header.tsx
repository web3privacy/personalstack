import type React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
  tagline: string;
};

export const PageHeader: React.FC<Props> = ({ img, title, tagline }) => {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="absolute top-4 left-4">
        <Image
          src="/logo-white.svg"
          alt="Logo"
          className="h-12"
          width={200}
          height={55}
        />
      </div>

      <div className="absolute top-4 right-4">
        <Button variant={"outline"} className=" px-4 py-2">
          Action
        </Button>
      </div>
      <div className="relative text-center">
        <h1>{title}</h1>
        <h2 className="text-muted-foreground">{tagline}</h2>
      </div>
    </div>
  );
};
