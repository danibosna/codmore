import React from 'react';

const Heading = () => {
  return (
    <>
      <section className="px-8 py-4 inline-flex flex-col custom-container w-4/5 md:w-2/4 lg:w-2/5 bottom-12 right-10 md:right-20">
        <div className="text-purple-50 mb-2 flex flex-col items-center">
          <h1 className="text-center font-bold text-4xl">Web3 & Metaverso</h1>
          <p className="text-lg font-thin italic ">
            <strong> Conecta </strong> con tu comunidad y ofrece <strong> Interfaces y Experiencias Memorables</strong> en la Web.
          </p>
        </div>
        <button className="text-indigo-700 text-2xl font-bold border-indigo-800 custom-button">Ver Más</button>
      </section>
    </>
  );
};

export default Heading;
