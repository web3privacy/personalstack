import { cn } from "@/lib/utils";
import Image from "next/image";
import { basePath } from "@/lib/utils";
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
          src={`${basePath}/${logo}`}
          alt="Logo"
          width={25}
          height={25}
          className="rounded-full min-w-6 min-h-6"
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
