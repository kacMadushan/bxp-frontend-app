import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import AppFooter from './AppFooter';

const { Content } = Layout;

const AppLayout = () => {
    return (
        <Layout>
            <AppHeader />
            <div className='container py-5'>
                <Layout className='min-h-[780px] rounded-md'>
                    <AppSidebar />
                    <Content className='bg-white rounded-tr-md'>
                        <Outlet />
                    </Content>
                </Layout>
            </div>
            <AppFooter />
        </Layout>
    );
};

export default AppLayout;