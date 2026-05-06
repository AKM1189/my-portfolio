import { EmailRequestError, sendPortfolioEmail } from "../lib/send-email.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const result = await sendPortfolioEmail(req.body || {});
    return res.status(200).json(result);
  } catch (error) {
    const statusCode = error instanceof EmailRequestError ? error.status : 500;

    return res.status(statusCode).json({
      error:
        error instanceof EmailRequestError
          ? error.message
          : error?.message || "Failed to send email.",
    });
  }
}
