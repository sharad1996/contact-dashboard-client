import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
    },
};

export const ContactForm = (props) => {
    const [form] = Form.useForm();

    useEffect(() => {
        const user = props.user
        if (user) {
            form.setFieldsValue({
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                company: user.company,
                address: user.address
            });
        }
    }, [props.user])

    const onFinish = values => {
        props.handleSubmit(values);
        form.resetFields();
    };

    return (
        <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name='name' label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='email' label="Email" rules={[{ required: true, type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name='phoneNumber' label="Phone" >
                <Input />
            </Form.Item>
            <Form.Item name='company' label="Company">
                <Input />
            </Form.Item>
            <Form.Item name='address' label="Address">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button style={{ marginLeft: 10 }} type="default" onClick={props.handleCancel}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};
