import { memo } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className='flex items-center'>
            <div className='container flex justify-center'>
                <span className='text-xs text-gray_800 text-center italic'>Copyright &copy; 2025 home24</span>
            </div>
        </Footer>
    );
};

export default memo(AppFooter);