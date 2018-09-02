import React from "react";
import { Layout } from "antd";
import HeaderContent from "./headerContent";
import TicketList from "./ticketList";
import "./layout.css"

const { Header, Content } = Layout;

const AppLayout = props => {
  return (
    <React.Fragment>
      <Header>
        <HeaderContent />
      </Header>
      <Content>
        <TicketList />
      </Content>
    </React.Fragment>
  );
};
export default AppLayout;
