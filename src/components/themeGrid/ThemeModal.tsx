import React from "react";
import {
  Button,
  Code,
  Container,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Square,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { ThemeModalProps } from "./index";
import { customColors } from "../../util/theme";

const ThemeModal: React.FC<ThemeModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const d = props.data;
  const value = `${Object.entries(d.instantWM).map((e, i) => {
    return `instantwm.${e[0]} : ${e[1].toLowerCase()}\r\n`;
  })}${Object.entries(d.instantMENU).map((e, i) => {
    return Object.entries(e[1]).map((a, k) => {
      return `instantmenu.${e[0]}.${
        a[0]
      } : ${(a[1] as string).toLowerCase()}\r\n`;
    });
  })}
  `.replaceAll(",", "");
  const { onCopy, hasCopied } = useClipboard(value);

  const handleCopy = () => {
    onCopy();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      closeOnEsc={true}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="0"
        borderColor={customColors.borderBrand}
        borderWidth="2px"
        backgroundColor="#292F3A"
      >
        <ModalHeader flex="1">
          <Flex
            width="full"
            justifyContent="space-between"
            alignItems="center"
            padding={1}
          >
            <Heading size="md">{d.name}</Heading>
            <Button
              onClick={onClose}
              size="xs"
              borderRadius="0"
              colorScheme="transparent"
              background={customColors.close}
              borderBottomWidth="5px"
              borderBottomColor={customColors.darkClose}
              _hover={{
                borderBottomWidth: "8px",
                background: customColors.hoverClose,
                borderBottomColor: customColors.darkHoverClose,
              }}
            />
          </Flex>
        </ModalHeader>
        <ModalBody width="100%">
          <Container size="container.lg">
            <Code width="full" borderRadius="0" p={2} fontFamily="Fira Code">
              {Object.entries(d.instantWM).map((e, i) => (
                <Flex alignItems="center">
                  <Square size={15} backgroundColor={e[1]} mr={1} />
                  <Text key={i}>
                    instantwm.{e[0].toLowerCase()} :{" "}
                    <Text as="span">{e[1].toLowerCase()}</Text>
                  </Text>
                </Flex>
              ))}
              {Object.entries(d.instantMENU).map((e, i) =>
                Object.entries(e[1]).map((a, k) => (
                  <Flex alignItems="center">
                    <Square size={15} backgroundColor={a[1] as string} mr={1} />
                    <Text key={k}>
                      instantmenu.{e[0]}.{a[0]} :{" "}
                      <Text as="span">{(a[1] as string).toLowerCase()}</Text>
                    </Text>
                  </Flex>
                ))
              )}
            </Code>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button
            width="full"
            borderRadius="0"
            pt={1}
            colorScheme="transparent"
            background={customColors.close}
            borderBottomWidth="5px"
            borderBottomColor={customColors.darkClose}
            _hover={{
              borderBottomWidth: "8px",
              background: customColors.hoverClose,
              borderBottomColor: customColors.darkHoverClose,
            }}
            onClick={handleCopy}
          >
            {hasCopied ? "Theme copied to clipboard" : "Copy to clipboard"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ThemeModal;
