import { siteConfig } from "@/lib/config";
import { PageHeader } from "@/components/page-header";
import { StackCard } from "@/components/stacks/stack-card";
import { loadYamlData } from "@/lib/data";

export async function generateStaticParams() {
  const data = loadYamlData("./data.yaml");

  return Object.values(data.stacks).map((stack) => ({
    id: stack.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const data = loadYamlData("./data.yaml");

  const stack = Object.values(data.stacks).find((stack) => stack.id === id);

  return {
    title: `${stack?.name} - ${siteConfig.name}`,
  };
}

export default async function StackDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const data = loadYamlData("./data.yaml");

  const stack = Object.values(data.stacks).find((stack) => stack.id === id);

  if (!stack) {
    return <div>Stack not found</div>;
  }

  return (
    <main className="flex flex-col items-center">
      <PageHeader img="/images/banner.jpg" title="" tagline="" />

      <div className="-mt-32 z-10 bg-card w-2/5 mb-16">
        <StackCard stack={stack} tools={data.tools} />
      </div>
    </main>
  );
}
