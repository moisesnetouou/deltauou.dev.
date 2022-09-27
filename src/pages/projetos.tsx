import { Flex, Heading } from '@chakra-ui/react';
import { CardProject } from '../components/CardProject';
import { personalProjects } from '../data/personalProjects';
import { eventProjects } from '../data/eventProjects';
import { igniteProjects } from '../data/igniteProjects';

export default function Projetos() {
  return (
    <Flex direction="column" minH="100vh" position="relative">
      <Flex
        mt={{ base: '6rem', md: '10rem' }}
        mb="2rem"
        w={{
          base: '320px',
          sm: '320px',
          md: '600px',
          lg: '900px',
          xl: '1120px',
        }}
        mx="auto"
        flexDirection="column"
      >
        <Heading mb="2rem" fontSize={{ base: '2xl', md: '3xl' }}>
          Pessoais
        </Heading>
        <Flex
          // bg="linear-gradient(90deg,#19191c,rgba(25,25,28,0) 39.82%),linear-gradient(174deg,#19191c 6.25%,rgba(25,25,28,0) 33.45%),linear-gradient(1turn,#191a1c,#191a1c 0,rgba(25,25,28,0) 15.21%),conic-gradient(from 182.2deg at 55.19% 72.68%,#19191c -97.5deg,#371d9f 6.27deg,#19191c 22.42deg,#2a0dff 49.12deg,#2a0dff 79.97deg,#19191c 92.76deg,#19191c 128.57deg,#1e1ae8 154.67deg,#253647 226.37deg,#19191c 262.5deg,#371d9f 366.27deg)"
          flexDirection="column"
          gap="10"
          borderRadius="5"
        >
          {personalProjects.map((item) => (
            <CardProject
              bgGradient="linear-gradient(90deg,#19191c,rgba(25,25,28,0) 39.82%),linear-gradient(174deg,#19191c 6.25%,rgba(25,25,28,0) 33.45%),linear-gradient(1turn,#191a1c,#191a1c 0,rgba(25,25,28,0) 15.21%),conic-gradient(from 182.2deg at 55.19% 72.68%,#19191c -97.5deg,#371d9f 6.27deg,#19191c 22.42deg,#2a0dff 49.12deg,#2a0dff 79.97deg,#19191c 92.76deg,#19191c 128.57deg,#1e1ae8 154.67deg,#253647 226.37deg,#19191c 262.5deg,#371d9f 366.27deg)"
              headerTextGradientColor="linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)"
              textHeaderColor="white"
              textColor="white"
              key={item.id}
              data={item}
            />
          ))}
        </Flex>

        <Heading my="2rem" fontSize={{ base: '2xl', md: '3xl' }}>
          Evento
        </Heading>
        <Flex flexDirection="column" gap="10" borderRadius="5">
          {eventProjects.map((item) => (
            <CardProject
              bgGradient="conic-gradient(from -11.05deg at 50% 71.93%,#9c3cf7 0deg,#70b1ff 54.64deg,#bbb0ff 65.63deg,#56b3ff 73.72deg,#7b70ff 119.43deg,#3654ff 193.12deg,rgba(37,54,71,.87) 226.37deg,#164d8e 262.5deg,#1a62b9 306.49deg,#1821ff 320.77deg,rgba(112,177,255,.5) 326.27deg,#70b1ff 337.21deg,#9c3cf7 1turn)"
              headerTextGradientColor="linear-gradient(90deg, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 35%)"
              textHeaderColor="white"
              textColor="white"
              key={item.id}
              data={item}
            />
          ))}
        </Flex>

        <Heading my="2rem" fontSize={{ base: '2xl', md: '3xl' }}>
          Curso
        </Heading>
        <Flex flexDirection="column" gap="10" borderRadius="5">
          {igniteProjects.map((item) => (
            <CardProject
              bgGradient="conic-gradient(from -11.05deg at 50% 71.93%,#9b4be5 0deg,#78ff83 54.64deg,#bbb0ff 65.63deg,#56b3ff 73.72deg,#fff170 119.43deg,#ff3672 193.12deg,rgb(75 120 165 / 87%) 226.37deg,#164d8e 262.5deg,#1a62b9 306.49deg,#1821ff 320.77deg,#e770ff7f 326.27deg,#705987 337.21deg,#9c3cf7 1turn);
            }"
              textHeaderColor="gray.800"
              textColor="gray.800"
              headerTextGradientColor="linear-gradient(90deg, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 35%)"
              key={item.id}
              data={item}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
