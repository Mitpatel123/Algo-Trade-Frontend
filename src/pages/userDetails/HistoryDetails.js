import React, { useState } from "react";
import MyTable from "../../components/common/Table";
import { Box, Stack } from "@mui/material";
import userImage from "../../components/Icons/user.svg";
import PageContainer from "../../components/page-container";
import Label from "../../components/common/label";
import downloadIcon from "../../components/Icons/download.svg";
import MyButton from "../../components/common/MyButton";
import MyDatePicker from "../../components/common/DatePicker";
import MySelect from "../../components/common/MySelect";
import Searchbar from "../../components/common/Searchbar";

const HistoryDetails = () => {
  const headers = [
    "User Name",
    "Email Id",
    "Demat Id",
    "Date",
    "Profit / Loss",
  ];

  const rows = [
    {
      user: { value: "John K D’Souza", imageSrc: userImage },
      email: "John12@gmail.com",
      dematId: "John12@gmail.com",
      date: "14-02-2024",
      profit: "+₹20,000",
    },
    {
      user: { value: "John K D’Souza", imageSrc: userImage },
      email: "John12@gmail.com",
      dematId: "John12@gmail.com",
      date: "14-02-2024",
      profit: "+₹20,000",
    },
    {
      user: { value: "John K D’Souza", imageSrc: userImage },
      email: "John12@gmail.com",
      dematId: "John12@gmail.com",
      date: "14-02-2024",
      profit: "+₹20,000",
    },
    {
      user: { value: "John K D’Souza", imageSrc: userImage },
      email: "John12@gmail.com",
      dematId: "John12@gmail.com",
      date: "14-02-2024",
      profit: "+₹20,000",
    },
  ];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cashFlow, setCashFlow] = useState("");
  const [orderType, setOrderType] = useState("");

  return (
    <PageContainer>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Label
          text="History Details"
          fontWeight={500}
          fontSize={{ xs: "17px", sm: "22px", md: "26px" }}
          color="white"
        />
        <MyButton
          text="Download PDF"
          leftIcon={downloadIcon}
          color="white"
          fontSize="10px"
        />
      </Stack>

      <Box margin="20px 0">
        <Box
          display={{ xs: "grid", sm: "grid", md: "grid", lg: "flex" }}
          width="100%"
          justifyContent={{
            xs: "start",
            lg: "space-between",
          }}
        >
          {/* search bar */}
          <Searchbar onSearchChange={(value) => console.log(value)} />
          <Box
            display={{ xs: "grid", sm: "grid", md: "flex", lg: "flex" }}
            justifyContent="end"
            width="100%"
            gap="10px 60px"
            margin={{
              xs: "20px 0 0 0",
              sm: "20px 0 0 0",
              md: "20px 0 0 0",
              lg: "0 3%",
            }}
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
        <MyTable
          borderRadius="10px"
          headers={headers}
          rows={rows}
          imageColumn="user"
          Image
        />
      </Box>
    </PageContainer>
  );
};

export default HistoryDetails;
