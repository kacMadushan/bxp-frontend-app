import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserAvatar = () => {
    return (
        <Avatar
            className='bg-gray_1000 text-gray_100'
            size={36}
            icon={<UserOutlined />}
        />
    );
};

export default UserAvatar;