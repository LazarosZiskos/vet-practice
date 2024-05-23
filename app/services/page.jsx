"use client";
import Service from "@/components/Service";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { services } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  useGSAP(() => {
    gsap.from("#div2", {
      opacity: 0,
      y: 75,
      ease: "power1.in",
      duration: 1,
      stagger: 0.3,
    });
  }, []);
  return (
    <section>
      <div className="top-[60px]">
        <img
          className="w-full h-[30vh] object-cover pt-12"
          src="bg-services.jpg"
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
                  <BreadcrumbItem className="font-bold text-xs md:text-sm">
                    Υπηρεσίες
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

      <div className="container pt-10 pb-10" id="div2">
        <div>
          <h2 className="text-center mx-auto text-slate-400 text-sm md:text-md lg:w-[1000px]">
            Οι υπηρεσίες που παρέχονται στο κτηνιατρείο που διατηρεί στην Νέα
            Καρβάλη Καβάλας η κτηνίατρος Λίνα Ακακιάδου διακρίνονται για το
            υψηλό τους επίπεδο και παρέχονται με ευθύνη και ευαισθησία απέναντι
            στο κατοικίδιό σας. Πιο αναλυτικά, στις υπηρεσίες που προσφέρουμε
            στους μικρούς μας φίλους συμπεριλαμβάνονται οι παρακάτω:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center pt-20">
          {services.map((service, index) => (
            <Service
              title={service.title}
              subtitle={service.subtitle}
              icon={service.icon}
              key={index}
              id="div2"
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
