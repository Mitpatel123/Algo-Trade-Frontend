import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import Label from "../common/label";
import CommonDropdown from "../../components/CommonDropdown";
import CommonTextField from "../commonTextField";
import { sellTrade } from "../../services/api";
import { formatStockName } from "../../utils/helper";

const SellTradeModal = ({ setIsSellTrade, sellTradeData }) => {
  const { _id, buyPrice, tradingsymbol, stockName, product, exchange } =
    sellTradeData;

  const defaultData = {
    id: _id,
    index: stockName,
    transaction_type: "sell",
    order_type: "",
    tradingsymbol: tradingsymbol,
    product: product,
    exchange: exchange,
  };

  const [modalData, setModalData] = useState(defaultData);

  const handlePlaceOrder = async () => {
    const response = await sellTrade({
      ...modalData,
      order_type: modalData.order_type.toLocaleUpperCase(),
    });
  };

  return (
    <Grid container xs={12} sm={12} md={12} lg={12} xl={12} gap={10}>
      <Grid item spacing={5} container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Label fontSize={"22px"} text={"Sell Trade"} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          display="grid"
          alignItems="center"
        >
          <Box display="flex" padding="0 5px">
            <Label text="Stock Name : " />
            <Label text={formatStockName(stockName)} padding="0 5px" />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          display="grid"
          alignItems="center"
        >
          <Box display="flex" padding="0 5px">
            <Label text="Buy Price : " />
            <Label text={buyPrice} padding="0 5px" />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          display="grid"
          alignItems="center"
        ></Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonDropdown
            fullWidth
            width={"100%"}
            values={["Market", "Limit"]}
            text="Market | Limit"
            name="order_type"
            value={modalData?.order_type}
            onChange={(e) => {
              setModalData({
                ...modalData,
                order_type: e.target.value,
              });
            }}
            valid
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonTextField
            fullWidth
            width={"100%"}
            values={[]}
            text="Enter Price"
            name="price"
            disabled={
              modalData?.order_type === "Market" || modalData?.order_type === ""
                ? true
                : false
            }
            value={modalData?.price}
            placeholder="Enter Price"
            labelColor={
              modalData?.order_type === "Market" ||
              (modalData?.order_type === "" && "#021629")
            }
            bgcolor="#021629"
            borderRadius="8px"
            type="number"
            noBorder
            inputPadding="6px 0"
            onChange={(e) => {
              setModalData({
                ...modalData,
                price: e.target.value,
              });
            }}
            valid
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign={"end"}>
          <Button
            size="large"
            fullWidth
            variant="contained"
            style={{ maxWidth: "300px", margin: "10px" }}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
          <Button
            size="large"
            fullWidth
            variant="contained"
            style={{ maxWidth: "300px", margin: "10px" }}
            onClick={() => setIsSellTrade(false)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SellTradeModal;
