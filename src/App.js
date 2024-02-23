import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Loader from './Components/Loader';
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";
// import { ProtectedRoutes } from "./Routes/ProtectedRoutes";
import Login from "./pages/login";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";


function App() {
  return (
    <BrowserRouter basename={"/"}>
      <ThemeProvider theme={lightTheme}>
        {/* <Loader /> */}
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route element={<ProtectedRoutes />}> */}
            <Route path="/" element={<Dashboard />} />

            {/* </Route> */}
          </Routes>
        </Layout>
        <Routes>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
