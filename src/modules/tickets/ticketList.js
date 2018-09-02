import React from "react";
import { Table } from "antd";
import { observer } from "mobx-react";
import columns from "./columns";
import AssignTickets from "./assignTickets";
import store from "./Store";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

const TicketList = props => {
  return (
    <div>
      <AssignTickets />
      <Table
        title={() => "Ticket List"}
        dataSource={dataSource}
        columns={columns()}
      />
    </div>
  );
};
export default observer(TicketList);
