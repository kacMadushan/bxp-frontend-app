import { Flex, Typography } from 'antd';

import AppLogo from './AppLogo';

const { Text } = Typography;

const LoginHeader = () => {
    return (
        <Flex className='border-b border-gray_200 pb-4' vertical align='center' justify='center' gap={4}>
            <AppLogo />
            <Text>Please login to continue.</Text>
        </Flex>
    );
};

export default LoginHeader;