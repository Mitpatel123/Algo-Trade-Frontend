import React from 'react'
import { makeStyles } from "tss-react/mui";
import { Box, Grid, useTheme } from '@mui/material'

import authImg from '../../components/Icons/authImg.png'

const useStyles = makeStyles()((theme) => {
    return {
        authBg: {
            backgroundImage: `url(${authImg})`,
            height: '100vh',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            [theme.breakpoints.down('md')]: {
                backgroundImage: 'none',
            }
        },
        boxSize: {
            maxWidth: '610px',
            margin: '0 auto',
        },
        authDataBox: {
            backgroundColor: theme.palette.bgDarkBlack.main,
            margin: 12,
            padding: '8vh 15vh',
            textAlign: 'left',
            borderRadius: 10,
            [theme.breakpoints.down('lg')]: {
                padding: '5vh 10vh',
            },
            [theme.breakpoints.down('md')]: {
                padding: '4vh 7vh',
            },
            [theme.breakpoints.down('sm')]: {
                padding: '3vh 1.5vh',
            }
        }
    }
})
const AuthLayout = ({ children }) => {
    const { classes } = useStyles()

    return (
        <>
            <Box className={classes.authBg} style={{}}>
                <Grid container xs={12} sm={12} md={12} lg={12} xl={12} gap={4} height={'100vh'}>
                    <Grid item spacing={3} container xs={12} sm={12} md={12} lg={12} xl={12} alignItems={'center'}  >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} textAlign={'center'}>
                            <Box className={classes.boxSize}>
                                Logo Here
                                <Box className={classes.authDataBox}>
                                    {children}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AuthLayout;