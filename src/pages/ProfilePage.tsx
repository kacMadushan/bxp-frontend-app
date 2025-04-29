import { Card, Flex, Typography } from 'antd';

import { useAuthContext } from '../context/AuthProvider';

import PageHeading from '../components/PageHeading';
import UserAvatar from '../components/UserAvatar';

const { Title, Text } = Typography;

const ProfilePage = () => {
    const { user } = useAuthContext();
    return (
        <Card className='page-wrapper'>
            <PageHeading title='My Profile' />
            <div>
                <Card>
                    <Flex align='center' gap={16}>
                        <UserAvatar size={86} />
                        <div>
                            <Title level={5}>{user?.name}</Title>
                            <Text>{user?.email}</Text>
                        </div>
                    </Flex>
                </Card>
            </div>
        </Card>
    );
};

export default ProfilePage;