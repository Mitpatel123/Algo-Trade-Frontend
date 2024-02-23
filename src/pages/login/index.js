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
    }
  }
})
const Login = () => {
  const { classes } = useStyles()

  return (
    <>
      <Box className={classes.authBg} style={{}}>
        <Grid container xs={12} sm={12} md={12} lg={12} xxl={12} gap={4}>
          <Grid item spacing={3} container xs={12} sm={12} md={12} lg={12} xl={12}   >
            <Grid item xs={12} sm={12} md={6} lg={6} xxl={6}>
              {/* <img src={authImg} alt='authImg' width={'100%'} /> */}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xxl={6}>
              8
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login