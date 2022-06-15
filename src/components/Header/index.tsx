import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      borderBottom="1px solid #241F42"
      position="absolute"
      w="100%"
      h="5rem"
      top="0"
    >
      <Flex
        w={{
          base: "320px",
          sm: "320px",
          md: "600px",
          lg: "900px",
          xl: "1120px",
        }}
        m="0 auto"
        justify="space-between"
        alignItems="center"
      >
        <Flex align="center" gap="2">
          <Link as="a" href="/">
            <Image
              src="/images/logo.png"
              alt="Logo do site"
              w="5rem"
              h="3rem"
            />
          </Link>
          <Text fontSize="xl" fontWeight="600" textDecor="none">
            Delta | Dev
          </Text>
        </Flex>

        <Stack direction="row" spacing="10">
          <Link
            href="/sobre"
            _hover={{
              bgClip: "text",
              bgGradient:
                "linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)",
            }}
          >
            Sobre
          </Link>
          <Link
            href="/projetos"
            _hover={{
              bgClip: "text",
              bgGradient:
                "linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)",
            }}
          >
            Projetos
          </Link>
          <Link
            href="/skills"
            _hover={{
              bgClip: "text",
              bgGradient:
                "linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)",
            }}
          >
            Tecnologias
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
}
