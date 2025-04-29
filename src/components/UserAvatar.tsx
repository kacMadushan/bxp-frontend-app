import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface UserAvatarProps {
    size?: number
}

const UserAvatar = ({ size = 36 }: UserAvatarProps) => {
    return (
        <Avatar
            className='bg-gray_1000 text-gray_100'
            size={size}
            icon={<UserOutlined />}
        />
    );
};

export default UserAvatar;