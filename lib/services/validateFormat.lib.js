import validator from "validator";
import { ContactError } from "../http/ContactError.lib.js";

export const validateFormat = (formData) => {
  const { name, lastName, email, phoneNumber, mainGoals, budget, message } =
    formData;

  if (!name) {
    throw new ContactError(400, "Name field is required.");
  }

  if (name.length < 2 || name.length > 50) {
    throw new ContactError(
      400,
      "Name must be between 2 and 50 characters long.",
    );
  }

  if (!lastName) {
    throw new ContactError(400, "Lastname field is required.");
  }

  if (lastName.length < 2 || lastName.length > 50) {
    throw new ContactError(
      400,
      "Lastname must be between 2 and 50 characters long.",
    );
  }

  if (!email) {
    throw new ContactError(400, "E-mail field is required.");
  }

  if (!validator.isEmail(email)) {
    throw new ContactError(400, "E-mail format is not valid");
  }

  if (phoneNumber.length > 15) {
    throw new ContactError(400, "Phone number format is not valid");
  }

  if (mainGoals.length < 1) {
    throw new ContactError(400, "At least one goal is required.");
  }

  if (!budget) {
    throw new ContactError(400, "Budget information is required.");
  }

  if (message.length > 1000) {
    throw new ContactError(400, "Message must be under 1000 characters long.");
  }
};
