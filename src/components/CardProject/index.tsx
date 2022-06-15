import { Flex, Heading, Image, Text, Icon, Link } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";

interface CardProjectProps {
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

export function CardProject({ data }: CardProjectProps) {
  return (
    <Flex
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      w="100%"
      h={{
        base: "100%",
        lg: "345px",
      }}
      justifyContent="space-between"
      padding={{ base: "1.5rem", lg: "2rem" }}
      borderRadius="10"
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      gap="2"
      bg="rgba( 5, 3, 13, 0.3 )"
      boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropFilter="blur( 12.5px )"
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
          bgGradient="linear-gradient(90deg, rgba(0,182,227,1) 0%, rgba(61,252,232,1) 25%)"
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
          w="100%"
          fontSize={{
            base: "sm",
            md: "md",
            lg: "md",
          }}
        >
          {data.objective}
        </Text>

        <Flex gap="5" mt="1" justifyContent="end">
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
    </Flex>
  );
}
