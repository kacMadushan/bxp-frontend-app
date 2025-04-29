import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { Category } from '../types/category.interface';
import { useProductsContext } from '../context/ProductsProvider';

interface CategoryNode extends Category {
    children: CategoryNode[];
}

const buildCategoryTree = (categories: Category[]): CategoryNode[] => {
    const categoryMap: Record<number, CategoryNode> = {};
    const rootCategories: CategoryNode[] = [];

    categories.forEach(category => {
        categoryMap[category.id] = { ...category, children: [] };
    });

    categories.forEach(category => {
        const node = categoryMap[category.id];

        if (category.parent_id && categoryMap[category.parent_id]) {
            categoryMap[category.parent_id].children.push(node);
        } else {
            rootCategories.push(node);
        }
    });

    return rootCategories;
};

const renderMenuItems = (categories: CategoryNode[], parentPath = ''): React.ReactNode => {
    return categories.map(category => {
        const currentPath = parentPath ? `products/${category.name.toLowerCase()}` : category.name;

        if (category.children.length > 0) {
            return (
                <SubMenu key={currentPath} title={category.name}>
                    {renderMenuItems(category.children, currentPath)}
                </SubMenu>
            );
        } else {
            return (
                <MenuItem key={currentPath}>
                    <Link to={currentPath}>
                        <span>{category.name}</span>
                    </Link>
                </MenuItem>
            );
        }
    });
};

const { Sider } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const AppSidebar = () => {
    const { categories } = useProductsContext();

    const categoryTree = buildCategoryTree(categories);
    return (
        <Sider className='bg-gray_1000 text-white py-5 px-2 rounded-tl-md' width={260}>
            <Menu theme='dark' mode='inline'>
                {renderMenuItems(categoryTree)}
            </Menu>
        </Sider>
    );
};

export default memo(AppSidebar);