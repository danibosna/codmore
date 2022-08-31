import React from 'react';
import Service from './Service';
import services from '@assets/images/Services.webp';
import services1 from '@assets/images/Services1.webp';
import services2 from '@assets/images/Services2.webp';
import services3 from '@assets/images/Services3.webp';
import services4 from '@assets/images/Services4.webp';

const ServicesSect = () => {
  return (
    <section className="absolute top-32 h-4/5 md:w-4/5 md:right-0 hid-scroll overflow-auto">
      <h2 className="text-4xl text-slate-700 shadow-xl shadow-slate-50 font-bold text-center bg-white backdrop-blur-md">Servicios</h2>
      <div className="pt-8">
        <div className="inline-flex justify-around flex-wrap">
          <Service
            id="0"
            titulo="Solid Web Project"
            src={services}
            alt={'test'}
            info="Crea una marca más sólida y de impacto ofreciendo un perfil detallado de tu mision y vision como referente de la industria ante tu Comunidad."
          />
          <Service
            id="4"
            titulo="Diamond Tech Services"
            src={services4}
            alt={'test'}
            info="Saca el Máximo Potencial de tu idea y hazla brillar dentro de la industria con un sistema personalizado y a medida para todas las necesidades de tu marca."
          />
          <Service
            id="1"
            titulo="Avanced Web Project"
            src={services1}
            alt={'test'}
            info="Conoce más sobre tus colaboradores y socios de negocios integrando una base de datos con la información más relevante sobre la lógica de tu negocio"
          />
          <Service
            id="3"
            titulo="Simple Web Project"
            src={services3}
            alt={'test'}
            info="Obtén un primer acercamiento calculado y preciso de tu Oferta de Valor hacia los potenciales integrantes nuevos de tu comunidad."
          />
          <Service
            id="2"
            titulo="Cloud Services & Analytics"
            src={services2}
            alt={'test'}
            info="Obtén un servicio avanzado y personalizado para la administración y el manejo de los datos de tu empresa en la nube."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSect;
