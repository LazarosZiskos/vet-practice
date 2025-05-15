import { FaUserDoctor } from "react-icons/fa6";
import { FaMicroscope } from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { CiMedicalCross } from "react-icons/ci";
import { PiBone } from "react-icons/pi";
import { FaStethoscope } from "react-icons/fa";
import { FaPassport } from "react-icons/fa6";

export const navLinks = [
  {
    title: "nav.home", // Translation key
    href: "/",
  },
  {
    title: "nav.about",
    href: "/about",
  },
  {
    title: "nav.services",
    href: "/services",
  },
  {
    title: "nav.contact",
    href: "/contact",
  },
];

// export const navLinks = [
//   {
//     title: "Αρχική",
//     href: "/",
//   },
//   {
//     title: "Σχετικά με Εμάς",
//     href: "/about",
//   },
//   {
//     title: "Υπηρεσίες",
//     href: "/services",
//   },
//   {
//     title: "Επικοινωνία",
//     href: "/contact",
//   },
// ];

export const reviews = [
  {
    title: "Το ευχαριστώ είναι λίγο",
    description:
      "Το ευχαριστώ είναι λίγο, στην μοναδική κτηνίατρο που έχει βαθιά αγάπη και σύνδεση με τα ζώα..Η επιστημονική της συνέπεια και η αδιάκοπη ενημέρωση της για την επιστήμη της την κάνουν χωρίς υπερβολή μοναδική και σπάνια για την πόλη μας.",
    name: "Θ.Β.",
    writer: "Θεοδωρα Βαλεσκου",
    town: "Καβάλα",
  },
  {
    title: "Μια αξιόλογη κτηνίατρος",
    description:
      "Μια αξιόλογη κτηνίατρος κι ένας υπέροχος άνθρωπος με αγάπη για τα ζώα και σεβασμό τόσο στα ζώα όσο και στους συνοδοιπόρους τους. Ο Χρήστος, η Θεοδώρα και κυρίως ο Μίσσα, σε ευχαριστούμε πολύ.",
    name: "Χ.Τ.",
    writer: "Χρήστος Τσίρκας",
    town: "Ελλάδα",
  },
  {
    title: "The best vet I've seen",
    description:
      "Congratulations, we visited with a stray cat and she examined him for free! She is very caring and a very kind soul.",
    name: "M.M.",
    writer: "Magda Magdalena",
    town: "Γερμανία",
  },
];

// export const services = [
//   {
//     id: "preventive-care",
//     title: "Προληπτικός Έλεγχος",
//     subtitle:
//       "Ο ετήσιος κτηνιατρικός έλεγχος πρέπει να είναι στις προτεραιότητες σας",
//     icon: <FaUserDoctor size={100} />,
//     href: "/el/preventive-care",
//     subtitle2:
//       "Η προληπτική κτηνιατρική φροντίδα αποτελεί κλειδί για την υγεία των κατοικίδιων ζώων.",
//     para1:
//       "Η προληπτική κτηνιατρική φροντίδα είναι η πιο αποτελεσματική στρατηγική για να διατηρήσουμε την υγεία των κατοικίδιών μας και να τους προσφέρουμε μια ζωή γεμάτη ευημερία. Σκοπός της πρόληψης είναι να εντοπίζονται και να προλαμβάνονται προβλήματα υγείας προτού αυτά εξελιχθούν σε σοβαρές καταστάσεις που απαιτούν επείγουσα ιατρική φροντίδα, με αποτέλεσμα την καταπόνηση του κατοικίδιού σας και την οικονομική επιβάρυνση του ιδιοκτήτη.",
//     para2:
//       " Οι τυπικοί κτηνιατρικοί έλεγχοι, ο σωστός εμβολιασμός και η τακτική αποπαρασίτωση είναι απαραίτητα βήματα για να διασφαλίσουμε ότι τα ζώα μας παραμένουν υγιή και προστατευμένα.",
//   },
//   {
//     id: "lab-tests",
//     title: "Εργαστηριακές εξετάσεις",
//     subtitle: "Απαραίτητες για τη διαγνωστική προσέγγιση των ασθενειών",
//     icon: <FaMicroscope size={100} />,
//     href: "/el/lab-tests",
//   },
//   {
//     id: "surgery",
//     title: "Χειρουργικές Επεμβάσεις",
//     subtitle: "To κτηνιατρείο είναι εξοπλισμένο με σύγχρονα μηχανήματα",
//     icon: <GiScalpel size={100} />,
//     href: "/el/surgery",
//   },
//   {
//     id: "dental-care",
//     title: "Οδοντιατρική Φροντίδα",
//     subtitle: "Η τακτική φροντίδα των δοντιών είναι απαραίτητη",
//     icon: <TbDental size={100} />,
//     href: "/el/dental-care",
//   },
//   {
//     id: "pharmacy",
//     title: "Φαρμακείο",
//     subtitle: "Πλήρως εξοπλισμένο φαρμακείο στον χώρο μας",
//     icon: <CiMedicalCross size={100} />,
//     href: "/el/pharmacy",
//   },
//   {
//     id: "pathological-cases",
//     title: "Παθολογικά Περιστατικά",
//     subtitle: "Η καθημερινή πρόκληση του ιατρείου μας είναι η διάγνωση",
//     icon: <FaStethoscope size={100} />,
//     href: "/el/pathological-cases",
//   },
//   {
//     id: "nutrition",
//     title: "Διατροφή και Κλινικές Δίαιτες",
//     subtitle: "Ολοκληρωμένη προσέγγιση για την υγεία του κατοικίδιού σας",
//     icon: <PiBone size={100} />,
//     href: "/el/nutrition",
//   },
//   {
//     id: "client-records",
//     title: "Αρχείο Πελατών και Ιστορικό Περιστατικών",
//     subtitle:
//       "Oργάνωση και η σωστή παρακολούθηση της υγείας του κατοικίδιού σας",
//     icon: <PiBone size={100} />,
//     href: "/el/client-records",
//   },
//   {
//     id: "travel",
//     title: "Ταξίδια και Μεταφορές",
//     subtitle: "Έκδοση διαβατηρίου και συμβουλές για ταξίδια στο εξωτερικό",
//     icon: <FaPassport size={100} />,
//     href: "/el/travel",
//   },
// ];

export const services = [
  {
    id: "preventive-care",
    titleKey: "services.service1.title",
    subtitleKey: "services.service1.subtitle",
    subtitle2Key: "services.service1.subtitle2",
    para1Key: "services.service1.para1",
    para2Key: "services.service1.para2",
    para3Key: "services.service1.para3",
    para4Key: "services.service1.para4",
    icon: <FaUserDoctor size={100} />,
    href: "/el/preventive-care",
  },
  {
    id: "lab-tests",
    titleKey: "services.service2.title",
    subtitleKey: "services.service2.subtitle",
    subtitle2Key: "services.service2.subtitle2",
    para1Key: "services.service2.para1",
    para2Key: "services.service2.para2",
    para3Key: "services.service2.para3",
    para4Key: "services.service2.para4",
    icon: <FaMicroscope size={100} />,
    href: "/el/lab-tests",
  },
  {
    id: "surgery",
    titleKey: "services.service3.title",
    subtitleKey: "services.service3.subtitle",
    subtitle2Key: "services.service3.subtitle2",
    para1Key: "services.service3.para1",
    para2Key: "services.service3.para2",
    para3Key: "services.service3.para3",
    para4Key: "services.service3.para4",
    icon: <GiScalpel size={100} />,
    href: "/el/surgery",
  },
  {
    id: "dental-care",
    titleKey: "services.service4.title",
    subtitleKey: "services.service4.subtitle",
    subtitle2Key: "services.service4.subtitle2",
    para1Key: "services.service4.para1",
    para2Key: "services.service4.para2",
    para3Key: "services.service4.para3",
    para4Key: "services.service4.para4",
    icon: <TbDental size={100} />,
    href: "/el/dental-care",
  },
  {
    id: "pharmacy",
    titleKey: "services.service5.title",
    subtitleKey: "services.service5.subtitle",
    para1Key: "services.service5.para1",
    para2Key: "services.service5.para2",
    para3Key: "services.service5.para3",
    para4Key: "services.service5.para4",
    icon: <CiMedicalCross size={100} />,
    href: "/el/pharmacy",
  },
  {
    id: "pathological-cases",
    titleKey: "services.service6.title",
    subtitleKey: "services.service6.subtitle",
    subtitle2Key: "services.service6.subtitle2",
    para1Key: "services.service6.para1",
    para2Key: "services.service6.para2",
    para3Key: "services.service6.para3",
    para4Key: "services.service6.para4",
    icon: <FaStethoscope size={100} />,
    href: "/el/pathological-cases",
  },
  {
    id: "nutrition",
    titleKey: "services.service7.title",
    subtitleKey: "services.service7.subtitle",
    para1Key: "services.service7.para1",
    para2Key: "services.service7.para2",
    para3Key: "services.service7.para3",
    para4Key: "services.service7.para4",
    icon: <PiBone size={100} />,
    href: "/el/nutrition",
  },
  {
    id: "client-records",
    titleKey: "services.service8.title",
    subtitleKey: "services.service8.subtitle",
    para1Key: "services.service8.para1",
    para2Key: "services.service8.para2",
    para3Key: "services.service8.para3",
    para4Key: "services.service8.para4",
    icon: <PiBone size={100} />,
    href: "/el/client-records",
  },
  {
    id: "travel",
    titleKey: "services.service9.title",
    subtitleKey: "services.service9.subtitle",
    para1Key: "services.service9.para1",
    para2Key: "services.service9.para2",
    para3Key: "services.service9.para3",
    para4Key: "services.service9.para4",
    icon: <FaPassport size={100} />,
    href: "/el/travel",
  },
];

export const detailServices = [
  {
    title: "Προληπτική ιατρική & Εμβολιασμοί",
    subtitle1:
      "Η προληπτική κτηνιατρική φροντίδα αποτελεί κλειδί για την υγεία των κατοικίδιων ζώων.",
    subtitle2: `Η προληπτική κτηνιατρική φροντίδα είναι η πιο αποτελεσματική στρατηγική για να
διατηρήσουμε την υγεία των κατοικίδιών μας και να τους προσφέρουμε μια ζωή
γεμάτη ευημερία. Σκοπός της πρόληψης είναι να εντοπίζονται και να
προλαμβάνονται προβλήματα υγείας προτού αυτά εξελιχθούν σε σοβαρές
καταστάσεις που απαιτούν επείγουσα ιατρική φροντίδα, με αποτέλεσμα την
καταπόνηση του κατοικίδιού σας και την οικονομική επιβάρυνση του ιδιοκτήτη.
Οι τυπικοί κτηνιατρικοί έλεγχοι, ο σωστός εμβολιασμός και η τακτική
αποπαρασίτωση είναι απαραίτητα βήματα για να διασφαλίσουμε ότι τα ζώα μας
παραμένουν υγιή και προστατευμένα.
Η περιοχή μας, με τις κλιματολογικές συνθήκες που επικρατούν, καθιστά τον
προληπτικό έλγχο έναντι των παρσίτων κρίσιμο, για την πρόληψη νοσημάτων όπως η
λεισμανίωση, η ερλιχίωση και η διροφιλλαρίωση. Επίσης, η έγκαιρη και σωστή
εφαρμογή εμβολίων προστατεύει τα ζώα μας από λοιμώξεις όπως η παρβοϊωση, η
λεπτοσπειρωση_κ.α.
Η παραπάνω προσέγγιση είναι μέρος της ολιστικής κτηνιατρικής. Η αποπαρασίτωση
τόσο για ένδο όσο και για έξω παράσιτα, κρίνεται απαραίτητη για την προστασία της
δημόσιας υγείας. Ψύλλοι, κροτωγενή νοσήματα και ταινίες όπως ο εχινόκοκκος είναι
υπαρκτοί κίνδυνοι και με την κατάλληλη πρόληψη συμβάλουμε στην ευημερία όλων.
Αναγνωρίζοντας τη σημασία της πρόληψης, σας προσκαλούμε να προγραμματίσετε
την επόμενη τακτική επίσκεψη του κατοικίδιου σας στο κτηνιατρείο και να
βεβαιωθείτε ότι λαμβάνετε όλες τις απαραίτητες προληπτικές φροντίδες.`,
  },
  {
    title: "Εξετάσεις αίματος",
    subtitle1:
      "​Οι αιματολογικές εξετάσεις περιλαμβάνουν τόσο τον έλεγχο των λειτουργών των ζωτικών οργάνων όσο και το ενδεχόμενο το κατοικίδιο να είναι φορέας  μεταδοτικών λοιμωδών νοσημάτων, το ποσοστό εμφάνισης των οποίων είναι πολύ υψηλό  στη χώρα μας.",
    subtitle2:
      "​Πιο συγκεκριμένα, πραγματοποιείται ένα πλήρες αιματολογικό και βιοχημικό τσεκ-απ (γενική εξέταση αίματος, έλεγχος ήπατος, έλεγχος νεφρών – παγκρέατος-πρωτεϊνών αίματος- ηλεκτρολυτών) αλλα και πιο ειδικές εξετασεις εαν χρειαστεί ,ενώ γίνονται και ορολογικές εξετάσεις για τα μεταδοτικά λοιμώδη νοσήματα του σκύλου και της γάτας ( Λεισμανίωση, Ερλιχίωση, Διροφιλαρίωση για το σκύλο , Ιός λευχαιμίας και Ιός ανοσολογικής ανεπάρκειας στις γάτες). Το ποιες εξετάσεις  θα γίνουν αποφασίζεται μετά απο συζήτηση μαζί μας και πάντα βάση τη κλινική εικόνα και τις ανάγκες του καθε ζώου ξεχωριστά.",
  },
  {
    title: "Οδοντιατρική φρόντιδα",
    subtitle1:
      "​Το ιατρείο μας είναι άρτια εξοπλισμένο ώστε να παρέχει όδοντιατρικη φροντίδα στους τετράποδους ασθενείς μας ( καθαρισμό δοντιών, εξαγωγές δοντιών , διαχείριση του συνδρόμου ουλοστοματίτιδας της γάτας  )  . Τα οδοντιατρικά προβλήματα ειναι ιδιαίτερα σημαντικά καθώς εκτός απο το ότι  αυξάνουν το μικροβιακό φορτίο στη στοματική κοιλότητα του ζώου , μπορεί να είναι και εξαιρετικά επώδυνα μειώνοντας έτσι κάτα πολύ την ποιότητα ζωής του κατοικιδίου.",
    subtitle2: " ",
  },
  {
    title: "Χειρουργική μαλακών ιστών",
    subtitle1:
      " Χειρουργεία  μπορεί να  γίνονται προληπτικά ( πχ .στείρωση , γαστροπηξία) , θεραπευτικά ( πχ .αφαίρεση ουρόλιθων , εντεροτομή- εντερεκτομή) καθώς και για διαγνωστικούς λόγους ( πχ .ερευνητική λαπαροτομή, βιοψία ήπατος - εντέρου  ). Σε όλες τις περιπτώσεις φροντίζουμε το ζώο να έχει πάντα τον κατάλληλο προεγχειρητικό έλεγχο ( κλινική εξέταση , εξετάσεις αίματος , υπέρηχο καρδιάς όπου χρειάζεται ) προτού προχωρήσουμε σε γενική αναισθησία . Το αναισθητικό πρωτόκολλο που ακολουθείται προσαρμόζεται στο κάθε ζώο αναλόγως με την κατάσταση της υγείας του ,ενώ υπάρχει η δυνατότητα παρακολούθησης των ζωτικών λειτουργιών του ζώου με μηχανήματα Μonitor καθόλη τη διάρκεια του χειρουργείου . ",
    subtitle2:
      "Φροντίζουμε ώστε η μετεγχειρητική φροντίδα του ζώου  να ειναι απόλυτως κατανοητή απο εσάς ενώ ειναι υψίστης σημασίας για εμάς το ζώο να πηγαίνει σπιτι του ήρεμο και χωρίς πόνο . Εαν θεωρήσουμε ότι το ζώο χρειάζεται μετεγχειρητική παρακολούθηση θα επιλέξουμε να το κρατήσουμε για όσο χρειαστεί στο ιατρείο μας ώστε να εξασφαλίσουμε ότι θα φύγει απο εμάς σταθεροποιημένο και χωρίς κανένα κίνδυνο.Επειδή γνωρίζουμε ποσο άγχος προκαλεί η διαδικασία της γενικής αναισθησίας για εσάς  , ειμαστε εδώ για να συζητήσουμε μαζι σας οποιαδήποτε απορία έχετε πανω σε αυτο το θέμα ! ",
  },
  {
    title: "Παθολογικά Περιστατικά",
    subtitle1:
      "Κύριος στόχος για εμάς ειναι να βοηθήσουμε και το ζώο αλλα και εσάς με ενα κατανοητό και αποτελεσματικό  πλάνο θεραπείας. Επισημαίνουμε τις ανάγκες του κατοικιδίου σας ώστε να εξασφαλίσουμε ότι θα έχουν την καλυτερη δυνατή ποιοτητα ζωής !",
    subtitle2: " ",
  },
];
