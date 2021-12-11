import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./theme/index";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
