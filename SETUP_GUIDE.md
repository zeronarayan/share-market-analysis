# Setup Guide - Smart Stock Market Analysis Platform

## Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from template
cp .env.example .env

# Update .env with your Supabase credentials
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
# ALPHA_VANTAGE_API_KEY=your_api_key
# FINNHUB_API_KEY=your_api_key

# Start development server
npm run dev
```

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm start
```

### 3. Database Setup (Supabase)

1. Create a Supabase account at https://supabase.com
2. Create a new project
3. Run the SQL migrations from `migrations/` folder
4. Copy your Project URL and Anon Key to `.env` files

## Architecture Overview

### Frontend Architecture
- **React 18** for UI
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **TanStack Query** for server state management
- **Zustand** for client state
- **Recharts** for data visualization

### Backend Architecture
- **Express.js** for REST API
- **Supabase** for database and auth
- **Redis** for caching
- **Bull** for job queues

### AI Integration
- Browser-mode generative AI for research
- Real-time company analysis
- Market sentiment analysis
- News summarization

## Key Features to Implement

### Phase 1 - Core Features
- [ ] Stock price tracking
- [ ] Portfolio management
- [ ] Watchlist functionality
- [ ] Basic technical analysis

### Phase 2 - Advanced Analytics
- [ ] RSI, MACD, Bollinger Bands
- [ ] Fundamental analysis metrics
- [ ] Pattern recognition
- [ ] Price alerts

### Phase 3 - AI & Research
- [ ] Browser-mode AI integration
- [ ] Automated company research
- [ ] Sentiment analysis
- [ ] Predictive analytics

## API Integration

### Stock Data Sources
1. **Alpha Vantage** (Free tier: 5 calls/min)
   - Real-time stock quotes
   - Intraday/Daily/Weekly/Monthly data
   - Technical indicators

2. **Finnhub** (Free tier: 60 calls/min)
   - Company profile
   - News
   - Earnings calendar

3. **IEX Cloud** (Free tier available)
   - Quote data
   - Company info
   - Historical data

## Database Schema

### Key Tables
- `users` - User accounts
- `portfolios` - User portfolios
- `holdings` - Stock positions
- `watchlists` - Saved watchlists
- `alerts` - Price alerts
- `transactions` - Trade history
- `research_notes` - AI research data

## Deployment

### Frontend
```bash
npm run build
# Deploy to Vercel or Netlify
```

### Backend
```bash
npm run build
# Deploy to Railway, Render, or DigitalOcean
```

## Development Tips

1. Use TypeScript for type safety
2. Follow RESTful API conventions
3. Implement proper error handling
4. Add logging for debugging
5. Use environment variables for sensitive data
6. Test thoroughly before deployment

## Troubleshooting

### Common Issues

1. **API Rate Limiting**
   - Implement caching with Redis
   - Use exponential backoff for retries

2. **Supabase Connection**
   - Check credentials in .env
   - Verify network connectivity
   - Check RLS policies

3. **UI Performance**
   - Use React.memo for expensive components
   - Implement virtual scrolling for large lists
   - Optimize data fetching

## Support

For issues or questions:
1. Check documentation
2. Review error logs
3. Open an issue on GitHub

## Next Steps

1. Set up Supabase database
2. Configure API keys
3. Implement stock data fetching
4. Build UI components
5. Add technical analysis
6. Integrate AI research tools
7. Deploy to production

Happy coding! 🚀
