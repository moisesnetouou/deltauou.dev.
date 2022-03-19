import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import CommandBar from "./CommandBar";
import theme from "../styles/theme";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <CommandBar>{children}</CommandBar>
    </ChakraProvider>
  );
}
