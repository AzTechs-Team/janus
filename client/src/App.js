import React, { useEffect } from "react";
import {
  Routes as Switch,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { Box } from "@chakra-ui/react";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import BaseScreen from "./screens/BaseScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProtectedRoute from "./auth/ProtectedRoute";
import ExtensionsScreen from "./screens/ExtensionsScreen";
import ExampleScreen from "./screens/ExampleScreen";
import NotesScreen from "./screens/NotesScreen";
import TodoScreen from "./screens/TodoScreen";
import auth from "./auth/auth";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const user = useState(getUserInfo);

  useEffect(() => {
    if (localStorage.login) {
      // const login = JSON.parse(localStorage.login);
      if (localStorage.login && location.pathname === "/") navigate("/home");
    } else if (location.pathname !== "/") {
      auth.logout(() => navigate("/"));
    }
  }, [location.pathname, navigate]);

  return (
    <Box bgColor="primary.900">
      <Switch>
        <Route path="/" element={<AuthScreen />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <BaseScreen children={<HomeScreen />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <BaseScreen children={<ProfileScreen />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <BaseScreen children={<SettingsScreen />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <BaseScreen children={<NotesScreen />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/extensions"
          element={
            <ProtectedRoute>
              <BaseScreen children={<ExtensionsScreen />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/example"
          element={
            <ProtectedRoute>
              <BaseScreen children={<ExampleScreen />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <BaseScreen children={<TodoScreen />} />
            </ProtectedRoute>
          }
        />
      </Switch>
    </Box>
  );
};

export default App;
