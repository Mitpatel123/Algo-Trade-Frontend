import React, { useState } from 'react'
import PageContainer from '../../components/page-container'
import { Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import Label from '../../components/common/label';
import Sensex from "../../components/Icons/Sensex.svg"
import Nifty_50 from "../../components/Icons/Nifty_50.svg"
import BankNifty from "../../components/Icons/BankNifty.svg"
import FinNifty from "../../components/Icons/FinNifty.svg"
import MidCap from "../../components/Icons/MidCap.svg"
import DoubleLineChart from '../../components/dashboard/DoubleLineChart';
import MarketSummary from '../../components/dashboard/marketSummary';
import SellPrice from '../../components/dashboard/SellPrice';
import BuyPriceTbl from '../../components/dashboard/BuyPriceTbl';
import CommonModal from '../../components/CommonModal';
import TradeExecuteModal from '../../components/dashboard/TradeExecuteModal';

const commonTableStyle = {
    '& .MuiTableBody-root ': {
        '& .MuiTableRow-root ': {
            transition: '0.2s ease',
            '&:hover': {
                '& .MuiTableCell-root ': {
                    color: '#fff !important',
                }
            }
        },
    },
};
const useStyles = makeStyles()((theme) => {
    return {
        investmentSummary: {
            background: 'linear-gradient(90deg, rgb(255 193 155 / 92%) 0%, rgb(253 140 70 / 92%) 0%, rgb(255 180 121 / 29%) 100%)',
            cursor: 'pointer'
        },
        marketSummary: {
            background: 'linear-gradient(90deg, rgb(53 80 133) 0%, rgb(14 40 73 / 62%) 100%)',
            cursor: 'pointer'
        },
        totalPLSummary: {
            background: 'linear-gradient(90deg, rgb(176 113 255 / 86%) 0%, rgb(32 5 71) 100%)',
            cursor: 'pointer'
        },
        todayPLSummary: {
            background: 'linear-gradient(90deg, rgb(91 255 137 / 84%) 0%, rgb(0 0 0 / 37%) 100%)',
            cursor: 'pointer'
        },
        executeTrade: {
            border: `2px dashed ${theme.palette.info.main}`,
            color: theme.palette.info.main,
            cursor: 'pointer',
            padding: '35px'
        },
        gridBox: {
            backgroundColor: theme.palette.primary.main,
            padding: '20px 12px',
            borderRadius: 10
        },
        iconBg: {
            backgroundColor: '#fff',
            height: 35,
            width: 35,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        tableTotalBox: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        MuiTableContainer: {
            backgroundColor: 'transparent',
            '& .MuiTableHead-root ': {
                '& .MuiTableCell-root ': {
                    fontSize: '18px',
                    color: '#fff',
                    borderBottom: 'none',
                },
            },
            '& .MuiTableBody-root': {
                '& .MuiTableCell-root ': {
                    fontSize: '16px',
                    color: '#fff',
                    borderBottom: 'none',
                },
            }
        },
        buyTbl: {
            '& .MuiTableBody-root ': {
                '& .MuiTableRow-root ': {
                    transition: '0.2s ease',
                    '&:hover': {
                        backgroundColor: theme.palette.info.main,
                        borderRadius: 5,
                        '& .MuiTableCell-root ': {
                            color: '#fff !important',
                        }
                    }
                },
            },

        },
        sellTbl: {
            '& .MuiTableBody-root ': {
                '& .MuiTableRow-root ': {
                    transition: '0.2s ease',
                    '&:hover': {
                        backgroundColor: theme.palette.error.main,
                        borderRadius: 5,
                        '& .MuiTableCell-root ': {
                            color: '#fff !important',
                        }
                    }
                },
            },
        },
        buyTbl: {
            ...commonTableStyle,
            '& .MuiTableBody-root': {
                '& .MuiTableRow-root:hover': {
                    backgroundColor: theme.palette.info.main,
                },
            }
        },
        sellTbl: {
            ...commonTableStyle,
            '& .MuiTableBody-root': {

                '& .MuiTableRow-root:hover': {
                    backgroundColor: theme.palette.error.main,
                },
            },
        },
    };
});
const Dashboard = () => {
    const { classes } = useStyles()
    const theme = useTheme()
    const [isTradeExecute, setIsTradeExecute] = useState(false)
    console.log(isTradeExecute, "isTradeExecute");
    const data = [
        { icon: Sensex, name: 'Sensex', price: 2351.00, changes: '+1.85%' },
        { icon: FinNifty, name: 'Fin Nifty', price: 2351.00, changes: '-1.85%' },
        { icon: MidCap, name: 'Mid cap', price: 2351.00, changes: '-1.85%' },
        { icon: Nifty_50, name: 'Nifty 50', price: 2351.00, changes: '-1.85%' },
        { icon: BankNifty, name: 'Bank Nifty', price: 2351.00, changes: '+1.85%' },
    ];
    const dataBuy = [
        { icon: Sensex, name: 'Sensex', price: 2351.00, buyPrice: '2300.00' },
        { icon: FinNifty, name: 'Fin Nifty', price: 2351.00, buyPrice: '2300.00' },
        { icon: MidCap, name: 'Mid cap', price: 2351.00, buyPrice: '2300.00' },
    ];
    const dataSell = [
        { icon: Sensex, name: 'Sensex', price: 2351.00, buyPrice: '2300.00', type: 'Market' },
        { icon: FinNifty, name: 'Fin Nifty', price: 2351.00, buyPrice: '2300.00', type: 'Market' },
        { icon: MidCap, name: 'Mid cap', price: 2351.00, buyPrice: '2300.00', type: 'Market' },
    ];
    return (
        <PageContainer>
            <Grid container xs={12} sm={12} md={12} lg={12} xxl={12} gap={4}>
                <Grid item>
                    <SummaryGrid amount={3} label={"Investment Value"} className={classes.investmentSummary} />
                </Grid>
                <Grid item>
                    <SummaryGrid amount={2.5} label={"Market Value"} className={classes.marketSummary} />
                </Grid>
                <Grid item>
                    <SummaryGrid amount={50000} label={"Total P&L"} className={classes.totalPLSummary} />
                </Grid>
                <Grid item>
                    <SummaryGrid amount={5} label={"Today’s P&L"} className={classes.todayPLSummary} />
                </Grid>
                <Grid item>
                    <SummaryGrid label={"Execute Trade"} className={classes.executeTrade} fontSize="29px" onClick={() => setIsTradeExecute(true)} />
                </Grid>
                <Grid item spacing={3} container xs={12} sm={12} md={12} lg={12} xl={12}   >
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                        <Box className={classes.gridBox}>
                            <TableContainer className={classes.MuiTableContainer}>
                                <MarketSummary data={data} iconBg={classes.iconBg} />
                            </TableContainer>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={7} xl={7} >
                        <Box className={classes.gridBox}>
                            <Label fontSize={'23px'} fontWeight={500} text={"Profit And Loss Overview"} marginBottom={'24px'} />
                            <DoubleLineChart />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item spacing={3} container xs={12} sm={12} md={12} lg={12} xl={12}   >
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className={classes.gridBox}>
                            <Box className={classes.tableTotalBox}>
                                <Label color={theme.palette.info.main} fontSize={'23px'} fontWeight={500} text={"Buy:"} />
                                <Label color={theme.palette.info.main} fontSize={'21px'} fontWeight={500} text={"Total : 406.256"} />
                            </Box>
                            <Divider style={{ backgroundColor: '#163A5C', marginTop: 12, marginBottom: 12 }} />
                            <TableContainer className={`${classes.MuiTableContainer} ${classes.buyTbl}`}>
                                <BuyPriceTbl data={dataBuy} iconBg={classes.iconBg} />
                            </TableContainer>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Box className={classes.gridBox}>
                            <Box className={classes.tableTotalBox}>
                                <Label color={theme.palette.error.main} fontSize={'23px'} fontWeight={500} text={"Sell:"} />
                                <Label color={theme.palette.error.main} fontSize={'21px'} fontWeight={500} text={"Total : 406.256"} />
                            </Box>
                            <Divider style={{ backgroundColor: '#163A5C', marginTop: 12, marginBottom: 12 }} />
                            <TableContainer className={`${classes.MuiTableContainer} ${classes.sellTbl}`}>
                                <SellPrice data={dataSell} iconBg={classes.iconBg} />

                            </TableContainer>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <CommonModal
                open={isTradeExecute}
                onClose={() => setIsTradeExecute(false)}
                title={"Login Credentials"}
            >
                <TradeExecuteModal />
            </CommonModal>
        </PageContainer>
    )
}

const SummaryGrid = ({ amount, label, className, fontSize, color, width, onClick }) => {
    const { classes } = useStyles()
    return (
        <Box onClick={onClick} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} padding={4} className={className} width={width || '270px'} borderRadius={1.5} >
            {amount && <Label color={'white'} fontSize={'20px'} fontWeight={450} text={`₹${amount}`} />}
            <Label fontSize={fontSize || "18px"} text={label} />
        </Box>
    )
}
export default Dashboard