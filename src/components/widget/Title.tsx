import React from 'react';

interface ITitle {
    title: string, 
    subtitle: string, 
    extraText?: string
}

const Title: React.FC<ITitle> = ({ title, subtitle, extraText }) => {
  return (
    <div className="p-6 flex flex-col justify-center items-center text-center">
      <h2 className="bg-indigo-600 -skew-x-6 px-5 text-white">{subtitle}</h2>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-700">{title}</h1>
      {extraText && (
        <p className="text-lg text-gray-300 mt-4 italic">{extraText}</p>
      )}
    </div>
  );
};

export default Title;
