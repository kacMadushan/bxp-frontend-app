import { Card, Flex, Typography, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { AttributeValue } from '../types/attributeValue.interface';
import { useProductsContext } from '../context/ProductsProvider';

import AttributeForm from './AttributeForm';

interface AttributesListItemProps {
    attribute: AttributeValue
    productId: number;
}

const { Title, Text } = Typography;

const AttributesListItem = ({ attribute, productId }: AttributesListItemProps) => {
    const { removeAttribute, updateAttribute } = useProductsContext();
    return (
        <Card className='mb-3'>
            <Flex align='center' justify='space-between'>
                <div>
                    <Title level={5}>{attribute.code}</Title>
                    <Text>{attribute.value}</Text>
                </div>
                <Flex align='center' gap={22}>
                    <Button onClick={() => removeAttribute(productId, attribute.code)} className='py-5 shadow-none hover:shadow-none' type='primary'>
                        <DeleteOutlined /> Remove
                    </Button>
                </Flex>
            </Flex>
            <div className='mt-4'>
                <AttributeForm
                    productId={productId}
                    attribute={attribute}
                    isUpdateProduct={true}
                    onSubmit={updateAttribute}
                />
            </div>
        </Card>
    );
};

export default AttributesListItem;