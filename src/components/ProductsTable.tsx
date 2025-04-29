import { Link } from 'react-router-dom';
import { Table } from 'antd';

import { IProduct } from '../types/product.interface';
import { Category } from '../types/category.interface';

interface ProductsTableProps {
    products: IProduct[];
    getCategoryById: (id: number) => Category | undefined;
}

const ProductsTable = ({ products, getCategoryById }: ProductsTableProps) => {
    const data: IProduct[] = products;
    return (
        <Table
            columns={
                [
                    {
                        title: 'ID',
                        dataIndex: 'id',
                        key: 'id',
                        sorter: (a, b) => a.id - b.id,
                    },
                    {
                        title: 'Product Name',
                        dataIndex: 'name',
                        key: 'name'
                    },
                    {
                        title: 'Category',
                        dataIndex: 'category_id',
                        key: 'category_id',
                        render: (_, { category_id }) => <span>{getCategoryById(category_id)?.name || 'Unknown'}</span>
                    },
                    {
                        title: 'Attributes',
                        dataIndex: 'attributes',
                        key: 'attributes',
                        render: (_, { attributes }) => <span>{attributes.length} attributes</span>
                    },
                    {
                        title: 'Actions',
                        dataIndex: 'actions',
                        key: 'actions',
                        render: (_, record) => (
                            <Link className='border border-gray_300 px-3 py-2 rounded-md hover:bg-gray_300 hover:text-gray_1000' to={`/products/${record.id}`}>
                                View
                            </Link>
                        )
                    },
                ]
            }
            rowKey='id'
            dataSource={data}
        />
    );
};

export default ProductsTable;