import { useState } from 'react';
import { Typography } from 'antd';

import { AttributeValue } from '../types/attributeValue.interface';

import AttributesListItem from './AttributesListItem';

interface IAttributesList {
    attributes: AttributeValue[] | undefined;
    productId: number
}

export interface IAttributeEditFormState {
    [elementId: number]: boolean;
}

const { Title } = Typography;

const AttributesList = ({ attributes, productId }: IAttributesList) => {
    const [toggleAttributeEditForm, setToggleAttributeEditForm] = useState<IAttributeEditFormState>({});

    const handleToggleAttributeEditForm = (elementId: number): void => {
        setToggleAttributeEditForm(prevAttributeEditForm => ({
            ...prevAttributeEditForm,
            [elementId]: !prevAttributeEditForm[elementId]
        }))
    };

    return (
        <div>
            <Title level={4}>Attributes</Title>
            <div className='mt-4'>
                {attributes?.map((attribute, index) => (
                    <AttributesListItem
                        key={index}
                        attribute={attribute}
                        productId={productId}
                        elementId={index}
                        toggleAttributeEditForm={toggleAttributeEditForm}
                        handleToggleAttributeEditForm={handleToggleAttributeEditForm}
                    />
                ))}
            </div>
        </div>
    );
};

export default AttributesList;