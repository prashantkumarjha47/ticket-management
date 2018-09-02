import { observable, action, toJS } from "mobx";
import { message } from "antd";

class Store {
  @observable
  isCreateModalOpen = false;
  @observable
  isAssignModalOpen = false;
  @observable
  currentRowData = {};
  @observable
  ticketList = [];

  @observable
  agents = [
    {
      id: 1,
      name: "Vipin",
      email: "khkhkjh@gmail.com",
      phone: "7001689781",
      issues: []
    },
    {
      id: 2,
      name: "Shashank",
      email: "khkhkjh@gmail.com",
      phone: "7001689781",
      issues: []
    },
    {
      id: 3,
      name: "Biki",
      email: "khkhkjh@gmail.com",
      phone: "7001689781",
      issues: []
    },
    {
      id: 4,
      name: "Rohan",
      email: "khkhkjh@gmail.com",
      phone: "7001689781",
      issues: []
    },
    {
      id: 5,
      name: "Vikas",
      email: "khkhkjh@gmail.com",
      phone: "7001689781",
      issues: []
    }
  ];

  /**
   * To open assign ticket model {*}
   */
  @action.bound
  onAssignTicketsClick = rowData => {
    this.currentRowData = rowData;
    this.isAssignModalOpen = true;
  };

  /**
   * To handle ticket submit {*}
   */
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

  /**
   * To assign tickets to agents
   */
  @action.bound
  assignTicketFormSubmit = (e, form) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.agents.slice().forEach(agent => {
          if (agent.id === values.agent) {
            if (agent.issues.length > 3) {
              message.error("Cannot assign more tickets to this agent");
            } else {
              agent.issues.push(this.currentRowData);
              this.currentRowData = {};
              message.success("Ticket assigned successfully");
            }
          }
          form.resetFields();
          this.isAssignModalOpen = false;
        });
        this.agents = toJS(this.agents);
        console.log(this.agents);
      } else {
        message.error("Error assigning tickets  !!!");
        return;
      }
    });
  };

  /**
   * To validate phone numbers
   */
  validateNumber = message => (rule, value, callback) => {
    if (/^[+-]?\d+(\.\d+)?$/.test(value)) {
      callback();
    } else {
      callback(message);
    }
  };
}
export default new Store();
