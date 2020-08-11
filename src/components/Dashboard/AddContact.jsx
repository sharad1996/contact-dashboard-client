import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Modal, Button } from 'antd'
import { ContactForm } from './ContactForm'
import { addUser, updateUser } from '../../redux/user/operations'
import { setIsEdit } from '../../redux/user/actions'

const AddContact = (props) => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userReducer)

    useEffect(() => {
        setVisible(userData.isEdit)
    }, [userData.isEdit])

    const handleSubmit = (values) => {
        if (userData.isEdit) {
            dispatch(updateUser(values, userData.editedUser._id))
            dispatch(setIsEdit(false, {}))
        } else {
            dispatch(addUser(values))
        }
        setVisible(false)
    };

    const handleCancel = () => {
        setVisible(false)
        if (userData.isEdit) {
            dispatch(setIsEdit(false, {}))
        }
    }

    return (
        <div className="add-contact">
            <Button
                type="primary"
                className="add-contact-button"
                onClick={() => setVisible(true)}
            >
                + Add Contact
            </Button>
            <Modal
                title="Contact Details"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <ContactForm
                    handleSubmit={handleSubmit}
                    user={userData.editedUser}
                    handleCancel={handleCancel}
                />
            </Modal>
        </div>
    );
}

export default AddContact;
