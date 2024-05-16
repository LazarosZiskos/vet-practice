import DetailService from "@/components/DetailService";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { detailServices } from "@/constants";

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
              Αναλυτικές Υπηρεσίες
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-20 pb-10">
        <div className="flex flex-col justify-center items-center">
          {detailServices.map((serv, idx) => (
            <DetailService
              key={idx}
              title={serv.title}
              subtitle1={serv.subtitle1}
              subtitle2={serv.subtitle2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
