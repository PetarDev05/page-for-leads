import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTikTok } from "react-icons/ai";

const InfoCard = () => {
  return (
    <div className="w-full max-w-150 flex flex-col items-center gap-7">
      <div className="w-full flex flex-col items-center gap-7">
        <h2 className="text-2xl md:text-3xl text-(--heading) font-semibold text-center">
          Nekoliko reči o meni
        </h2>
        <p className="text-md text-(--paragraph) text-center">
          Zdravo, ja sam Jovan i biću tvoj lični trener. Fitnes je za mene oduvek
          bio više od samog vežbanja — to je način da postaneš snažniji,
          samouvereniji i bolji iz dana u dan. Blisko sarađujem sa svakim
          klijentom kako bih kreirao pristup treningu koji odgovara njihovim
          ciljevima, načinu života i iskustvu. Moj cilj je da trening učinim
          nečim u čemu možeš da uživaš, da ostaneš dosledan i da stvarno vidiš
          svoj napredak.
        </p>
      </div>

      <div className="w-fit flex flex-col md:flex-row items-center justify-center gap-5 text-3xl bg-linear-to-r from-(--main1)/10 via-(--main2)/10 to-(--main3)/10 py-5 px-10 rounded-xl shadow">
        <h3 className="text-lg text-(--heading)">Zaprati me na</h3>
        <div className="flex flex-row items-center gap-7">
          <FaSquareInstagram className="hover:scale-110 transition-all cursor-pointer duration-150 text-(--instagram)" />
          <FaFacebookSquare className="hover:scale-110 transition-all cursor-pointer duration-150 text-(--facebook)" />
          <RxLinkedinLogo className="hover:scale-110 transition-all cursor-pointer duration-150 text-(--linkedin)" />
          <AiFillTikTok className="hover:scale-110 transition-all cursor-pointer duration-150 text-(--tiktok)" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
