import React, { useState } from "react";
import Label from "../../components/common/label";
import { Box, Button, Stack } from "@mui/material";
import downloadIcon from "../../components/Icons/download.svg";
import MyDatePicker from "../../components/common/DatePicker";
import PageContainer from "../../components/page-container";
import MyButton from "../../components/common/MyButton";
import MyTable from "../../components/common/Table";
import MySelect from "../../components/common/MySelect";

const QueryTicket = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [orderType, setOrderType] = useState("");

    const headers = [
        "S.No",
        "Ticket Id",
        "Name",
        "Email Id",
        "Subject",
        "Category",
        "Status",
        "Created",
    ];

    const rows = [
        {
            no: "01",
            ticketId: "#123456",
            name: "John D’Souza",
            email: "John12@gmail.com",
            subject: "Lorem Ipsum is simply ",
            category: "Bug",
            status: "In Progress",
            created: "2 hours Ago",
        },
        {
            no: "02",
            ticketId: "#123456",
            name: "John D’Souza",
            email: "John12@gmail.com",
            subject: "Lorem Ipsum is simply ",
            category: "General",
            status: "Closed",
            created: "2 hours Ago",
        },
        {
            no: "03",
            ticketId: "#123456",
            name: "John D’Souza",
            email: "John12@gmail.com",
            subject: "Lorem Ipsum is simply ",
            category: "Bug",
            status: "On Hold",
            created: "2 hours Ago",
        },
        {
            no: "04",
            ticketId: "#123456",
            name: "John D’Souza",
            email: "John12@gmail.com",
            subject: "Lorem Ipsum is simply ",
            category: "Support",
            status: "On Hold",
            created: "2 hours Ago",
        },
        {
            no: "05",
            ticketId: "#123456",
            name: "John D’Souza",
            email: "John12@gmail.com",
            subject: "Lorem Ipsum is simply ",
            category: "General",
            status: "Closed",
            created: "2 hours Ago",
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

    const handleDownloadClick = () => { };

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
                        text="Query Tickets"
                        fontWeight={500}
                        fontSize={{ xs: "17px", sm: "22px", md: "26px" }}
                        color="white"
                    />
                    {/* <Label
                        text={<li> #02345678 </li>}
                        fontSize={{ xs: "12px", sm: "15px", md: "17px" }}
                        color="#419DF1"
                        component="ul"
                    /> */}
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
                    <MySelect
                        title="All Tickets"
                        options={[
                            { value: 10, label: "Ten" },
                            { value: 20, label: "Twenty" },
                            { value: 30, label: "Thirty" },
                        ]}
                        width="236px"
                        onSelectChange={(value) => setOrderType(value)}
                    />
                </Box>
                <Button
                    style={{
                        backgroundColor: "#419DF1",
                        color: "white",
                        fontSize: "14px",
                    }}
                //   onClick={handlePlusQuantity}
                >
                    + Create Ticket
                </Button>
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

export default QueryTicket;
