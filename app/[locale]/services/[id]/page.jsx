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
import { useTranslation } from "react-i18next";

export default function ServicePage({ params }) {
  const { id, locale } = params; // ✅ You now get both from the dynamic route

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

  const { t } = useTranslation("Servicepage");

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
                      href={`/${locale}`}
                      className="hover:text-blue1 transition-all ease-in-out duration-200 font-bold text-xs md:text-sm"
                    >
                      {t("breadcrumb1")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="font-bold" />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={`/${locale}/services`}
                      className="hover:text-blue1 transition-all ease-in-out duration-200 font-bold text-xs md:text-sm"
                    >
                      {t("breadcrumb3")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="font-bold" />
                  <BreadcrumbItem className="font-bold text-xs md:text-sm">
                    {t(service.titleKey)}
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1 className="text-white font-bold text-2xl md:text-4xl tracking-wider pb-4 md:pb-10 max-w-[500px]">
              {t(service.titleKey)}
            </h1>
          </div>
        </div>
      </div>

      <div className="container pt-10 pb-10" id="service-content">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-blue1 text-6xl">{service.icon}</div>

          {service.subtitle2Key && (
            <p className="text-center text-slate-400 text-lg max-w-[800px]">
              {t(service.subtitle2Key)}
            </p>
          )}

          {(service.para1Key || service.para2Key) && (
            <div className="w-full max-w-[800px] bg-slate-100 p-8 rounded-lg">
              {service.para1Key && (
                <p className="text-slate-600 p-4">{t(service.para1Key)}</p>
              )}
              {service.para2Key && t(service.para2Key).trim() && (
                <p className="text-slate-600 p-4">{t(service.para2Key)}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
