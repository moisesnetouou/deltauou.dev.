import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { PoppoverInfo } from "../PoppoverInfo";

export function HeroSection() {
  return (
    <Flex
      as="main"
      alignItems="center"
      mx="auto"
      minH="100vh"
      w={{
        base: "320px",
        md: "600px",
        lg: "900px",
        xl: "1120px",
      }}
      justifyContent="space-between"
    >
      <Flex
        direction="column"
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "22rem",
          xl: "28.12rem",
        }}
      >
        <Heading
          bgClip="text"
          bgGradient="linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)"
          fontSize={{ base: "3xl", md: "6xl" }}
        >
          Moisés Neto
        </Heading>

        <Flex flexDirection="column">
          <Flex alignItems="center">
            <Text fontSize={{ base: "xl", md: "2xl" }} mr="2" fontWeight="400">
              Desenvolvedor Front End
            </Text>

            <PoppoverInfo />
          </Flex>

          <Text
            w={{
              base: "15rem",
              sm: "15rem",
              md: "100%",
              lg: "22rem",
              xl: "28.12rem",
            }}
            mt="1rem"
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="200"
          >
            Atualmente focando em me especializar em desenvolvimento de
            sistemas, tanto front como back.
          </Text>
        </Flex>

        {/* <Flex borderLeft="1px solid #FFFF" ml="1rem" mt="2rem">
              <Text
                d="block"
                as="em"
                ml="1rem"
                fontSize="lg"
                lineHeight="2"
                fontWeight="600"
                bgClip="text"
                bgGradient="linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)"
              >
                <ReactTypingEffect
                  typingDelay={100}
                  speed={100}
                  eraseDelay={500}
                  text={frases}
                />
              </Text>
            </Flex> */}
      </Flex>

      {/* <Flex
        mt={{ base: "5rem", lg: "0" }}
        h={{
          base: "15rem",
          sm: "15rempx",
          md: "18rem",
          lg: "20rem",
          xl: "25rem",
        }}
        w={{
          base: "15rem",
          sm: "15rempx",
          md: "30rem",
          lg: "35em",
          xl: "40rem",
        }}
      >
        <Image
          src="/images/hero-image.png"
          alt="Imagens de projeto enfileirados"
        />
      </Flex> */}
    </Flex>
  );
}
