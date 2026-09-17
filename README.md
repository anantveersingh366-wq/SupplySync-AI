# SupplySync AI

AI-powered supply chain operations platform for supplier risk monitoring, inventory posture, procurement intelligence, and operational resilience.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The demo is fully usable without external services: create an account or sign in with any valid email and a password, then explore the overview, supplier, inventory, order, and AI insight views.

## Production setup

Copy `.env.example` to `.env.local` and add Supabase credentials. The current demo stores the session in browser storage and uses mock data; the next production step is replacing that demo session with Supabase Auth and connecting the recommended tables (`companies`, `users`, `suppliers`, `inventory`, `purchase_orders`, `alerts`, `recommendations`, and `insights`).
