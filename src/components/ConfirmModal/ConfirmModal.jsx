import { Modal } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ConfirmModal = (props) => {
  let history = useHistory();
  const [isTwoModalVisible, setIsTwoModalVisible] = useState(false);
  const [secondMsg, setSecMsg] = useState("");
  const handleOk = () => {
    axios.post(`http://127.0.0.1:8000/pay-utility`).then((response) => {
      if (response) {
        setSecMsg(response.data[0].status);
        props.setIsModalVisible(false);
        setIsTwoModalVisible(true);
      }
    });
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  const handleOkTow = () => {
    setIsTwoModalVisible(false);
    history.push("/home");
  };

  const handleCancelTwo = () => {
    setIsTwoModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Payment Confirmation"
        visible={isTwoModalVisible}
        onOk={handleOkTow}
        onCancel={handleCancelTwo}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>{secondMsg}</p>
      </Modal>

      <Modal
        title={"Confirm Payment"}
        visible={props.isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{props.message}</p>
      </Modal>
    </>
  );
};

export default ConfirmModal;
