import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const chakraTheme = extendTheme({ config });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
