import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  name: string;
  logo: string;
  className?: string;
};

export const ToolLabel = ({ name, logo, className }: Props) => {
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

      <span className="trext-md">{name}</span>
    </div>
  );
};
