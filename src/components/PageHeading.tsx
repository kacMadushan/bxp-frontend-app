import { Link } from 'react-router-dom';
import { Flex, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface PageHeadingProps {
    title: string;
}

const { Title } = Typography;

const PageHeading = ({ title }: PageHeadingProps) => {
    return (
        <Flex className='mb-5' align='center' gap={16}>
            <Link className='border border-gray_300 px-3 py-2 rounded-md hover:bg-gray_300 hover:text-gray_1000' to='/products'>
                <ArrowLeftOutlined />
            </Link>
            <Title level={3}>{title}</Title>
        </Flex>
    );
};

export default PageHeading;