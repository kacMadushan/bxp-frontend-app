import { Row, Col, Spin, Layout } from 'antd';

const { Content } = Layout;
const content = <div className='bg-gray_1000' />;

const Spinner = () => {
    return (
        <Content>
            <Row className='min-h-screen' align='middle' justify='center'>
                <Col xs={24} lg={3}>
                    <Spin tip="Loading" size="large">
                        {content}
                    </Spin>
                </Col>
            </Row>
        </Content>
    );
};

export default Spinner;