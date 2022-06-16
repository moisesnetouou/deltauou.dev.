interface IgniteProjectsData {
  id: string;
  image: string;
  name: string;
  description: string;
  technologies: string;
  objective: string;
  github: string;
  deploy?: string;
}

export const igniteProjects: IgniteProjectsData[] = [
  {
    id: "1",
    image: "/images/project/ignews.png",
    name: "Ig.news",
    description:
      "Um blog onde o usuário pode fazer login ou comprar o acesso aos posts",
    technologies: "Next, SASS, NextAuth, Prismic, FaunaDB, Axios, React Icons",
    objective:
      "Uma aplicação que não necessita de back-end próprio, ela utiliza serviços externos, como Prismic para ser seu CMS, que é o seu gerenciador de conteúdo, Stripe para ser realizado o pagamento, FaunaDB como banco de dados e NextAuth para autenticação.",
    github: "https://github.com/moisesnetouou/ignews-next",
    deploy: "",
  },
];
