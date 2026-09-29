import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useAppContext } from "../../hooks/useAppContext.hooks.jsx";
import { FaCheck } from "react-icons/fa";

const TrainingDetails = () => {
  const { slideForm, formData, setGoal, handleFormData } = useAppContext();

  return (
    <div className="w-full flex flex-col items-end gap-7 text-(--form-text)">
      <p className="w-full text-lg text-(--paragraph) pl-3">
        Iskustvo i ciljevi:
      </p>
      <div
        id="goal"
        className="w-full flex flex-col items-center gap-5 text-md text-(--text-secondary) pl-6"
      >
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Gubitak kilograma")}
            value="Gubitak kilograma"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] cursor-pointer flex items-center justify-center ${formData?.mainGoals?.includes("Gubitak kilograma") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Gubitak kilograma") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Gubitak kilograma</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Izgradnja mišića")}
            value="Izgradnja mišića"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] cursor-pointer flex items-center justify-center ${formData?.mainGoals?.includes("Izgradnja mišića") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Izgradnja mišića") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Izgradnja mišića</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Poboljšanje kondicije")}
            value="Poboljšanje kondicije"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] cursor-pointer flex items-center justify-center ${formData?.mainGoals?.includes("Poboljšanje kondicije") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Poboljšanje kondicije") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Poboljšanje kondicije</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Povećanje snage")}
            value="Povećanje snage"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] cursor-pointer flex items-center justify-center ${formData?.mainGoals?.includes("Povećanje snage") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Povećanje snage") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Povećanje snage</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            onClick={() => setGoal("Sportske performanse")}
            value="Sportske performanse"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] cursor-pointer flex items-center justify-center ${formData?.mainGoals?.includes("Sportske performanse") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Sportske performanse") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Sportske performanse</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Drugo")}
            value="Drugo"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] cursor-pointer flex items-center justify-center ${formData?.mainGoals?.includes("Drugo") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Drugo") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Drugo</p>
        </div>
      </div>
      <select
        name="experience"
        value={formData.experience}
        onChange={handleFormData}
        id="xp"
        className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main2)"
      >
        <option value="" className="">
          Nivo iskustva
        </option>
        <option value="Početnik" className="">
          Početnik
        </option>
        <option value="Srednji" className="">
          Srednji
        </option>
        <option value="Napredan" className="">
          Napredan
        </option>
      </select>
      <select
        name="availability"
        value={formData.availability}
        onChange={handleFormData}
        id="budget"
        className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main2)"
      >
        <option value="" className="">
          Kada biste želeli da počnete?
        </option>
        <option value="Što pre moguće" className="">
          Što pre moguće
        </option>
        <option value="U naredne 2 nedelje" className="">
          U naredne 2 nedelje
        </option>
        <option value="Sledeći mesec" className="">
          Sledeći mesec
        </option>
        <option value="Samo istražujem" className="">
          Samo istražujem
        </option>
      </select>
      <div className="w-full flex flex-row items-center justify-between">
        <button
          onClick={() => slideForm("prev")}
          type="button"
          className="flex flex-row items-center gap-1 px-5 py-2 rounded-full text-(--button-text) bg-(--main2) font-semibold cursor-pointer"
        >
          <IoIosArrowRoundBack className="text-2xl" />
          Nazad
        </button>
        <button
          onClick={() => slideForm("next")}
          type="button"
          className="flex flex-row items-center gap-1 px-5 py-2 rounded-full text-(--button-text) bg-(--main2) font-semibold cursor-pointer"
        >
          Dalje
          <IoIosArrowRoundForward className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TrainingDetails;
