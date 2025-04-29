import { Flex, Typography } from 'antd';

const { Title } = Typography;

const AppLogo = () => {
    return (
        <Flex align='center' justify='center' gap={2}>
            <Title level={1}>home</Title>
            <span className='w-9 h-9 bg-gray_1000 text-gray_100 rounded-full text-center py-2 text-sm'>24</span>
        </Flex>
    );
};

export default AppLogo;