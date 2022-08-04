import React from 'react';
import bg from '@assets/images/LogoCodMoreHDW.webp';
import Image from 'next/image';

const AboutSect = () => {
  return (
    <>
      <section className="pb-4 px-0 inline-flex flex-col custom-container left-2/3 w-1/4 h-4/5 top-16">
        <div className="justify-center flex m-0 p-0">
          <Image src={bg} alt="bg" height="200" layout="fixed" />
        </div>
        <div className="flex flex-col items-center px-4 text-center hid-scroll overlay">
          <h2 className="text-2xl text-indigo-50 font-bold">Adadtamos Tecnologia a tus Necesidades</h2>
          <p className="text-center text-indigo-50">
            Somos una empresa dedicada al desarrollo y posicionamiento de nuestros socios en el entorno de la industria tecnológica. A nivel profesional buscamos crecer en conjunto con nuestros
            clientes para impulsar e incrementar positivamente las Analíticas de los Procesos Internos de su Industria y permitiendo así ofrecer estadísticas rápidas y precisas para la toma de
            decisiones y cumplir con los objetivos propuestos, implementando Metodologías Modernas para eficientizar los procesos en distintos mercados y estar así a la vanguardia en una industria con
            un crecimiento acelerado.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSect;
