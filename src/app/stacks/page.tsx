import { PageHeader } from "@/components/page-header";
import { StacksGrid } from "@/components/stacks/featured-stacks";
import { loadYamlData } from "@/lib/data";

export default function StacksPage() {
  const data = loadYamlData("./data.yaml");

  return (
    <main className="flex flex-col gap-8 mb-16">
      <PageHeader
        img="/images/banner.jpg"
        title="privacy stack explorer"
        tagline="explore what privacy stack experts are using"
      />
      <h3 className="w-full text-center">all experts stacks</h3>
      <StacksGrid stacks={data.stacks} tools={data.tools} />
    </main>
  );
}
