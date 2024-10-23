import React from 'react';

const Heading: React.FC<{bannerImage: string, title: string}> = ({bannerImage, title}) => {
    return (
        
        <div 
        className='bg-cover bg-center bg-no-repeat h-72 w-full relative'
        style={{backgroundImage: `url(${bannerImage})`}}>
            <div className='bg-gray-800 bg-opacity-45 backdrop-blur-sm absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
                <h1 className='text-white text-4xl font-extrabold'>
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Heading;