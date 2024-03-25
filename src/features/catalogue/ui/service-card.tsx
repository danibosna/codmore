import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  id: string | number;
  titulo: string;
  src: StaticImageData;
  alt: string;
  info: string;
}

export const ServiceCard = ({ titulo, src, alt, info }: Props) => {
  return (
    <div className="custom-card h-[450px] w-5/6 sm:w-1/2 md:w-3/4 lg:w-1/2">
      <Image className='w-full h-1/2 object-cover' src={src} alt={alt} width={200} />
      <div className="p-2 flex flex-col h-1/2 justify-between">
        <div className="inline-flex flex-col justify-self-end p-2">
          <h3 className="mx-0 mb-2 text-slate-50 font-bold text-base">{titulo}</h3>
          <p className="font-normal text-slate-50 text-sm pb-2">{info}</p>
        </div>
        <Link href={'https://wa.me/523313585910'} className="text-slate-50 text-lg font-semibold border-slate-50 custom-button">Info.</Link>
      </div>
    </div>
  );
};
