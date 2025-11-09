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
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";

const Services = () => {
  const { locale } = useParams();
  useGSAP(() => {
    gsap.from("#div2", {
      opacity: 0,
      y: 75,
      ease: "power1.in",
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  const { t } = useTranslation("Servicepage");

  return (
    <section>
      <div className="top-[60px]">
        <img
          className="w-full h-[30vh] object-center pt-12"
          src="/bg-about.jpg"
          alt="about page background photo"
          fetchPriority="high"
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
                      {t("breadcrumb1")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="font-bold" />
                  <BreadcrumbItem className="font-bold text-xs md:text-sm">
                    {t("servicepage-title")}
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1
              className="text-white font-bold leading-1 text-2xl tracking-wider pb-4 max-w-[300px]
            md:text-4xl md:max-w-[500px] md:pb-10"
            >
              {t("servicepage-title")}
            </h1>
          </div>
        </div>
      </div>

      <div className="container pt-10 pb-10" id="div2">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center pt-20">
          {services.map((service, index) => (
            <Service
              key={index}
              titleKey={service.titleKey}
              subtitleKey={service.subtitleKey}
              icon={service.icon}
              id={service.id}
              href={`/${locale}/services/${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
