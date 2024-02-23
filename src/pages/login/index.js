import React from 'react'
import authImg from '../../components/Icons/authImg.png'
import { Box, Grid } from '@mui/material'
const Login = () => {
  return (
    <>
      <Box>
        <Grid container xs={12} sm={12} md={12} lg={12} xxl={12} gap={4}>
          <Grid item spacing={3} container xs={12} sm={12} md={12} lg={12} xl={12}   >
            <Grid item xs={12} sm={12} md={6} lg={6} xxl={6}>
              <img src={authImg} alt='authImg' />
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