import { useState, ChangeEvent } from 'react';
import { Card } from 'antd';

import { Product } from '../types/product.interface';
import { useProductsContext } from '../context/ProductsProvider';

import ProductsFilterOption from '../components/ProductsFilterOption';
import ProductsTable from '../components/ProductsTable';

const ProductsPage = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [pageSize, setPageSize] = useState<number>(5);

    const { products, activeCategory, getCategoryById } = useProductsContext();
    const page = 1;

    const onChangePageSize = (size: number) => {
        setPageSize(size)
    };

    const onChangeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Filter products - (search, category, page count)
    const filteredProducts: Product[] = products
        .slice((page - 1) * pageSize, page * pageSize)
        .filter(
            (product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    console.log(filteredProducts);
    return (
        <Card className='page-wrapper'>
            <ProductsFilterOption
                pageSize={pageSize}
                searchQuery={searchQuery}
                onChangePageSize={onChangePageSize}
                onChangeSearchQuery={onChangeSearchQuery}
            />
            <ProductsTable
                getCategoryById={getCategoryById}
                products={filteredProducts}
            />
        </Card>
    );
};

export default ProductsPage;