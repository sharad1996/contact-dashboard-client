import React from 'react'
import { Skeleton, Card, Form } from 'antd'

const { Meta } = Card

const ContactDetails = (props) => {

    return (
        <div className="contact-details">
            {props.user && props.user.name && (
                <Card
                    className="contact-details-card"
                >
                    <Skeleton className="contact-details-card-body" loading={false} avatar active>
                        <Meta
                            className="card-details-meta"
                            avatar={
                                <div style={{ background: props.user && props.user.color ? props.user.color : '#fa689f' }} className="card-details-avtaar">MH</div>
                            }
                            title={props.user.name}
                            description={props.user.email}
                        />
                        <Form className="contact-detail-card-form" style={{ margin: 20 }}>
                            <Form.Item label="Full Name">
                                {props.user.name}
                            </Form.Item>
                            <Form.Item label="Email">
                                {props.user.email}
                            </Form.Item>
                            <Form.Item label="Phone">
                                {props.user.phoneNumber}
                            </Form.Item>
                            <Form.Item label="Company">
                                {props.user.company}
                            </Form.Item>
                            <Form.Item label="Address">
                                {props.user.address}
                            </Form.Item>
                        </Form>
                    </Skeleton>
                </Card>
            )}
        </div>
    )
}

export default ContactDetails
