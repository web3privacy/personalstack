import type { Stack, Tools } from "@/types";
import Image from "next/image";
import { Icons } from "../icons";
import Link from "next/link";
import { ToolLabel } from "./tool-label";

type Props = {
  stack: Stack;
  tools: Tools;
  preview?: boolean;
};

export const StackCard = ({ stack, tools, preview = false }: Props) => {
  const stackEntries = Object.entries(stack.tools);
  const items = preview ? stackEntries.slice(0, 3) : stackEntries;

  return (
    <div className="flex flex-col border bg-neutral-900/80">
      <div className="flex gap-4 border-b items-center">
        <div>
          <Image
            src={stack.avatar}
            alt="Avatar"
            width={70}
            height={70}
            className="aspect-square"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-mono uppercase">{stack.name}</h2>
          <h3 className="text-lg font-mono uppercase">{stack.org}</h3>
        </div>
      </div>
      <div>
        {items.map(([category, toolKey]) => {
          const toolDetail = tools[category]?.[toolKey];
          return toolDetail ? (
            <div key={category} className="flex justify-between border-b p-2">
              <span className="text-sm font-semibold w-1/2">{category}</span>
              <ToolLabel
                className="w-1/2"
                name={toolDetail.name}
                logo={
                  "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg"
                }
              />
            </div>
          ) : null;
        })}

        {preview && (
          <Link
            href={`/stack/${stack.id}`}
            className="p-2 flex items-center hover:bg-white hover:text-black"
          >
            <span className="grow">Explore</span>
            <Icons.arrowRight className="size-6" />
          </Link>
        )}
      </div>
    </div>
  );
};
