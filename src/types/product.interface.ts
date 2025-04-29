import { IAttributeValue } from './attributeValue.interface';

export interface IProduct {
    id: number
    name: string
    category_id: number
    attributes: IAttributeValue[]
}