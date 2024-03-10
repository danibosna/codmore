import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export const AboutUsAccordion = () => {
  return (
<Accordion className="w-full" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-white">Refinando la Experiencia Web</AccordionTrigger>
    <AccordionContent className="text-white">
      Colaboramos estrechamente con nuestros clientes en la industria blockchain, impulsando sus operaciones con análisis avanzados y soluciones innovadoras. Destacamos al liderar la evolución del sector, ofreciendo transparencia, seguridad y eficiencia. Descubre cómo trabajar juntos para llevar tu visión al siguiente nivel en esta revolucionaria tecnología.
    </AccordionContent>
  </AccordionItem>
</Accordion>
  );
}
