import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Arrow from "../../components/Icons/arrow-up.svg";

const MySelect = (props) => {
  const { options, onSelectChange, title, backgroundColor, textColor, height } =
    props;
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    onSelectChange && onSelectChange(e.target.value);
  };

  return (
    <Select
      value={selectedValue}
      onChange={handleChange}
      displayEmpty
      IconComponent={() => (
        <img src={Arrow} alt="Arrow Icon" style={{ margin: "0 3px" }} />
      )}
      style={{
        backgroundColor: backgroundColor || "#0B253D",
        color: textColor || "#ABABAB",
        height: height || "44px",
        fontSize: "14px",
        borderRadius: "8px",
        minWidth: "150px",
      }}
    >
      <MenuItem value="">
        <em>{title}</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MySelect;
