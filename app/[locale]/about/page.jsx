"use client";
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.from("#trigger", {
      opacity: 0,
      y: 75,
      ease: "power1.in",
      duration: 1,
      stagger: 0.5,
    });
  }, []);
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

      <div className="bg-gray2 pt-10 pb-10" id="trigger">
        <div className="container flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold">Τι κάνουμε</h1>
            <div className="max-w-[600px]">
              <p className="pt-10 text-gray1/70 text-md">
                Στο κτηνιατρείο μας παρέχουμε υπεύθυνη, εξατομικευμένη φροντίδα
                σε κάθε κατοικίδιο, με{" "}
                <span className="text-blue1">σεβασμό</span>,{" "}
                <span className="text-blue1">αγάπη</span> και{" "}
                <span className="text-blue1">υψηλό επαγγελματισμό.</span>
                <br />
                <p className="pt-2">
                  Πιστεύουμε σε μια ουσιαστική σχέση εμπιστοσύνης με κάθε
                  ιδιοκτήτη, γιατί μόνο μέσα από συνεργασία μπορούμε να
                  προσφέρουμε στο ζώο σας τη φροντίδα που του αξίζει.
                </p>
                <br />
                Με θετική διάθεση και πάθος για τη δουλειά μας, είμαστε δίπλα
                σας σε κάθε βήμα – για να παραμένει το κατοικίδιό σας{" "}
                <span className="text-blue1">υγιες</span> και
                <span className="text-blue1">ευτυχισμένο.</span>
              </p>
            </div>
            {/* <ul className="list-disc pt-5 text-gray1/70 text-sm md:text-md space-y-2 ">
              <li> Την καλύτερη φροντιδα του κατοικιδίου σας.</li>
              <li> Την άμεση εξυπηρέτηση σας.</li>
              <li> Την ξεκάθαρη επικοινωνία μεταξύ γιατρού και ιδιοκτήτη.</li>
            </ul> */}
          </div>
          <div className="w-full md:w-1/2 mt-10" id="trigger">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md border-2 p-5 md:p-8 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
                  1. Ο Στόχος Μας.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 border-t-0 md:p-8 md:pt-2 border-slate-200 text-slate-500">
                  Να προσφέρουμε εξατομικευμένη κτηνιατρική φροντίδα υψηλού
                  επιπέδου, ώστε κάθε ζώο να απολαμβάνει υγεία, ευζωία και
                  ποιότητα ζωής, και κάθε ιδιοκτήτης να νιώθει υποστήριξη και
                  σιγουριά.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md border-2 p-5 md:p-8 border-b-0 border-slate-200 hover:text-blue1 transition-all ease-out duration-250 font-bold">
                  2. Οι Aξίες Μας.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 md:p-8 md:pt-2 border-t-0 border-slate-200 text-slate-500">
                  <ul className="list-disc space-y-2">
                    <li>Σεβασμός προς τα ζώα και τους κηδεμόνες τους</li>
                    <li>Ειλικρίνεια και ανοιχτή επικοινωνία</li>
                    <li>Επαγγελματισμός με συνεχή εκπαίδευση</li>
                    <li>
                      Ενσυναίσθηση, γιατί κάθε ζώο είναι μέλος μιας οικογένειας{" "}
                    </li>
                    <li>
                      Ομαδικότητα, γιατί η συνεργασία φέρνει καλύτερα
                      αποτελέσματα{" "}
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-md border-2 p-5 md:p-8 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
                  3. Η Δέσμευσή Μας.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 md:p-8 border-t-0 md:pt-2 border-slate-200 text-slate-500">
                  Δεσμευόμαστε να είμαστε πάντα δίπλα σας- με συνέπεια,
                  υπευθυνότητα και αγάπη- για να εξασφαλίσουμε την υγεία, την
                  ευημερία και την ευτυχία του αγαπημένου σας κατοικίδιου.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div
        className="container md:flex-row flex flex-col-reverse justify-center items-center pt-10 pb-10"
        id="trigger"
      >
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold pb-10 text-center md:text-start">
            Η Κτηνίατρος Λίνα Ακακιάδου
          </h1>
          <p className="text-md">
            Η Λίνα Ακακιάδου είναι κτηνίατρος, απόφοιτος της Κτηνιατρικής Σχολής
            του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης, όπου ολοκλήρωσε τις
            σπουδές της το 2010. Μετά την αποφοίτησή της, συνέχισε τις
            μεταπτυχιακές σπουδές της στο ΑΤΕΙ Θεσσαλονίκης.
          </p>
          <p className="text-md pt-4">
            Από το 2013 έως το 2020, εργάστηκε σε διάφορα κτηνιατρεία στη
            Θεσσαλονίκη, αποκτώντας πολύτιμη εμπειρία στη διάγνωση και θεραπεία
            παθήσεων, καθώς και στην καθημερινή φροντίδα των ζώων. Η αγάπη της
            για τα ζώα, την δημόσια υγεία, το συνάνθρωπο και τον τόπο που
            μεγάλωσε, την οδήγησαν να ανοίξει το δικό της ιατρείο μικρών ζώων το
            2022 στη Νέα Καρβάλη Καβάλας.
          </p>
          <p className="text-md pt-4">
            Η Λίνα Ακακιάδου είναι σύζυγος του στρατιωτικού κτηνιάτρου
            Κωνσταντίνου Ηλιόπουλου και μητέρα δυο παιδιών. Στο προσωπικό της
            και επαγγελματικό έργο, συνδυάζει την επιστημονική κατάρτιση με την
            αγάπη για τα ζώα και την προσήλωση στην ποιότητα των υπηρεσιών που
            προσφέρει στους αγαπημένους μας τετράποδους φίλους.
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

      <div className="bg-gray2 pt-10 pb-10" id="trigger">
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
