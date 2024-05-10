import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const About = () => {
  return (
    <section>
      <div className="top-[60px]">
        <img
          className="w-full h-[30vh] object-cover pt-12"
          src="bg-about.jpg"
          alt="about-photo"
        />
        <div className="absolute justify-center items-center flex flex-col top-[100px] w-full h-[40vh]">
          <div className="container">
            <div className="flex pb-6">
              <Breadcrumb className="flex items-center justify-center">
                <BreadcrumbList className="text-white">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="hover:text-blue1 transition-all ease-in-out duration-200 font-bold text-xs md:text-sm"
                    >
                      Αρχική
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="font-bold" />
                  <BreadcrumbItem className="font-bold text-xs md:text-sm">
                    Σχετικά με Εμάς
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1
              className="text-white font-bold leading-1 text-2xl tracking-wider pb-4 max-w-[300px]
            md:text-4xl md:max-w-[500px] md:pb-10"
            >
              Σχετικά με Εμάς
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray2 pt-10 pb-10">
        <div className="container flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col items-start justify-center w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold">Τι κάνουμε</h1>
            <p className="pt-10 text-gray1/70 text-sm md:text-md">
              Το Κτηνιατρείο λειτουργεί με επαγγελματισμό και με γνώμονα:
            </p>
            <ul className="list-disc pt-5 text-gray1/70 text-sm md:text-md space-y-2 ">
              <li> Την καλύτερη φροντιδα του κατοικιδίου σας.</li>
              <li> Την άμεση εξυπηρέτηση σας.</li>
              <li> Την ξεκάθαρη επικοινωνία μεταξύ γιατρού και ιδιοκτήτη.</li>
            </ul>
          </div>
          <div className="w-1/2 mt-10">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md border-2 p-5 md:p-8 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
                  1. Ο Στόχος Μας.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 border-t-0 md:p-8 md:pt-2 border-slate-200 text-slate-500">
                  Ενδυνάμωση της υγείας και της ευτυχίας των κατοικιδίων με
                  αγάπη και επαγγελματισμό.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md border-2 p-5 md:p-8 border-b-0 border-slate-200 hover:text-blue1 transition-all ease-out duration-250 font-bold">
                  2. Οι Aξίες Μας.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 md:p-8 md:pt-2 border-t-0 border-slate-200 text-slate-500">
                  Συμπόνια, εμπειρία, ακεραιότητα: οδηγοί για εξαιρετική
                  ιατρική. φροντίδα.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-md border-2 p-5 md:p-8 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
                  3. Η Δέσμευσή Μας.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 md:p-8 border-t-0 md:pt-2 border-slate-200 text-slate-500">
                  Αριστεία στη φροντίδα, διαφάνεια στην επικοινωνία και ακλόνητη
                  υποστήριξη προς τον πελάτη.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
