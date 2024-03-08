import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, tableCellClasses, Typography, Avatar, Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Assets from '../common/image-container';
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
    '&:nth-of-type(odd)': {

    },
    // hide last border
    '&:last-child td, &:last-child th': {

    },
    '& .MuiTableCell-root:last-child': {
        // borderTopRightRadius: 13,
        // borderBottomRightRadius: 13,
    },
    '& .MuiTableCell-root:first-child': {
        // borderTopLeftRadius: 13,
        // borderBottomLeftRadius: 13,
    },
}));

const userData = [
    {
        name: 'Frozen yoghurt',
        email: 'John12@gmail.com',
        demat_id: 12345678,
        history: [
            {
                FirstName: 'John',
                LastName: 'D’Souza',
                Plan: 'A',
                EmailId: 'John12@gmail.com',
                DematID: '#012345678',
                Profit: '+200.000',
                MobileNo: '+91123456789',
                Status: 0,
                Location: 'UK'
            }
        ],
    },
];
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <StyledTableRow >
                <StyledTableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Avatar alt={row.name} src="/static/images/avatar/1.jpg" />
                        {row.name}
                    </Box>
                </StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.demat_id}</StyledTableCell>
                <StyledTableCell>
                    <Assets
                        src={"/assets/icons/downArrow.svg"}
                        absolutePath={true}
                    />
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)} >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} >
                                {row.history.map((historyRow) => (
                                    <>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            First Name :{historyRow.FirstName}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            Email Id : {historyRow.EmailId}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            Mobile No : {historyRow.MobileNo}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            Last Name : {historyRow.LastName}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            Demat ID: {historyRow.DematID}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            Status: {historyRow.Status == 0 ? 'Active' : 'Inactive'}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            Plan : {historyRow.Plan}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            Profit : {historyRow.Profit}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            Location : {historyRow.Location}
                                        </Grid>

                                    </>
                                ))}
                            </Grid>
                        </Box>
                    </Collapse>
                </StyledTableCell>
            </StyledTableRow>
        </>
    );
}



export default function CollapsibleTable() {
    return (
        <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    {/* <StyledTableCell /> */}
                    <StyledTableCell align="left">User Name</StyledTableCell>
                    <StyledTableCell align="left">Email Id</StyledTableCell>
                    <StyledTableCell align="left">Demat Id</StyledTableCell>
                    <StyledTableCell align="left">Actions</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Array.from({ length: 7 }, (_, index) => (
                    userData.map((row) => (
                        <Row key={`${row.name}_${index}`} row={row} />
                    ))
                ))}
            </TableBody>

        </Table>
    );
}