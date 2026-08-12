import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blank Page" },
      { name: "description", content: "A simple blank page." },
      { property: "og:title", content: "Blank Page" },
      { property: "og:description", content: "A simple blank page." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BlankPage,
});

function BlankPage() {
  return <div className="min-h-screen bg-background" />;
}
