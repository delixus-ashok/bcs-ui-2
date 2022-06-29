import React, { useState } from "react";
import { Card } from "antd";
import { UserOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import Text from "antd/lib/typography/Text";
import axios from "axios";

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

export default function Register() {
  const [ruser, setRuser] = useState("");
  const [remail, setRemail] = useState("");
  const [rpass, setRpass] = useState("");

  const handleRegister = () => {
    axios
      .post(`http://127.0.0.1:8000/register`, {
        email: remail,
        password: rpass,
        username: ruser,
      })
      .then((response) => {
        console.log(response);
        setRuser("");
        setRemail("");
        setRpass("");
      });
  };
  return (
    <Card style={styles.card}>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Email:</Text>
        </div>
        <Input
          size="large"
          prefix={<MailOutlined />}
          onChange={(e) => {
            setRemail(`${e.target.value}`);
          }}
          value={remail}
        />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Name:</Text>
        </div>
        <Input
          size="large"
          prefix={<UserOutlined />}
          onChange={(e) => {
            setRuser(`${e.target.value}`);
          }}
          value={ruser}
        />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Pass:</Text>
        </div>
        <Input
          size="large"
          prefix={<KeyOutlined />}
          type="password"
          onChange={(e) => {
            setRpass(`${e.target.value}`);
          }}
          value={rpass}
        />
      </div>
      <Button
        type="primary"
        size="large"
        onClick={() => handleRegister()}
        style={{ width: "100%", marginTop: "25px" }}
      >
        Register
      </Button>
    </Card>
  );
}
