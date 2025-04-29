import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Input, Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import { IProduct } from '../types/product.interface';

interface ProductFormProps {
    onSubmit: (product: IProduct) => Promise<void>;
}

const FormItem = Form.Item;

const ProductForm = ({ onSubmit }: ProductFormProps) => {
    const navigate = useNavigate();

    const onSubmitProductForm = async (data: IProduct) => {
        try {
            await onSubmit(data);
            navigate('/products', { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Row>
            <Col xs={24} lg={12}>
                <Form layout='vertical' onFinish={onSubmitProductForm}>
                    <FormItem
                        label='Product Name'
                        name='name'
                        rules={[{ required: true, message: 'Please enter product name' }]}
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        label='Category'
                        name='category'
                        rules={[{ required: true, message: 'Please select category' }]}
                    >
                        <Input />
                    </FormItem>
                    <FormItem>
                        <Button className='py-5 shadow-none hover:shadow-none' type='primary' htmlType='submit'>
                            <SaveOutlined /> Save Product
                        </Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    );
};

export default ProductForm;