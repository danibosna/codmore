import WalletData from '@common/WalletData';
import React from 'react';

const Heading = () => {
  return (
    <>
      <section className="w-full h-screen flex flex-col items-center justify-end">
        <div className="mb-14 px-8 py-4 inline-flex flex-col items-center custom-container w-4/5 md:w-2/4 lg:w-2/5">
          <div className="text-slate-50 mb-2 flex flex-col items-center">
            <h1 className="text-center font-bold text-4xl">Web3 & Metaverso</h1>
            <p className="text-lg font-thin italic ">
              <strong> Conecta </strong> con tu comunidad y ofrece <strong> Interfaces y Experiencias Memorables</strong> en la Web.
            </p>
          </div>
          <WalletData />
        </div>
      </section>
    </>
  );
};

export default Heading;
