import validator from "validator";

export const sanitizeString = (string) => {
  return validator.escape(string.trim());
};
