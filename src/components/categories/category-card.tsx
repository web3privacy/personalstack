import { ToolLabel } from "../stacks/tool-label";
import { AvatarCircles } from "../ui/avatars-circles";
import Link from "next/link";
import { Icons } from "../icons";
import type { ToolDetail } from "@/types";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

type Props = {
  name: string;
  items: ToolDetail[];
};

export const CategoryCard = ({ name, items }: Props) => {
  return (
    <div className="border flex flex-col bg-neutral-900/80">
      <h4 className="text-xl font-mono border-b p-2">{name}</h4>
      {items.map((item) => (
        <div key={item.name} className="flex gap-4 border-b p-2">
          <ToolLabel
            name={item.name}
            logo={
              "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg"
            }
            className="w-3/5"
          />
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
        </div>
      ))}
      <Link
        href={"/"}
        className="p-2 flex items-center hover:bg-white hover:text-black"
      >
        <span className="grow">Explore</span>
        <Icons.arrowRight className="size-6" />
      </Link>
    </div>
  );
};
