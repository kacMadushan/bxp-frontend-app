import { useParams } from 'react-router-dom';
import { Card } from 'antd';

import { useProductsContext } from '../context/ProductsProvider';

import PageHeading from '../components/PageHeading';
//import ProductForm from '../components/ProductForm';

const EditProductPage = () => {
    const productId = useParams();
    const { getProductById } = useProductsContext();
    return (
        <Card className='page-wrapper'>
            <PageHeading title='Edit Product' />
        </Card>
    );
};

export default EditProductPage;