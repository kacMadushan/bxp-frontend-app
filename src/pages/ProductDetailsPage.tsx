import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Tabs } from 'antd';

import { IProduct } from '../types/product.interface';
import { useProductsContext } from '../context/ProductsProvider';

import Spinner from '../components/Spinner';
import PageHeading from '../components/PageHeading';
import ProductDetailsView from '../components/ProductDetailsView';
import AttributesList from '../components/AttributesList';
import AttributeForm from '../components/AttributeForm';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const { getProductById, getCategoryById } = useProductsContext();
    const id = Number(productId);

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        setLoading(true);
        const getSelectedProduct = getProductById(id);
        if (getSelectedProduct) {
            setProduct(getSelectedProduct)
            setLoading(false);
        }
    }, [getProductById, id]);

    if (loading) return <Spinner />

    const getProduct = product ? product : null;

    return (
        <Card className='page-wrapper'>
            <PageHeading title='Product Details' />
            <div>
                <Tabs
                    defaultActiveKey='1'
                    items={
                        [
                            {
                                key: '1',
                                label: 'Details',
                                children: <ProductDetailsView getCategoryById={getCategoryById} product={getProduct} />
                            },
                            {
                                key: '2',
                                label: 'Attributes',
                                children: <AttributesList productId={Number(getProduct?.id)} attributes={getProduct?.attributes} />
                            },
                            {
                                key: '3',
                                label: 'New Attribute',
                                children: <AttributeForm productId={Number(getProduct?.id)} />
                            },
                        ]
                    }
                />
            </div>
        </Card>
    );
};

export default ProductDetailsPage;