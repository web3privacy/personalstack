import { Categories } from "@/components/categories/categories";
import { PageHeader } from "@/components/page-header";
import { loadYamlData } from "@/lib/data";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Categories - ${siteConfig.name}`,
  openGraph: {
    title: {
      default: `Categories - ${siteConfig.name}`,
      template: `%s - ${siteConfig.name}`,
    },
  },
  twitter: {
    title: {
      default: `Categories - ${siteConfig.name}`,
      template: `%s - ${siteConfig.name}`,
    },
  },
};

export default function CategoriesPage() {
  const data = loadYamlData("./data.yaml");

  return (
    <main className="flex flex-col gap-8 mb-16">
      <PageHeader
        img="/images/banner.jpg"
        title="privacy stack explorer"
        tagline="explore what privacy stack experts are using"
      />
      <h3 className="w-full text-center">all categories</h3>
      <Categories categories={data.tools} stacks={data.stacks} />
    </main>
  );
}
