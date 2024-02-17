import React from "react";
import { AboutUsAccordion } from "./about-us-accordion";

const Heading = () => {
  return (
    <>
      <section className="flex h-screen w-full flex-col items-center justify-end">
        <div className="custom-container mb-14 inline-flex w-4/5 flex-col items-center px-8 py-4 md:w-2/4 lg:w-2/5">
          <div className="mb-2 flex flex-col items-center text-slate-50">
            <h1 className="text-center text-4xl font-bold">Web3 & Metaverso</h1>
            <p className="text-lg font-thin italic ">
              <strong> Conecta </strong> con tu comunidad y ofrece{" "}
              <strong> Interfaces y Experiencias Memorables</strong> en la Web.
            </p>
          </div>
          <AboutUsAccordion />
          {/* <WalletData /> */}
        </div>
      </section>
    </>
  );
};

export default Heading;
