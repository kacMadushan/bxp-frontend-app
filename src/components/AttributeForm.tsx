import { Row, Col, Typography, Form, Input, Button, message } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import { AttributeValue } from '../types/attributeValue.interface';

interface AttributeFormProps {
    productId: number;
    attribute?: AttributeValue;
    isUpdateProduct?: boolean;
    onSubmit: (id: number, data: AttributeValue) => Promise<void>;
}

const { Title } = Typography;
const FormItem = Form.Item;

const AttributeForm = ({ productId, attribute, isUpdateProduct, onSubmit }: AttributeFormProps) => {
    const [displayMessage, displayMessageContext] = message.useMessage();
    const [form] = Form.useForm();

    const onSubmitAttributeForm = async (data: AttributeValue) => {
        try {
            await onSubmit(productId, data)
            displayMessage.open({
                type: 'success',
                content: 'Success! Attribute added success'
            });
            form.resetFields();
        } catch (error) {
            displayMessage.open({
                type: 'error',
                content: 'Sorry! Attribute added failed'
            });
        }
    };

    const renderFormTitle = isUpdateProduct ? 'Update Attribute' : 'New Attribute';

    return (
        <Row>
            <Col xs={24} lg={12}>
                {displayMessageContext}
                <Title level={4}>{renderFormTitle}</Title>
                <Form
                    form={isUpdateProduct ? undefined : form}
                    className='mt-4'
                    layout='vertical'
                    onFinish={onSubmitAttributeForm}
                    initialValues={isUpdateProduct ? { code: attribute?.code, value: attribute?.value } : undefined}
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