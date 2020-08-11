import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
};

export const MessageBox = (props) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        props.handleSubmit(values);
        form.resetFields();
    };

    return (
        <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name='message' label="Message" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Send
                </Button>
                <Button style={{ marginLeft: 10 }} type="default" onClick={props.handleCancel}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};
