import React from 'react';
import bannerImage from "../../src/assets/banner-image.jpg"

const Home: React.FC = () => {
    console.log(bannerImage)
    return (
        <div 
        style={{backgroundImage: `url(${bannerImage})`}} 
        className='h-96 bg-cover bg-no-repeat'
        >
        </div>
    );
};

export default Home;