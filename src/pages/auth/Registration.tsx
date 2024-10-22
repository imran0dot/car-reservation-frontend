import RegistrationForm from '@/components/forms/auth/registration-form';
import React from 'react';

const Registration: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <RegistrationForm />
        </div>
    );
};

export default Registration;