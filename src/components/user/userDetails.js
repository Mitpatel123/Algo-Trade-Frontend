import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  tableCellClasses,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Assets from "../common/image-container";
import EditIcon from "../Icons/edit.svg";
import CommonModal from "../CommonModal";
import EditUserDetails from "./editUserDetails";
import axios from "../../apiSetup/axios";
import { useAppContext } from "../../context";
import { useState } from "react";
import { getAllUsers, getUnlinkedUsers } from "../../services/api";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `4px solid ${theme.palette.primary.main}`,
  padding: 5,
  "&:nth-of-type(odd)": {},
  // hide last border
  "&:last-child td, &:last-child th": {},
  "& .MuiTableCell-root:last-child": {
    // borderTopRightRadius: 13,
    // borderBottomRightRadius: 13,
  },
  "& .MuiTableCell-root:first-child": {
    // borderTopLeftRadius: 13,
    // borderBottomLeftRadius: 13,
  },
}));

function Row(props) {
  const { row, onUpdate } = props;
  const [open, setOpen] = useState(false);

  const keyLabelMapping = {
    fullname: "Full Name",
    email: "Email",
    phoneNumber: "Mobile No",
    z_user_id: "Demat ID",
    totalProfit: "Profit",
    isActive: "Status",
    location: "Location",
    plan: "Plan",
  };

  const [isTradeExecute, setIsTradeExecute] = useState(false);
  const { OnUpdateError, toggleLoader, user, onUpdateUser, menuList } =
    useAppContext();

  // const _getVisitor = () => {
  //     let body = {
  //         limit: 5,
  //         page: 1,
  //         search: "",
  //     }
  //     axios.post('/users', body).then((res) => {
  //         if (res?.data?.data) {
  //             console.log(res?.data?.data, "object")
  //         }
  //     }).catch((err) => {
  //         OnUpdateError(err.data.message);
  //     }).finally(() => { });
  // }

  // React.useEffect(() => {
  //     _getVisitor()
  // }, [])

  const [openEditId, setOpenEditId] = useState("");

  return (
    <>
      <StyledTableRow onClick={() => setOpen(!open)}>
        <StyledTableCell>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Avatar
              alt={row?.user?.fullname}
              src="/static/images/avatar/1.jpg"
            />
            {row?.user?.fullname}
          </Box>
        </StyledTableCell>
        <StyledTableCell align="left">{row?.user?.email}</StyledTableCell>
        <StyledTableCell align="left">{row?.user?.z_user_id}</StyledTableCell>
        <StyledTableCell>
          <img
            src={EditIcon}
            onClick={() => {
              setIsTradeExecute(true);
              setOpenEditId(row?.data?._id);
            }}
          />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid
                container
                spacing={1}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                {(row?.user ? Object.entries(row.user) : [])
                  .concat(row?.data ? Object.entries(row?.data) : [])
                  .map(
                    ([key, value], index) =>
                      keyLabelMapping[key] && (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={4}
                          xl={4}
                          key={index}
                        >
                          <Typography>
                            {`${keyLabelMapping[key]}: ${
                              key === "isActive"
                                ? value
                                  ? "Active"
                                  : "Inactive"
                                : value
                            }`}
                          </Typography>
                        </Grid>
                      )
                  )}
              </Grid>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
      <CommonModal
        open={isTradeExecute}
        onClose={() => setIsTradeExecute(false)}
        title={"Login Credentials"}
      >
        <EditUserDetails
          id={openEditId}
          setIsTradeExecute={setIsTradeExecute}
          onUpdate={onUpdate}
        />
      </CommonModal>
    </>
  );
}

export default function CollapsibleTable({ searchString }) {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const apiUserData = await getAllUsers();
      setUserData(apiUserData?.data?.data);
      setFilteredData(apiUserData?.data?.data);
    } catch (err) {
      console.log(err, "err");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const onUpdate = () => {
    getData();
  };
  useEffect(() => {
    filterData();
  }, [searchString]);

  const filterData = () => {
    if (searchString) {
      setFilteredData(
        userData.filter((item) =>
          item?.user?.fullname
            ?.toLowerCase()
            .includes(searchString.toLowerCase())
        )
      );
    } else {
      setFilteredData(userData);
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell align="left">User Name</StyledTableCell>
          <StyledTableCell align="left">Email Id</StyledTableCell>
          <StyledTableCell align="left">Demat Id</StyledTableCell>
          <StyledTableCell align="left">Actions</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredData?.length > 0 ? (
          filteredData
            .filter((row) => row?.user?.fullname)
            .map((row, index) => (
              <Row key={`${row.name}_${index}`} row={row} onUpdate={onUpdate} />
            ))
        ) : (
          <Box padding="10px 0">No Data Found</Box>
        )}
      </TableBody>
    </Table>
  );
}
