import { Card, Flex, Typography, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { IAttributeValue } from '../types/attributeValue.interface';
import { useProductsContext } from '../context/ProductsProvider';

interface AttributesListItemProps {
    attribute: IAttributeValue
    productId: number;
}

const { Title } = Typography;

const AttributesListItem = ({ attribute, productId }: AttributesListItemProps) => {
    const { removeAttribute } = useProductsContext();
    return (
        <Card className='mb-3'>
            <Flex align='center' justify='space-between'>
                <Title level={5}>{attribute.code}</Title>
                <Flex align='center' gap={22}>
                    <Input className='w-fit' value={attribute.value} />
                    <Button onClick={() => removeAttribute(productId, attribute.code)} className='py-5 shadow-none hover:shadow-none' type='primary'>
                        <DeleteOutlined /> Remove
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default AttributesListItem;