import React from 'react';
import bannerImage from "../../src/assets/banner-image.jpg"
import whyChoseUsImg from "../../src/assets/pexels-trace-707046.jpg"
import Container from '@/components/widget/Container';
import Title from '@/components/widget/Title';
import ChooseUsSection from '@/components/sections/ChooseUsSection';
import ContactInformation from '@/components/sections/Contact';
import CarList from '@/components/sections/CarList';

const Home: React.FC = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${bannerImage})` }}
                className='h-96 bg-cover bg-no-repeat'>
            </div>


            {/* Popular Rental Cars */}
            <section className='my-20'>
                <Container>
                    <Title
                        title="Our Popular Rental cars"
                        batch="Rental Cars"
                    />
                    <CarList />
                </Container>
            </section>

            {/* why chose us section */}
            <section className='my-20'>
                <Container>
                    <Title
                        title="Your needs are recognized right away."
                        batch="Why Choose Us"
                    />
                    <div className='grid md:grid-cols-2 justify-center items-center gap-10'>
                        <img className='' src={whyChoseUsImg} alt='why-choose-us' />

                        <ChooseUsSection />
                    </div>
                </Container>
            </section>




            {/* Contact us section  */}
            <ContactInformation />
        </>
    );
};

export default Home;