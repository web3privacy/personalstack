import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { basePath } from "@/lib/utils";
type Props = {
  img: string;
  title: string;
  tagline: string;
};

const socialLinks = [
  {
    name: "Twitter",
    url: "https://x.com/web3privacy",
    icon: Icons.twitter,
  },
  {
    name: "GitHub",
    url: "https://github.com/web3privacy",
    icon: Icons.github,
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/web3privacy.info",
    icon: Icons.blueSky,
  },
];

export const PageHeader: React.FC<Props> = ({ img, title, tagline }) => {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('${basePath}${img}')` }}
    >
      <Link href="/" className="absolute top-4 left-4">
        <Image
          src={`${basePath}/logo-white.svg`}
          alt="Logo"
          className="h-12"
          width={200}
          height={55}
        />
      </Link>

      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-4">
          <Link
            href="https://tally.so/r/mKv6WV"
            target="_blank"
            className="border border-white/70 text-white/90 hover:bg-white/10 px-3 py-1 text-sm font-medium tracking-wide transition-colors"
          >
            add yours
          </Link>
          {socialLinks.map((link) => (
            <Link
              href={link.url}
              key={link.name}
              target="_blank"
              className="text-muted-foreground hover:text-white"
            >
              <link.icon className="size-8" />
            </Link>
          ))}
        </div>
      </div>
      <div className="relative text-center">
        <h1>{title}</h1>
        <h2 className="text-muted-foreground">{tagline}</h2>
      </div>
    </div>
  );
};
