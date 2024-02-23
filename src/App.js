import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";
import Login from "./pages/login";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";

const isAuthenticated = () => {
  return true;
};

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? <Layout>{element}</Layout> : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
