import { FeaturedStacks } from "@/components/featured-stacks";
import { PageHeader } from "@/components/page-header";
import type { Stack } from "@/types";

const stacks: Stack[] = [
  {
    user: {
      name: "Vitalik Buterin",
      avatar:
        "https://i.dailymail.co.uk/1s/2021/05/03/23/42530078-9538765-Vitalik_Buterin_27_reached_billionaire_status_after_digital_curr-m-62_1620079752140.jpg",
      company: "Ethereum",
    },
    items: [
      {
        category: "OS",
        name: "Graphene OS",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Wallet (private Coins)",
        name: "Railway",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Messenger (private comms)",
        name: "Signal",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Docs",
        name: "ddocs",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Drawings",
        name: "draw.io",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Self-Hosted LLMs",
        name: "olama",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Download Self-Hostable LLMs",
        name: "Hugging Face",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Slides",
        name: "github link",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
    ],
  },
  {
    user: {
      name: "Vitalik Buterin",
      avatar:
        "https://i.dailymail.co.uk/1s/2021/05/03/23/42530078-9538765-Vitalik_Buterin_27_reached_billionaire_status_after_digital_curr-m-62_1620079752140.jpg",
      company: "Ethereum",
    },
    items: [
      {
        category: "OS",
        name: "Graphene OS",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Wallet (private Coins)",
        name: "Railway",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Messenger (private comms)",
        name: "Signal",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Docs",
        name: "ddocs",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Drawings",
        name: "draw.io",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Self-Hosted LLMs",
        name: "olama",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Download Self-Hostable LLMs",
        name: "Hugging Face",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Slides",
        name: "github link",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
    ],
  },
  {
    user: {
      name: "Vitalik Buterin",
      avatar:
        "https://i.dailymail.co.uk/1s/2021/05/03/23/42530078-9538765-Vitalik_Buterin_27_reached_billionaire_status_after_digital_curr-m-62_1620079752140.jpg",
      company: "Ethereum",
    },
    items: [
      {
        category: "OS",
        name: "Graphene OS",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Wallet (private Coins)",
        name: "Railway",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Messenger (private comms)",
        name: "Signal",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Docs",
        name: "ddocs",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Drawings",
        name: "draw.io",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Self-Hosted LLMs",
        name: "olama",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Download Self-Hostable LLMs",
        name: "Hugging Face",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
      {
        category: "Slides",
        name: "github link",
        logo: "https://softwaretested.com/wp-content/uploads/2018/06/Signal-App.jpg",
      },
    ],
  },
];

export { stacks };

export default function Home() {
  return (
    <main className="flex flex-col">
      <PageHeader
        img="/images/banner.jpg"
        title="privacy stack explorer"
        tagline="explore what privacy stack experts are using"
      />
      <FeaturedStacks stacks={stacks} />
    </main>
  );
}
