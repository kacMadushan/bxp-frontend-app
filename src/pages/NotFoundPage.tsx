import { Layout, Row, Col, Card, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title, Text } = Typography;

const NotFoundPage = () => {
    return (
        <Content>
            <Row className='min-h-screen' align='middle' justify='center'>
                <Col xs={24} lg={16}>
                    <Card className='flex flex-col items-center justify-center gap-y-4 py-5 border border-gray_200'>
                        <Title className='text-center'>Whoops! Lost in Space?</Title>
                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <Text className='text-gray_700'>The page you're looking for isn't found :( We suggest you back to home</Text>
                            <Link className='bg-gray_1000 text-gray_100 px-5 py-[9px] rounded-md hover:text-gray_100 hover:bg-gray_900' to='/products'>
                                <HomeOutlined />  Back To Home
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Content>
    );
};

export default NotFoundPage;