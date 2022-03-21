import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";

export function PoppoverInfo() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label="Icone de info"
          size="xs"
          fontSize="md"
          color="#3DFCE8"
          bg="transparent"
          icon={<AiFillInfoCircle />}
          transitionDuration="0.4s"
          _hover={{
            background: "gray.400",
          }}
        />
      </PopoverTrigger>
      <PopoverContent
        color="white"
        fontWeight="600"
        fontSize="lg"
        bg="rgba( 14, 109, 180, 0.25 )"
        boxShadow="0 8px 32px 0 rgba( 255, 255, 255, 0.25 )"
        backdropFilter="blur( 6px )"
        borderColor="transparent"
      >
        <PopoverHeader fontWeight="semibold">
          Desenvolvedor Front End
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
