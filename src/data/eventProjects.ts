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
  {
    id: "2",
    image: "/images/project/plant-manager.png",
    name: "PlantManager",
    description: "Uma aplicação que lembra o usuário a regar suas plantas",
    technologies: "React Native, Expo, Lottie, Axios, Date-fns",
    objective:
      "Aprender como criar uma aplicação que salva as plantas do usuário, para que com de acordo com o tipo ele seja lembrado de tempo em tempo através da notificação do celular.",
    github: "https://github.com/moisesnetouou/plantmanager",
    deploy: "",
  },
];
