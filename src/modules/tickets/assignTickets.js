import React from "react";
import { observer } from "mobx-react";
import { Modal } from "antd";
import store from "./Store";

const AssignTickets = props => {
  return (
    <Modal
      title="Assign Tickets"
      visible={store.isAssignModalOpen}
      onOk={store.onAssignTickets}
      okText="Submit"
      cancelText="cancel"
      onCancel={() => (store.isAssignModalOpen = false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
export default observer(AssignTickets);
