import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
  Box,
} from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../apiSetup/axios";
import { formatStockName, getStockImage } from "../../utils/helper";

const BuyPriceTbl = ({ setIsSellTrade, setSellTradeData, iconBg }) => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const isAdmin = localStorage.getItem("code") == 1 ? true : false;

  const getdata = () => {
    axios
      .post(`${BASE_URL}admin/getbuytrade`, { type: 0 })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const getUserData = () => {
    const userId = localStorage.getItem("id");
    axios
      .post(`${BASE_URL}user/userBuyTrade`, { id: userId })
      .then((response) => {
        setData(response.data.data.tradeData[0].data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (isAdmin) {
      getdata();
    } else {
      getUserData();
    }
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Market Price</TableCell>
            <TableCell align="left">Buy Price</TableCell>
            <TableCell align="right">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                scope="row"
                style={{ display: "flex", gap: 12, alignItems: "center" }}
              >
                <Box className={iconBg}>
                  <img
                    src={row.stockName ? getStockImage(row.stockName) : ""}
                    alt={row.stockName}
                  />
                </Box>
                {row.stockName ? formatStockName(row?.stockName) : "-"}
              </TableCell>
              <TableCell align="left">-</TableCell>
              <TableCell
                align="left"
                style={{ color: theme.palette.info.main }}
              >
                {row.buyPrice || "-"}
              </TableCell>
              <TableCell
                align="right"
                onClick={() => {
                  setIsSellTrade(true);
                  setSellTradeData(row);
                }}
                style={{
                  color: theme.palette.error.main,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Sell
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default BuyPriceTbl;
