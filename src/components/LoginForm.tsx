import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, message } from 'antd';

import { Credentials } from '../types/user.interface';
import { useAuthContext } from '../context/AuthProvider';
import { user_data } from '../utils/constants';

const Title = Typography.Title;
const FormItem = Form.Item;
const InputPassword = Input.Password;

const LoginForm = () => {
    const [displayMessage, displayMessageContext] = message.useMessage();
    const { userLogin } = useAuthContext();
    const navigate = useNavigate();

    const onSubmitLogin = async (credentials: Credentials) => {
        try {
            await userLogin(credentials);
            navigate('/products', { replace: true });
        } catch (error: any) {
            displayMessage.open({
                type: 'error',
                content: 'Sorry! Email Or Password Invalid'
            });
        }
    };

    return (
        <Fragment>
            {displayMessageContext}
            <Title level={2}>Login</Title>
            <Form
                layout='vertical'
                onFinish={onSubmitLogin}
                initialValues={{ email: user_data.email, password: user_data.password }}
            >
                <FormItem
                    className='mb-4'
                    label='Username'
                    name='email'
                    rules={[{ required: true, message: 'Please enter username' }]}
                >
                    <Input className='py-2' />
                </FormItem>
                <FormItem
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please enter password' }]}
                >
                    <InputPassword className='py-2' />
                </FormItem>
                <FormItem>
                    <Button className='w-full rounded-md py-5 shadow-none hover:shadow-none' type='primary' htmlType='submit'>Login</Button>
                </FormItem>
            </Form>
        </Fragment>
    );
};

export default LoginForm;