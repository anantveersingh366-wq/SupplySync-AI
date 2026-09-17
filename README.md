# SupplySync AI

A startup-ready MVP for an AI-powered supply chain operations and supplier risk platform.

## What is included
- Supplier risk overview dashboard
- Inventory monitoring
- Procurement and order tracking
- AI insight cards and recommendations
- Multi-page operational interface
- Mocked data for a complete demo experience

## Tech stack
- Next.js 14
- TypeScript
- Tailwind CSS

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

## Project structure
- `app/` — dashboard and page routes
- `components/` — shared UI blocks
- `lib/` — mock data and domain information

## Deployment notes
For production launch, use:
- Vercel for hosting
- Supabase for authentication and database
- OpenAI for AI recommendations

### Example env configuration
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPENAI_API_KEY=
```

## Next steps to make it production-ready
- add authentication and workspace management
- connect real supplier and inventory data
- add CSV upload and ERP imports
- add AI recommendation API using OpenAI
- deploy to Vercel and connect Supabase

This repo is ready to run locally as a working MVP demo.
