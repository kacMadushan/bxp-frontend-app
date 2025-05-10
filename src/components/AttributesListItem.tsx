import { Card, Flex, Typography, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { AttributeValue } from '../types/attributeValue.interface';
import { IAttributeEditFormState } from './AttributesList';
import { useProductsContext } from '../context/ProductsProvider';

import AttributeForm from './AttributeForm';

interface IAttributesListItem {
    attribute: AttributeValue
    productId: number;
    elementId: number;
    toggleAttributeEditForm: IAttributeEditFormState;
    handleToggleAttributeEditForm: (id: number) => void;
}

const { Title, Text } = Typography;

const AttributesListItem = (
    {
        attribute,
        productId,
        elementId,
        toggleAttributeEditForm,
        handleToggleAttributeEditForm
    }: IAttributesListItem) => {

    const { removeAttribute, updateAttribute } = useProductsContext();

    return (
        <Card className='mb-3'>
            <Flex align='center' justify='space-between'>
                <div>
                    <Title level={5}>{attribute.code}</Title>
                    <Text>{attribute.value}</Text>
                </div>
                <Flex align='center' gap={20}>
                    <Button
                        type='default'
                        className='py-5 shadow-none hover:shadow-none'
                        onClick={() => handleToggleAttributeEditForm(elementId)}
                    >
                        <EditOutlined /> Edit Attribute
                    </Button>
                    <Button
                        onClick={() => removeAttribute(productId, attribute.code)}
                        className='py-5 shadow-none hover:shadow-none' type='primary'
                    >
                        <DeleteOutlined /> Remove
                    </Button>
                </Flex>
            </Flex>
            {toggleAttributeEditForm[elementId] && (
                <div className='mt-4'>
                    <AttributeForm
                        productId={productId}
                        attribute={attribute}
                        isUpdateProduct={true}
                        onSubmit={updateAttribute}
                    />
                </div>
            )}
        </Card>
    );
};

export default AttributesListItem;