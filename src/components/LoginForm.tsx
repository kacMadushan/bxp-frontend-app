import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, message } from 'antd';

import { ICredentials } from '../types/user.interface';
import { useAuthContext } from '../context/AuthProvider';

const Title = Typography.Title;
const FormItem = Form.Item;
const InputPassword = Input.Password;

const LoginForm = () => {
    const [displayMessage, displayMessageContext] = message.useMessage();
    const { userLogin } = useAuthContext();
    const navigate = useNavigate();

    const onSubmitLogin = async (credentials: ICredentials) => {
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
            <Form layout='vertical' onFinish={onSubmitLogin}>
                <FormItem
                    label='Username'
                    name='email'
                    rules={[{ required: true, message: 'Please enter username' }]}
                >
                    <Input />
                </FormItem>
                <FormItem
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please enter password' }]}
                >
                    <InputPassword />
                </FormItem>
                <FormItem>
                    <Button className='w-full rounded-md py-5 shadow-none hover:shadow-none' type='primary' htmlType='submit'>Login</Button>
                </FormItem>
            </Form>
        </Fragment>
    );
};

export default LoginForm;