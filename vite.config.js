import process from "node:process";
import { Buffer } from "node:buffer";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { EmailRequestError, sendPortfolioEmail } from "./lib/send-email.js";

const readJsonBody = async (req) => {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");

  if (!rawBody) {
    return {};
  }

  try {
    return JSON.parse(rawBody);
  } catch {
    throw new EmailRequestError("Invalid JSON request body.", 400);
  }
};

const sendJson = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

const devEmailApiPlugin = (mode) => ({
  name: "dev-email-api",
  configureServer(server) {
    const env = loadEnv(mode, process.cwd(), "");
    Object.assign(process.env, env);

    server.middlewares.use("/api/send-email", async (req, res) => {
      if (req.method !== "POST") {
        sendJson(res, 405, { error: "Method not allowed." });
        return;
      }

      try {
        const payload = await readJsonBody(req);
        const result = await sendPortfolioEmail(payload);
        sendJson(res, 200, result);
      } catch (error) {
        const statusCode =
          error instanceof EmailRequestError ? error.status : 500;

        sendJson(res, statusCode, {
          error: error?.message || "Failed to send email.",
        });
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), devEmailApiPlugin(mode)],
}));
