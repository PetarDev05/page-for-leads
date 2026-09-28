import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTikTok } from "react-icons/ai";

const InfoCard = () => {
  return (
    <div className="w-full max-w-150 flex flex-col items-center gap-7">
      <div className="w-full flex flex-col items-center gap-7">
        {/* <img
          src="/trainer.jpg"
          alt="trainer's image"
          className="w-full max-w-60 rounded-full"
        /> */}
        <h2 className="text-3xl text-(--heading) font-semibold text-center">
          Few words about me
        </h2>
        <p className="text-md text-(--paragraph) text-center">
          Hi, my name is John and I'll be your personal trianer. Fitness has
          always been more than just training for me — it's about becoming
          stronger, more confident, and better every day. I work closely with
          each client to create a training approach that fits their goals,
          lifestyle, and experience. My goal is to make training something you
          can enjoy, stay consistent with, and genuinely see yourself improving
          at.
        </p>
      </div>

      <div className="w-fit flex flex-col md:flex-row items-center justify-center gap-5 text-3xl bg-linear-to-r from-(--main1)/10 via-(--main2)/10 to-(--main3)/10 py-5 px-10 rounded-xl shadow">
        <h3 className="text-lg text-(--heading)">Follow me on</h3>
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
