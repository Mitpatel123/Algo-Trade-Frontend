import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";
import Login from "./pages/login";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import User from "./pages/userDetails";
import UserHistory from "./pages/userDetails/UserHistory";
import HistoryDetails from "./pages/historyDetails/HistoryDetails";
import Register from "./pages/register";
import SignalCard from "./components/SignalCard";
import Signals from "./pages/signals/Signals";

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  } else {
    return false;
  }
};

const ProtectedAdminRoute = ({ element }) => {
  return isAuthenticated() && localStorage.getItem("userType") == 0 ? (<Layout>{element}</Layout>) : window.location.pathname === "/admin/login'" ? (<Navigate to="/admin/login" />) : (<Navigate to="/login" />);
};
const ProtectedUserRoute = ({ element }) => {
  return isAuthenticated() && localStorage.getItem("userType") == 1 ? (<Layout>{element}</Layout>) : window.location.pathname === "/admin/login'" ? (<Navigate to="/admin/login" />) : (<Navigate to="/login" />);
};

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <ThemeProvider theme={lightTheme}>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/userDashboard" element={<ProtectedUserRoute element={<Dashboard />} />} />
          <Route path="/userDetails" element={<ProtectedUserRoute element={<User />} />} />
          <Route path="/userDetails/userHistory" element={<ProtectedUserRoute element={<UserHistory />} />} />
          <Route path="/userDetails/historyDetails" element={<ProtectedUserRoute element={<HistoryDetails />} />} />
          <Route path="/userDetails/signals" element={<ProtectedUserRoute element={<Signals />} />} />

          <Route path="/adminDashboard" element={<ProtectedAdminRoute element={<Dashboard />} />} />
          <Route path="/adminDetails" element={<ProtectedAdminRoute element={<User />} />} />
          <Route path="/adminDetails/userHistory" element={<ProtectedAdminRoute element={<UserHistory />} />} />
          <Route path="/adminDetails/historyDetails" element={<ProtectedAdminRoute element={<HistoryDetails />} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
