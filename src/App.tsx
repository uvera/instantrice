import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ThemeGrid from "./components/themeGrid/ThemeGrid";

function App() {
  return (
    <Container maxW="container.xl" centerContent>
      <Flex direction="column" width="full" alignItems="center">
        <Heading as="h1" size="lg" mt={4}>
          InstantRICE
        </Heading>
        <ThemeGrid />
      </Flex>
    </Container>
  );
}

export default App;
