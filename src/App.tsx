import React from "react";
import {
  Container,
  Flex,
  Heading,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";
import ThemeGrid from "./components/themeGrid/ThemeGrid";

function App() {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <SlideFade in={isOpen}>
      <Container maxW="container.xl" centerContent>
        <Flex direction="column" width="full" alignItems="center">
          <Heading as="h1" size="lg" mt={4}>
            InstantRICE
          </Heading>
          <ThemeGrid triggerAnim={onOpen} />
        </Flex>
      </Container>
    </SlideFade>
  );
}

export default App;
