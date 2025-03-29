"use client";
import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Questions = () => {
  const scrollref = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollref.current.children);

    boxes.forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        y: 75,
        duration: 1,
        scrollTrigger: {
          trigger: box,
          start: "bottom, bottom",
        },
        ease: "power1.in",
      });
    });
  }, []);
  return (
    <section className="pt-10 pb-10 bg-gray2">
      <div className="container" ref={scrollref}>
        <div className="mb-4">
          <h1 className="font-bold text-center text-2xl lg:text-4xl pb-4 tracking-wider">
            ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ
          </h1>
        </div>
        <Accordion
          type="single"
          collapsible
          className="md:w-2/3 mx-auto w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Είναι υποχρεωτικός ο εμβολιασμός των ζώων;
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Ναι, ο εμβολιασμός είναι απαραίτητος για την προστασία των
              κατοικίδιων από σοβαρές ασθένειες. Συνιστάται να ακολουθείτε το
              πρόγραμμα εμβολιασμού που προτείνει ο κτηνίατρός σας.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200 hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Κάθε πότε πρέπει να επισκέπτομαι τον κτηνίατρο για έλεγχο υγείας
              του κατοικίδιου μου;
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Συνιστάται ένας γενικός έλεγχος υγείας τουλάχιστον μία φορά το
              χρόνο. Για νεαρά ή ηλικιωμένα ζώα, ή για ζώα με υπάρχουσες
              παθήσεις, οι επισκέψεις μπορεί να χρειάζεται να είναι πιο συχνές.​
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Τι πρέπει να κάνω σε περίπτωση έκτακτης ανάγκης με το κατοικίδιό
              μου;
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Σε περίπτωση έκτακτης ανάγκης, επικοινωνήστε άμεσα με το
              κτηνιατρείο μας στο τηλέφωνο 2510 317262 για να λάβετε οδηγίες και
              να προγραμματίσουμε την άμεση φροντίδα του ζώου σας.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Ποιες υπηρεσίες προσφέρετε στο κτηνιατρείο σας;
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Παρέχουμε μια σειρά υπηρεσιών, όπως εμβολιασμούς,
              αποπαρασιτώσεις, διαγνωστικές εξετάσεις, μικροχειρουργικές
              επεμβάσεις, τοποθέτηση microchip και συμβουλευτική για τη φροντίδα
              των κατοικίδιων.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Πώς μπορώ να προγραμματίσω ένα ραντεβού;
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Μπορείτε να προγραμματίσετε ένα ραντεβού καλώντας μας στο 2510
              317262 ή στέλνοντας email στο{" "}
              <Link
                href="mailto:lakakiad@gmail.com"
                className="underline text-blue-400"
                target="blank"
              >
                lakakiad@gmail.com
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-md border-2 p-2 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
              Προσφέρετε υπηρεσίες καλλωπισμού για τα κατοικίδια;
            </AccordionTrigger>
            <AccordionContent className="border-2 p-4 border-t-0 border-slate-200 text-slate-500">
              - Ναι, παρέχουμε υπηρεσίες καλλωπισμού, όπως μπάνιο, κούρεμα και
              περιποίηση νυχιών, για να διατηρείται το κατοικίδιό σας καθαρό και
              υγιές.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
