import { memo } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

import { useProductsContext } from '../context/ProductsProvider';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Electronics',
        children: [
            {
                key: '2',
                label: 'Computers',
                children: [
                    {
                        key: '3',
                        label: 'Laptops'
                    },
                    {
                        key: '4',
                        label: 'Desktop'
                    }
                ]
            },
            {
                key: '5',
                label: 'Mobile & Tablets',
                children: [
                    {
                        key: '6',
                        label: 'Smartphones'
                    },
                    {
                        key: '7',
                        label: 'Tablets'
                    }
                ]
            }
        ]
    }
]

const { Sider } = Layout;


const AppSidebar = () => {
    const { handleChangeActiveCategory } = useProductsContext();

    const onClick: MenuProps['onClick'] = (e) => {
        const key = Number(e.key)
        handleChangeActiveCategory(key);
    };

    return (
        <Sider className='bg-gray_1000 text-white py-5 px-2 rounded-tl-md' width={260}>
            <Menu
                theme='dark'
                mode='inline'
                onClick={onClick}
                items={items}
            />
        </Sider>
    );
};

export default memo(AppSidebar);