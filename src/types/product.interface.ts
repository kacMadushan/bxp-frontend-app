import { AttributeValue } from './attributeValue.interface';

export interface Product {
    id: number;
    name: string;
    category_id: number;
    attributes: AttributeValue[];
}