import LoginForm from '@/components/forms/auth/login-form';
import React from 'react';
import loginBanner from "../../assets/pexels-mikebirdy-170811.jpg"
import Heading from '@/components/shared/Heading';
const Login: React.FC = () => {
    return (
        <div className='flex flex-col justify-start items-center'>
            <Heading
                title='Login'
                bannerImage={loginBanner} />

            <div className='w-11/12 md:w-[500px] mx-auto my-10'>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;