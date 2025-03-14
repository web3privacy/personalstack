import type { Stack, Stacks, Tools } from "@/types";
import { StackCard } from "./stack-card";

type Props = {
  stacks: Stacks;
  tools: Tools;
};

export const FeaturedStacks = ({ stacks, tools }: Props) => {
  return (
    <div className="mx-4 my-8 flex flex-col gap-8">
      <h3 className="w-full text-center">featured experts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(stacks).map(([key, stack]) => (
          <StackCard key={key} stack={stack} tools={tools} preview />
        ))}
      </div>
    </div>
  );
};
