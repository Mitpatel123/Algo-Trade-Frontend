import React from 'react'
import PageContainer from '../../components/page-container'
import { Box, Grid, TableContainer, useTheme } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import Label from '../../components/common/label';
import UserDetails from '../../components/user/userDetails';
import UnlinkedUserDetails from '../../components/user/unlinkedUserDetails';

const useStyles = makeStyles()((theme) => {
    return {
        gridBox: {
            backgroundColor: theme.palette.primary.main,
            padding: '12px 12px',
            borderRadius: 10
        },
        investmentSummary: {
            background: 'linear-gradient(90deg, rgb(255 193 155 / 92%) 0%, rgb(253 140 70 / 92%) 0%, rgb(255 180 121 / 29%) 100%)',
            cursor: 'pointer'
        },
        MuiTableContainer: {
            backgroundColor: 'transparent',
            '& .MuiTableHead-root ': {
                '& .MuiTableCell-root ': {
                    fontSize: '16px',
                    padding: 7
                },
            },
            '& .MuiTableBody-root': {
                '& .MuiTableCell-root ': {
                    fontSize: '16px',
                    color: '#fff',
                },
            }
        },
        table: {
            '& .MuiTableBody-root ': {
                '& .MuiTableRow-root ': {
                    transition: '0.2s ease',
                    '&:hover': {
                        backgroundColor: theme.palette.hover.main,
                        borderRadius: 5,
                        '& .MuiTableCell-root ': {
                            color: '#fff !important',
                        }
                    }
                },
            },
        },
    };
});
const User = () => {
    const { classes } = useStyles()
    const theme = useTheme()

    const userDetails = [
        { name: 'John K D’Souza', email: "John12@gmail.com", demateId: "#012345678", status: "Block" },
        { name: 'John K D’Souza', email: "John12@gmail.com", demateId: "#012345678", status: "Block" },
        { name: 'John K D’Souza', email: "John12@gmail.com", demateId: "#012345678", status: "Unblock" },
        { name: 'John K D’Souza', email: "John12@gmail.com", demateId: "#012345678", status: "Block" },
        { name: 'John K D’Souza', email: "John12@gmail.com", demateId: "#012345678", status: "Block" },
    ];
    const unLinkedUserDetails = [
        { name: 'John K D’Souza', demateId: "#012345678", },
        { name: 'John K D’Souza', demateId: "#012345678", },
        { name: 'John K D’Souza', demateId: "#012345678", },
        { name: 'John K D’Souza', demateId: "#012345678", },
        { name: 'John K D’Souza', demateId: "#012345678", },
    ];
    return (
        <PageContainer>
            <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xxl={12} >
                <Grid item xs={12} sm={12} md={12} lg={12} xxl={12}>
                    <Label color={'white'} fontSize={'23px'} fontWeight={500} text={"User Details"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} xxl={8}>
                    <Box className={classes.gridBox}>
                        <TableContainer className={`${classes.MuiTableContainer} ${classes.table}`}  >
                            <UserDetails data={userDetails} />
                        </TableContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xxl={4}>
                    <Box className={classes.gridBox}>
                        <TableContainer className={`${classes.MuiTableContainer} ${classes.table}`}>
                            <UnlinkedUserDetails data={unLinkedUserDetails} />
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid>

        </PageContainer>
    )
}


export default User