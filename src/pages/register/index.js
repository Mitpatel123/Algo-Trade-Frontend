import React, { useState } from 'react'
import { makeStyles } from "tss-react/mui";
import { Button, Grid, useTheme } from '@mui/material'
import AuthLayout from '../../components/common/AuthLayout';
import Label from '../../components/common/label';
import CommonTextField from '../../components/commonTextField';
import axios from "../../apiSetup/axios";
import { useAppContext } from '../../context';
import { Link, useNavigate } from 'react-router-dom';
import { tostify } from '../../components/common/tostify';

const useStyles = makeStyles()((theme) => {
    return {
        textField: {
            width: '100%',
            height: '46px',
            backgroundColor: theme.palette.bgSecondaryDarkBlack.main,
            border: 'none',
            borderRadius: 8,
            color: theme.palette.bgWhite.main,
            fontSize: 18,
        }
    }
})
const Register = () => {
    const { classes } = useStyles()
    const theme = useTheme()
    const navigate = useNavigate()
    // const setFullPageLoader = usePageLoader();
    const { OnUpdateError, toggleLoader, user, onUpdateUser, menuList } = useAppContext();

    const [data, setData] = React.useState({});
    const [error, setError] = useState()

    const handelChange = (e, name) => {
        setData({ ...data, [name]: e.target.value });
    };
    const formValidation = () => {
        let validFormValue = true;
        let errors = {};

        if (!data?.fullname) {
            validFormValue = false;
            errors["fullname"] = "*Please enter full name";
        }
        if (!data?.email) {
            validFormValue = false;
            errors["email"] = "*Please enter email";
        }

        setError(errors);
        return validFormValue;
    };


    const handleSubmit = async () => {
        if (formValidation()) {
            let body = {
                "id": localStorage.getItem("id"),
                "fullname": data?.fullname,
                "email": data?.email
            }
            axios.post('/user/updateuser', body).then((res) => {
                if (res?.data?.data?.code === 1) {
                    tostify('success', res?.data?.data?.message)
                    navigate("/userDashboard")
                }
            }).catch((err) => {
                console.log(err, "errerr")
                tostify(err?.data?.message, 'error')
            }).finally(() => { });
        }
    }

    return (
        <>
            <AuthLayout>
                <Grid container xs={12} sm={12} md={12} lg={12} xl={12} gap={4}>
                    <Grid item spacing={2} container xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Label color={theme.palette.info.main} fontSize={'32px'} fontWeight={500} text={"Register"} />
                            <Label color={theme.palette.bgWhite.main} marginBottom={'30px'} fontSize={'18px'} text={"Please Enter Details For SignUp"} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <CommonTextField
                                text="Full Name"
                                size="medium"
                                type="text"
                                name="fullname"
                                value={data?.fullname}
                                onChange={(e) => handelChange(e, "fullname")}
                                width="100%"
                                className={classes.textField}
                            />
                            <Label color={theme.palette.error.main} fontSize={'12px'} fontWeight={500} text={!data?.fullname ? error?.["fullname"] : ""} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <CommonTextField
                                text="Email Id"
                                size="medium"
                                type="text"
                                name="email"
                                value={data?.email || ""}
                                onChange={(e) => handelChange(e, "email")}
                                width="100%"
                                className={classes.textField}
                            />
                            <Label color={theme.palette.error.main} fontSize={'12px'} fontWeight={500} text={!data?.email ? error?.["email"] : ""} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign={'center'} >
                            <Label display={'inline'} color={theme.palette.bgWhite.main} fontSize={'12px'} text={"Already have an account? "} />
                            <Link to={'/login'} style={{ color: theme.palette.info.main, fontSize: '12px' }}>Login</Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Button size="large" fullWidth variant="contained" onClick={handleSubmit} style={{ marginTop: '32px' }} >Register</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </AuthLayout>
        </>
    )
}

export default Register