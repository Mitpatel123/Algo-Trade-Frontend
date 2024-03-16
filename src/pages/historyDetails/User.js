import React, { useState } from "react";
import MyTable from "../../components/common/Table";
import { Box } from "@mui/material";
import PageContainer from "../../components/page-container";
import Label from "../../components/common/label";
import downloadIcon from "../../components/Icons/download.svg";
import MyButton from "../../components/common/MyButton";
import MyDatePicker from "../../components/common/DatePicker";
import MySelect from "../../components/common/MySelect";
import { useParams } from "react-router";

const HistoryDetails = () => {
  const headers = [
    "Date",
    "Stock Name",
    "Buy Price",
    "Sell Price",
    "Buy Status",
    "Sell Status",
    "P/L",
    "Reason",
  ];

  const rows = [
    {
      date: "13-02-2024",
      stockName: "Nifty13022024",
      buyPrice: "₹100.00",
      sellPrice: "-",
      buyStatus: "Executed",
      sellStatus: "Executed",
      profit: "+₹10.00",
      reason: "Lorem Ipsum is lorem epsum ",
    },
    {
      date: "13-02-2024",
      stockName: "Nifty13022024",
      buyPrice: "₹100.00",
      sellPrice: "₹110.00",
      buyStatus: "Cancelled",
      sellStatus: "Executed",
      profit: "+₹10.00",
      reason: "Lorem Ipsum is lorem epsum ",
    },
    {
      date: "13-02-2024",
      stockName: "Nifty13022024",
      buyPrice: "₹100.00",
      sellPrice: "₹110.00",
      buyStatus: "Executed",
      sellStatus: "Executed",
      profit: "+₹10.00",
      reason: "Lorem Ipsum is lorem epsum ",
    },
  ];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cashFlow, setCashFlow] = useState("");
  const [orderType, setOrderType] = useState("");
  const { dematId } = useParams();

  return (
    <PageContainer>
      <Box margin="20px 0">
        <Box
          display={{ xs: "grid", sm: "grid", md: "grid", lg: "flex" }}
          width="100%"
          justifyContent={{
            xs: "start",
            lg: "space-between",
          }}
        >
          <Box display="flex" alignItems="center" gap="5px">
            <Label
              text="Jessy K Roy"
              fontWeight={500}
              fontSize={{ xs: "17px", sm: "22px", md: "26px" }}
              color="white"
            />
            <Label
              text={<li> #{dematId} </li>}
              fontSize={{ xs: "12px", sm: "15px", md: "17px" }}
              component="ul"
            />
          </Box>
          <Box
            display={{ xs: "grid", sm: "grid", md: "flex", lg: "flex" }}
            justifyContent="end"
            gap="10px 50px"
            alignSelf="center"
            margin={{ xs: "20px 0", sm: "20px 0", md: "0", lg: "0" }}
          >
            <Box display="flex" alignItems="center">
              <MyDatePicker
                value={startDate}
                onChange={(date) => setStartDate(date)}
                placeholder="Start Date"
              />
              <Label text="To" fontSize="16px" color="white" paddingX="20px" />
              <MyDatePicker
                value={endDate}
                onChange={(date) => setEndDate(date)}
                placeholder="End Date"
              />
            </Box>
            <MySelect
              title="Select P/L"
              options={[
                { value: "Profit", label: "Profit" },
                { value: "Loss", label: "Loss" },
              ]}
              onSelectChange={(value) => setCashFlow(value)}
            />
            <MySelect
              title="Select Order Type"
              options={[
                { value: 10, label: "Ten" },
                { value: 20, label: "Twenty" },
                { value: 30, label: "Thirty" },
              ]}
              width="236px"
              onSelectChange={(value) => setOrderType(value)}
            />
            <MyButton
              text="Download PDF"
              leftIcon={downloadIcon}
              color="white"
              fontSize="10px"
            />
          </Box>
        </Box>
      </Box>
      {/* table */}
      <Box
        width="calc(100vw - 110px)"
        overflow="auto"
        sx={{
          backgroundColor: "#0B253D",
          padding: "10px",
          borderRadius: "10px",
          marginY: "23px",
        }}
      >
        <MyTable borderRadius="10px" headers={headers} rows={rows} />
      </Box>
      <Box display="flex" justifyContent="end">
        <Label
          text="Total P/L : +₹20"
          color="white"
          fontSize="18px"
          backgroundColor="#419DF1"
          width="210px"
          height="55px"
          borderRadius="8px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
      </Box>
    </PageContainer>
  );
};

export default HistoryDetails;
