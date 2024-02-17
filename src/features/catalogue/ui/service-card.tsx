import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  id: string | number;
  titulo: string;
  src: StaticImageData;
  alt: string;
  info: string;
}

export const ServiceCard = ({ titulo, src, alt, info }: Props) => {
  return (
    <div className="custom-card w-1/2">
      <figure className="m-0 p-0">
        <Image src={src} alt={alt} width={350} height={350} />
      </figure>
      <div className="p-4 flex flex-col">
        <h3 className="mx-0 mb-6 text-slate-50 font-bold text-base">{titulo}</h3>
        <div className="inline-flex flex-col justify-self-end">
          <p className="font-normal text-slate-50 text-sm pb-4">{info}</p>
          <button className="text-slate-50 text-lg font-semibold border-slate-50 custom-button">Info.</button>
        </div>
      </div>
    </div>
  );
};
