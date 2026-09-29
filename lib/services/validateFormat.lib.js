import validator from "validator";
import { ContactError } from "../http/ContactError.lib.js";

export const validateFormat = (formData) => {
  const { name, lastName, email, phoneNumber, mainGoals, budget, message } =
    formData;

  if (!name) {
    throw new ContactError(400, "Polje za ime je obavezno.");
  }

  if (name.length < 2 || name.length > 50) {
    throw new ContactError(
      400,
      "Ime mora biti dužine između 2 i 50 karaktera.",
    );
  }

  if (!lastName) {
    throw new ContactError(400, "Polje za prezime je obavezno.");
  }

  if (lastName.length < 2 || lastName.length > 50) {
    throw new ContactError(
      400,
      "Prezime mora biti dužine između 2 i 50 karaktera.",
    );
  }

  if (!email) {
    throw new ContactError(400, "E-mail polje je obavezno.");
  }

  if (!validator.isEmail(email)) {
    throw new ContactError(400, "E-mail format nije validan");
  }

  if (phoneNumber.length > 15) {
    throw new ContactError(400, "Broj telefona nije validan");
  }

  if (mainGoals.length < 1) {
    throw new ContactError(400, "Najmanje jedan cilj je obavezan.");
  }

  if (!budget) {
    throw new ContactError(400, "Informacije o budžetu su obavezne.");
  }

  if (message.length > 1000) {
    throw new ContactError(400, "Poruka ne sme biti duža od 1000 karaktera.");
  }
};
