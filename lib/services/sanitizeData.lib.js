import { sanitizeString } from "../utils/sanitizeString.lib.js";
import { normalizeEmail } from "../utils/normalizeEmail.lib.js";

export const sanitizeData = (formData) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    mainGoals,
    experience,
    availability,
    age,
    gender,
    weight,
    height,
    budget,
    message,
  } = formData;



  const sanitizedName = sanitizeString(name);
  const sanitizedLastName = sanitizeString(lastName);
  const sanitizedEmail = normalizeEmail(email);
  const sanitizedPhoneNumber = normalizeEmail(phoneNumber);

  // sanitize goals
  let sanitizedGoals = [];

  mainGoals.forEach((goal) => {
    const sanitizedGoal = sanitizeString(goal);
    sanitizedGoals.push(sanitizedGoal);
  });

  const sanitizedExperience = sanitizeString(experience);
  const sanitizedAvailability = sanitizeString(availability);
  const sanitizedAge = sanitizeString(age);
  const sanitizedGender = sanitizeString(gender);
  const sanitizedWeight = sanitizeString(weight);
  const sanitizedHeight = sanitizeString(height);
  const sanitizedBudget = sanitizeString(budget);
  const sanitizedMessage = sanitizeString(message);

  return {
    name: sanitizedName,
    lastName: sanitizedLastName,
    email: sanitizedEmail,
    phoneNumber: sanitizedPhoneNumber,
    mainGoals: sanitizedGoals,
    experience: sanitizedExperience,
    availability: sanitizedAvailability,
    age: sanitizedAge,
    gender: sanitizedGender,
    weight: sanitizedWeight,
    height: sanitizedHeight,
    budget: sanitizedBudget,
    message: sanitizedMessage,
  };
};
