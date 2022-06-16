interface EventProjectsData {
  id: string;
  image: string;
  name: string;
  description: string;
  technologies: string;
  objective: string;
  github: string;
  deploy?: string;
}

export const eventProjects: EventProjectsData[] = [
  {
    id: "1",
    image: "/images/project/nlw-return.png",
    name: "NLW Return",
    description: "Uma aplicação que salva o feedback do usuário",
    technologies:
      "React, Vite, Tailwindcss, Node, Prisma, SQLite, PostgreSQL, React Native, Expo, Vercel, Railway.",
    objective:
      "Aprender sobre front, back e mobile, utilizando React e Node, uma aplicação back-end que recebe do front end o feedback do usuário e salva no banco dados, no fim foi realizado o deploy do front na Vercel e do Back no Railway.",
    github: "https://github.com/moisesnetouou/nlw-return",
    deploy: "https://nlw-return-khaki.vercel.app/",
  },
];
