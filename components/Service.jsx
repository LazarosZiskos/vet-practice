import { FaUserDoctor } from "react-icons/fa6";

const Service = ({ title, subtitle, icon, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-4 pb-10"
    >
      <div className=" text-blue1">{icon}</div>
      <h2 className="text-xl">{title}</h2>
      <p className="text-sm text-slate-400 max-w-[300px] text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default Service;
