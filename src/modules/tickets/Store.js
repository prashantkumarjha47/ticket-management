import { observable, action } from "mobx";
class Store {
  @observable
  title = "Login";
  @observable
  isCreateModalOpen = false;
  @observable
  isAssignModalOpen = false;

  @observable
  ticketList = [];

  @action.bound
  onCreateTickets = () => {
    console.log("onCreateTickets");
  };

  @action.bound
  onAssignTickets = () => {
    console.log("onAssignTickets");
  };

  onAssignTicketsClick = rowData => {
    console.log("clicked")
    this.isAssignModalOpen = true;;
  };
}
export default new Store();
