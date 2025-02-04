import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Κτηνιατρείο Καρβάλη - Λίνα Ακακιάδου",
  description: "Κτηνιατρείο Λίνα Ακακιάδου - Υψηλές Υπηρεσίες Κτηνιατρείου",
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <ScrollButton />
        <Footer />
      </body>
    </html>
  );
}
