import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import Label from "../common/label";
import CommonDropdown from "../../components/CommonDropdown";
import { getTradePayload, placeOrder } from "../../services/api";
import CommonTextField from "../commonTextField";

const TradeExecuteModal = ({ indexVal, setIsTradeExecute }) => {
  const defaultData = {
    index: "",
    strikePrice: "",
    transaction_type: "",
    product: "",
    expiry: "",
    price: "",
    instrumentType: "",
    order_type: "",
  };

  const [symbols, setSymbols] = useState([]);
  const [modalData, setModalData] = useState(defaultData);
  const [expiry, setexpiry] = useState([]);
  const [indexData, setindexData] = useState([]);

  const getTradeEpiryOffset = async (selectedKey) => {
    try {
      const response = await getTradePayload({
        index: selectedKey,
      });
      setexpiry(response?.data?.data || []);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const getTradeSymbols = async (date) => {
    try {
      const response = await getTradePayload({
        index: modalData?.index || "",
        expiry: date,
      });
      setSymbols(response?.data?.data || []);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const tradeIndexData = async () => {
    try {
      const response = await getTradePayload({});
      setindexData(response.data.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    tradeIndexData();
  }, []);

  const getAllData = async () => {
    try {
      const response = await getTradePayload(modalData);
      return response?.data?.data || [];
    } catch (err) {
      console.log(err, "err");
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const [response] = await getAllData();
      const payloadData = {
        StockName: modalData.index,
        expiry: modalData.expiry,
        strikePrice: modalData.strikePrice,
        transaction_type: modalData.transaction_type,
        order_type: modalData.order_type.toLocaleUpperCase(),
        price: modalData.price,
        product: modalData.product,
        exchange: response.exchange,
        LoatSize: response.lot_size,
        tradingsymbol: response.tradingsymbol,
      };
      await placeOrder(payloadData);
      setIsTradeExecute(false);
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <Grid container xs={12} sm={12} md={12} lg={12} xl={12} gap={10}>
      <Grid item spacing={5} container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Label fontSize={"22px"} text={"Trade Execute"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonDropdown
            fullWidth
            width={"100%"}
            values={indexData}
            text="Index"
            name="index"
            value={modalData?.index || ""}
            onChange={(e) => {
              setModalData({ ...modalData, index: e.target.value });
              getTradeEpiryOffset(e.target.value);
              setexpiry([]);
            }}
            valid
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonDropdown
            fullWidth
            width={"100%"}
            values={expiry || []}
            text="Expiry Offset"
            name="expiry"
            color={modalData?.index === "" && "#021629"}
            disabled={modalData?.index === "" ? true : false}
            value={modalData?.expiry}
            onChange={(e) => {
              setModalData({ ...modalData, expiry: e.target.value });
              getTradeSymbols(e.target.value);
              setSymbols([]);
            }}
            valid
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonDropdown
            fullWidth
            width={"100%"}
            values={symbols || []}
            text="Strick Price"
            disabled={modalData?.expiry === "" ? true : false}
            color={modalData?.expiry === "" && "#021629"}
            name="strikePrice"
            value={modalData?.strikePrice}
            onChange={(e) => {
              setModalData({ ...modalData, strikePrice: e.target.value });
            }}
            valid
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonDropdown
            fullWidth
            width={"100%"}
            values={["Call", "Put"]}
            text="Call | Put"
            name="instrumentType"
            value={modalData?.instrumentType || ""}
            onChange={(e) => {
              const value = e.target.value;
              setModalData({
                ...modalData,
                instrumentType:
                  value === "Call" ? "CE" : value === "Put" ? "PE" : "",
              });
            }}
            valid
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonDropdown
            fullWidth
            width={"100%"}
            values={["Buy", "Sell"]}
            text="Buy | Sell"
            name="transaction_type"
            value={modalData?.transaction_type}
            onChange={(e) => {
              setModalData({ ...modalData, transaction_type: e.target.value });
            }}
            valid
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonDropdown
            fullWidth
            width={"100%"}
            values={["Market", "Limit"]}
            text="Market | Limit"
            name="order_type"
            value={modalData?.order_type}
            onChange={(e) => {
              setModalData({ ...modalData, order_type: e.target.value });
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
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CommonDropdown
            fullWidth
            width={"100%"}
            values={["MIS", "NRML", "CNC"]}
            text="Intraday | Long Day"
            name="product"
            value={modalData?.product}
            onChange={(e) => {
              setModalData({ ...modalData, product: e.target.value });
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
            onClick={() => setIsTradeExecute(false)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TradeExecuteModal;
