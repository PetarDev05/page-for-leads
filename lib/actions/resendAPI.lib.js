import { Resend } from "resend";
import { dataEmailTemplate } from "../emails/dataEmailFormat.lib.js";

export const resendAPI = async (sanitizedData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const html = dataEmailTemplate(sanitizedData);
  const { data, error } = await resend.emails.send({
    from: `${process.env.VALID_DOMAIN}`,
    to: [`${sanitizedData.email}`],
    subject: "Nova prijava sa kontakt stranice",
    html,
  });

  if (error) {
    throw new Error();
  }

  return data;
};
