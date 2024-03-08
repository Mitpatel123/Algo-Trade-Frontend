import { Box, Button } from "@mui/material";
import React from "react";

const MyButton = (props) => {
  const { text, leftIcon, rightIcon, onClick } = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {leftIcon && <img src={leftIcon} alt={text} />}
      <Button
        sx={{
          ...props,
        }}
      >
        {text}
      </Button>
      {rightIcon && <img src={rightIcon} alt={text} />}
    </Box>
  );
};

export default MyButton;
