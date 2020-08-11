import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Modal, Skeleton, Card } from 'antd'
import { EditOutlined, MessageOutlined, DeleteOutlined } from '@ant-design/icons'
import { setIsEdit, setSelectedUser } from '../../redux/user/actions'
import { deleteUser } from '../../redux/user/operations'
import { setIsSending } from '../../redux/message/actions'
import { sendMessage, getMessages } from '../../redux/message/operations'
import { MessageBox } from './MessageBox'

const { Meta } = Card

const ListItem = ({ user, selectedUser, currentUser }) => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const messageData = useSelector(state => state.messageReducer)

    useEffect(() => {
        setVisible(messageData.isSending)
    }, [messageData.isSending])

    const handleEdit = () => {
        dispatch(setIsEdit(true, user))
    }

    const handleDelete = () => {
        dispatch(deleteUser(user._id))
    }

    const handleSelect = () => {
        dispatch(setSelectedUser(user))
        dispatch(getMessages())
    }

    const handleMessage = () => {
        dispatch(setIsSending(true))
    }

    const handleSubmit = (values) => {
        if (messageData.isSending) {
            const data = {
                senderId: currentUser._id,
                reveiverId: selectedUser._id,
                senderName: currentUser.name,
                receiverName: selectedUser.name
            }
            const updatedData = { ...data, ...values }
            dispatch(sendMessage(updatedData))
            dispatch(setIsSending(false))
        }
        setVisible(false)
    };

    const handleCancel = () => {
        setVisible(false)
        if (messageData.isSending) {
            dispatch(setIsSending(false))
        }
    }

    return (
        <div>
            <Card
                className="contact-card"
                style={{ background: selectedUser._id === user._id && '#e8e8e8' }}
                actions={[
                    <MessageOutlined key="message" onClick={handleMessage} />,
                    <EditOutlined key="edit" onClick={handleEdit} />,
                    <DeleteOutlined key="delete" onClick={handleDelete} />
                ]}
                onClick={handleSelect}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        style={{ width: '190px' }}
                        avatar={
                            <div style={{ background: user && user.color ? user.color : '#fa689f' }} className="card-avtaar">MH</div>
                        }
                        title={user.name}
                        description={user.email}
                    />
                    <Meta
                        style={{ marginLeft: 20 }}
                        title={user.company}
                    />
                </Skeleton>
            </Card>
            <Modal
                title="Message box"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <MessageBox
                    handleSubmit={handleSubmit}
                    handleCancel={handleCancel}
                />
            </Modal>
        </div>
    )
}

export default ListItem
