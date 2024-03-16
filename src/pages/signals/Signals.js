import React, { useEffect, useState } from "react";
import Label from "../../components/common/label";
import { Box } from "@mui/material";
import NiftyIcon from "../../components/Icons/NiftyIcon.svg";
import SensexIcon from "../../components/Icons/sensexicon.svg";
import FinNiftyIcon from "../../components/Icons/finNiftyIcon.svg";
import MidCapIcon from "../../components/Icons/midCapIcon.svg";
import BankNiftyIcon from "../../components/Icons/bankNiftyIcon.svg";
import SignalCard from "../../components/SignalCard";
import axios from "axios";
import { BASE_URL } from "../../apiSetup/axios";

const Signals = () => {
  const [quantityModalId, setQuantityModalId] = useState("");
  const [data, setData] = useState([]);

  const getdata = () => {
    axios
      .post(`${BASE_URL}user/user_quantity`, {
        filter: 1,
        id: localStorage.getItem("id"),
      })
      .then((response) => {
        setData(response?.data?.data?.userData[0] || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const getIconForSymbol = (symbol) => {
    switch (symbol) {
      case "nifty":
        return NiftyIcon;
      case "sensex":
        return SensexIcon;
      case "finNifty":
        return FinNiftyIcon;
      case "midcpNifty":
        return MidCapIcon;
      case "bankNifty":
        return BankNiftyIcon;
      default:
        return "";
    }
  };

  return (
    <>
      <Label
        text="Signals"
        color="white"
        fontSize="26px"
        textAlign="start"
        padding="10px"
      />
      <Box backgroundColor="#0B253D" borderRadius="10px">
        {Object.entries(data).map(([key, item], index) => (
          <>
            {item.symbol && (
              <SignalCard
                key={index}
                id={item._id}
                img={getIconForSymbol(item.symbol)}
                marketPrice={"-"}
                itemQuantity={item.quantity}
                label={item.symbol || ""}
                setQuantityModalId={setQuantityModalId}
                quantityModalId={quantityModalId}
              />
            )}
          </>
        ))}
      </Box>
    </>
  );
};

export default Signals;
