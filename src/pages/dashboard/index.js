import React from 'react'
import PageContainer from '../../components/page-container'
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import Label from '../../components/common/label';
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
        }
    };
});
const Dashboard = () => {
    const { classes } = useStyles()
    const theme = useTheme()
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
                    <SummaryGrid label={"Execute Trade"} className={classes.executeTrade} fontSize="29px" />
                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={12} xxl={12} >
                    <Grid item xs={12} sm={12} md={5} lg={5} xxl={5} bgcolor={theme.palette.primary.main}>
                        sad
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={7} xxl={7} bgcolor={theme.palette.primary.main}>
                        sad
                    </Grid>
                </Grid>
            </Grid>

        </PageContainer>
    )
}

const SummaryGrid = ({ amount, label, className, fontSize, color, width }) => {
    const { classes } = useStyles()
    return (
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} padding={4} className={className} width={width || '270px'} borderRadius={1.5} >
            {amount && <Label color={'white'} fontSize={'20px'} fontWeight={450} text={`₹${amount}`} />}
            <Label fontSize={fontSize || "18px"} text={label} />
        </Box>
    )
}
export default Dashboard