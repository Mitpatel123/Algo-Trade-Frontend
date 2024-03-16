import axios from "../apiSetup/axios";

export const getAllUsers = () => axios.get("/admin/getKiteLoginUserData");
export const getUnlinkedUsers = () =>
  axios.get("/admin/getKiteNotLoginUserData");

export const updateLinkedUserData = (data) =>
  axios.post("/admin/updateKiteLoginUserData", data);

export const getTradePayload = (data) =>
  axios.post("/admin/getBuyPayload", data);

export const placeOrder = (data) => {
  axios.post("/admin/buytrade", data);
};
export const getBuyTrade = (data) => {
  axios.post("/admin/getbuytrade", data);
};

export const sellTrade = (data) => {
  axios.post("/admin/selltrade", data);
};

export const getAllSellTrades = (data) => {
  axios.post("/admin/getselltrade", data);
};

export const getUserQuantity = (data) => {
  axios.post("/user/user_quantity", data);
};
