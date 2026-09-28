import validator from "validator";

export const normalizeEmail = (email) => {
  return validator.normalizeEmail(email);
};
