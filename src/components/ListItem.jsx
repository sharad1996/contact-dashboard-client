import React from 'react'
import { useDispatch } from "react-redux"
import { Skeleton, Card } from 'antd'
import { EditOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons'
import { setIsEdit } from '../redux/user/actions'
import { deleteUser } from '../redux/user/operations'

const { Meta } = Card;

const ListItem = (props) => {
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(setIsEdit(true, props.user));
    }

    const handleDelete = () => {
        dispatch(deleteUser(props.user._id));
    }

    return (
        <>
            <Card
                className="contact-card"
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" onClick={handleEdit} />,
                    <DeleteOutlined key="delet" onClick={handleDelete} />
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        style={{ width: '190px' }}
                        avatar={
                            <div className="card-avtaar">MH</div>
                        }
                        title={props.user.name}
                        description={props.user.email}
                    />
                    <Meta
                        style={{ marginLeft: 20 }}
                        title={props.user.company}
                    />
                </Skeleton>
            </Card>
        </>
    );
}

export default ListItem;
