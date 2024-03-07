import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ReactComponent as dateOpenIcon } from "../Icons/dateOpen.svg";

const MyDatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(props.defaultValue || null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (props.onChange) {
      props.onChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        sx={{
          bgcolor: "#0B253D",
          borderRadius: "8px",
          color: "white",
          "& .MuiInputBase-input": {
            color: "white",
            fontSize: "14px",
          },
          "& .MuiOutlinedInput-root": {
            maxHeight: "44px",
            maxWidth: "199px",
            width: { xs: "100%", sm: "100%", md: "100%", lg: "199px" },
          },
        }}
        slotProps={{ textField: { placeholder: props.placeholder } }}
        slots={{
          openPickerIcon: dateOpenIcon,
        }}
        onChange={handleDateChange}
        defaultValue={props.defaultValue ? props.defaultValue : null}
        format="DD-MM-YYYY"
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
