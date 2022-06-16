import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Sobre() {
  return (
    <Flex direction="column" minH="100vh" position="relative">
      <Flex
        w={{
          base: "320px",
          sm: "320px",
          md: "600px",
          lg: "900px",
          xl: "1120px",
        }}
        mt={{ base: "5rem", md: "10rem" }}
        mx="auto"
        mb="2rem"
        justifyContent="space-between"
        alignItems={{ base: "none", lg: "center" }}
        flexDir={{
          base: "column-reverse",
          lg: "row",
        }}
      >
        <Flex
          flexDir="column"
          w={{
            base: "100%",
            sm: "100%",
            md: "500px",
            lg: "400px",
            xl: "500px",
          }}
          gap="4"
        >
          <Heading
            bgClip="text"
            bgGradient="linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)"
          >
            Olá! me chamo Moisés.
          </Heading>
          <Text textAlign="justify">
            Tenho 24 anos, atualmente faço parte do time de desenvolvedores da
            empresa Click IP, como Desenvolvedor Front end.
          </Text>

          <Text textAlign="justify">
            A 2 anos venho focando em me especializar cada vez mais em
            desenvolvimento de sistemas. Atualmente sou desenvolvedor Front End
            na ClickIp, utilizo React, Next, Styled Components e Chakra UI para
            criar as aplicações.
          </Text>

          <Text textAlign="justify">
            Em meio a isso, foco meu tempo livre para criar projetos front e
            back, para cada vez mais aplicar o que venho estudando, como Next,
            Node, React Native, TypeORM, Prisma, PostgreSQL, Docker entre
            outros.
          </Text>
        </Flex>
        <Flex
          h={{
            base: "200px",
            lg: "460px",
          }}
          w={{
            base: "200px",
            lg: "460px",
          }}
          mb={{
            base: "2rem",
            lg: "0",
          }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/39030702?v=4"
            alt="Imagem de perfil do Github"
            borderRadius="10"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
