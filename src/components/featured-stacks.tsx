import type { Stack } from "@/types";
import { StackCard } from "./stack-card";

type Props = {
  stacks: Stack[];
};

export const FeaturedStacks = ({ stacks }: Props) => {
  return (
    <div className="mx-4 my-8 flex flex-col gap-8">
      <h3 className="w-full text-center">featured experts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stacks.map((stack, i) => (
          <StackCard key={stack.user.name} stack={stack} />
        ))}
      </div>
    </div>
  );
};
