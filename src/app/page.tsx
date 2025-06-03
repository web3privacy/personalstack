import { Categories } from "@/components/categories/categories";
import { PageHeader } from "@/components/page-header";
import { StacksGrid } from "@/components/stacks/featured-stacks";
import { loadYamlData } from "@/lib/data";

export default function Home() {
  const data = loadYamlData("./data.yaml");

  return (
    <main className="flex flex-col gap-8 mb-16">
      <PageHeader
        img="/images/banner.jpg"
        title="personal FOSS stack explorer"
        tagline="explore what personal FOSS stack experts are using"
      />
      <h3 className="w-full text-center">featured experts</h3>
      <StacksGrid stacks={data.stacks} tools={data.tools} take={3} />
      <h3 className="w-full text-center">featured categories</h3>
      <Categories categories={data.tools} stacks={data.stacks} take={8} />
    </main>
  );
}
