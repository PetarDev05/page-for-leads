import { resendAPI } from "../lib/actions/resendAPI.lib.js";
import { ContactError } from "../lib/http/ContactError.lib.js";
import { sanitizeData } from "../lib/services/sanitizeData.lib.js";
import { validateFormat } from "../lib/services/validateFormat.lib.js";

export default async function sendEmail(req, res) {
  try {
    if (req.method != "POST") {
      throw new Error("Neispravna metoda.");
    }

    if (req.body.username) {
      throw new Error("Pristup odbijen.");
    }

    const formData = req.body;

    // VALIDATE FORMAT
    validateFormat(formData);

    // SANITIZE DATA
    const sanitizedData = sanitizeData(formData);

    // SEND EMAIL
    const result = await resendAPI(sanitizedData);

    res.status(200).json({
      success: true,
      message: "Prijava je poslata. Javiću vam se uskoro.",
      data: result,
    });
  } catch (error) {
    if (error instanceof ContactError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Nešto nije u redu. Pokušaj te kasnije ponovo.",
    });
  }
}
