import { Card, Flex, Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { IProduct } from '../types/product.interface';
import { Category } from '../types/category.interface';

interface ProductDetailsViewProps {
    product: IProduct | null;
    getCategoryById: (id: number) => Category | undefined;
}

const { Title, Text } = Typography;

const ProductDetailsView = ({ product, getCategoryById }: ProductDetailsViewProps) => {
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
                    <Button className='py-5 shadow-none hover:shadow-none' type='primary'>
                        <DeleteOutlined /> Remove
                    </Button>
                </Flex>
            </Card>
        </div>
    );
};

export default ProductDetailsView;