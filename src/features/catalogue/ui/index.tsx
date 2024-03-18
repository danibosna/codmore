"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ServiceCard } from "./service-card";
import services from "./assets/images/Services.webp";
import services1 from "./assets/images/Services1.webp";
import services2 from "./assets/images/Services2.webp";
import services3 from "./assets/images/Services3.webp";
import services4 from "./assets/images/Services4.webp";

const Catalogue = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <h2 className="hidden">Servicios</h2>
      <Carousel
      className="w-full h-full flex flex-col justify-center fixed md:w-1/2"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="0"
              titulo="Solid Web Project"
              src={services}
              alt={"test"}
              info="Crea una marca más sólida y de impacto ofreciendo un perfil detallado de tu mision y vision como referente de la industria ante tu Comunidad."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="4"
              titulo="Diamond Tech Services"
              src={services4}
              alt={"test"}
              info="Saca el Máximo Potencial de tu idea y hazla brillar dentro de la industria con un sistema personalizado y a medida para todas las necesidades de tu marca."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="1"
              titulo="Avanced Web Project"
              src={services1}
              alt={"test"}
              info="Conoce más sobre tus colaboradores y socios de negocios integrando una base de datos con la información más relevante sobre la lógica de tu negocio"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="3"
              titulo="Simple Web Project"
              src={services3}
              alt={"test"}
              info="Obtén un primer acercamiento calculado y preciso de tu Oferta de Valor hacia los potenciales integrantes nuevos de tu comunidad."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="2"
              titulo="Cloud Services & Analytics"
              src={services2}
              alt={"test"}
              info="Obtén un servicio avanzado y personalizado para la administración y el manejo de los datos de tu empresa en la nube."
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Catalogue;
