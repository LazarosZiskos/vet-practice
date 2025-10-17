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
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("Aboutpage");

  return (
    <section>
      <div className="top-[60px]">
        <img
          className="w-full h-[30vh] object-cover pt-12"
          src="/bg-about.jpg"
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
                      {t("breadcrumb1")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="font-bold" />
                  <BreadcrumbItem className="font-bold text-xs md:text-sm">
                    {t("breadcrumb2")}
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1
              className="text-white font-bold leading-1 text-2xl tracking-wider pb-4 max-w-[300px]
            md:text-4xl md:max-w-[500px] md:pb-10"
            >
              {t("aboutus-title")}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray2 pt-10 pb-10" id="trigger">
        <div className="container flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold">
              {t("aboutus-title")}
            </h1>
            <div className="max-w-[600px]">
              <p className="pt-10 text-gray1/70 text-md">
                {t("aboutus-text1")}{" "}
                <span className="text-blue1"> {t("aboutus-keyword1")}</span>,{" "}
                <span className="text-blue1"> {t("aboutus-keyword2")}</span>{" "}
                {t("aboutus-and")}{" "}
                <span className="text-blue1"> {t("aboutus-keyword3")}.</span>
                <br />
                <p className="pt-2">{t("aboutus-text2")}</p>
                <br />
                {t("aboutus-text3")}{" "}
                <span className="text-blue1">{t("aboutus-keyword4")}</span>{" "}
                {t("aboutus-and")}{" "}
                <span className="text-blue1">{t("aboutus-keyword5")}.</span>
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
                  1. {t("aboutus-value1")}.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 border-t-0 md:p-8 md:pt-2 border-slate-200 text-slate-500">
                  {t("aboutus-answer1")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md border-2 p-5 md:p-8 border-b-0 border-slate-200 hover:text-blue1 transition-all ease-out duration-250 font-bold">
                  2. {t("aboutus-value2")}.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 md:p-8 md:pt-2 border-t-0 border-slate-200 text-slate-500">
                  <ul className="list-disc space-y-2">
                    <li>{t("aboutus-answer2a")}</li>
                    <li>{t("aboutus-answer2b")}</li>
                    <li>{t("aboutus-answer2c")}</li>
                    <li>{t("aboutus-answer2d")} </li>
                    <li>{t("aboutus-answer2e")} </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-md border-2 p-5 md:p-8 border-b-0 border-slate-200  hover:text-blue1 transition-all ease-out duration-250 font-bold">
                  3. {t("aboutus-value3")}.
                </AccordionTrigger>
                <AccordionContent className="border-2 p-5 md:p-8 border-t-0 md:pt-2 border-slate-200 text-slate-500">
                  {t("aboutus-answer3")}
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
            {t("aboutus-vet")}
          </h1>
          <p className="text-md">{t("aboutus-vet1")}</p>
          <p className="text-md pt-4">{t("aboutus-vet2")}</p>
          <p className="text-md pt-4">{t("aboutus-vet3")}</p>
        </div>
        <div
          className="pt-10
          md:w-1/2
          flex justify-end
          pb-5
        "
        >
          <img src="/doctor2.jpg" alt="lina-akakiadou" className="rounded-lg" />
        </div>
      </div>

      <div className="bg-gray2 pt-10 pb-10" id="trigger">
        <div className="container mx-auto w-[400px] lg:w-[600px]">
          <div className="flex flex-col justify-center items-center bg-gray1 text-slate-400 p-5">
            <p>{t("aboutus-timetable")}</p>
            <div className="pt-4 flex justify-between items-start text-white w-full">
              <div>
                <h2>{t("aboutus-monday")} </h2>
                <h2>{t("aboutus-tuesday")} </h2>
                <h2>{t("aboutus-wednesday")} </h2>
                <h2>{t("aboutus-thursday")}</h2>
                <h2>{t("aboutus-friday")} </h2>
                <h2>{t("aboutus-saturday")} </h2>
                <h2>{t("aboutus-sunday")} </h2>
              </div>
              <div>
                <h2>09:00-14:00 & 18:00-20:00</h2>
                <h2>09:00-14:00 & 18:00-20:00</h2>
                <h2>09:00-14:00</h2>
                <h2>09:00-14:00 & 18:00-20:00</h2>
                <h2>09:00-14:00 & 18:00-20:00</h2>
                <h2>10:00-14:00</h2>
                <h2>{t("aboutus-closed")}</h2>
              </div>
            </div>
            <div className="pt-5 w-full">
              <MyButton
                href="/contact"
                title={t("aboutus-button")}
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
