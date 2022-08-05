import React from 'react';
import Image from 'next/image';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import building from '@assets/images/construction.svg';

const FeaturesSect = () => {
  return (
    <section className="inline-flex px-10 py-4 flex-col top-20 justify-self-center custom-container">
      <h2 className="text-4xl text-indigo-50 font-bold">Desarrollos</h2>
      <div className="flex pt-4">
        <div className="flex items-center px-12">
          <Image src={building} alt="qr" width="350" height="350" layout="intrinsic" />
        </div>
        <div className="flex flex-col px-12">
          <div>
            <button type="">
              <ChevronDoubleRightIcon className="h-12 w-12 text-indigo-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSect;
