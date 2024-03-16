import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../apiSetup/axios";
import { formatStockName, getStockImage } from "../../utils/helper";

const SellPrice = (props) => {
  const theme = useTheme();
  const date = new Date();
  const fullDate = `${date.getMonth() + 1}/${
    date.getDate() - 1
  }/${date.getFullYear()}`;

  const [sellData, setSellData] = useState([]);
  const isAdmin = localStorage.getItem("code") == 1 ? true : false;
  const getdata = () => {
    axios
      .post(`${BASE_URL}admin/getselltrade`, {
        type: 0,
        date: fullDate,
      })
      .then((response) => {
        setSellData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getUserData = () => {
    const userId = localStorage.getItem("id");
    axios
      .post(`${BASE_URL}user/userSellTrade`, { id: userId, date: fullDate })
      .then((response) => {
        setSellData(response.data.data.tradeData[0].data);
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
            <TableCell align="left">Sell Price</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellData.map((row) => (
            <TableRow key={row.tradingsymbol}>
              <TableCell
                scope="row"
                style={{ display: "flex", gap: 12, alignItems: "center" }}
              >
                <Box className={props.iconBg}>
                  <img
                    src={row.stockName ? getStockImage(row.stockName) : ""}
                    alt={row.stockName}
                  />
                </Box>{" "}
                {row.stockName ? formatStockName(row.stockName) : "-"}
              </TableCell>
              <TableCell align="left">{row.buyPrice || "-"}</TableCell>
              <TableCell
                align="left"
                style={{ color: theme.palette.error.main }}
              >
                {row.sellPrice}
              </TableCell>
              <TableCell
                align="right"
                style={{ color: theme.palette.success.main }}
              >
                {row.order_type || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default SellPrice;
