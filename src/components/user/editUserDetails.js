import React from 'react'
import { Button, Grid } from '@mui/material'
import Label from '../common/label'
import CommonDropdown from '../../components/CommonDropdown'
import CommonTextField from '../commonTextField'

const EditUserDetails = () => {

    const [data, setData] = React.useState(
        {
            firstName: '',
            lastName: '',
            plan: '',
            emailId: '',
            mobileNo: '',
            phoneNumber: '',
        }
    );

    const handelChange = (e, name) => {
        console.log('name🎈', name)
    }

    return (
        <>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12} gap={10}>
                <Grid item spacing={5} container xs={12} sm={12} md={12} lg={12} xl={12}   >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Label fontSize={"22px"} text={'Trade Execute'} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <CommonTextField
                            text="First Name"
                            size="medium"
                            type="text"
                            name="firstName"
                            value={data?.phoneNumber || ""}
                            onChange={(e) => handelChange(e, 'firstName')}
                            width="100%"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <CommonTextField
                            text="Last Name"
                            size="medium"
                            type="text"
                            name="lastName"
                            value={data?.phoneNumber || ""}
                            onChange={(e) => handelChange(e, 'lastName')}
                            width="100%"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <CommonTextField
                            text="Plan"
                            size="medium"
                            type="text"
                            name="plan"
                            value={data?.phoneNumber || ""}
                            onChange={(e) => handelChange(e, 'plan')}
                            width="100%"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <CommonTextField
                            text="Email Id"
                            size="medium"
                            type="text"
                            name="emailId"
                            value={data?.phoneNumber || ""}
                            onChange={(e) => handelChange(e, 'emailId')}
                            width="100%"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <CommonTextField
                            text="Mobile No"
                            size="medium"
                            type="text"
                            name="mobileNo"
                            value={data?.phoneNumber || ""}
                            onChange={(e) => handelChange(e, 'mobileNo')}
                            width="100%"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <CommonDropdown
                            fullWidth
                            width={'100%'}
                            text="Status"
                            name="currency"
                            value={data?.index}
                            backgroundColor="rgb(15 58 90)"
                            onChange={(e) => handelChange(e)}
                            valid
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <CommonTextField
                            text="Location"
                            size="medium"
                            type="text"
                            name="phoneNumber"
                            value={data?.phoneNumber || ""}
                            onChange={(e) => handelChange(e, 'phoneNumber')}
                            width="100%"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '15px' }}>
                    <Button size="large" fullWidth variant="contained" style={{ marginTop: '10px', maxWidth: '200px' }} >Save</Button>
                    <Button size="large" fullWidth variant="contained" style={{ marginTop: '10px', maxWidth: '200px' }} >Cancel</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default EditUserDetails
