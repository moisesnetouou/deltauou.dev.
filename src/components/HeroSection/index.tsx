import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { PoppoverInfo } from "../PoppoverInfo";

export function HeroSection() {
  return (
    <Flex
      as="main"
      alignItems="center"
      margin="0 auto"
      flex="1"
      h="100vh"
      w="1420px"
      justifyContent="space-between"
    >
      <Flex direction="column" w="50%">
        <Heading
          bgClip="text"
          bgGradient="linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)"
          fontSize="6xl"
        >
          Moisés Neto
        </Heading>

        <Flex flexDirection="column">
          <Flex alignItems="center">
            <Text fontSize="2xl" mr="2" fontWeight="400">
              Desenvolvedor Front End
            </Text>

            <PoppoverInfo />
          </Flex>

          <Text w="28.12rem" mt="1rem" fontSize="xl" fontWeight="200">
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

      <Flex h="31.25rem">
        <Image
          src="/images/hero-image.png"
          alt="Imagens de projeto enfileirados"
        />
      </Flex>
    </Flex>
  );
}
