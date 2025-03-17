import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  name: string;
  url: string;
  logo: string;
  className?: string;
};

export const ToolLabel = ({ name, url, logo, className }: Props) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={25}
          height={25}
          className="rounded-full"
        />
      </div>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="trext-md hover:underline"
      >
        {name}
      </a>
    </div>
  );
};
