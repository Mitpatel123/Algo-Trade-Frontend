import { Avatar, Box, Button } from "@mui/material";
import { useState } from "react";
import Label from "./common/label";
import { formatStockName } from "../utils/helper";
import { BASE_URL } from "../apiSetup/axios";
import axios from "axios";

const SignalCard = ({
  id,
  img,
  marketPrice,
  label,
  setQuantityModalId,
  quantityModalId,
  itemQuantity,
}) => {
  const [quantity, setQuantity] = useState(itemQuantity);
  const [mainQuantity, setMainQuantity] = useState(itemQuantity);

  const addQuantity = () => {
    axios
      .post(`${BASE_URL}user/quantity`, {
        filter: 1,
        id: localStorage.getItem("id"),
        index: quantityModalId,
        quantity: quantity,
      })
      .then((response) => {
        console.log(response, "response");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const saveQuantity = () => {
    addQuantity();
    setMainQuantity(quantity);
    setQuantityModalId("");
  };

  return (
    <Box
      padding="10px"
      display={{ md: "", lg: "flex" }}
      width="100%"
      justifyContent="space-between"
      gap="10px 0"
      alignItems="start"
      position="relative"
    >
      <Box
        color="white"
        fontSize="16px"
        textAlign="start"
        backgroundColor="#021629"
        borderRadius="8px"
        width={{ md: "100%", lg: "65%" }}
        padding="20px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap="20px 0"
      >
        <Box
          display={{ xs: "grid", sm: "flex", md: "flex" }}
          alignItems="center"
        >
          <Avatar
            sx={{
              width: ["50px", "60px", "70px", "80px"],
              height: ["50px", "60px", "70px", "80px"],
            }}
            src={img}
          />
          <Box padding={{ xs: "10px 0", sm: "0 20px", md: "0 20px" }}>
            <Label
              text={formatStockName(label)}
              color="white"
              fontSize="25px"
              textAlign="start"
            />
            <Box
              display="flex"
              alignItems="center"
              padding="10px  0 0 0"
              justifyContent="space-between"
              gap="15px"
              width="100%"
              maxWidth="450px"
              flexWrap="wrap"
            >
              <Box display="flex" alignItems="center">
                <Label
                  text="Market Price :"
                  color="white"
                  fontSize="20px"
                  textAlign="start"
                />
                <Label
                  text={marketPrice}
                  color="#419DF1"
                  fontSize="20px"
                  textAlign="start"
                  padding="0 0 0 5px"
                />
              </Box>
              <Box display="flex" alignItems="center">
                <Label
                  text="Quantity :"
                  color="white"
                  fontSize="20px"
                  textAlign="start"
                />
                <Label
                  text={mainQuantity}
                  color="#419DF1"
                  fontSize="20px"
                  textAlign="start"
                  padding="0 0 0 7px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Button
          onClick={() => {
            if (quantityModalId === id) {
              setQuantityModalId("");
              return;
            }
            setQuantityModalId(label);
          }}
          style={{
            backgroundColor: "#419DF1",
            color: "white",
            height: "70px",
            width: "70px",
            fontSize: "40px",
          }}
        >
          +
        </Button>
      </Box>

      <Box
        width={{ lg: "29%" }}
        position={{ md: "", lg: "fixed" }}
        right="0"
        top="130px"
        margin="0 20px"
        zIndex="100"
      >
        {quantityModalId === label && (
          <Box
            backgroundColor="#021629"
            borderRadius="8px"
            maxHeight="417px"
            padding="20px"
            margin={{ xs: "10px 0", lg: "0" }}
          >
            <Label
              text="Add Quantity"
              color="white"
              fontSize="26px"
              textAlign="start"
              padding="10px 0 20px 0"
            />
            <Box
              border="solid 1px"
              borderRadius="8px"
              borderColor="#163A5C"
              padding={{ xs: "10px 5px ", sm: "50px 30px" }}
              margin={{ xs: "0px 10px ", sm: "0px 40px" }}
            >
              <Box
                display={{ xs: "grid", sm: "flex" }}
                alignItems="center"
                justifyContent={{ xs: "center", sm: "space-between" }}
                gap="10px"
              >
                <Button
                  style={{
                    backgroundColor: "#419DF1",
                    color: "white",
                    height: "50px",
                    width: "50px",
                    fontSize: "40px",
                  }}
                  onClick={handlePlusQuantity}
                >
                  +
                </Button>

                <Label
                  text={quantity}
                  color="white"
                  fontSize="26px"
                  textAlign={{ xs: "center", sm: "start" }}
                />
                <Button
                  style={{
                    backgroundColor: "#419DF1",
                    color: "white",
                    height: "50px",
                    width: "50px",
                    fontSize: "40px",
                  }}
                  onClick={handleMinusQuantity}
                >
                  −
                </Button>
              </Box>
            </Box>

            <Box width="100%" margin="auto" display="flex">
              <Button
                style={{
                  backgroundColor: "#419DF1",
                  color: "white",
                  height: "50px",
                  width: "100%",
                  margin: "50px auto",
                  maxWidth: "308px",
                }}
                onClick={saveQuantity}
              >
                Save
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SignalCard;
