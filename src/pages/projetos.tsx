import { Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Projetos() {
  return (
    <Flex direction="column" minH="100vh" position="relative">
      <Header />
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
        <Heading>Projetos Pessoais</Heading>
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
