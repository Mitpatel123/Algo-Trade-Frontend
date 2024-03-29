import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DashboardIcon from '../Icons/dashboard';
import userIcon from '../Icons/people.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from "tss-react/mui";
import HistoryDetailsIcon from "../Icons/historyDetails";
import UserIcon from "../Icons/users";
import { Menu, MenuItem } from '@mui/material';
import { useAppContext } from '../../context';
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  minHeight: '48px !important'
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const useStyles = makeStyles()((theme) => {
  return {};
});

export default function SideBar(props) {
  const theme = useTheme();
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, userType } = useAppContext();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuIconList = [
    {
      title: "Dashboard",
      icon: (
        <DashboardIcon
          color={
            location?.pathname === (localStorage.getItem("userType") == 1 ? "/userDashboard" : "/adminDashboard")
              ? theme?.palette?.info?.main
              : theme?.palette?.primary?.main
          }
        />
      ),
      path: localStorage.getItem("userType") == 1 ? "/userDashboard" : "/adminDashboard",
    },
    {
      title: "User Details",
      icon: (
        <UserIcon
          color={
            location?.pathname === (localStorage.getItem("userType") == 1 ? "/userDetails" : "/adminDetails")
              ? theme?.palette?.info?.main
              : theme?.palette?.primary?.main
          }
        />
      ),
      path: localStorage.getItem("userType") == 1 ? "/userDetails" : "/adminDetails",
    },
    {
      title: "Signals",
      icon: (
        <DashboardIcon
          color={
            location?.pathname === (localStorage.getItem("userType") == 1 ? "/userDetails/signals" : "/adminDetails/userHistory")
              ? theme?.palette?.info?.main
              : theme?.palette?.primary?.main
          }
        />
      ),
      path: localStorage.getItem("userType") == 1 ? "/userDetails/signals" : "/adminDetails/userHistory",
    },
    {
      title: "Query Ticket",
      icon: (
        <DashboardIcon
          color={
            location?.pathname === (localStorage.getItem("userType") == 1 ? "/adminQueryTicket" : "/adminQueryTicket")
              ? theme?.palette?.info?.main
              : theme?.palette?.primary?.main
          }
        />
      ),
      path: localStorage.getItem("userType") == 1 ? "/adminQueryTicket" : "/adminQueryTicket",
    },
    {
      title: "Ticket Description",
      icon: (
        <UserIcon
          color={
            location?.pathname === (localStorage.getItem("userType") == 1 ? "/adminTicketDescription" : "/adminTicketDescription")
              ? theme?.palette?.info?.main
              : theme?.palette?.primary?.main
          }
        />
      ),
      path: localStorage.getItem("userType") == 1 ? "/adminTicketDescription" : "/adminTicketDescription",
    },
  ];

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={() => {
        logout()
        console.log("localStorage.getItem('userType')", localStorage.getItem('userType'))
        if (+localStorage.getItem('userType') == 0) {
          navigate('/admin/login')
        } else {
          navigate('/login')
        }
      }}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar variant='dense'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 3,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Logo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer variant="permanent" open={open} PaperProps={{
        sx: { backgroundColor: theme.palette.primary.main }
      }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: '#FFFFFF' }} /> : <ChevronLeftIcon style={{ color: '#FFFFFF' }} />}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuIconList?.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }} onClick={() => navigate(item?.path)}>
              <ListItemButton sx={{ justifyContent: open ? 'initial' : 'center', px: 2, }}>
                <ListItemIcon sx={{
                  minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',
                }}>
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.title} sx={{ opacity: open ? 1 : 0, color: theme.palette.bgWhite.main }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
        {props.children}
      </Box>
    </Box>
  );
}
