import { Typography } from "@mui/material";
import React from "react";

const Label = (props) => {
  return (
    <Typography
      textAlign="center"
      sx={{ ...props.sx }}
      display={props.display || "block"}
      marginBottom={0 || props?.marginBottom}
      fontSize={props?.fontSize}
      component={props?.component}
      color={props?.color}
      fontWeight={props.fontWeight}
      fontFamily={'"Poppins",sans-serif'}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};

export default Label;
