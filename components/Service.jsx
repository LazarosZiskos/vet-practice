import Link from "next/link";

const Service = ({ title, subtitle, icon, id, href }) => {
  return (
    <Link href={href}>
      <div
        className="flex flex-col items-center justify-center gap-4 pb-10"
        id={id}
      >
        <div className=" text-blue1">{icon}</div>
        <h2 className="text-xl">{title}</h2>
        <p className="text-sm text-slate-400 max-w-[300px] text-center">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default Service;
