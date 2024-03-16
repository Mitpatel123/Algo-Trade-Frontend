import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import Label from "../common/label";
import CommonDropdown from "../../components/CommonDropdown";
import CommonTextField from "../commonTextField";
import {
  getAllUsers,
  getOneUser,
  updateLinkedUserData,
} from "../../services/api";

const EditUserDetails = ({ setIsTradeExecute, id, onUpdate }) => {
  const [userData, setUserData] = useState({});

  const getData = async () => {
    try {
      const apiUserData = await getAllUsers();
      const responseData = apiUserData.data.data.filter(
        (item) => item.data._id === id
      );
      setUserData(responseData[0]?.user || {});
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handelChange = (e, name) => {
    setUserData({ ...userData, [name]: e.target.value });
  };
  const handleUserDataUpdate = async () => {
    try {
      await updateLinkedUserData({ ...userData, id });
      setIsTradeExecute(false);
      onUpdate();
    } catch (e) {
      console.log(e, "Error in updating data");
    }
  };

  return (
    <>
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} gap={10}>
        <Grid
          item
          spacing={5}
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Label fontSize={"22px"} text={"Update User Details"} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonTextField
              text="Full Name"
              size="medium"
              type="text"
              name="fullname"
              value={userData?.fullname}
              onChange={(e) => handelChange(e, "fullname")}
              width="100%"
            />
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonTextField
              text="Plan"
              size="medium"
              type="text"
              name="plan"
              value={userData?.plan || ""}
              onChange={(e) => handelChange(e, "plan")}
              width="100%"
            />
          </Grid> */}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonTextField
              text="Email Id"
              size="medium"
              type="text"
              name="email"
              value={userData?.email || ""}
              onChange={(e) => handelChange(e, "email")}
              width="100%"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonTextField
              text="Mobile No"
              size="medium"
              type="number"
              name="phoneNumber"
              value={userData?.phoneNumber || ""}
              onChange={(e) => handelChange(e, "phoneNumber")}
              width="100%"
            />
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonDropdown
              fullWidth
              width={"100%"}
              text="Status"
              name="isActive"
              value={userData?.isActive ? "Active" : "Inactive"}
              values={["Active", "Inactive"]}
              backgroundColor="rgb(15 58 90)"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  isActive: e.target.value === "Active",
                })
              }
              valid
            />
          </Grid> */}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CommonTextField
              text="Location"
              size="medium"
              type="text"
              disabled
              name="location"
              value={userData?.location || ""}
              onChange={(e) => handelChange(e, "location")}
              width="100%"
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "15px",
          }}
        >
          <Button
            size="large"
            fullWidth
            variant="contained"
            style={{ marginTop: "10px", maxWidth: "200px" }}
            onClick={handleUserDataUpdate}
          >
            Save
          </Button>
          <Button
            size="large"
            fullWidth
            variant="contained"
            style={{ marginTop: "10px", maxWidth: "200px" }}
            onClick={() => setIsTradeExecute(false)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EditUserDetails;
