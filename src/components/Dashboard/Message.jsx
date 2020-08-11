import React from 'react'
import { Skeleton, Card } from 'antd'

export const Message = (props) => {
    const date = new Date(props.message.createdAt);
    return (
        <div className="message-details">
            <Card
                className="message-details-card"
            >
                <Skeleton className="message-details-card-body" loading={false} avatar active>
                    <div className="message-content">
                        <p>{props.message.message}</p>
                        <p>{props.isSended ? 'Received by' : 'Sended by'} <a href="#">{props.username}</a> at <span>{date.toDateString()}</span></p>
                    </div>
                </Skeleton>
            </Card>
        </div>
    )
}
