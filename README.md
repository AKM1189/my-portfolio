# My Portfolio

Personal portfolio built with React + Vite + Tailwind.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contact Email (Resend)

Create `.env` from `.env.example` and set:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (must be a verified sender on Resend)
- `CONTACT_TO_EMAIL` (your inbox)

The contact form posts to `/api/send-email`.

For deployment, use a platform that supports serverless API routes (for example Vercel) so `api/send-email.js` can run securely.
