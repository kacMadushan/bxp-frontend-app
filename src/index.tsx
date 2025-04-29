import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import { AuthProvider } from './context/AuthProvider';
import { ProductsProvider } from './context/ProductsProvider';
import { defaultTheme } from './utils/theme';

import App from './App';
import './styles/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
    <AuthProvider>
        <ProductsProvider>
            <ConfigProvider theme={defaultTheme}>
                <Router>
                    <App />
                </Router>
            </ConfigProvider>
        </ProductsProvider>
    </AuthProvider>
);