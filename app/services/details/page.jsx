import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceDetails = () => {
  return (
    <section>
      <div className="top-[60px]">
        <img
          className="w-full h-[30vh] object-cover pt-12"
          src="/bg-services.jpg"
          alt="services-photo"
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
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/services"
                      className="hover:text-blue1 transition-all ease-in-out duration-200 font-bold text-xs md:text-sm"
                    >
                      Υπηρεσίες
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="font-bold" />
                  <BreadcrumbItem className="font-bold text-xs md:text-sm">
                    Αναλυτικά
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1
              className="text-white font-bold leading-1 text-2xl tracking-wider pb-4 max-w-[300px]
            md:text-4xl md:max-w-[500px] md:pb-10"
            >
              Υπηρεσίες
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-20 pb-10">
        <div className="flex flex-col justify-center items-center space-x-8">
          <div className="flex items-center justify-center space-x-8 pb-6">
            <ArrowRight className="text-blue1 w-[40px] h-[40px] hover:translate-x-4 transition-all ease-in-out duration-300" />
            <h2 className="text-2xl font-bold">
              Προληπτική ιατρική & Εμβολιασμοί
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[600px]">
            <p className="pb-4">
              ​Ένα από τα πλέον σημαντικά ζητήματα στην ιατρική των ζώων
              συντροφιάς είναι η προληπτική ιατρική. Ουσιαστικά με τον όρο αυτό
              περιγράφουμε όλες εκείνες τις ενέργειες που κάνουμε προκειμένου να
              διασφαλίσουμε ότι το κατοικίδιο θα λάβει την ιατρική φροντίδα που
              πρέπει πριν παρουσιάσει κάποιο πρόβλημα υγείας.
            </p>
            <p>
              ​Ξεχωριστό και ιδιαίτερο κομμάτι της προληπτικής ιατρικής αποτελεί
              το εμβολιακό πρόγραμμα για τα ζώα συντροφιάς. Το ιατρείο ακολουθει
              πίστα τις διεθνείς κατευθύνσεις περί εμβολιασμού, προσαρμόζοντας
              το εμβολιακό πρόγραμμα στις ανάγκες και τις ιδιαιτερότητες του
              κάθε ασθενούς,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
