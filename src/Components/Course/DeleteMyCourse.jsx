import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, message } from 'antd';
import axios from 'axios';

const DeleteMyCourse = ({ courseId, onCourseDeleted }) => {
  const { confirm } = Modal;

  const deleteCourse = async () => {
    try{
    const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Course/remove-course-from-student?courseId=${courseId}`, {}, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    console.log(resp);
    onCourseDeleted(courseId); 
    message.success(resp.data.message)
  }catch(error){
    message.error(error.response.message)
  }
}

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure to delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: <p>yes</p>,
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteCourse();
      },
      onCancel() {
      },
    });
  };

  return (
    <div>
      <Button onClick={showDeleteConfirm} type="dashed">
        удалить курс 🗑️
      </Button>
    </div>
  );
};

export default DeleteMyCourse;
