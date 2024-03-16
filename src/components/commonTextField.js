import {
    InputLabel,
    OutlinedInput,
    Typography,
    Box,
    InputAdornment,
    IconButton,
    TextField,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import emojiRegex from "emoji-regex";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const useStyles = makeStyles()((theme) => {
  return {
    main: {
      // background: "#36373B",
      // minWidth: "50px",
      // border: 'none !important',
      "& .MuiInputBase-input": {
        // height: "15px",
        // backgroundColor: !bgcolor && "#163A5C",
        borderRadius: "8px !important",
        [theme.breakpoints.down("md")]: {
          // height: "10px",
        },
      },
      "& .MuiInputBase-fullWidth": {
        fontSize: "14px",
        fontFamily: "Poppins",
        color: "#fff",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "8px",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderRadius: "8px",
        },
        "&:hover fieldset": {},
        "&.Mui-focused fieldset": {},
      },
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#EEEEEE", // Set the border color for hover
        },
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#EEEEEE", // Set the border color for focus
        },
      },
    },
    error: {
      // border: "1px solid green",
    },
    noBorder: {
      border: "none",
    },
    inputDark: {
      // color: '#FFFFFF',
      // transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out",
      // "&:hover": {
      //     borderColor: "rgba(0, 156, 251, 0.8)",
      //     boxShadow: "0 0 5px rgba(0, 156, 251, 0.8)", // Replace with your desired box shadow
      //     "-webkit-box-shadow": "0 0 5px rgba(0, 156, 251, 0.8)", // Replace with your desired box shadow
      // },
      // borderRadius: 5,
      // background: "#36373B",
    },
    inputLight: {
      color: "#FFFFFF",
    },
    label: {
      // color: '#FFFFFF',
    },
  };
});
const CommonTextField = ({
  text,
  type,
  placeholder,
  height,
  width,
  valid,
  multiline,
  rows,
  name,
  value,
  onChange,
  onInput,
  borderRadius,
  inputProps,
  defaultValue,
  fontWeight,
  labelSize,
  labelColor,
  showPasswordToggle,
  maxValue,
  error,
  className,
  format,
  bgcolor,
  onKeyDown,
  onPaste,
  onBlur,
  disabled,
  onKeyDownCapture,
  shrink,
  onDrag,
  size,
  icon,
  color,
  backgroundColor,
  variant,
  sx,
  InputProps,
  inputLight,
  isIcon,
  textSize,
  noBorder,
  inputPadding
}) => {
  const { classes } = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const regex = emojiRegex();
  return (
    <>
      {text && (
        <Box
          // mt={1.5}
          mb={0.8}
          display="flex"
          fontSize="12px"
          flexDirection={"row"}
          sx={sx}
        >
          <InputLabel
            sx={{
              marginRight: "2px",
              fontWeight: fontWeight || "400",
              fontSize: { md: textSize || "18px", sm: "14px", xs: "14px" },
              color: labelColor || "#fff",
              backgroundColor: backgroundColor,
              fontFamily: "poppins",
              border: "none",
            }}
          >
            {text}
          </InputLabel>
          {valid && (
            <Typography color="#EF627A" component={"caption"} variant={"body2"}>
              *
            </Typography>
          )}
          {isIcon && <InfoOutlinedIcon sx={{ fontSize: "18px" }} />}
        </Box>
      )}
      <TextField
        fullWidth
        size={size || "small"}
        type={
          type == "password"
            ? showPassword && showPasswordToggle
              ? "text"
              : type
            : type
        }
        name={name}
        value={value}
        placeholder={placeholder}
        sx={{
          height: height,
          width: width,
          backgroundColor: bgcolor,
          color: color,
          borderRadius: borderRadius,
          padding:inputPadding
        }}
        multiline={multiline}
        rows={rows}
        className={`${classes?.main} ${className} ${
          noBorder && classes.noBorder
        }`}
        onInput={onInput}
        onPaste={onPaste}
        inputProps={inputProps}
        onKeyDown={onKeyDown}
        variant={variant}
        defaultValue={defaultValue}
        onDrag={onDrag}
        onBlur={onBlur}
        noArrow
        disabled={disabled ? disabled : false}
        onChange={(e) => {
          const value = e.target.value;
          const strippedValue = value.replace(regex, "");
          const modifiedEvent = {
            ...e,
            target: {
              ...e.target,
              name: name,
              value: strippedValue,
            },
          };
          onChange(modifiedEvent);
        }}
        InputLabelProps={{
          className: classes.label,
        }}
        InputProps={{
          ...(showPasswordToggle && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Visibility sx={{ color: "#cdcdcd" }} />
                  ) : (
                    <VisibilityOff sx={{ color: "#cdcdcd" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }),
          ...(icon && {
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="start"
                >
                  {icon}
                </IconButton>
              </InputAdornment>
            ),
          }),
          classes: {
            notchedOutline: noBorder && classes.noBorder,
          },
          className: inputLight ? classes.inputLight : classes.inputDark,
          ...InputProps,
        }}
      />
    </>
  );
};
export default CommonTextField;