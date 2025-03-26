import { CategoryCard } from "@/components/categories/category-card";
import { PageHeader } from "@/components/page-header";
import { ToolLabel } from "@/components/stacks/tool-label";
import { AvatarCircles } from "@/components/ui/avatars-circles";
import { loadYamlData } from "@/lib/data";
import { basePath } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export async function generateStaticParams() {
  const data = loadYamlData("./data.yaml");

  return Object.keys(data.tools).map((categoryId) => ({
    id: categoryId,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const data = loadYamlData("./data.yaml");

  const categoryTools = id.replace(/_/g, " ");

  return {
    title: `${categoryTools} - ${siteConfig.name}`,
    openGraph: {
      title: {
        default: categoryTools,
      },
    },
    twitter: {
      title: {
        default: categoryTools,
      },
    },
  };
}

export default async function CategoryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const data = loadYamlData("./data.yaml");
  const categoryTools = data.tools[id];

  if (!categoryTools) {
    return <div>Category not found</div>;
  }

  const findUsersWithTool = (toolName: string): string[] => {
    return Object.values(data.stacks)
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
    return Object.values(data.stacks).filter((stack) =>
      Object.values(stack.tools).some((tool) => tool === toolName)
    ).length;
  };

  const sortedItems = Object.values(categoryTools).sort((a, b) => {
    const freqA = getToolFrequency(a.name);
    const freqB = getToolFrequency(b.name);
    return freqB - freqA;
  });

  return (
    <main className="flex flex-col items-center">
      <PageHeader img="/images/banner.jpg" title="" tagline="" />

      <div className="-mt-32 z-10 w-2/5 mb-16 border bg-neutral-900/80">
        <div className="p-2 border-b">
          <h2 className="text-xl font-mono lowercase">
            {id.replace(/_/g, " ")}
          </h2>
        </div>
        {sortedItems.map((tool) => {
          const userAvatars = findUsersWithTool(tool.name);

          return (
            <div key={tool.name} className="flex gap-4 border-b p-2">
              <ToolLabel
                name={tool.name}
                url={tool.url}
                logo={
                  tool.image
                    ? `${basePath}/images/icons/${tool.image}`
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
      </div>
    </main>
  );
}
