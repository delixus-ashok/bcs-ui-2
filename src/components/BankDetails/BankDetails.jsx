import React, { useState } from "react";
import { Card } from "antd";
import axios from "axios";
import api from "../../api/local";

import { Input, Button } from "antd";
import Text from "antd/lib/typography/Text";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

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

export default function BankDetails() {
  const [buser, setBuser] = useState("");
  const [acnum, setAccnum] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [bamd, setBamd] = useState("");
  const [msg, setMsg] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBankDetails = () => {
    // var userdata = JSON.parse(localStorage.getItem("userdata"));
    let params = {
      buser: buser,
      acnum: acnum,
      ifsc: ifsc,
      amount: bamd,
    };

    axios
      .post(
        `${api.endPoint}/get-estimate?payment_method=bankTransfer&vendor_name=${buser}&amount=${bamd}&account_number=${acnum}&ifsc=${ifsc}&validate=false`,
        params,
      )
      .then((response) => {
        if (response) {
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
      <ConfirmModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        message={msg}
      />

      <Card style={styles.card}>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Vender Name:</Text>
          </div>
          <Input
            size="large"
            onChange={(e) => {
              setBuser(`${e.target.value}`);
            }}
            value={buser}
          />
        </div>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Account Number:</Text>
          </div>
          <Input
            size="large"
            onChange={(e) => {
              setAccnum(`${e.target.value}`);
            }}
            value={acnum}
          />
        </div>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Ifsc Code:</Text>
          </div>
          <Input
            size="large"
            type="text"
            onChange={(e) => {
              setIfsc(`${e.target.value}`);
            }}
            value={ifsc}
          />
        </div>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Amount:</Text>
          </div>
          <Input
            size="large"
            type="text"
            onChange={(e) => {
              setBamd(`${e.target.value}`);
            }}
            value={bamd}
          />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => handleBankDetails()}
          style={{ width: "100%", marginTop: "25px" }}
        >
          Pay
        </Button>
      </Card>
    </>
  );
}
