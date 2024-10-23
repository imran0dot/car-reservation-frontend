import React from 'react';

interface ITitle {
  title: string,
  subtitle?: string,
  batch?: string
}

const Title: React.FC<ITitle> = ({ title, batch, subtitle }) => {
  return (
    <div className="p-6 flex flex-col justify-center items-center text-center">
      <h2 className="bg-indigo-600 -skew-x-6 px-5 text-white">{batch}</h2>
      <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
      {subtitle && (
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default Title;
