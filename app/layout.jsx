import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Κτηνιατρείο Καρβάλη - Υγεία των Ζώων - Λίνα Ακακιάδου",
  description: "Κτηνιατρείο Λίνα Ακακιάδου - Υψηλές Υπηρεσίες Κτηνιατρείου",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
