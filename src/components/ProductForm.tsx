import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Input, Select, Button, message } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import { Product } from '../types/product.interface';
import { useProductsContext } from '../context/ProductsProvider';
import { getIdNumber } from '../utils/helper';

interface ProductFormProps {
    onSubmit: (product: Product) => Promise<void>;
}

const FormItem = Form.Item;

const ProductForm = ({ onSubmit }: ProductFormProps) => {
    const [displayMessage, displayMessageContext] = message.useMessage();
    const [form] = Form.useForm();
    const { categories } = useProductsContext();
    const navigate = useNavigate();

    const onSubmitProductForm = async (data: Product) => {
        const newProduct: Product = {
            id: getIdNumber,
            name: data.name,
            category_id: Number(data.category_id),
            attributes: []
        }
        try {
            await onSubmit(newProduct);
            navigate('/products', { replace: true });
            form.resetFields();
        } catch (error) {
            displayMessage.open({
                type: 'error',
                content: 'Sorry! product added failed'
            });
        }
    };

    const categoryOptions = categories.map((category) => ({
        value: category.id,
        label: category.name
    }));

    return (
        <Row>
            <Col xs={24} lg={12}>
                {displayMessageContext}
                <Form form={form} layout='vertical' onFinish={onSubmitProductForm}>
                    <FormItem
                        label='Product Name'
                        name='name'
                        rules={[{ required: true, message: 'Please enter product name' }]}
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        label='Category'
                        name='category_id'
                        rules={[{ required: true, message: 'Please select category' }]}
                    >
                        <Select
                            className='h-10'
                            placeholder="Select Per Page"
                            optionFilterProp="label"
                            options={categoryOptions}
                        />
                    </FormItem>
                    <FormItem>
                        <Button
                            className='py-5 shadow-none hover:shadow-none'
                            type='primary'
                            htmlType='submit'
                        >
                            <SaveOutlined /> Save Product
                        </Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    );
};

export default ProductForm;