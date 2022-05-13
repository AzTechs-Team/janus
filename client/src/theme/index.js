import { extendTheme } from "@chakra-ui/react";
import "./style.css";
const theme = extendTheme({
  colors: {
    primary: {
      100: "#A1A5B0",
      200: "#4B516A",
      600: "#2B2F3B",
      700: "#5A5B83",
      750: "#232429",
      800: "#1C1C25",
      900: "#15161B",
      1000: "#1E1E29",
    },
    accent: {
      50: "#D6D6FE",
      100: "#C4C4FF",
      200: "#9C9DF3",
      600: "#37374E",
      300: "#D6D6FE",
      700: "#29293E",
      900: "#1E1E29",
    },
  },
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
  styles: {
    global: {
      ".chakra-divider": {
        borderBottomWidth: "0px !important",
        background: "linear-gradient(to right, #4B4CCC, #9C9DF3)",
        height: "2px",
        opacity: "1 !important",
      },
      ".chakra-input:focus": {
        boxShadow: "0 0 0 1px #9C9DF3 !important",
      },
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        icon: {
          color: "#15161B",
        },
        control: {
          border: "1px",
          borderColor: "#686A98",
          borderRadius: "base",
          _checked: {
            background: "#686A98 !important",
            borderColor: "#686A98",
          },
        },
        label: {
          fontWeight: "medium",
          color: "gray.900",
        },
      },
    },
  },
});

export default theme;
