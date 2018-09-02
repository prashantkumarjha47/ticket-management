import { observable, action } from "mobx";
import { message } from "antd";
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
  onAssignTickets = () => {
    console.log("onAssignTickets");
  };

  @action.bound
  onAssignTicketsClick = rowData => {
    console.log("clicked");
    this.isAssignModalOpen = true;
  };

  @action.bound
  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.ticketList.push(values);
        message.success("Tickets created successfully");
        form.resetFields();
        this.isCreateModalOpen = false;
      } else {
        message.error("Error creating tickets !!!");
        return;
      }
    });
  };

  validateNumber = message => (rule, value, callback) => {
    if (/^[+-]?\d+(\.\d+)?$/.test(value)) {
      callback()
    } else {
      callback(message)
    }
  }
}
export default new Store();
