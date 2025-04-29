import { Card } from 'antd';

import { useProductsContext } from '../context/ProductsProvider';

import PageHeading from '../components/PageHeading';
import ProductForm from '../components/ProductForm';

const CreateProductPage = () => {
    const { createNewProduct } = useProductsContext();
    return (
        <Card className='page-wrapper'>
            <PageHeading title='Add New Product' />
            <ProductForm onSubmit={createNewProduct} />
        </Card>
    );
};

export default CreateProductPage;