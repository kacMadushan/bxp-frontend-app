import { useNavigate } from 'react-router-dom';
import { Card, Flex, Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { Product } from '../types/product.interface';
import { Category } from '../types/category.interface';

interface ProductDetailsViewProps {
    product: Product | null;
    removeProduct: (id: number) => void;
    getCategoryById: (id: number) => Category | undefined;
}

const { Title, Text } = Typography;

const ProductDetailsView = ({ product, getCategoryById, removeProduct }: ProductDetailsViewProps) => {
    const navigate = useNavigate();

    const handleProductRemove = (productId: number) => {
        removeProduct(productId)
        navigate('/products', { replace: true })
    }

    const category = getCategoryById(Number(product?.category_id))?.name || 'Unknown';
    return (
        <div>
            <Title level={4}>Details</Title>
            <Card>
                <Flex align='center' justify='space-between'>
                    <div>
                        <Title level={5}>{product?.name}</Title>
                        <Text>{category}</Text>
                    </div>
                    <Button onClick={() => handleProductRemove(Number(product?.id))} className='py-5 shadow-none hover:shadow-none' type='primary'>
                        <DeleteOutlined /> Remove
                    </Button>
                </Flex>
            </Card>
        </div>
    );
};

export default ProductDetailsView;