import React, { useState } from "react";
import { Card } from "antd";

import axios from "axios";

import { Input, Button } from "antd";
import Text from "antd/lib/typography/Text";
import ConfirmModalUpi from "../ConfirmModalUpi/ConfirmModalUpi";
const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    fontSize: "16px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    outline: "none",
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    appearance: "textfield",
    color: "#041836",
    fontWeight: "700",
    border: "none",
    backgroundColor: "transparent",
  },
  select: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  textWrapper: { maxWidth: "80px", width: "100%" },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: "row",
  },
};

const UPI = () => {
  const [venuser, setvenuser] = useState("");
  const [upiid, setUpiid] = useState("");
  const [uamd, setUamd] = useState("");
  const [msg, setMsg] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleUPI = () => {
    // var userdata = JSON.parse(localStorage.getItem("userdata"));
    // let userObject = {
    //   venname: venuser,
    //   upiid: upiid,
    //   amount: uamd,
    // };

    axios
      .post(
        `http://127.0.0.1:8000/get-estimate?payment_method=upi&vendor_name=${venuser}&upi_id=${upiid}&amount=${uamd}&account_number=39238765008&ifsc=HDFC0000053&validate=false`,
      )
      .then((response) => {
        if (response) {
          console.log("sdfsdf", response);
          if (response.data[1] === 200) {
            if (response.data[0].error) {
              setMsg(response.data[0].error);
            } else if (response.data[0].status) {
              setMsg(response.data[0].status);
            } else {
              setMsg("Confirm Payment");
            }
            setIsModalVisible(true);
          } else {
            setMsg("Something went wrong");
          }
        } else {
          setMsg("Something went wrong");
        }
      });
  };

  return (
    <>
      <ConfirmModalUpi
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        message={msg}
      />
      <Card style={styles.card}>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Vender Namer:</Text>
          </div>
          <Input
            size="large"
            onChange={(e) => {
              setvenuser(`${e.target.value}`);
            }}
            value={venuser}
          />
        </div>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>UPI ID:</Text>
          </div>
          <Input
            size="large"
            onChange={(e) => {
              setUpiid(`${e.target.value}`);
            }}
            value={upiid}
          />
        </div>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Amount:</Text>
          </div>
          <Input
            size="large"
            type="TEXT"
            onChange={(e) => {
              setUamd(`${e.target.value}`);
            }}
            value={uamd}
          />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => handleUPI()}
          style={{ width: "100%", marginTop: "25px" }}
        >
          Send Link
        </Button>
      </Card>
    </>
  );
};

export default UPI;
