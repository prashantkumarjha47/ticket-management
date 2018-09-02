import React from "react";
import { Button } from "antd";
import CreateTicket from "./createTickets";
import store from "./Store";

const Header = props => {
  return (
    <div>
      <Button
        type="primary"
        onClick={() => (store.isCreateModalOpen = true)}
        icon="plus-circle-o"
        size="large"
      >
        Create Tickets
      </Button>
      <CreateTicket />
    </div>
  );
};
export default Header;
