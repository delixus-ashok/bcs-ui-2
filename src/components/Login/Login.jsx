import React, { useState } from "react";
import { Card } from "antd";
import { MailOutlined, KeyOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import Text from "antd/lib/typography/Text";
import axios from "axios";
import api from "../../api/local";

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

export default function Login(props) {
  const [lemail, setLemail] = useState("");
  const [lpass, setLpass] = useState("");
  const handleLogin = () => {
    axios
      .post(`${api.endPoint}/login`, {
        email: lemail,
        password: lpass,
      })
      .then((response) => {
        if (response.status === 200) {
          props.setLoggedStatus(true);
          const session = {
            email: lemail,
            session_token: response.data[0].token,
          };
          localStorage.setItem("sessionData", JSON.stringify(session));
          localStorage.setItem("auth", true);
        }
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
          value={lemail}
          onChange={(e) => setLemail(e.target.value)}
        />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Password:</Text>
        </div>
        <Input
          size="large"
          prefix={<KeyOutlined />}
          value={lpass}
          type="password"
          onChange={(e) => setLpass(e.target.value)}
        />
      </div>

      <Button
        type="primary"
        size="large"
        onClick={() => handleLogin()}
        style={{ width: "100%", marginTop: "25px" }}
      >
        Submit
      </Button>
    </Card>
  );
}
