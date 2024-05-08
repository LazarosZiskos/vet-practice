import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  return (
    <section className="pt-20 pb-10 bg-gray2">
      <div className="container">
        <div className="mb-4">
          <h1 className="font-bold text-center text-2xl lg:text-4xl pb-4 tracking-wider">
            ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ
          </h1>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-blue1 text-md">
              Είναι υποχρεωτικός ο εμβολιασμός των ζώων?
            </AccordionTrigger>
            <AccordionContent>Ε μάλλον</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-blue1 text-md">
              Κάθε πότε πρέπει να επισκέπτομαι τον κτηνιατρό για Check up?
            </AccordionTrigger>
            <AccordionContent>
              Όσο πιο συχνά μπορείς! Καλό κάνει...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-blue1 text-md">
              Έχεις λαγο?
            </AccordionTrigger>
            <AccordionContent>Έχω λαγό</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-blue1 text-md">
              Έχει πόδια?
            </AccordionTrigger>
            <AccordionContent>Έχω λαγό</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-blue1 text-md">
              Έχεις λαγό?
            </AccordionTrigger>
            <AccordionContent>Έχω λαγό</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
