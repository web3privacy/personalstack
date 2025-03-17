import type { Stack, Stacks, Tools } from "@/types";
import { StackCard } from "./stack-card";
import Link from "next/link";
import { Icons } from "../icons";
type Props = {
  stacks: Stacks;
  tools: Tools;
  take?: number;
};

export const StacksGrid = ({ stacks, tools, take }: Props) => {
  const stacksToShow = take
    ? Object.values(stacks).slice(0, take)
    : Object.values(stacks);

  return (
    <div className="mx-4 md:mx-8 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stacksToShow.map((stack) => (
          <StackCard key={stack.id} stack={stack} tools={tools} preview />
        ))}
      </div>
      {take && (
        <Link
          href="/stacks"
          className="text-center flex items-center gap-2 justify-center text-xl"
        >
          view all stacks <Icons.arrowRight className="size-6" />
        </Link>
      )}
    </div>
  );
};
