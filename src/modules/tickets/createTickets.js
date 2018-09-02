import React from "react";
import { observer } from "mobx-react";
import { Button, Modal, Form, Input, Select, DatePicker } from "antd";
import store from "./Store";

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 12 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 12 },
    sm: { span: 18 }
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

const CreateTickets = ({ form }) => {
  return (
    <Modal
      title="Create Tickets"
      visible={store.isCreateModalOpen}
      footer={null}
      onCancel={() => (store.isCreateModalOpen = false)}
    >
      <Form onSubmit={e => store.handleSubmit(e, form)}>
        <FormItem {...formItemLayout} label="Name">
          {form.getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your Name!"
              }
            ]
          })(<Input placeholder="Enter Your Name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="E-mail">
          {form.getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input placeholder="Enter Your Email Address " />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Phone Number">
          {form.getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" },
              {
                validator: store.validateNumber('Please Enter a valid phone number')
              }
            ]
          })(<Input placeholder="Enter your Phone Number" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Issue">
          {form.getFieldDecorator("issue", {
            rules: [
              {
                required: true,
                message: "Select an issue!"
              }
            ]
          })(
            <Select placeholder="Select an issue">
              <Option value="payments">Payments</Option>
              <Option value="accounts">Accounts</Option>
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
        <FormItem {...formItemLayout} label="Description">
          {form.getFieldDecorator("issueDescription", {
            rules: [
              {
                required: true,
                message: "Please provide some description about the issue!"
              }
            ]
          })(
            <TextArea
              placeholder="Please provide some description about the issue here"
              autosize={{ minRows: 2, maxRows: 6 }}
            />
            )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};
export default Form.create()(observer(CreateTickets));
