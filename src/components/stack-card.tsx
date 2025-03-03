import type { Stack } from "@/types";
import Image from "next/image";
import { Icons } from "./icons";

type Props = {
  stack: Stack;
};

export const StackCard = ({ stack }: Props) => {
  return (
    <div className="flex flex-col border">
      <div className="flex gap-4 border-b items-center">
        <div>
          <Image
            src={stack.user.avatar}
            alt="Avatar"
            width={70}
            height={70}
            className="aspect-square"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-mono uppercase">{stack.user.name}</h2>
          <h3 className="text-lg font-mono uppercase">{stack.user.company}</h3>
        </div>
      </div>
      <div>
        {stack.items.slice(0, 3).map((item) => (
          <div key={item.name} className="flex gap-4 border-b p-2">
            <span className="text-md w-3/5">{item.category}</span>
            <div className="flex w-2/5 items-center gap-2">
              <div>
                <Image
                  src={item.logo}
                  alt="Logo"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
              </div>

              <span className="trext-md">{item.name}</span>
            </div>
          </div>
        ))}
        <div className="p-2 flex items-center hover:bg-accent">
          <span className="grow">Explore</span>
          <Icons.arrowRight className="size-6" />
        </div>
      </div>
    </div>
  );
};
