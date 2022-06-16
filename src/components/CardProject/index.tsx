import { Flex, Heading, Image, Text, Icon, Link } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";

interface CardProjectProps {
  bgGradient: string;
  headerTextColor: string;
  data: {
    name: string;
    image: string;
    description: string;
    technologies: string;
    objective: string;
    github: string;
    deploy?: string;
  };
}

export function CardProject({
  bgGradient,
  headerTextColor,
  data,
}: CardProjectProps) {
  return (
    <Flex
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      w="100%"
      h={{
        base: "100%",
        lg: "360px",
      }}
      justifyContent="space-between"
      padding={{ base: "1.5rem", lg: "2rem" }}
      borderRadius="10"
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      gap="2"
      boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropFilter="blur( 12.5px )"
      position="relative"
      bg={bgGradient}
    >
      <Flex
        w={{
          base: "100%",
          lg: "470px",
        }}
        border="1px solid #241F42"
        borderRadius="10"
        overflow="hidden"
      >
        <Image src={data.image} alt="Messier One" />
      </Flex>

      <Flex
        w={{
          base: "100%",
          lg: "530px",
        }}
        flexDirection="column"
        pb="1.5rem"
      >
        <Heading
          mt={{
            base: "2rem",
            lg: "0",
          }}
          mb="1"
          fontSize={{
            base: "xl",
            lg: "3xl",
          }}
          bgClip="text"
          bgGradient={headerTextColor}
        >
          {data.name}
        </Heading>

        <Text
          w="100%"
          mb="3"
          fontSize={{
            base: "sm",
            md: "md",
            lg: "md",
          }}
          fontWeight="bold"
        >
          {data.description}
        </Text>

        <Heading
          fontSize={{
            base: "md",
            lg: "xl",
          }}
        >
          Tecnologia
        </Heading>
        <Text
          w="100%"
          mb="3"
          fontSize={{
            base: "sm",
            md: "md",
            lg: "md",
          }}
          fontWeight="bold"
        >
          {data.technologies}
        </Text>

        <Heading
          fontSize={{
            base: "md",
            lg: "xl",
          }}
        >
          Objetivo
        </Heading>
        <Text
          fontWeight="bold"
          w="100%"
          fontSize={{
            base: "sm",
            md: "md",
            lg: "md",
          }}
        >
          {data.objective}
        </Text>
      </Flex>
      <Flex
        gap="5"
        mt="1"
        justifyContent="end"
        position="absolute"
        bottom="1rem"
        right="1rem"
      >
        {data.deploy && (
          <Link
            href={data.deploy}
            isExternal
            bg="white"
            borderRadius="full"
            w="1.5rem"
            h="1.5rem"
            alignItems="center"
            justifyContent="center"
            d="flex"
          >
            <Icon as={GrDeploy} color="black" />
          </Link>
        )}

        <Link
          href={data.github}
          isExternal
          bg="white"
          borderRadius="full"
          w="1.5rem"
          h="1.5rem"
          alignItems="center"
          justifyContent="center"
          d="flex"
        >
          <Icon as={BsGithub} color="black" />
        </Link>
      </Flex>
    </Flex>
  );
}
