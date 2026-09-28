import { IoIosArrowRoundBack } from "react-icons/io";
import { useAppContext } from "../../hooks/useAppContext.hooks.jsx";
import { RiLoaderLine, RiSendInsLine } from "react-icons/ri";

const ContactInformationAndBudget = () => {
  const { slideForm, formData, handleFormData, loading } = useAppContext();

  return (
    <div className="w-full flex flex-col items-end gap-7 text-(--form-text)">
      <p className="w-full text-lg text-(--paragraph) pl-3">
        Contact Information:
      </p>
      <input
        type="email"
        name="email"
        onChange={handleFormData}
        value={formData.email}
        className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main3)"
        placeholder="E-mail *"
      />
      <input
        type="phone"
        name="phoneNumber"
        onChange={handleFormData}
        value={formData.phoneNumber}
        className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main3)"
        placeholder="Phone Number *"
      />
      <div className="w-full flex flex-col items-center gap-3">
        <select
          name="budget"
          onChange={handleFormData}
          value={formData.budget}
          id="budget"
          className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main3)"
        >
          <option value="">Current budget *</option>
          <option value="Ispod $50">Under $50</option>
          <option value="$50 - $100">$50 - $100</option>
          <option value="$100 - $200">$100 - $200</option>
          <option value="Preko $200">Above $200</option>
        </select>
      </div>
      <textarea
        name="message"
        onChange={handleFormData}
        value={formData.message}
        id=""
        className="w-full flex-1 min-w-0 px-5 py-2 rounded-2xl text-(--paragraph) border border-(--border) outline-none focus:border-(--main3) min-h-30 resize-none"
        placeholder="Any questions?"
      ></textarea>
      <input
        id="username"
        onChange={handleFormData}
        value={formData.username}
        type="text"
        name="username"
      />
      <div className="w-full flex flex-row items-center justify-between">
        <button
          onClick={() => slideForm("prev")}
          type="button"
          className="flex flex-row items-center gap-1 px-5 py-2 rounded-full text-(--button-text) bg-(--main3) font-semibold cursor-pointer"
        >
          <IoIosArrowRoundBack className="text-2xl" />
          Back
        </button>
        <button
          type="submit"
          className="flex flex-row items-center gap-3 px-5 py-2 rounded-full text-(--button-text) bg-(--main3) font-semibold cursor-pointer"
        >
          {loading ? (
            <RiLoaderLine className="animate-spin text-lg text-(--white)" />
          ) : (
            <>
              Submit
              <RiSendInsLine className="text-lg" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactInformationAndBudget;
