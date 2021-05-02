import React from "react";
import { ThemeData } from "./index";
import {
  Box,
  Button,
  Center,
  Heading,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { customColors } from "../../util/theme";
import ThemeModal from "./ThemeModal";

const GridItem: React.FC<{ data: ThemeData }> = (props) => {
  const d = props.data;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getThreeColors = (): string[] => {
    const array = Object.values(d.instantWM);
    const p1 = array[array.length - 1];
    const p2 = array[0];
    const p3 = array[Math.round((array.length - 1) / 2)];
    return [p1, p2, p3];
  };

  const [p1, p2, p3] = getThreeColors();

  return (
    <>
      <ThemeModal isOpen={isOpen} onClose={onClose} data={d} />
      <Box
        borderRadius={0}
        borderWidth="2px"
        width="full"
        borderColor={customColors.borderCardBrand}
        padding={3}
        _hover={{
          borderColor: customColors.borderBrand,
        }}
      >
        <Center mb={0.5}>
          <Heading as="h2" size="md">
            {d.name}
          </Heading>
        </Center>
        <VStack spacing="3px">
          <Box bg={p1} width="100%" height="1rem" />
          <Box bg={p2} width="100%" height="1rem" />
          <Box bg={p3} width="100%" height="1rem" />
        </VStack>
        <Button
          onClick={onOpen}
          background={d.instantWM.focus}
          colorScheme="transparent"
          borderRadius="0"
          pt={1}
          mt={4}
          borderBottomWidth="5px"
          borderBottomColor={d.instantWM.darkFocus}
          _hover={{
            borderBottomWidth: "8px",
            background: d.instantWM.hoverFocus,
            borderBottomColor: d.instantWM.darkHoverFocus,
          }}
        >
          View
        </Button>
      </Box>
    </>
  );
};

export default GridItem;
