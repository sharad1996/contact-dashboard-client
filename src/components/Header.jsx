import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Menu, Dropdown } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { setCurrentUser } from '../redux/user/actions'
import contact from '../images/contact.png'

export const Header = () => {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.userReducer)
    const [updatedUsers, setUpdatedUsers] = useState(usersData.users)

    const handleLoginUser = (user) => {
        dispatch(setCurrentUser(user))
    }

    useEffect(() => {
        if (usersData.currentUser) {
            const updatedData = usersData.users.filter((user) => user._id !== usersData.currentUser._id);
            setUpdatedUsers(updatedData)
        }
    }, [usersData.currentUser])

    const menu = (
        <Menu>
            {updatedUsers.map((user) => (
                <Menu.Item key={user._id} onClick={() => handleLoginUser(user)}>
                    <div>{user.name}</div>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <nav className="nav">
            <div style={{ marginTop: 10 }}>
                <img className="nav-content" src={contact} />
                <Dropdown className="user-dropdown" overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <UserOutlined /> {usersData.currentUser && usersData.currentUser.name} <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </nav>
    );
}
