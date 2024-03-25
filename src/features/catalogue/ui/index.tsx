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
              titulo="Desarrollo de DApps"
              src={services}
              alt={"test"}
              info="Creación de aplicaciones descentralizadas (DApps) personalizadas para diversos casos de uso en la blockchain, como finanzas descentralizadas (DeFi), NFTs, juegos y más."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="4"
              titulo="Integración 3D y Metaversos"
              src={services4}
              alt={"test"}
              info="Diseño y desarrollo de entornos virtuales y experiencias 3D inmersivas para metaversos y aplicaciones en el espacio Web3."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="1"
              titulo="Auditorías de Smart Contracts"
              src={services1}
              alt={"test"}
              info="Evaluación exhaustiva de la seguridad de la blockchain y auditorías especializadas de contratos inteligentes para identificar y mitigar vulnerabilidades."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="3"
              titulo="Tokenización de Activos y Desarrollo de NFTs"
              src={services3}
              alt={"test"}
              info="Creación de tokens y desarrollo de NFTs (Tokens No Fungibles) para la representación y comercialización de activos digitales únicos."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="2"
              titulo="Plataformas de Mercados Descentralizados"
              src={services2}
              alt={"test"}
              info="Construcción de plataformas de intercambio de criptomonedas y mercados descentralizados (DEX) para facilitar el comercio seguro y transparente de activos digitales."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="6"
              titulo="Consultoría en Blockchain"
              src={services2}
              alt={"test"}
              info="Asesoramiento y estrategias de adopción empresarial para ayudar a las organizaciones a integrar y aprovechar esta tecnología."
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ServiceCard
              id="5"
              titulo="Web3 SEO"
              src={services2}
              alt={"test"}
              info="Estrategias especializadas para mejorar la visibilidad y el posicionamiento de proyectos y aplicaciones en el ecosistema Web3, aumentando su alcance y relevancia."
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
