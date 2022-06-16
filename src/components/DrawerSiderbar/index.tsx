import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
  Stack,
  Link,
} from "@chakra-ui/react";
import { GrMenu } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export function DrawerSiderbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        d={{ base: "flex", md: "none" }}
        position="absolute"
        top="2rem"
        right="2rem"
        bgGradient="linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)"
        onClick={onOpen}
        borderRadius="full"
        w="2.5rem"
        h="2.5rem"
      >
        <Icon as={GrMenu} fontSize="md" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg="rgba( 36, 31, 66, 0.4 )"
          boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
          backdropFilter="blur( 9.5px )"
          borderLeft="2px solid rgba( 255, 255, 255, 0.18 )"
        >
          <DrawerCloseButton mt="1.6rem" right="2.5rem" />

          <DrawerBody mt="5rem">
            <Stack spacing="10">
              <Link
                href="/"
                _hover={{
                  bgClip: "text",
                  bgGradient:
                    "linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)",
                }}
              >
                Home
              </Link>
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
          </DrawerBody>

          <DrawerFooter gap="1rem">
            <Link
              href="https://github.com/moisesnetouou"
              isExternal
              bg="white"
              borderRadius="full"
              w="2rem"
              h="2rem"
              alignItems="center"
              justifyContent="center"
              d="flex"
            >
              <Icon as={BsGithub} color="black" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/moisesnetouou/"
              isExternal
              bg="white"
              borderRadius="full"
              w="2rem"
              h="2rem"
              alignItems="center"
              justifyContent="center"
              d="flex"
            >
              <Icon as={BsLinkedin} color="#0e76a8" />
            </Link>

            <Link
              href="https://www.instagram.com/_moisesneto_/"
              isExternal
              bg="white"
              borderRadius="full"
              w="2rem"
              h="2rem"
              alignItems="center"
              justifyContent="center"
              d="flex"
            >
              <Icon as={AiFillInstagram} color="#E1306C" fontSize="1.5rem" />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
