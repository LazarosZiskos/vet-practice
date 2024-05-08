import React from "react";
import MyButton from "./MyButton";
import { ArrowRight } from "lucide-react";

const Doctor = () => {
  return (
    <section className="container mt-20 mb-20">
      <h1 className="font-bold text-2xl md:text-4xl mb-10 tracking-wider text-center">
        Η ΚΤΗΝΙΑΤΡΟΣ
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        <div className="md:w-1/2 flex items-center justify-end mb-4">
          <img
            src="doctor1.jpg"
            alt="doctor"
            className="w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="flex flex-col justify-around md:w-1/2">
          <p className="max-w-[550px] leading-2 pb-10">
            Η έμπειρη κτηνίατρος Λίνα Ακακιάδου είναι απόφοιτη του Αριστοτελείου
            Πανεπιστημίου Θεσσαλονίκης. Με δεκαετή εμπειρία στην κτηνιατρική
            επιστήμη. Επίσης είναι κάτοχος Μεταπτυχιακού Διπλώματος στην
            Τεχνολογία Τροφίμων...
          </p>
          <MyButton
            title="Συνεχίστε την Ανάγνωση"
            href="/"
            style="flex items-center gap-2 text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1 mr-5"
            icon={<ArrowRight />}
          ></MyButton>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
