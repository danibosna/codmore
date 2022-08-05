import React from 'react';
import Image from 'next/image';

const Service = ({ titulo, src, alt, info }) => {
  return (
    <div className="custom-card p-0 w-80 mb-8">
      <figure className="m-0 p-0">
        <Image src={src} alt={alt} sizes="30vw" layout="responsive" />
      </figure>
      <div className="p-4 flex flex-col">
        <h3 className="mx-0 mb-6 font-bold text-indigo-50 text-base">{titulo}</h3>
        <div className="inline-flex flex-col justify-self-end">
          <p className="font-normal text-indigo-50 text-sm pb-4">{info}</p>
          <button className="text-indigo-700 text-lg font-semibold border-indigo-800 custom-button">Info.</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
