import { GrGroup } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";

const Badges = () => {
  return (
    <div className="w-full max-w-170 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-7">
      <div className="max-w-50 flex flex-col items-center gap-4 p-4 text-center bg-linear-to-br from-(--main1)/20 via-transparent to-(--main1)/20 rounded-2xl hover:scale-105 transition-all duration-200 shadow text-(--main1)">
        <span className="p-3 rounded-full bg-(--main1)/25">
          <TbCertificate className="text-3xl" />
        </span>
        <p className="font-semibold">Sertifikovani personalni trener</p>
      </div>
      <div className="max-w-50 flex flex-col items-center gap-4 p-4 text-center bg-linear-to-br from-(--main2)/20 via-transparent to-(--main2)/20 rounded-2xl hover:scale-105 transition-all duration-200 shadow text-(--main2)">
        <span className="p-3 rounded-full bg-(--main2)/25">
          <GrGroup className="text-3xl" />
        </span>
        <p className="font-semibold">120+ zadovoljnih klijenata</p>
      </div>
      <div className="max-w-50 flex flex-col items-center gap-4 p-4 text-center bg-linear-to-br from-(--main3)/20 via-transparent to-(--main3)/20 rounded-2xl hover:scale-105 transition-all duration-200 shadow text-(--main3)">
        <span className="p-3 rounded-full bg-(--main3)/25">
          <FaChartLine className="text-3xl" />
        </span>
        <p className="font-semibold">5+ godina iskustva</p>
      </div>
    </div>
  );
};

export default Badges;
