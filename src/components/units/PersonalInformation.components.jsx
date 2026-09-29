import { IoIosArrowRoundForward } from "react-icons/io";
import { useAppContext } from "../../hooks/useAppContext.hooks.jsx";

const PersonalInformation = () => {
  const { slideForm, formData, handleFormData } = useAppContext();

  return (
    <div className="w-full flex flex-col items-end gap-7 text-(--form-text)">
      <p className="w-full text-lg text-(--paragraph) pl-3">
        Lični podaci:
      </p>
      <input
        name="name"
        onChange={handleFormData}
        value={formData.name}
        type="text"
        className="w-full px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main1)"
        placeholder="Ime *"
      />
      <input
        type="text"
        name="lastName"
        onChange={handleFormData}
        value={formData.lastName}
        className="w-full px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main1)"
        placeholder="Prezime *"
      />
      <div className="w-full flex flex-col min-[500px]:flex-row items-center gap-7">
        <input
          name="age"
          onChange={handleFormData}
          value={formData.age}
          type="number"
          className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main1)"
          placeholder="Starost"
        />
        <select
          name="gender"
          onChange={handleFormData}
          value={formData.gender}
          className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main1)"
        >
          <option value="">Rod</option>
          <option value="Muški">Muški</option>
          <option value="Ženski">Ženski</option>
        </select>
      </div>
      <div className="w-full flex flex-col min-[500px]:flex-row items-center gap-7">
        <input
          name="weight"
          onChange={handleFormData}
          value={formData.weight}
          type="number"
          className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main1)"
          placeholder="Težina (kg)"
        />
        <input
          name="height"
          onChange={handleFormData}
          value={formData.height}
          type="number"
          className="w-full flex-1 min-w-0 px-5 py-2 rounded-full text-(--paragraph) border border-(--border) outline-none focus:border-(--main1)"
          placeholder="Visina (cm)"
        />
      </div>
      <button
        onClick={() => slideForm("next")}
        type="button"
        className="flex flex-row items-center gap-1 px-5 py-2 rounded-full text-(--button-text) bg-(--main1) font-semibold cursor-pointer"
      >
        Dalje
        <IoIosArrowRoundForward className="text-2xl" />
      </button>
    </div>
  );
};

export default PersonalInformation;
