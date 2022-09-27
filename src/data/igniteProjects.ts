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
    id: '1',
    image: '/images/project/ignews.png',
    name: 'Ig.news',
    description:
      'Um blog onde o usuário pode fazer login ou comprar o acesso aos posts',
    technologies: 'Next, SASS, NextAuth, Prismic, FaunaDB, Axios, React Icons',
    objective:
      'Uma aplicação que não necessita de back-end próprio, utiliza serviços externos, como Prismic CMS, que é o seu gerenciador de conteúdo, Stripe para ser pagamentps, FaunaDB como banco de dados.',
    github: 'https://github.com/moisesnetouou/ignews-next',
    deploy: '',
  },
  {
    id: '2',
    image: '/images/dash-go.png',
    name: 'Dash go',
    description: 'Um dashboard que exibe gráficos e usuários da plataforma.',
    technologies:
      'Next, Chakra UI, Apexcharts, React Hook Form, Yup, React Icons, React Query, Vercel',
    objective:
      'Um dashboard para uma empresa ficticia que exibe gráficos utilizando Apexcharts, validação de inputs, e tem a possibilidade de listar usuários e cadastra eles na plataforma.',
    github: 'https://github.com/moisesnetouou/dashgo-next',
    deploy: 'https://dashgo-next-uou.vercel.app/',
  },
];
