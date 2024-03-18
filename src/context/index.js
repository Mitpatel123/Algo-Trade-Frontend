import { createContext, useContext, useState } from "react";
// import { getLSItem, removeLSItem, setLSItem } from "../APiSetUp/LocalStorage";
import axios from "../apiSetup/axios";
import { useTheme } from "@mui/material";
import { getLSItem , removeLSItem, setLSItem} from "../apiSetup/local-storage";



const AppContext = createContext();

const AppProvider = ({ children }) => {
  const theme = useTheme()
  const [auth_token, setAuth_token] = useState(getLSItem("auth_token"));
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [loader, setLoader] = useState(false);

  const [deviceToken, setDeviceToken] = useState(
    getLSItem("deviceToken") ? [getLSItem("deviceToken")] : null
  );
  const [user, setUser] = useState(
    getLSItem("user") ? JSON.parse(getLSItem("user")) : null
  );
  const [cart, setCart] = useState(
    getLSItem("cart") ? JSON.parse(getLSItem("cart")) : null
  );
  const [wishList, setWishList] = useState(
    getLSItem("wishlist") ? JSON.parse(getLSItem("wishlist")) : null
  );
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [profileImagePath, setProfileImagePath] = useState(
    getLSItem("profileImagePath")
  );

  const updateToken = (auth) => {
    // Perform update token logic here
    setLSItem("auth_token", auth);
    setAuth_token(auth);
  };

  const onUpdateUser = (userData) => {
    // Perform login logic here
    setLSItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  const onUpdateUserType = (type) => {
    // Perform login logic here
    setLSItem("user_type", type);
  };

  const onUpdateProfileImagePath = (data) => {
    // Perform login logic here
    setLSItem("profileImagePath", data);
    setProfileImagePath(data);
  };

  const logout = () => {
    // Perform logout logic here
    removeLSItem("user");
    removeLSItem("auth_token");
    removeLSItem("token");
    removeLSItem("code");
    removeLSItem("id");
    setUser(null);
    setAuth_token(null);
  };
  const OnUpdateSuccess = (data) => {
    setSuccess(data);
  };
  const OnUpdateError = (data) => {
    setError(data);
  };




  const toggleLoader = () => {
    setLoader((prevLoader) => !prevLoader);
  };

  const OnUpdateCart = (item) => {
    setLSItem("cart", JSON.stringify(item));
    setCart(item);
  };

  const OnUpdateWishList = (item) => {
    setLSItem("wishlist", JSON.stringify(item));
    setWishList(item);
  };

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        auth_token,
        user,
        loader,
        cart,
        wishList,
        success,
        error,
        profileImagePath,
        onUpdateProfileImagePath,
        updateToken,
        onUpdateUser,
        logout,
        OnUpdateSuccess,
        OnUpdateError,
        toggleLoader,
        OnUpdateCart,
        OnUpdateWishList,
        onUpdateUserType,
        toggleSideBar,
        deviceToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom hook

const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return appContext;
};

export { AppContext, AppProvider, useAppContext };

