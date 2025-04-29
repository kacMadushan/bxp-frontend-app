import { Row, Col, Typography, Form, Input, Button, message } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import { IAttributeValue } from '../types/attributeValue.interface';

const { Title } = Typography;
const FormItem = Form.Item;

const AttributeForm = () => {
    const [displayMessage, displayMessageContext] = message.useMessage();

    const onSubmitAttributeForm = async (data: IAttributeValue) => {
        try {
            console.log(data)
            displayMessage.open({
                type: 'success',
                content: 'Success! Attribute added success'
            });
        } catch (error) {
            displayMessage.open({
                type: 'error',
                content: 'Sorry! Attribute added failed'
            });
        }
    };

    return (
        <Row>
            <Col xs={24} lg={12}>
                {displayMessageContext}
                <Title level={4}>Add New Attribute</Title>
                <Form
                    className='mt-4'
                    layout='vertical'
                    onFinish={onSubmitAttributeForm}
                >
                    <FormItem
                        label='Attribute Code'
                        name='code'
                        rules={[{ required: true, message: 'Please enter product code' }]}
                    >
                        <Input placeholder='e.g, size, color, Url, weight' />
                    </FormItem>
                    <FormItem
                        label='Attribute Value'
                        name='value'
                        rules={[{ required: true, message: 'Please enter product value' }]}
                    >
                        <Input />
                    </FormItem>
                    <FormItem>
                        <Button className='py-5 shadow-none hover:shadow-none' type='primary' htmlType='submit'>
                            <SaveOutlined /> Save Attribute
                        </Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    );
};

export default AttributeForm;