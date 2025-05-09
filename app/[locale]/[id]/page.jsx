"use client";
import { services } from "@/constants";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { notFound } from "next/navigation";

const ServicePage = ({ params }) => {
  const { id } = params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  useGSAP(() => {
    gsap.from("#service-content", {
      opacity: 0,
      y: 75,
      ease: "power1.in",
      duration: 1,
    });
  }, []);

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
                    {service.title}
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1
              className="text-white font-bold leading-1 text-2xl tracking-wider pb-4 max-w-[300px]
            md:text-4xl md:max-w-[500px] md:pb-10"
            >
              {service.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container pt-10 pb-10" id="service-content">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-blue1 text-6xl">{service.icon}</div>
          <p className="text-center text-slate-400 text-lg max-w-[800px]">
            {service.subtitle2}
          </p>
          <div className="w-full max-w-[800px] bg-slate-100 p-8 rounded-lg">
            {/* <h2 className="text-2xl font-bold mb-4">Σχετικά με την Υπηρεσία</h2> */}
            <p className="text-slate-600 p-4">{service.para1}</p>
            <p className="text-slate-600 p-4">{service.para2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
