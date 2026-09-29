import { createFileRoute } from "@tanstack/react-router";
import { BirthdaySite } from "@/components/birthday/BirthdaySite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Doraemon 🎂❤️" },
      { name: "description", content: "A little birthday surprise made with love for Doraemon." },
      { property: "og:title", content: "Happy Birthday, Doraemon 🎂❤️" },
      { property: "og:description", content: "A little birthday surprise made with love for Doraemon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <BirthdaySite />;
}
