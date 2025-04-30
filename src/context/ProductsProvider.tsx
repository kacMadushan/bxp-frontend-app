import { createContext, useState, useEffect, useContext, useMemo, useCallback, type ReactNode } from 'react';
import { categories } from '../api/categories';
import { products } from '../api/products';
import { AttributeValue } from '../types/attributeValue.interface';
import { Category } from '../types/category.interface';
import { Product } from '../types/product.interface';

interface IProductsContext {
    activeCategory: number | null;
    categories: Category[];
    products: Product[];
    removeProduct: (id: number) => void;
    getProductById: (id: number) => Product | undefined;
    getCategoryById: (id: number) => Category | undefined;
    updateAttribute: (id: number, newAttribute: AttributeValue) => Promise<void>;
    removeAttribute: (id: number, removeCode: string) => void;
    createNewProduct: (newProduct: Product) => Promise<void>;
    createNewAttribute: (id: number, newAttribute: AttributeValue) => Promise<void>;
    handleChangeActiveCategory: (key: number) => void;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);

const MOCK_CATEGORIES: Category[] = categories;
const MOCK_PRODUCTS: Product[] = products;

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const handleChangeActiveCategory = useCallback((key: number) => {
        setActiveCategory(key)
    }, []);

    const createNewProduct = useCallback(async (newProduct: Product): Promise<void> => {
        setProducts([...products, newProduct]);
    }, [products]);

    const removeProduct = useCallback((id: number) => {
        const removeProductItem = products.filter((product) => product.id !== id);
        setProducts(removeProductItem)
    }, [products]);

    const createNewAttribute = useCallback(async (id: number, attribute: AttributeValue): Promise<void> => {
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

    const updateAttribute = useCallback(async (
        productId: number,
        updatedAttribute: Partial<AttributeValue>
    ): Promise<void> => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                const updatedAttributes = product.attributes.map((attr) => {
                    if (attr.code === updatedAttribute.code) {
                        return {
                            ...attr,
                            ...updatedAttribute
                        };
                    }
                    return attr;
                });

                return {
                    ...product,
                    attributes: updatedAttributes
                };
            }
            return product;
        });

        setProducts(updatedProducts);
    }, [products]);

    const removeAttribute = useCallback((id: number, removeCode: string) => {
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
    }, [products]);

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
            activeCategory,
            categories,
            products,
            createNewProduct,
            createNewAttribute,
            removeAttribute,
            removeProduct,
            updateAttribute,
            getCategoryById,
            getProductById,
            handleChangeActiveCategory
        }
    ), [
        activeCategory,
        categories,
        products,
        createNewProduct,
        createNewAttribute,
        removeAttribute,
        removeProduct,
        updateAttribute,
        getCategoryById,
        getProductById,
        handleChangeActiveCategory
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