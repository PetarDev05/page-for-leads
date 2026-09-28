import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useAppContext } from "../../hooks/useAppContext.hooks.jsx";
import { FaCheck } from "react-icons/fa";

const TrainingDetails = () => {
  const { slideForm, formData, setGoal, handleFormData } = useAppContext();

  return (
    <div className="w-full flex flex-col items-end gap-7 text-(--form-text)">
      <p className="w-full text-lg text-(--paragraph) pl-3">
        Training details *:
      </p>
      <div
        id="goal"
        className="w-full flex flex-col items-center gap-5 text-md text-(--text-secondary) pl-6"
      >
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Weight Loss")}
            value="Weight Loss"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] flex items-center justify-center ${formData?.mainGoals?.includes("Weight Loss") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Weight Loss") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Weight Loss</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Building Muscle")}
            value="Building Muscle"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] flex items-center justify-center ${formData?.mainGoals?.includes("Building Muscle") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Building Muscle") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Building Muscle</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Improving Cardio")}
            value="Improving Cardio"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] flex items-center justify-center ${formData?.mainGoals?.includes("Improving Cardio") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Improving Cardio") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Improving Cardio</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Increasing Strength")}
            value="Increasing Strength"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] flex items-center justify-center ${formData?.mainGoals?.includes("Increasing Strength") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Increasing Strength") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Increasing Strength</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            onClick={() => setGoal("Sports Performance")}
            value="Sports Performance"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] flex items-center justify-center ${formData?.mainGoals?.includes("Sports Performance") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Sports Performance") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Sports Performance</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3">
          <span
            name="mainGoals"
            onClick={() => setGoal("Other")}
            value="Other"
            className={`w-4.5 h-4.5 border border-(--main2) rounded-[3px] flex items-center justify-center ${formData?.mainGoals?.includes("Other") ? "bg-(--main2)" : ""}`}
          >
            {formData?.mainGoals?.includes("Other") ? (
              <FaCheck className="text-[10px] text-white" />
            ) : (
              ""
            )}
          </span>
          <p className="text-(--paragraph)">Other</p>
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
          Experience Level
        </option>
        <option value="Begginer" className="">
          Begginer
        </option>
        <option value="Intermadiate" className="">
          Intermadiate
        </option>
        <option value="Advanced" className="">
          Advanced
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
          When would you like to start?
        </option>
        <option value="As soon as possible" className="">
          As soon as possible
        </option>
        <option value="In the next 2 weeks" className="">
          In the next 2 weeks
        </option>
        <option value="Next month" className="">
          Next month
        </option>
        <option value="Just exploring" className="">
          Just exploring
        </option>
      </select>
      <div className="w-full flex flex-row items-center justify-between">
        <button
          onClick={() => slideForm("prev")}
          type="button"
          className="flex flex-row items-center gap-1 px-5 py-2 rounded-full text-(--button-text) bg-(--main2) font-semibold cursor-pointer"
        >
          <IoIosArrowRoundBack className="text-2xl" />
          Back
        </button>
        <button
          onClick={() => slideForm("next")}
          type="button"
          className="flex flex-row items-center gap-1 px-5 py-2 rounded-full text-(--button-text) bg-(--main2) font-semibold cursor-pointer"
        >
          Next
          <IoIosArrowRoundForward className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TrainingDetails;
