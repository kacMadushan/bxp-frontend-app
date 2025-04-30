import { Typography } from 'antd';

import { AttributeValue } from '../types/attributeValue.interface';

import AttributesListItem from './AttributesListItem';

interface AttributesListProps {
    attributes: AttributeValue[] | undefined;
    productId: number
}

const { Title } = Typography;

const AttributesList = ({ attributes, productId }: AttributesListProps) => {
    return (
        <div>
            <Title level={4}>Attributes</Title>
            <div className='mt-4'>
                {attributes?.map((attribute, index) => (
                    <AttributesListItem
                        key={index}
                        attribute={attribute}
                        productId={productId}
                    />
                ))}
            </div>
        </div>
    );
};

export default AttributesList;