import React from 'react';
import Image from 'next/image';
import building from '@assets/images/construction.svg';

const DevSect = () => {
  return (
    <section className="w-full h-screen flex-col items-center justify-center hidden">
      <div className="inline-flex w-4/5 px-10 py-4 flex-col top-1/4 md:w-2/3 justify-self-center custom-container">
        <h2 className="flex-1 text-4xl text-slate-50 font-bold">Desarrollos</h2>
        <div className="flex-2 pt-4 justify-self-center">
          <div className="flex items-center justify-center">
            <Image src={building} alt="qr" width="350" height="350" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevSect;
