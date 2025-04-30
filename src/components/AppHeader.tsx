import { memo } from 'react';
import { Layout, Flex, Space, Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { useAuthContext } from '../context/AuthProvider';

import AppLogo from './AppLogo';
import UserAvatar from './UserAvatar';
import AccountContent from './AccountContent';

const { Header } = Layout;

const AppHeader = () => {
    const { user, userLogout } = useAuthContext();
    return (
        <Header className='bg-white border-b border-gray_200 flex items-center'>
            <div className='container'>
                <Flex align='center' justify='space-between'>
                    <AppLogo />
                    <Space>
                        <UserAvatar />
                        <Popover
                            placement='bottomRight'
                            title='Account Setting'
                            content={<AccountContent userLogout={userLogout} />}
                        >
                            <Space>
                                <span className='text-gray_1000'>{user?.name}</span>
                                <DownOutlined />
                            </Space>
                        </Popover>
                    </Space>
                </Flex>
            </div>
        </Header>
    );
};

export default memo(AppHeader);