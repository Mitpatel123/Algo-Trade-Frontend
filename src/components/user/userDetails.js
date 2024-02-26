import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, useTheme, Box, tableCellClasses } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import { styled } from '@mui/material/styles';
import Edit from "../../components/Icons/edit.svg"
import Label from '../common/label';

const useStyles = makeStyles()((theme) => {
    return {

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
    '&:nth-of-type(odd)': {

    },
    // hide last border
    '&:last-child td, &:last-child th': {

    },
    '& .MuiTableCell-root:last-child': {
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13,
    },
    '& .MuiTableCell-root:first-child': {
        borderTopLeftRadius: 13,
        borderBottomLeftRadius: 13,
    },
}));

const UserDetails = (props) => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <>
            <Table sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell >User Name</StyledTableCell>
                        <StyledTableCell align="left">Email Id</StyledTableCell>
                        <StyledTableCell align="left">Demat Id</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, i) => (
                        <StyledTableRow key={i}>
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.email}</StyledTableCell>
                            <StyledTableCell align="left">{row.demateId}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Box display={'flex'} justifyContent={'space-between'} gap={2} alignItems={'center'} width={'100px'} marginLeft={'auto'}>
                                    <img src={Edit} onClick={() => { }} style={{ cursor: 'pointer' }} />
                                    <Label text={row?.status} fontSize={15} fontWeight={500} color={row?.status == "Block" ? theme.palette.error.main : theme.palette.info.main} sx={{ textDecoration: 'underline', cursor: 'pointer' }} />
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow >
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default UserDetails