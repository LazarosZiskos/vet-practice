import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="pt-20 pb-10 container">
      <h1 className="font-bold text-2xl md:text-4xl mb-10 tracking-wider text-center">
        ΑΞΙΟΛΟΓΗΣΕΙΣ
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-2">
        <TestimonialCard
          title="Εξαιρετική κτηνίατρος"
          description="Εξαιρετική κτηνίατρος, με μεγάλη ευαισθησία απέναντι στα ζώα. Έδειξε μεγάλη αγάπη στον σκύλο μας. Τον έσωσε κυριολεκτικά βέβαιο θάνατο. Την ευχαριστούμε θερμά."
          name="A.I."
          writer="Aλέξανδρος Ιωσηφίδης"
          town="Καβάλα"
        />
        <TestimonialCard
          title="Το ευχαριστώ είναι λίγο"
          description="Το ευχαριστώ είναι λίγο, στην μοναδική κτηνίατρο που έχει βαθιά αγάπη και σύνδεση με τα ζώα..Η επιστημονική της συνέπεια και η αδιάκοπη ενημέρωση της για την επιστήμη της την κάνουν χωρίς υπερβολή μοναδική και σπάνια για την πόλη μας ."
          name="Θ.Β."
          writer="Θεοδωρα Βαβαλεσκου"
          town="Καβάλα"
        />
        <TestimonialCard
          title="very good vet"
          description="very good vet!!
          she cares for the well-being of pets more than money!
          she examined a stray pet for free to be able to help him! ☺️"
          name="M.Β."
          writer="Mimi"
          town="Βουλγαρία"
        />
        <TestimonialCard
          title="The best vet I’ve seen"
          description="ongratulations, we visited with a stray cat and she examined him for free! She is very caring and a very kind soul."
          name="M.M."
          writer="Magda Magdalena"
          town="Γερμανία"
        />
      </div>
    </section>
  );
};

export default Testimonials;
