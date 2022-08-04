import React from 'react';

const Heading = () => {
  return (
    <>
      <section className="px-8 py-4 inline-flex flex-col custom-container w-1/4 bottom-12 right-20">
        <div className="text-purple-50 mb-2 flex flex-col items-center">
          <h1 className="text-center font-bold text-4xl">{'{ Codmore }'}</h1>
          <p className="text-lg font-thin italic ">
            The Most Beautyfull <strong>Users Interface and Experiences</strong> on Web.
          </p>
        </div>
        <button className="text-indigo-700 text-2xl font-bold border-indigo-800 custom-button">See All</button>
      </section>
    </>
  );
};

export default Heading;
