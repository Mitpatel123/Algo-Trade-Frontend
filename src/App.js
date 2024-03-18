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
import UserHistoryDetails from "./pages/historyDetails/User";
import Signals from "./pages/signals/Signals";
import Register from "./pages/register";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    console.log("here🎈");
    return true;
  } else {
    console.log("here2🎈");
    return false;
  }
};

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? (
    <Layout>{element}</Layout>
  ) : window.location.pathname === "/admin/login'" ? (
    <Navigate to="/admin/login" />
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  const isAdmin = localStorage.getItem("code") == 1 ? true : false;
  return (
    <BrowserRouter basename={"/"}>
      <ThemeProvider theme={lightTheme}>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          {isAdmin ? (
            <Route
              path="/"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
          ) : (
            <Route
              path="/"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
          )}

          <Route
            path="/userDetails"
            element={<ProtectedRoute element={<User />} />}
          />
          <Route
            path="/userDetails/userHistory"
            element={<ProtectedRoute element={<UserHistory />} />}
          />
          <Route
            path="/historyDetails"
            element={<ProtectedRoute element={<HistoryDetails />} />}
          />
          {/* <Route
            path="/historyDetails/userHistoryDetails"
            element={<ProtectedRoute element={<UserHistoryDetails />} />}
          /> */}
          <Route
            path="/historyDetails/:dematId"
            element={<ProtectedRoute element={<UserHistoryDetails />} />}
          />
          <Route
            path="/signals"
            element={<ProtectedRoute element={<Signals />} />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
