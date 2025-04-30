import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Typography, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

interface ProductsFilterOptionProps {
    pageSize: number;
    searchQuery: string;
    onChangePageSize: (value: number) => void;
    onChangeSearchQuery?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ProductsFilterOption = (
    {
        pageSize,
        searchQuery,
        onChangePageSize,
        onChangeSearchQuery
    }: ProductsFilterOptionProps
) => {
    return (
        <Flex className='mb-5 border-b border-gray_200' align='center' justify='space-between'>
            <Title level={3}>Products</Title>
            <Flex align='center' justify='end' gap={16}>
                <Search
                    className='w-fit py-6'
                    placeholder='Search product'
                    value={searchQuery}
                    onChange={onChangeSearchQuery}
                />
                <Select
                    className='h-10'
                    placeholder="Select Per Page"
                    optionFilterProp="label"
                    value={pageSize}
                    onChange={onChangePageSize}
                    options={[
                        {
                            value: 5,
                            label: '5 Per Page',
                        },
                        {
                            value: 10,
                            label: '10 Per Page',
                        },
                        {
                            value: 20,
                            label: '20 Per Page',
                        },
                        {
                            value: 50,
                            label: '50 Per Page',
                        },
                    ]}
                />
                <Link
                    className='bg-gray_1000 text-gray_100 px-5 py-[9px] rounded-md hover:text-gray_100 hover:bg-gray_900'
                    to='/create'
                >
                    <PlusOutlined /> Add Product
                </Link>
            </Flex>
        </Flex>
    );
};

export default ProductsFilterOption;