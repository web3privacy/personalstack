"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { basePath } from "@/lib/utils";
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-2 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={url}
          className="size-6 rounded-full border-2 border-white dark:border-gray-800"
          src={`${url}`}
          width={30}
          height={30}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {numPeople && numPeople > 5 ? (
        <a
          className="flex size-6 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href="https://github.com"
        >
          +{numPeople}
        </a>
      ) : null}
    </div>
  );
};

export { AvatarCircles };
