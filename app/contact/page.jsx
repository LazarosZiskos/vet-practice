import MyButton from "@/components/MyButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { SlScreenSmartphone } from "react-icons/sl";

const Contact = () => {
  return (
    <section>
      <div className="top-[60px]">
        <img
          className="w-full h-[30vh] object-cover pt-12"
          src="bg-about.jpg"
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
                    Επικοινωνία
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1
              className="text-white font-bold leading-1 text-2xl tracking-wider pb-4 max-w-[300px]
            md:text-4xl md:max-w-[500px] md:pb-10"
            >
              Επικοινωνία
            </h1>
          </div>
        </div>
      </div>

      <div className="container pt-10 pb-10 md:flex items-center justify-between">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-around w-full">
          <div className="flex flex-col justify-center items-center gap-3 pb-10 ">
            <Link
              href="mailto:lakakiad@gmail.com"
              target="blank"
              className="flex flex-col justify-center items-center"
            >
              <FaMailBulk size={50} className="text-gray1 pb-2" />
              <h2 className="text-2xl">E-mail</h2>
            </Link>
            <p className="text-slate-400">lakakiad@gmail.com</p>
            <MyButton
              href="mailto:lakakiad@gmail.com"
              title="Στείλτε μας e-mail"
              style="text-blue1 bg-transparent hover:scale-125"
              target="blank"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 pb-10">
            <Link
              href="tel:2510371262"
              target="blank"
              className="flex flex-col justify-center items-center"
            >
              <FaPhone size={50} className="text-gray1 pb-2" />
              <h2 className="text-2xl">Τηλέφωνο</h2>
            </Link>
            <p className="text-slate-400">2510 371262</p>
            <MyButton
              href="tel:2510371262"
              title="Καλέστε μας"
              style="text-blue1 bg-transparent hover:scale-125"
              target="blank"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 pb-10">
            <Link
              href="tel:6937014058"
              target="blank"
              className="flex flex-col justify-center items-center"
            >
              <SlScreenSmartphone size={50} className="text-gray1 pb-2" />
              <h2 className="text-2xl">Κινητό Τηλέφωνο</h2>
            </Link>
            <p className="text-slate-400">6937014058</p>
            <MyButton
              href="tel:6937014058"
              title="Καλέστε μας"
              style="text-blue1 bg-transparent hover:scale-125"
              target="blank"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 pb-10">
            <Link
              target="blank"
              className="flex flex-col justify-center items-center"
              href="https://www.google.com/maps/place/%CE%9A%CF%84%CE%B7%CE%BD%CE%B9%CE%B1%CF%84%CF%81%CE%B5%CE%AF%CE%BF+%7C+%CE%9B%CE%AF%CE%BD%CE%B1+%CE%91%CE%BA%CE%B1%CE%BA%CE%B9%CE%AC%CE%B4%CE%BF%CF%85/@40.9623287,24.5104422,17z/data=!3m1!4b1!4m6!3m5!1s0x14aea3985ec00933:0x3e018476d1d5f971!8m2!3d40.9623247!4d24.5130171!16s%2Fg%2F11t286y665?entry=ttu"
            >
              <FiMapPin size={50} className="text-gray1 pb-2" />
              <h2 className="text-2xl">Διεύθυνση</h2>
            </Link>
            <p className="text-slate-400">Νέα Καρβάλη, Καβάλα</p>
            <MyButton
              href="https://www.google.com/maps/place/%CE%9A%CF%84%CE%B7%CE%BD%CE%B9%CE%B1%CF%84%CF%81%CE%B5%CE%AF%CE%BF+%7C+%CE%9B%CE%AF%CE%BD%CE%B1+%CE%91%CE%BA%CE%B1%CE%BA%CE%B9%CE%AC%CE%B4%CE%BF%CF%85/@40.9623287,24.5104422,17z/data=!3m1!4b1!4m6!3m5!1s0x14aea3985ec00933:0x3e018476d1d5f971!8m2!3d40.9623247!4d24.5130171!16s%2Fg%2F11t286y665?entry=ttu"
              title="Οδηγίες"
              style="text-blue1 bg-transparent hover:scale-125"
              target="blank"
            />
          </div>
        </div>
      </div>

      <div className="container pb-10">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl">Μην διστάσετε να επικοινωνήσετε μαζί μας</h2>
          <p className="text-sm pt-2 pb-4 w-[250px] text-slate-400">
            Για επείγοντα περιστατικά παρακαλώ καλέστε στο 2510371262 ή στο
            6937014058{" "}
          </p>
        </div>
        <div className="p-2">
          <form
            action=""
            className="flex flex-col gap-4 md:w-1/3 items-center justify-center mx-auto bg-gray2 rounded-md p-4"
          >
            <Input type="name" placeholder="Όνομα" />
            <Input type="surname" placeholder="Επίθετο" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Μήνυμα..." />
            <button className="pt-2 pb-2 pl-5 pr-5 text-sm font-semibold transition-all ease-in-out duration-500 md:pb-3 md:pl-10 md:pt-3 md:pr-10 md:text-md text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1">
              ΑΠΟΣΤΟΛΗ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
