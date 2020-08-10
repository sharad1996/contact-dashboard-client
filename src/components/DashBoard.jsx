import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from 'antd'
import ListItem from './ListItem'
import AddContact from './AddContact'
import { SearchBox } from './Search'
import { getUsers } from '../redux/user/operations'

const Dashboard = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div className="dashboard">
            <div className="search-box-container">
                <SearchBox />
                <AddContact />
            </div>
            <Row>
                <Col span={12}>
                    <div className="container-box">
                        <p>Basic info</p>
                        <p>Company</p>
                    </div>
                    {usersData.users && usersData.users.map((user, index) => (
                        <ListItem key={user._id} user={user} />
                    ))}
                </Col>
                <Col span={12}>col-12</Col>
            </Row>
        </div>
    );
}

export default Dashboard;
