import React, { useEffect, useState } from "react";
import Label from "../../components/common/label";
import { Box, Stack } from "@mui/material";
import downloadIcon from "../../components/Icons/download.svg";
import MyDatePicker from "../../components/common/DatePicker";
import PageContainer from "../../components/page-container";
import MyButton from "../../components/common/MyButton";
import MyTable from "../../components/common/Table";

const UserHistory = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const headers = [
    "Date",
    "Linked Time",
    "Kite App",
    "Un Linked Time",
    "Kite App",
    "Index",
    "Buy/ Sell",
    "Reason",
  ];

  const rows = [
    {
      date: "14-02-2024",
      linkedTime: "9:00 AM",
      linkedApp: "Linked",
      unLinkedTime: "12:00 PM",
      unLinkedApp: "Un Linked",
      index: "Nifty14022024",
      action: "Buy",
      reason: "Not Executed because of unlinked",
    },
    {
      date: "14-02-2024",
      linkedTime: "9:00 AM",
      linkedApp: "Linked",
      unLinkedTime: "12:00 PM",
      unLinkedApp: "Un Linked",
      index: "Nifty14022024",
      action: "Buy",
      reason: "Not Executed because of unlinked",
    },
    {
      date: "14-02-2024",
      linkedTime: "9:00 AM",
      linkedApp: "Linked",
      unLinkedTime: "12:00 PM",
      unLinkedApp: "Un Linked",
      index: "Nifty14022024",
      action: "Buy",
      reason: "Not Executed because of unlinked",
    },
    {
      date: "14-02-2024",
      linkedTime: "9:00 AM",
      linkedApp: "Linked",
      unLinkedTime: "12:00 PM",
      unLinkedApp: "Un Linked",
      index: "Nifty14022024",
      action: "Buy",
      reason: "Not Executed because of unlinked",
    },
    {
      date: "13-02-2024",
      linkedTime: "9:00 AM",
      linkedApp: "Linked",
      unLinkedTime: "12:00 PM",
      unLinkedApp: "Un Linked",
      index: "Nifty14022024",
      action: "Buy",
      reason: "Not Executed because of unlinked",
    },
    {
      date: "13-02-2024",
      linkedTime: "9:00 AM",
      linkedApp: "Linked",
      unLinkedTime: "12:00 PM",
      unLinkedApp: "Un Linked",
      index: "Nifty14022024",
      action: "Buy",
      reason: "Not Executed because of unlinked",
    },
    {
      date: "13-02-2024",
      linkedTime: "9:00 AM",
      linkedApp: "Linked",
      unLinkedTime: "12:00 PM",
      unLinkedApp: "Un Linked",
      index: "Nifty14022024",
      action: "Buy",
      reason: "Not Executed because of unlinked",
    },
  ];

  const groupedRows = rows.reduce((acc, row) => {
    const date = row.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(row);
    return acc;
  }, {});

  const handleDownloadClick = () => {};

  return (
    <PageContainer>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap="5px">
          <Label
            text="Jessy K Roy"
            fontWeight={500}
            fontSize={{ xs: "17px", sm: "22px", md: "26px" }}
            color="white"
          />
          <Label
            text={<li> #02345678 </li>}
            fontSize={{ xs: "12px", sm: "15px", md: "17px" }}
            color="#419DF1"
            component="ul"
          />
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <MyDatePicker
            value={startDate}
            onChange={(date) => setStartDate(date)}
            placeholder="Start Date"
          />
          <Label text="To" fontSize="16px" color="white" paddingX="10px" />
          <MyDatePicker
            value={endDate}
            onChange={(date) => setEndDate(date)}
            placeholder="End Date"
          />
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <MyButton
            text="Download PDF"
            leftIcon={downloadIcon}
            color="white"
            fontSize="10px"
            onClick={handleDownloadClick}
          />
        </Box>
      </Stack>

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
        {Object.keys(groupedRows).map((date, index) => (
          <div key={index} style={{ marginTop: index > 0 ? "10px" : 0 }}>
            <MyTable
              headers={index === 0 ? headers : []}
              rows={groupedRows[date]}
            />
          </div>
        ))}
      </Box>
    </PageContainer>
  );
};

export default UserHistory;
