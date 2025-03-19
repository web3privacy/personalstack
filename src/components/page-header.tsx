import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";

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
      style={{ backgroundImage: `url('${img}')` }}
    >
      <Link href="/" className="absolute top-4 left-4">
        <Image
          src="/logo-white.svg"
          alt="Logo"
          className="h-12"
          width={200}
          height={55}
        />
      </Link>

      <div className="absolute top-4 right-4">
        <div className="flex gap-4">
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
