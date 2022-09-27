interface PersonalProjectsData {
  id: string;
  image: string;
  name: string;
  description: string;
  technologies: string;
  objective: string;
  github: string;
  deploy?: string;
}

export const personalProjects: PersonalProjectsData[] = [
  {
    id: '1',
    image: '/images/project/messier-one.png',
    name: 'Messier One',
    description:
      'Uma Lading page de uma empresa ficticia, que oferece serviço para advogados.',
    technologies: 'Next, Chakra UI, React Icons, Vercel.',
    objective:
      'Foi criado para aprender como integrar Chakra UI no Next, fazer deploy na Vercel, e por fim anexar ele em um dominio real no Registro.br com um serviço de e- mail da Umbler.',
    github: 'https://github.com/moisesnetouou/messier-one',
    deploy: 'https://messier-one.vercel.app/',
  },
  {
    id: '2',
    image: '/images/project/deltauou.png',
    name: 'DeltaUOU.dev',
    description:
      'Um portfólio para exibir meu perfil, histórico profissional, projetos e tecnologias que utilizo.',
    technologies: 'Next, Chakra UI, React Icons, Vercel.',
    objective:
      'Criado para que eu tenha a possibilidade de exibir detalhes sobre mim e meus projetos de uma maneira mais detalhada da forma que eu quiser. ',
    github: 'https://github.com/moisesnetouou/deltauou.dev',
    deploy: 'https://www.deltauou.com.br/',
  },
];
