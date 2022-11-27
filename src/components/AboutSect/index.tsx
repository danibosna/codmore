import React from 'react';
import Image from 'next/image';
import building from '@assets/images/construction.svg';

const AboutSect = () => {
  return (
    <>
      <section className="p-0 inline-flex flex-col custom-container md:w-4/6 bottom-12 justify-self-center w-2/3 md:right-10 md:flex-row ">
        <div className="flex flex-col items-center justify-between px-4 text-center">
          <h2 className="my-4 text-2xl text-slate-50 font-bold">Tu Inicio en la Tecnologia BlockChain</h2>
          <h3 className="my-4 text-2xl text-slate-50 font-bold">En Construcción</h3>
          <button className="my-4 py-2 px-4 text-slate-400 text-2xl font-bold border-blue-400 custom-button">Ver Más</button>
        </div>
        <div className="flex flex-col items-center justify-between px-4 text-center">
          <Image src={building} alt="qr" width="350" height="350" priority />
        </div>
      </section>
    </>
  );
};

export default AboutSect;
