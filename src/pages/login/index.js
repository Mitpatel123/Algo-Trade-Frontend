import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { makeStyles } from "tss-react/mui";
import { Box, Button, Grid, TextField, useTheme } from '@mui/material'

import authImg from '../../components/Icons/authImg.png'
import AuthLayout from '../../components/common/AuthLayout';
import Label from '../../components/common/label';
import CommonTextField from '../../components/commonTextField';
import axios from "../../apiSetup/axios";
import { useAppContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles()((theme) => {
  return {
    authBg: {
      backgroundImage: `url(${authImg})`,
      height: '100vh',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    otpInput: {
      '& input': {
        width: '46px !important',
        height: '46px !important',
        backgroundColor: theme.palette.bgSecondaryDarkBlack.main,
        border: 'none',
        borderRadius: 8,
        marginRight: 12,
        color: theme.palette.bgWhite.main,
        fontSize: 18,
        [theme.breakpoints.down('md')]: {
          width: '40px !important',
          height: '40px !important',
        }
      }
    }
  }
})
const Login = () => {
  const { classes } = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  // const setFullPageLoader = usePageLoader();
  const { OnUpdateError, toggleLoader, user, onUpdateUser, menuList } = useAppContext();

  const [data, setData] = React.useState({});
  const [error, setError] = useState()
  const [otp, setOtp] = useState('');
  const [showOpt, setShowOpt] = useState(false)
  const [countryCode, setCountryCode] = useState({})
  const formValidation = () => {
    let validFormValue = true;
    let errors = {};

    if (!data?.phoneNumber) {
      validFormValue = false;
      errors["phoneNumber"] = "*Please enter phone number";
    }

    setError(errors);
    return validFormValue;
  };

  const handleSubmit = async (values) => {
    if (formValidation()) {
      if (!showOpt) {
        setShowOpt(true);
        let body = {
          phoneNumber: data?.phoneNumber?.substring(data?.countryCode?.length),
          role: 1
        }
        axios.post('/user/signup', body).then((res) => {
          if (res?.data?.data) {
            console.log(res?.data?.data, "object")
          }
        })
          .catch((err) => {
            console.log('err', err)
          })
          .finally(() => { });
      } else {
        let body = {
          phoneNumber: data?.phoneNumber?.substring(data?.countryCode?.length),
          otp: otp.length ? otp : ''
        }
        axios.post('/user/otpverification', body).then((res) => {
          console.log('res?.data?.data🎈', res?.data?.data)
          if (res?.data?.data?.code === 1) {
            localStorage.setItem('token', res?.data?.data?.token);  
            navigate("/")
          }
        }).catch((err) => {
          console.log('err🎈', err)
        })
          .finally(() => { });
      }
    }
  };

  return (
    <>
      <AuthLayout >
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} gap={4}>
          <Grid item spacing={3} container xs={12} sm={12} md={12} lg={12} xl={12} >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Label color={theme.palette.info.main} fontSize={'32px'} fontWeight={500} text={"Welcome Back!"} />
              <Label color={theme.palette.bgWhite.main} marginBottom={'30px'} fontSize={'18px'} text={"Please Enter Details For Sign In"} />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <CommonTextField
                text="Phone Number"
                size="medium"
                type="text"
                name="phoneNumber"
                value={data?.phoneNumber || ""}
                onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                width="100%"
              />
              <Label
                fontSize="12px"
                title={!data?.phoneNumber ? error?.phoneNumber : " "}
              />
            </Grid> */}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <p style={{ color: 'pink' }}>
                {countryCode?.dialCode}
              </p>


              <PhoneInput
                country={'us'}
                value={data?.phoneNumber || ''}
                onChange={(phoneNumber, event) => {
                  setData({
                    ...data,
                    phoneNumber,
                    countryCode: event?.dialCode
                  });
                }}
                inputStyle={{
                  width: '100%',
                  height: '46px',
                  backgroundColor: theme.palette.bgSecondaryDarkBlack.main,
                  border: 'none',
                  borderRadius: 8,
                  color: theme.palette.bgWhite.main,
                  fontSize: 18,
                  [theme.breakpoints.down('md')]: {
                    width: '100%',
                  }
                }}
              />
            </Grid>
            {showOpt ? <>  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Label color={theme.palette.bgWhite.main} text={"OTP"} sx={{ fontSize: { md: "18px", sm: "14px", xs: "14px" } }} />
              <Box className={classes.otpInput} >
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                />
              </Box>
            </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign={'center'}>
                <Label display={'inline'} color={theme.palette.bgWhite.main} fontSize={'12px'} text={"Don’t Receive the OTP? "} />
                <a style={{ color: theme.palette.info.main, fontSize: '12px' }}> Resend OTP  </a>
              </Grid></> : null}

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button size="large" fullWidth variant="contained" onClick={handleSubmit} style={{ marginTop: '32px' }} >Send</Button>
            </Grid>
          </Grid>
        </Grid>
      </AuthLayout>
    </>
  )
}

export default Login