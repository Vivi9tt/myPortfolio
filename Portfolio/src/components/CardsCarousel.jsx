"use client";

import { Carousel, Card } from "../components/ui/apple-cards-carousel";

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2
        className="max-w-screen-xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Mobile App",
    title: "Event Management",
    src: '/corps.png',
    content: "Your Corps is a Invercargill charity organization. They often handle free gaming events for " 
    + "children to encourage confidence and improve their technical skills. The project for this organisation "
    + "is an event management app to help Your Corps manage its event more efficiently. I work together with two other people in this project. My responsibility in this project is to "
    + "design the interface and develop the frontend of it. ",
    tools: ["Flutter", "Dart", "Figma", "C#", "Azure", "ASP.NET Core"],
    screenshots: '/corps.png'
  },
  {
    category: "Website",
    title: "Business Directory",
    src: '/explorer.png',
    content: "A business directory website aimed at spotlighting local businesses in the Invercargill community. "
    + "This was a project developed by a team of four. My role was to design the interface. ",
    tools: ["MySQL", "Javascript", "PHP", "Laravel"]
  },
  {
    category: "Product",
    title: "More Coming Soon",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "",
  },
];
