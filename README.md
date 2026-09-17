# SupplySync AI

AI-powered supply chain operations platform for supplier risk monitoring, inventory posture, procurement intelligence, and operational resilience.

## Production-ready MVP foundation
This repo now includes:
- landing page
- login and signup screens
- overview dashboard
- supplier, inventory, order, and insights views
- environment configuration for Supabase and OpenAI
- mock data fallback for local demos

## Tech stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase-ready client setup

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npm run dev
   ```

3. Open: http://localhost:3000

## Environment setup
Create a `.env.local` file with the following:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
OPENAI_API_KEY=your-openai-key
```

If Supabase keys are not configured yet, the interface still works using local mock data so the app can run in development.

## What’s next for full production
- configure Supabase auth and tables
- build supplier CRUD and inventory storage
- add CSV upload and ERP data connectors
- connect OpenAI-powered recommendation engine
- deploy to Vercel and attach environment variables

## Recommended database schema
- `companies`
- `users`
- `suppliers`
- `inventory`
- `purchase_orders`
- `alerts`
- `recommendations`
- `insights`

This repo gives you a strong product foundation that is ready for the next production integration step.
