import { useAppContext } from "../hooks/useAppContext.hooks.jsx";
import ContactInformationAndBudget from "./units/ContactInformationAndBudget.components.jsx";
import PersonalInformation from "./units/PersonalInformation.components.jsx";
import TrainingDetails from "./units/TrainingDetails.components.jsx";

const ContactForm = () => {
  const { formStage, handleSubmit, error } = useAppContext();

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-110 rounded-2xl p-8 shadow-[0px_0px_5px_var(--border)] z-10"
    >
      <h2
        className={`py-5 pl-3 text-2xl ${formStage === 1 ? "text-(--main1)" : formStage === 2 ? "text-(--main2)" : "text-(--main3)"}`}
      >
        Step: {formStage} / 3
      </h2>
      {formStage === 1 && <PersonalInformation />}
      {formStage === 2 && <TrainingDetails />}
      {formStage === 3 && <ContactInformationAndBudget />}
      <p
        className={`text-sm ${formStage === 1 ? "text-(--main1)" : formStage === 2 ? "text-(--main2)" : "text-(--main3)"}  mt-5`}
      >
        Fields marked with * are required
      </p>
      {error && <p className="">{error.message}</p>}
    </form>
  );
};

export default ContactForm;
