import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, useTheme, Box, tableCellClasses, Avatar } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { getUnlinkedUsers } from "../../services/api";
import { useEffect } from "react";

const useStyles = makeStyles()((theme) => {
  return {
    flagIcon: {
      marginRight: theme.spacing(1),
      height: "30px",
      width: "30px",
    },
  };
});

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
  "& .MuiTableCell-root": {
    padding: 8,
  },
  "& .MuiTableCell-root:last-child": {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
  },
  "& .MuiTableCell-root:first-child": {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
}));

const UnlinkedUserDetails = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [unlinkedUsers, setUnlinkedUsers] = useState([]);

  const getUnlinkedUserData = async () => {
    try {
      const apiUnlinkedUserData = await getUnlinkedUsers();
      setUnlinkedUsers(apiUnlinkedUserData?.data?.data);
    } catch (err) {
      console.log(err && err.response && err.response.data, "err");
    }
  };

  useEffect(() => {
    getUnlinkedUserData();
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell
              align="left"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              Unlinked User’s List
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {unlinkedUsers?.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Avatar
                    src={"/avatar.png"}
                    alt="Flag"
                    className={classes.flagIcon}
                  />
                  {row?.fullname || "-"}
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                {row?.z_user_id || "-"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UnlinkedUserDetails