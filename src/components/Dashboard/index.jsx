import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from 'antd'
import ListItem from './ListItem'
import ContactDetails from './ContactDetails'
import AddContact from './AddContact'
import { SearchBox } from '../Search'
import { Message } from './Message'
import { getUsers } from '../../redux/user/operations'
import { setCurrentUser } from '../../redux/user/actions'

const Dashboard = () => {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.userReducer)
    const messageData = useSelector(state => state.messageReducer)
    const [updatedUsers, setUpdatedUsers] = useState(usersData.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        dispatch(setCurrentUser(usersData.users[0]))
        setUpdatedUsers(usersData.users)
    }, [usersData.users])

    const onChangeSearch = (value) => {
        const newData = usersData.users.filter((user) => user.name.includes(value));
        setUpdatedUsers(newData)
    }

    const receivedMessages = messageData.messages.filter((message) => message.reveiverId === usersData.selectedUser._id)
    const sendedMessages = messageData.messages.filter((message) => message.senderId === usersData.selectedUser._id)

    return (
        <div className="dashboard">
            <div className="search-box-container">
                <SearchBox onChangeSearch={onChangeSearch} />
                <AddContact />
            </div>
            <Row>
                <Col span={12}>
                    <div className="container-box">
                        <Row style={{ width: '100%' }}>
                            <Col span={14} className="container-box-col">
                                <p>Basic info</p>
                            </Col>
                            <Col span={10} className="container-box-col">
                                <p>Company</p>
                            </Col>
                        </Row>
                    </div>
                    {updatedUsers && updatedUsers.length > 0
                        ? updatedUsers.map((user, index) => (
                            <div key={user._id}>
                                <ListItem
                                    user={user}
                                    selectedUser={usersData.selectedUser}
                                    currentUser={usersData.currentUser}
                                />
                            </div>
                        ))
                        : <div>No contacts available</div>
                    }
                </Col>
                <Col span={12}>
                    <ContactDetails user={usersData.selectedUser} />
                    {receivedMessages && receivedMessages.length > 0 &&
                        <h4 style={{ margin: '10px 20px' }}>Received Messages</h4>
                    }
                    {receivedMessages && receivedMessages.length > 0 && receivedMessages.map((message) => (
                        <Message message={message} username={message.senderName} />
                    ))}
                    {sendedMessages && sendedMessages.length > 0 &&
                        <h4 style={{ margin: '10px 20px' }}>Send Messages</h4>
                    }
                    {sendedMessages && sendedMessages.length > 0 && sendedMessages.map((message) => (
                        <Message message={message} username={message.receiverName} isSended />
                    ))}
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard
