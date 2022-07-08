import React from "react";
import { Card } from "antd";
import { useEffect } from "react";
import BankDetails from "components/BankDetails/BankDetails";
import UPI from "components/UPI/UPI";
import { Tabs } from "antd";
import "antd/dist/antd.css";

export default function UtilityPay(props) {
  useEffect(() => {
    if (!props.loggedStatus) {
      props.history.push("/home");
    }
  }, [props.loggedStatus]);
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        gap: "20px",
        marginTop: "25",
        width: "70vw",
      }}
    >
      <Card
        size="large"
        style={{
          width: "60%",
          background: "transparent",
          border: "0 none",
        }}
      >
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1
            className="text-3xl sm:text-5xl text-white text-gradient py-1 "
            style={{
              fontSize: "3rem",
              lineHeight: "auto",
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            The easiest place to buy, sell, and manage your cryptocurrency
          </h1>
          <p
            className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base"
            style={{
              fontSize: "18px",
              color: "#ffffff",
            }}
          >
            Explore different cryptocurrencies, see how they work and trade
            Cryptocurrencies in minutes, anywhere, anytime.
          </p>
          {/* <button
            type="button"
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg[#2546bd]"
          ></button> */}
        </div>
      </Card>

      <Card
        size="large"
        style={{
          width: "40%",
          boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
          border: "1px solid #e7eaf3",
          borderRadius: "0.5rem",
        }}
      >
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
            <Tabs.TabPane
              tab={
                <span>
                  <h1>BankDetails</h1>
                </span>
              }
              key="1"
            >
              <BankDetails {...props} />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <h1>UPI</h1>
                </span>
              }
              key="2"
            >
              <UPI {...props} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}
