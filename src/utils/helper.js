export const formatStockName = (stockName) => {
  if (stockName.toLowerCase() === "sensex") {
    return "Sensex";
  } else if (stockName.toLowerCase() === "finnifty") {
    return "Fin Nifty";
  } else if (stockName.toLowerCase() === "banknifty") {
    return "Bank Nifty";
  } else if (stockName.toLowerCase() === "midcpnifty") {
    return "Mid Cap";
  } else if (stockName.toLowerCase() === "nifty") {
    return "Nifty 50";
  } else {
    return stockName || "-";
  }
};
export const getStockImage = (stockName) => {
  switch (stockName.toLowerCase()) {
    case "sensex":
      return require("../components/Icons/Sensex.svg").default;
    case "finnifty":
      return require("../components/Icons/FinNifty.svg").default;
    case "banknifty":
      return require("../components/Icons/BankNifty.svg").default;
    case "midcapnifty":
      return require("../components/Icons/MidCap.svg").default;
    case "nifty":
      return require("../components/Icons/Nifty_50.svg").default;
    default:
      return require("../components/Icons/Sensex.svg").default;
  }
};
