import { FaUserDoctor } from "react-icons/fa6";
import { FaMicroscope } from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { CiMedicalCross } from "react-icons/ci";
import { PiBone } from "react-icons/pi";

export const navLinks = [
  {
    title: "Αρχική",
    href: "/",
  },
  {
    title: "Σχετικά με Εμάς",
    href: "/about",
  },
  {
    title: "Υπηρεσίες",
    href: "/services",
  },
  {
    title: "Επικοινωνία",
    href: "/contact",
  },
];

export const reviews = [
  // {
  //   title: "Εξαιρετική κτηνίατρος",
  //   description:
  //     "Εξαιρετική κτηνίατρος, με μεγάλη ευαισθησία απέναντι στα ζώα. Έδειξε μεγάλη αγάπη στον σκύλο μας. Τον έσωσε κυριολεκτικά βέβαιο θάνατο. Την ευχαριστούμε θερμά.",
  //   name: "A.I.",
  //   writer: "Aλέξανδρος Ιωσηφίδης",
  //   town: "Καβάλα",
  // },
  {
    title: "Το ευχαριστώ είναι λίγο",
    description:
      "Το ευχαριστώ είναι λίγο, στην μοναδική κτηνίατρο που έχει βαθιά αγάπη και σύνδεση με τα ζώα..Η επιστημονική της συνέπεια και η αδιάκοπη ενημέρωση της για την επιστήμη της την κάνουν χωρίς υπερβολή μοναδική και σπάνια για την πόλη μας.",
    name: "Θ.Β.",
    writer: "Θεοδωρα Βαλεσκου",
    town: "Καβάλα",
  },
  {
    title: "very good vet",
    description:
      "very good vet!! she cares for the well-being of pets more than money! she examined a stray pet for free to be able to help him! ☺️",
    name: "M.Β.",
    writer: "Mimi",
    town: "Βουλγαρία",
  },
  {
    title: "The best vet I’ve seen",
    description:
      "Congratulations, we visited with a stray cat and she examined him for free! She is very caring and a very kind soul.",
    name: "M.M.",
    writer: "Magda Magdalena",
    town: "Γερμανία",
  },
];

export const services = [
  {
    title: "Προληπτικός Έλεγχος",
    subtitle:
      "Ο ετήσιος κτηνιατρικός έλεγχος πρέπει να είναι στις προτεραιότητες σας",
    icon: <FaUserDoctor size={100} />,
    href: "/services/details",
  },
  {
    title: "Διαγνωστικές Εξετάσεις",
    subtitle: "Απαραίτητες για τη διαγνωστική προσέγγιση των ασθενειών",
    icon: <FaMicroscope size={100} />,
    href: "/services/details",
  },
  {
    title: "Χειρουργικές Επεμβάσεις",
    subtitle: "To κτηνιατρείο είναι εξοπλισμένο με σύγχρονα μηχανήματα",
    icon: <GiScalpel size={100} />,
    href: "/services/details",
  },
  {
    title: "Οδοντιατρική Φροντίδα",
    subtitle: "Η τακτική φροντίδα των δοντιών είναι απαραίτητη",
    icon: <TbDental size={100} />,
    href: "/services/details",
  },
  {
    title: "Φαρμακείο",
    subtitle: "Πλήρως εξοπλισμένο φαρμακείο στον χώρο μας",
    icon: <CiMedicalCross size={100} />,
    href: "/services/details",
  },
  {
    title: "Κλινικές Δίαιτες",
    subtitle:
      "Προτάσεις για την διατροφή του ζώου σας σε όλα τα στάδια της ζωής του",
    icon: <PiBone size={100} />,
    href: "/services/details",
  },
];
