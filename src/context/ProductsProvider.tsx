import { createContext, useState, useEffect, useContext, useMemo, useCallback, type ReactNode } from 'react';
import { categories } from '../api/categories';
import { products } from '../api/products';
import { IAttributeValue } from '../types/attributeValue.interface';
import { Category } from '../types/category.interface';
import { IProduct } from '../types/product.interface';

interface IProductsContext {
    categories: Category[];
    products: IProduct[];
    getCategoryById: (id: number) => Category | undefined;
    getProductById: (id: number) => IProduct | undefined;
    createNewProduct: (newProduct: IProduct) => Promise<void>;
    createNewAttribute: (id: number, newAttribute: IAttributeValue) => Promise<void>;
    removeAttribute: (id: number, removeCode: string) => void;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);

const MOCK_CATEGORIES: Category[] = categories;
const MOCK_PRODUCTS: IProduct[] = products;

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);

    const createNewProduct = useCallback(async (newProduct: IProduct): Promise<void> => {
        setProducts([...products, newProduct]);
    }, [products]);

    const createNewAttribute = useCallback(async (id: number, attribute: IAttributeValue): Promise<void> => {
        const newAttribute = products.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    attributes: [
                        ...product.attributes,
                        attribute
                    ]
                }
            } else {
                return product
            }
        })
        setProducts(newAttribute)
    }, [products]);

    const removeAttribute = (id: number, removeCode: string) => {
        const deleteAttribute = products.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    attributes: product.attributes.filter((attribute) => attribute.code !== removeCode)
                }
            } else {
                return product
            }
        })
        setProducts(deleteAttribute);
    };

    const getCategoryById = useCallback((id: number) => {
        return categories.find((category) => category.id === id)
    }, [categories]);

    const getProductById = useCallback((id: number) => {
        return products.find((product) => product.id === id)
    }, [products]);

    useEffect(() => {
        setTimeout(() => {
            setCategories(MOCK_CATEGORIES);
            setProducts(MOCK_PRODUCTS)
        }, 500)
    }, [])

    const value = useMemo(() =>
    (
        {
            categories,
            products,
            createNewProduct,
            createNewAttribute,
            removeAttribute,
            getCategoryById,
            getProductById
        }
    ), [
        categories,
        products,
        createNewProduct,
        createNewAttribute,
        removeAttribute,
        getCategoryById,
        getProductById
    ]
    );

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
};

export const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProductsContext must be used withing an ProductsContext');
    }
    return context;
};