import RegistrationForm from '@/components/forms/auth/registration-form';
import React from 'react';
import RegisterBanner from "../../assets/pexels-mikebirdy-120049.jpg"
import Heading from '@/components/shared/Heading';

const Registration: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Heading
                title='Registration'
                bannerImage={RegisterBanner} />
                <RegistrationForm />
        </div>
    );
};

export default Registration;