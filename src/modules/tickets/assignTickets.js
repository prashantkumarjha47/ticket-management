import React from "react";
import { observer } from "mobx-react";
import { Modal, Button, Form, Input, Select, DatePicker } from "antd";
import store from "./Store";

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 12 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 12 },
    sm: { span: 14 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const { TextArea } = Input;

const AssignTickets = ({ form }) => {
  return (
    <Modal
      title="Assign Tickets"
      visible={store.isAssignModalOpen}
      onCancel={() => (store.isAssignModalOpen = false)}
      footer={null}
    >
      <Form onSubmit={e => store.assignTicketFormSubmit(e, form)}>
        <FormItem {...formItemLayout} label="Agent">
          {form.getFieldDecorator("agent", {
            rules: [
              {
                required: true,
                message: "Select an agent!"
              }
            ]
          })(
            <Select placeholder="Select an agent">
              {store.agents.map((row, i) => (
                <Option key={i} value={row.id}>
                  {row.name}
                </Option>
              ))}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Date">
          {form.getFieldDecorator("date", {
            rules: [
              {
                required: true,
                message: "Please select the date!"
              }
            ]
          })(<DatePicker />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Assign
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};
export default Form.create()(observer(AssignTickets));
