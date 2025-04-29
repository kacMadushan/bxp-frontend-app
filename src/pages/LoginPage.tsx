import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Flex } from 'antd';

import { useAuthContext } from '../context/AuthProvider';

import LoginHeader from '../components/LoginHeader';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            return navigate('/products', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <Row className='min-h-screen' align='middle' justify='center'>
            <Col xs={24} lg={6}>
                <Card className='border border-gray_200'>
                    <Flex className='px-5 py-5' vertical gap={16}>
                        <LoginHeader />
                        <LoginForm />
                    </Flex>
                </Card>
            </Col>
        </Row>
    );
};

export default LoginPage;