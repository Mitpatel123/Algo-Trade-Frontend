import { Box, IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import defaultSearchIcon from "../../components/Icons/search.svg";

const Searchbar = ({
  maxWidth,
  borderColor,
  borderRadius,
  backgroundColor,
  placeholder,
  customSearchIcon,
  onSearchChange,
}) => {
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    setSearchString(e.target.value);
    onSearchChange && onSearchChange(e.target.value);
  };

  return (
    <Box
      border={`solid ${borderColor || "#163A5C"} 1px`}
      borderRadius={borderRadius || "5px"}
      margin="0 20px 0 0"
      height="44px"
      outline="none"
      fontSize="14px"
      width="100%"
      maxWidth={{ xs: "100%", sm: "100%", md: "100%", lg: "491px" }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          outline: "none",
          height: "41.5px",
          backgroundColor: backgroundColor || "#021629",
        }}
      >
        <IconButton type="button" aria-label="search">
          <img src={customSearchIcon || defaultSearchIcon} alt="Search Here" />
        </IconButton>
        <InputBase
          style={{ color: "white", width: "100%", fontSize: "14px" }}
          placeholder={placeholder || "Search Here"}
          value={searchString}
          onChange={handleChange}
        />
      </Paper>
    </Box>
  );
};
export default Searchbar;
