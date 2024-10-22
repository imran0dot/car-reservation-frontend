import LoginForm from '@/components/forms/auth/login-form';
import React from 'react';

const Login: React.FC = () => {
    return (
        <div className='flex flex-col justify-start items-center'>
            <LoginForm />
        </div>
    );
};

export default Login;