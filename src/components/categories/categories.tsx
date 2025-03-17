import Link from "next/link";
import { CategoryCard } from "./category-card";
import type { Stacks, Tools } from "@/types";
import { Icons } from "../icons";

type Props = {
  categories: Tools;
  stacks: Stacks;
  take?: number;
};

export const Categories = ({ categories, stacks, take }: Props) => {
  const sortedCategories = Object.entries(categories).sort(
    ([, a], [, b]) => Object.keys(b).length - Object.keys(a).length
  );

  const categoriesToShow = take
    ? sortedCategories.slice(0, take)
    : sortedCategories;

  return (
    <div className="mx-4 md:mx-8 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoriesToShow.map(([category, tools]) => (
          <CategoryCard
            key={category}
            name={category}
            items={Object.values(tools).slice(0, 3)}
            stacks={stacks}
          />
        ))}
      </div>
      {take && (
        <Link
          href="/categories"
          className="text-center flex items-center gap-2 justify-center text-xl"
        >
          view all categories <Icons.arrowRight className="size-6" />
        </Link>
      )}
    </div>
  );
};
