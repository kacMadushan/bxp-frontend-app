import { Link } from 'react-router-dom';
import { List, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

interface AccountContentProps {
    userLogout: () => void;
}

const ListItem = List.Item;

const AccountContent = ({ userLogout }: AccountContentProps) => {
    return (
        <List>
            <ListItem className='hover:bg-gray_100'>
                <Link className='px-3 hover:text-gray_1000' to='/profile'>
                    <UserOutlined /> My Profile
                </Link>
            </ListItem>
            <ListItem className='hover:bg-gray_100'>
                <Button className='logout-btn' onClick={userLogout}>
                    <LogoutOutlined /> Logout
                </Button>
            </ListItem>
        </List>
    );
};

export default AccountContent;