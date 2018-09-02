import React from "react";
import { observer } from "mobx-react";
import { Modal } from "antd";
import store from "./Store";

const CreateTickets = props => {
  return (
    <Modal
      title="Create Tickets"
      visible={store.isCreateModalOpen}
      onOk={store.onCreateTickets}
      okText="Submit"
      cancelText="cancel"
      onCancel={() => (store.isCreateModalOpen = false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
export default observer(CreateTickets);
