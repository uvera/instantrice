import {
  Colors,
  extendTheme,
  ThemeComponents,
  ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components: ThemeComponents = {};

const colors: Colors = {};

const styles = {
  global: {
    body: {
      bg: "#292F3A",
    },
  },
};

const fonts = {
  heading: "Inter",
  body: "Roboto",
  code: "Roboto",
};

const customColors = {
  borderBrand: "#4DADD4",
  borderCardBrand: "#747c90",
  close: "#E1527E",
  darkClose: "#CB3563",
  hoverClose: "#D37492",
  darkHoverClose: "#CE577C",
};
const theme = extendTheme({ config, components, colors, styles, fonts });
export default theme;
export { customColors };
