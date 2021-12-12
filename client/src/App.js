import React from "react";
import {Routes as Switch, Route} from 'react-router-dom'

import { Box } from "@chakra-ui/react";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Box bgColor="primary.900">
      <Switch>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Switch>
    </Box>
  );
};

export default App;
