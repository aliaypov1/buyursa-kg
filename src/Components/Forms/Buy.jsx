import { Button, Modal, message } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import React from 'react';
import axios from 'axios';
import style from './Form.module.css'


const { confirm } = Modal;
const Buy = ({ name, id, children,props }) => {

    const addCourse = async () => {
        try {
            const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Student/PaymentForCourse?courseId=${id}`, {}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            message.success(resp.data.message)
        } catch (error) {
            message.error('У вас уже есть данный курс')
        }
    }

    const showConfirm = (e) => {
        e.stopPropagation()
        confirm({
            title: `Вы точно хотите приобрести этот курс за ${props}`,
            icon: <ExclamationCircleFilled />,
            content: name,
            okType: 'default',
            okText: 'Да',
            cancelText:"Нет",
            onOk() {
                addCourse()
            },
            onCancel() {
            },
        });
    };
    return (
        <>
            <Button className='buyursa__btn' onClick={(e) => showConfirm(e)}>{children}</Button>
        </>
    );
};

export default Buy;