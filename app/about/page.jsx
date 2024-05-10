import MyButton from "@/components/MyButton";
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
          <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold">Τι κάνουμε</h1>
            <p className="pt-10 text-gray1/70 text-sm md:text-md">
              Το Κτηνιατρείο λειτουργεί με επαγγελματισμό και με γνώμονα:
            </p>
            <ul className="list-disc pt-5 text-gray1/70 text-sm md:text-md space-y-2 ">
              <li> Την καλύτερη φροντιδα του κατοικιδίου σας.</li>
              <li> Την άμεση εξυπηρέτηση σας.</li>
              <li> Την ξεκάθαρη επικοινωνία μεταξύ γιατρού και ιδιοκτήτη.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-10">
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

      <div className="container md:flex-row flex flex-col-reverse justify-center items-center pt-10 pb-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold pb-10 text-center md:text-start">
            Η Κτηνίατρος Λίνα Ακακιάδου
          </h1>
          <p className="text-md">
            <span className="text-red-500 font-bold">!!LINA BIO!!</span> Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Facere ad modi
            repellat, labore dolorem amet hic, accusamus fugit esse est a.
            Consequuntur quo amet magni tenetur obcaecati doloribus, et eos.
            Omnis, beatae delectus tempore cumque quaerat praesentium amet sed
            aperiam expedita temporibus placeat rerum error culpa magni
            blanditiis quis eos aliquid repudiandae, suscipit dolores, repellat
            itaque quas sint. Debitis, pariatur! Repellat qui reiciendis
            expedita velit similique ratione exercitationem atque explicabo, ad
            nemo rem blanditiis, omnis veniam, quis necessitatibus! Consectetur
            reiciendis asperiores dolores molestias itaque nisi explicabo
            consequatur id, harum pariatur? Consectetur voluptates labore soluta
            corporis. Possimus ad non porro laboriosam
          </p>
        </div>
        <div
          className="pt-10
          md:w-1/2
          flex justify-end
          pb-5
        "
        >
          <img src="doctor2.jpg" alt="lina-akakiadou" className="rounded-lg" />
        </div>
      </div>

      <div className="bg-gray2 pt-10 pb-10">
        <div className="container mx-auto w-[400px] lg:w-[600px]">
          <div className="flex flex-col justify-center items-center bg-gray1 text-slate-400 p-5">
            <p>
              Η συνεχιζόμενη επιστημονική κατάρτιση και το αίσθημα ευθύνης
              απέναντι στο ζώο και τον ιδιοκτήτη αποτελούν τους κύριους
              παράγοντες που διασφαλίζουν την ποιότητα των υπηρεσιών που παρέχει
              η κτηνίατρος Λίνα Ακακιάδου στο ιατρείο της στην Νέα Καρβάλη
              Καβάλας.
            </p>
            <div className="pt-4 flex justify-between items-start text-white w-full">
              <div>
                <h2>Δευτέρα </h2>
                <h2>Τρίτη </h2>
                <h2>Τετάρτη </h2>
                <h2>Πέμπτη</h2>
                <h2>Παρασκευή </h2>
                <h2>Σάββατο </h2>
                <h2>Κυριακή </h2>
              </div>
              <div>
                <h2>09:00-14:00 </h2>
                <h2>09:00-14:00 & 17:00-21:00</h2>
                <h2>09:00-14:00</h2>
                <h2>09:00-14:00 & 17:00-21:00</h2>
                <h2>09:00-14:00 & 17:00-21:00</h2>
                <h2>10:00-14:00</h2>
                <h2>ΚΛΕΙΣΤΑ</h2>
              </div>
            </div>
            <div className="pt-5 w-full">
              <MyButton
                href="/contact"
                title="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ"
                style="text-blue1 bg-white border border-white hover:bg-transparent
              hover:text-white w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
