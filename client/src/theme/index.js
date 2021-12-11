import { extendTheme } from "@chakra-ui/react";
import "./style.css";
const theme = extendTheme({
  colors: {
    primary: {
      100: "#A1A5B0",
      700: "#5A5B83",
      900: "#15161B",
    },
    accent: {
      200: "#9C9DF3",
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
      },
      ".chakra-button": {
        background: "linear-gradient(to right, #4B4CCC, #9C9DF3) !important",
        color: "#fff !important",
        borderRadius: "25px !important",
      },
      ".chakra-button:hover": {
        background: "linear-gradient(to left, #4B4CCC, #9C9DF3) !important",
      },
      ".chakra-input:focus": {
        boxShadow: "0 0 0 1px #9C9DF3 !important",
      },
    },
  },
});

export default theme;
