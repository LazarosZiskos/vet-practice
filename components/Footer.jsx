import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  PhoneOutgoing,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray1 pt-10 pb-10 ">
      <div className="container flex flex-col justify-center items-center md:flex-row md:space-x-20 lg:justify-between">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Link href="/">
            <img src="/main_logo.jpg" alt="logo" className="w-[150px]" />
          </Link>
          <p className="text-gray2/60 text-sm max-w-[350px] text-center">
            Είμαστε πάντα πρόθυμοι να σας εξυπηρετήσουμε <br />
            και να σας λύσουμε κάθε απορία.
          </p>
          <ul className="flex gap-2 text-white">
            <li>
              <Link
                href="https://www.instagram.com/vetpractice_lina_akakiadou/"
                target="blank"
              >
                <Instagram size={25} className="hover:text-blue1" />
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com" target="blank">
                <Facebook size={25} className="hover:text-blue1" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com/maps/place/%CE%9A%CF%84%CE%B7%CE%BD%CE%B9%CE%B1%CF%84%CF%81%CE%B5%CE%AF%CE%BF+%7C+%CE%9B%CE%AF%CE%BD%CE%B1+%CE%91%CE%BA%CE%B1%CE%BA%CE%B9%CE%AC%CE%B4%CE%BF%CF%85/@40.9623287,24.5104422,17z/data=!3m1!4b1!4m6!3m5!1s0x14aea3985ec00933:0x3e018476d1d5f971!8m2!3d40.9623247!4d24.5130171!16s%2Fg%2F11t286y665?entry=ttu"
                target="blank"
              >
                <MapPinned size={25} className="hover:text-blue1" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-10 items-start pt-10 md:flex-row lg:justify-around">
          <div className="flex flex-col justify-center items-start gap-2">
            <h3 className="text-xl pb-4 font-bold text-white">Menu</h3>
            <Link href="/" className="text-gray2/80 pb-1  hover:text-blue1">
              Αρχική
            </Link>
            <Link href="/about" className="text-gray2/80 pb-1 hover:text-blue1">
              Σχετικά Με Εμάς
            </Link>
            <Link
              href="/services"
              className="text-gray2/80 pb-1 hover:text-blue1"
            >
              Υπηρεσίες
            </Link>
            <Link
              href="/contact"
              className="text-gray2/80 pb-1 hover:text-blue1"
            >
              Επικοινωνία
            </Link>
          </div>

          <div className="flex flex-col gap-3 justify-center items-start">
            <h3 className="text-xl pb-4 font-bold text-white">Επικοινωνία</h3>
            <a href="tel:2510371262">
              <p className="flex gap-4 items-center justify-center text-gray2/80">
                <Phone size={20} /> <span>2510 317262</span>
              </p>
            </a>
            <a href="mailto:lakakiad@gmail.com">
              <p className="flex gap-4 items-center justify-center text-gray2/80">
                <Mail size={20} /> <span>lakakiad@gmail.com</span>
              </p>
            </a>
            <a
              href="https://www.google.com/maps/place/%CE%9A%CF%84%CE%B7%CE%BD%CE%B9%CE%B1%CF%84%CF%81%CE%B5%CE%AF%CE%BF+%7C+%CE%9B%CE%AF%CE%BD%CE%B1+%CE%91%CE%BA%CE%B1%CE%BA%CE%B9%CE%AC%CE%B4%CE%BF%CF%85/@40.9623287,24.5104422,17z/data=!3m1!4b1!4m6!3m5!1s0x14aea3985ec00933:0x3e018476d1d5f971!8m2!3d40.9623247!4d24.5130171!16s%2Fg%2F11t286y665?entry=ttu"
              target="blank"
            >
              <p className="flex gap-4 items-center justify-center text-gray2/80">
                <MapPin size={20} /> <span>Νέα Καρβάλη, 64006</span>
              </p>
            </a>
            <a
              href="https://www.instagram.com/vetpractice_lina_akakiadou/"
              target="blank"
            >
              <p className="flex gap-4 items-center justify-center text-gray2/80">
                <Instagram /> <span>vetpractice_lina_akakiadou</span>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <hr className="mt-5 mb-5 w-[80%] lg:w-[65%]" />
        <div className="text-center text-gray2/70 text-xs lg:text-sm">
          © Copyright Lazaros Ziskos 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
