import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";
import Login from "./pages/login";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import User from "./pages/userDetails";
import UserHistory from "./pages/userDetails/UserHistory";
import HistoryDetails from "./pages/userDetails/HistoryDetails";

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (token) {
    console.log('here🎈',)
    return true;
  } else {
    console.log('here2🎈')
    return false;
  }
};

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? (
    <Layout>{element}</Layout>
  ) : (window.location.pathname === "/admin/login'" ? <Navigate to="/admin/login" /> : <Navigate to="/login" />
  );
};

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="/userDetails"
            element={<ProtectedRoute element={<User />} />}
          />
          <Route
            path="/userDetails/userHistory"
            element={<ProtectedRoute element={<UserHistory />} />}
          />
          <Route
            path="/userDetails/historyDetails"
            element={<ProtectedRoute element={<HistoryDetails />} />}
          />
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
