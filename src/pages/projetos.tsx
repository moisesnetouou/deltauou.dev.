import { Flex, Heading } from "@chakra-ui/react";
import { CardProject } from "../components/CardProject";
import { personalProjects } from "../data/personalProjects";

export default function Projetos() {
  return (
    <Flex direction="column" minH="100vh" position="relative">
      <Flex
        mt="10rem"
        w={{
          base: "320px",
          sm: "320px",
          md: "600px",
          lg: "900px",
          xl: "1120px",
        }}
        mx="auto"
        flexDirection="column"
      >
        <Heading mb="2rem">Projetos Pessoais</Heading>
        <Flex
          bg="linear-gradient(90deg,#19191c,rgba(25,25,28,0) 39.82%),linear-gradient(174deg,#19191c 6.25%,rgba(25,25,28,0) 33.45%),linear-gradient(1turn,#191a1c,#191a1c 0,rgba(25,25,28,0) 15.21%),conic-gradient(from 182.2deg at 55.19% 72.68%,#19191c -97.5deg,#371d9f 6.27deg,#19191c 22.42deg,#2a0dff 49.12deg,#2a0dff 79.97deg,#19191c 92.76deg,#19191c 128.57deg,#1e1ae8 154.67deg,#253647 226.37deg,#19191c 262.5deg,#371d9f 366.27deg)"
          flexDirection="column"
          gap="10"
          // py="2rem"
          // bg="linear-gradient(90deg,#19191c,rgba(25,25,28,0) 39.82%),linear-gradient(174deg,#19191c 6.25%,rgba(25,25,28,0) 33.45%),linear-gradient(1turn,#191a1c,#191a1c 0,rgba(25,25,28,0) 15.21%),conic-gradient(from 182.2deg at 55.19% 72.68%,#19191c -97.5deg,#371d9f 6.27deg,#19191c 22.42deg,#2a0dff 49.12deg,#2a0dff 79.97deg,#19191c 92.76deg,#19191c 128.57deg,#1e1ae8 154.67deg,#253647 226.37deg,#19191c 262.5deg,#371d9f 366.27deg)"
          borderRadius="5"
        >
          {personalProjects.map((item) => (
            <CardProject key={item.id} data={item} />
          ))}
        </Flex>

        <Heading>Eventos</Heading>
        <Flex>
          <Flex
            border="1px solid #241F42"
            w="100%"
            h="345px"
            justifyContent="space-between"
            padding="2rem"
          >
            <Flex w="470px">teste</Flex>
            <Flex w="451px">teste</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
