import React from 'react';
import bannerImage from "../../src/assets/banner-image.jpg"
import whyChoseUsImg from "../../src/assets/pexels-trace-707046.jpg"
import Container from '@/components/widget/Container';
import Title from '@/components/widget/Title';
import ChooseUsSection from '@/components/sections/ChooseUsSection';

const Home: React.FC = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${bannerImage})` }}
                className='h-96 bg-cover bg-no-repeat'>
            </div>

            {/* why chose us section */}
            <section>
                <Container>
                    <Title
                        title="Your needs are recognized right away."
                        subtitle="Why Choose Us"
                    />
                    <div className='grid md:grid-cols-2 justify-center items-center gap-10'>
                        <img className='' src={whyChoseUsImg} alt='why-choose-us' />

                        <ChooseUsSection />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;