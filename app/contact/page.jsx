import MyButton from "@/components/MyButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

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
        <div className="flex flex-col justify-center items-center md:flex-row md:w-1/2">
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
            />
          </div>
        </div>

        <div className="flex flex-wrap w-full md:justify-center">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 border-2 p-10 border-gray1 rounded-md">
            <div className="pb-10 flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl pb-2 font-bold max-w-[400px]">
                Μην διστάσετε να επικοινωνήσετε μαζί μας
              </h2>
              <p className="text-slate-400">
                Για επίγοντα περιστατικά, παρακαλω καλέστε στο 1111111
              </p>
            </div>
            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label className="text-lg text-slate-700/80">Όνομα</label>
                <input
                  type="text"
                  name="name"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput90"
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label className="text-lg text-slate-700/80">Email</label>

                <input
                  type="email"
                  name="email"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput91"
                  placeholder="Email address"
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label className="text-lg text-slate-700/80">Μήνυμα</label>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  name="message"
                  placeholder="Your message"
                ></textarea>
              </div>

              <Button className="w-full text-lg bg-blue1 tracking-wider">
                ΑΠΟΣΤΟΛΗ
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
