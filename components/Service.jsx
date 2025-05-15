import Link from "next/link";
import { useTranslation } from "react-i18next";

const Service = ({ titleKey, subtitleKey, icon, id, href }) => {
  const { t } = useTranslation("Servicepage");

  return (
    <Link
      href={href}
      className="hover:bg-slate-200 rounded-lg p-6 transition-all ease-in-out duration-250"
    >
      <div
        className="flex flex-col items-center justify-center gap-4 pb-10"
        id={id}
      >
        <div className="text-blue1">{icon}</div>
        <h2 className="text-xl text-center">{t(titleKey)}</h2>
        <p className="text-sm text-slate-400 max-w-[300px] text-center">
          {t(subtitleKey)}
        </p>
      </div>
    </Link>
  );
};

export default Service;
