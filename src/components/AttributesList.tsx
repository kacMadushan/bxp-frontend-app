import { Card, Typography } from 'antd';

import { IAttributeValue } from '../types/attributeValue.interface';

import AttributesListItem from './AttributesListItem';

interface AttributesListProps {
    attributes: IAttributeValue[] | undefined
}

const { Title, Text } = Typography;

const AttributesList = ({ attributes }: AttributesListProps) => {
    return (
        <div>
            <Title level={4}>Attributes</Title>
            <div className='mt-4'>
                {attributes?.map((attribute, index) => (
                    <AttributesListItem key={index} attribute={attribute} />
                ))}
            </div>
        </div>
    );
};

export default AttributesList;