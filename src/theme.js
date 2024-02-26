import { createTheme } from "@mui/material/styles";

// Create a theme instance.

export const defaultPrimaryColor = "#0B253D";
export const defaultInfoColor = "#419DF1";
export const defaultWarningColor = "#FFBE5E";
export const defaultError = "#FF5555";
export const defaultSucces = "#6EBE52";
export const defaultBgDarkBlack = "#021629";
export const defaultBgSecondaryDarkBlack = "#163A5C";
export const defaultPrimaryHover = "#44617b";

export const defaultBgLightBlue = "#EAF4FE";
export const defaultBgLightBlue2 = "#00AEEF";
export const defaultBgLightGray = "#F5F5F5";
export const defaultBgLightExtraGray = "rgba(0, 0, 0, 0.05)";
export const defaultBgLightWhite = "#FFFFFF";
export const defaultBgRejectColor = "#EF627A";
export const defaultBgSuccessColor = "#37bb00de";
export const defaultBgBlueColor = "#4E85C5";
export const defaultBgGray = "#777777";
export const defaultBgBlack = "#444444";
export const defaultBgLightGreen = "#5EC394";
export const defaultBgLightBlack = "#B6B6B6";
export const defaultBackgroundColor = "#CCCCCC";
export const defaultBgDarkCyan = "#1ba39c1a";
export const defaultBgPurple = "#646CE1";
export const defaultBgTrendGreen = "#ECF8F3";
export const defaultBgTrendRed = "#FDE8EB";
export const defaultBgTrendOrange = "#FFF5E5";
export const defaultBgLightRed = "#F14336";
export const defaultBgDarkPrimary = "#151D48";
export const defaultBgLightSuccess = "#44B631";
export const defaultBgLightExtraPrimary = "rgba(93, 95, 239, 0.2)";
export const defaultBgLightExtraSuccess = "rgba(113, 239, 93, 0.2)";
export const defaultBgLightExtraRed = "rgba(235, 87, 87, 0.2)";
export const defaultBgExtraLightGray = "#737791";


export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: defaultPrimaryColor,
    },
    warning: {
      main: defaultWarningColor,
    },
    info: {
      main: defaultInfoColor,
    },
    error: {
      main: defaultError
    },
    success: {
      main: defaultSucces
    },
    bgLightBlue: {
      main: defaultBgLightBlue,
    },
    bgLightBlue2: {
      main: defaultBgLightBlue2,
    },
    bgLightGray: {
      main: defaultBgLightGray,
    },
    bgLightExtraGray: {
      main: defaultBgLightExtraGray,
    },
    bgWhite: {
      main: defaultBgLightWhite,
    },
    error: {
      main: defaultBgRejectColor,
    },
    bgSuccess: {
      main: defaultBgSuccessColor,
    },
    bgGray: {
      main: defaultBgGray,
    },
    bgBlue: {
      main: defaultBgBlueColor,
    },
    bgBlack: {
      main: defaultBgBlack,
    },
    bgDarkBlack: {
      main: defaultBgDarkBlack,
    },
    bgSecondaryDarkBlack: {
      main: defaultBgSecondaryDarkBlack,
    },
    bgLightBlack: {
      main: defaultBgLightBlack,
    },
    bgLightGreen: {
      main: defaultBgLightGreen,
    },
    bgTrendGreen: {
      main: defaultBgTrendGreen,
    },
    bgTrendRed: {
      main: defaultBgTrendRed,
    },
    backgroundDefaultColor: {
      main: defaultBackgroundColor,
    },
    bgCyan: {
      main: defaultBgDarkCyan,
    },
    bgPurple: {
      main: defaultBgPurple,
    },
    bgTrendOrange: {
      main: defaultBgTrendOrange,
    },
    bgLightRed: {
      main: defaultBgLightRed,
    },
    bgDarkPrimary: {
      main: defaultBgDarkPrimary,
    },
    bgLightSuccess: {
      main: defaultBgLightSuccess,
    },
    bgLightExtraPrimary: {
      main: defaultBgLightExtraPrimary,
    },
    bgLightExtraSuccess: {
      main: defaultBgLightExtraSuccess,
    },
    bgLightExtraRed: {
      main: defaultBgLightExtraRed,
    },
    bgLightExtraLightGray: {
      main: defaultBgExtraLightGray,
    },
    background: { default: "#021629" },
    hover: { main: defaultPrimaryHover }
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: defaultInfoColor,
          color: defaultBgLightWhite,
          fontSize: 16,
          borderRadius: 8
        },
      },
    },
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        //disableRipple: true, // No more ripple, on the whole application 💣!
        disableTouchRipple: true,
      },
    },
    // MuiAlert: {
    //   styleOverrides: {
    //     standardSuccess: {
    //       backgroundColor: "#ABC9BB",
    //     },
    //   },
    // },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: defaultPrimaryColor,
    },
    warning: {
      main: defaultWarningColor,
    },
    info: {
      main: defaultInfoColor,
    },
    bgLightBlue: {
      main: defaultBgLightBlue,
    },
    bgLightBlue2: {
      main: defaultBgLightBlue2,
    },
    bgLightGray: {
      main: defaultBgLightGray,
    },
    bgLightExtraGray: {
      main: defaultBgLightExtraGray,
    },
    bgWhite: {
      main: defaultBgLightWhite,
    },
    error: {
      main: defaultBgRejectColor,
    },
    bgSuccess: {
      main: defaultBgSuccessColor,
    },
    bgGray: {
      main: defaultBgGray,
    },
    bgBlue: {
      main: defaultBgBlueColor,
    },
    bgBlack: {
      main: defaultBgBlack,
    },
    bgDarkBlack: {
      main: defaultBgDarkBlack,
    },
    bgLightBlack: {
      main: defaultBgLightBlack,
    },
    bgLightGreen: {
      main: defaultBgLightGreen,
    },
    bgTrendGreen: {
      main: defaultBgTrendGreen,
    },
    bgTrendRed: {
      main: defaultBgTrendRed,
    },
    backgroundDefaultColor: {
      main: defaultBackgroundColor,
    },
    bgCyan: {
      main: defaultBgDarkCyan,
    },
    bgPurple: {
      main: defaultBgPurple,
    },
    bgTrendOrange: {
      main: defaultBgTrendOrange,
    },
    hover: { main: defaultPrimaryHover }
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },

  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        //disableRipple: true, // No more ripple, on the whole application 💣!
        disableTouchRipple: true,
      },
    },
    // MuiAlert: {
    //   styleOverrides: {
    //     standardSuccess: {
    //       backgroundColor: "#ABC9BB",
    //     },
    //   },
    // },
  },
});
export const theme = createTheme({

  overrides: {
    MuiTableContainer: {
      root: {
        backgroundColor: '#FFFFFF',
      },
      MuiTable: {
        root: {
          fontSize: '16px',
          color: '#fff'
        },
        MuiTableCell: {
          root: {
            fontSize: '20px',
            color: '#fff'

          },
        },
      },
    },
  },
})