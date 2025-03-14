import { Categories } from "@/components/categories/categories";
import { FeaturedStacks } from "@/components/stacks/featured-stacks";
import { PageHeader } from "@/components/page-header";
import { loadYamlData } from "@/lib/data";

export default function Home() {
  const data = loadYamlData("./data.yaml");

  return (
    <main className="flex flex-col">
      <PageHeader
        img="/images/banner.jpg"
        title="privacy stack explorer"
        tagline="explore what privacy stack experts are using"
      />
      <FeaturedStacks stacks={data.stacks} tools={data.tools} />
      <Categories categories={data.tools} />
    </main>
  );
}
