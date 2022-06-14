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
      <Flex w="1420px" m="0 auto" justify="space-between" alignItems="center">
        <Flex align="center" gap="2">
          <Image src="/images/logo.png" alt="Logo do site" w="5rem" h="3rem" />
          <Text fontSize="xl" fontWeight="600">
            Delta | Dev
          </Text>
        </Flex>

        <Stack direction="row" spacing="10">
          <Link href="/sobre">Sobre</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/skills">Tecnologias</Link>
        </Stack>
      </Flex>
    </Flex>
  );
}
