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

            <div className='w-11/12 md:w-[500px] mx-auto my-10'>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default Registration;