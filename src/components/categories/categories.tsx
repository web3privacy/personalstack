import { CategoryCard } from "./category-card";
import type { Tools } from "@/types";

type Props = {
  categories: Tools;
};

export const Categories = ({ categories }: Props) => {
  return (
    <div className="mx-4 my-8 flex flex-col gap-8">
      <h3 className="w-full text-center">categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(categories).map(([category, tools]) => (
          <CategoryCard
            key={category}
            name={category}
            items={Object.values(tools).slice(0, 3)}
          />
        ))}
      </div>
    </div>
  );
};
