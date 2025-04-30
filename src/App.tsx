import { memo, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Spinner from './components/Spinner';
import PrivateRoute from './components/PrivateRoute';
import AppLayout from './components/AppLayout';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const CreateProductPage = lazy(() => import('./pages/CreateProductPage'));
const EditProductPage = lazy(() => import('./pages/EditProductPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
    const renderAppLayout = (
        <PrivateRoute>
            <AppLayout />
        </PrivateRoute>
    )
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path='/' element={<Navigate to='/products' replace />} />
                <Route element={renderAppLayout} errorElement={<NotFoundPage />}>
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/products/category/:category' element={<ProductsPage />} />
                    <Route path='/products/:productId' element={<ProductDetailsPage />} />
                    <Route path='/create' element={<CreateProductPage />} />
                    <Route path='/edit/:productId' element={<EditProductPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                </Route>
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default memo(App);