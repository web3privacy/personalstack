import { ToolLabel } from "../stacks/tool-label";
import { AvatarCircles } from "../ui/avatars-circles";
import Link from "next/link";
import { Icons } from "../icons";
import type { Stacks, ToolDetail } from "@/types";
import { basePath } from "@/lib/utils";
type Props = {
  name: string;
  items: ToolDetail[];
  stacks: Stacks;
  total: number;
};

export const CategoryCard = ({ name, items, stacks, total }: Props) => {
  const findUsersWithTool = (toolName: string): string[] => {
    return Object.values(stacks)
      .filter((stack) => {
        return Object.values(stack.tools).some((tool) => tool === toolName);
      })
      .map((stack) =>
        stack.avatar.startsWith("http")
          ? stack.avatar
          : `${basePath}/images/pfp/${stack.avatar}`
      );
  };

  const getToolFrequency = (toolName: string): number => {
    return Object.values(stacks).filter((stack) =>
      Object.values(stack.tools).some((tool) => tool === toolName)
    ).length;
  };

  const sortedItems = [...items].sort((a, b) => {
    const freqA = getToolFrequency(a.name);
    const freqB = getToolFrequency(b.name);
    return freqB - freqA;
  });

  return (
    <div className="border flex flex-col bg-neutral-900/80">
      <h4 className="text-xl font-mono border-b p-2 flex items-center gap-2">
        {name.toLowerCase().replace(/_/g, " ")}
      </h4>
      {sortedItems.map((item) => {
        const userAvatars = findUsersWithTool(item.name);

        return (
          <div key={item.name} className="flex gap-4 border-b p-2">
            <ToolLabel
              name={item.name}
              url={item.url}
              logo={
                item.image
                  ? `${basePath}/images/icons/${item.image}`
                  : `${basePath}/images/icons/placeholder.png`
              }
              className="w-3/5"
            />
            <AvatarCircles
              numPeople={userAvatars.length}
              avatarUrls={userAvatars}
            />
          </div>
        );
      })}
      <Link
        href={`/categories/${name}`}
        className="p-2 flex  text-muted-foreground items-center hover:bg-white hover:text-black"
      >
        <span className="grow ">Explore {total} tools</span>
        <Icons.arrowRight className="size-6" />
      </Link>
    </div>
  );
};
