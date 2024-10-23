import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='mx-auto max-w-screen-2xl px-5'>
            {children}
        </div>
    );
};

export default Container;