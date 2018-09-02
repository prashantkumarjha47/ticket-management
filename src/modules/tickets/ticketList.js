import React from "react";
import { Table } from "antd";
import { observer } from "mobx-react";
import columns from "./columns";
import AssignTickets from "./assignTickets";
import { toJS } from "mobx";
import store from "./Store";

const TicketList = props => {
  return (
    <div>
      <AssignTickets />
      <Table
        dataSource={toJS(store.ticketList)}
        columns={columns()}
        rowKey={(record, i) => i}
      />
    </div>
  );
};
export default observer(TicketList);
