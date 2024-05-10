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
        <Accordion type="single" collapsible className="w-2/3 mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Είναι υποχρεωτικός ο εμβολιασμός των ζώων?
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Ε μάλλον
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200 hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Κάθε πότε πρέπει να επισκέπτομαι τον κτηνιατρό για Check up?
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Όσο πιο συχνά μπορείς! Καλό κάνει...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Έχεις λαγο?
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Έχω λαγό
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Έχει πόδια?
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Έχω λαγό
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Έχεις λαγό?
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Έχω λαγό
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
