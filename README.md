# Smart Stock Market Analysis Platform

An intelligent, full-stack stock market analysis application with advanced technical analysis, fundamental analysis, AI-powered research, and predictive analytics.

## 🎯 Features

### Core Analytics
- **Real-time Stock Price Tracking** - Live price updates and historical data
- **Technical Analysis** - RSI, MACD, Moving Averages, Bollinger Bands, Stochastic Oscillator
- **Fundamental Analysis** - P/E Ratio, EPS, Dividend Yield, ROE, Debt-to-Equity
- **Pattern Recognition** - Support/Resistance levels, Candlestick patterns

### Smart Features
- **AI-Powered Research** - Browser-based generative AI for company research
- **Predictive Analytics** - Price forecasting and trend analysis
- **Portfolio Management** - Track holdings, performance, and allocation
- **Watchlist & Alerts** - Custom alerts for price movements and technical signals
- **Market News** - Aggregated financial news and updates
- **Company Dashboard** - Complete company information and metrics

### User Experience
- **Interactive Charts** - Candlestick, line, and area charts
- **Advanced Filtering** - Filter by sector, market cap, performance
- **Comparison Tools** - Compare multiple stocks side-by-side
- **Export Reports** - Generate analysis reports in PDF/CSV

## 🏗️ Project Structure

```
share-market-analysis/
├── frontend/                    # React + TypeScript application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Charts/
│   │   │   ├── Analysis/
│   │   │   ├── Portfolio/
│   │   │   ├── Research/
│   │   │   └── Common/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── context/
│   │   └── App.tsx
│   ├── public/
│   └── package.json
│
├── backend/                     # Node.js + Express API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── config/
│   │   └── server.ts
│   ├── migrations/
│   └── package.json
│
├── shared/                      # Shared types and utilities
│   ├── types/
│   └── constants/
│
├── docker-compose.yml
├── .env.example
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **TanStack Query** - Data fetching
- **Zustand** - State management
- **Chart.js/Recharts** - Data visualization
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Supabase** - Database & Auth
- **Redis** - Caching
- **Bull** - Job queue

### AI & Research
- **Browser-based Generative AI** - Integrated in frontend for research
- **Web Scraping** - For market data and news
- **Data Processing** - Advanced analytics algorithms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Git

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/zeronarayan/share-market-analysis.git
   cd share-market-analysis
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Fill in your Supabase credentials
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   npm start
   ```

## 📊 API Endpoints

### Stock Data
- `GET /api/stocks/:symbol` - Get stock details
- `GET /api/stocks/:symbol/price` - Get current price
- `GET /api/stocks/:symbol/history` - Get historical data
- `GET /api/stocks/:symbol/technical-analysis` - Get technical indicators
- `GET /api/stocks/:symbol/fundamental-analysis` - Get fundamental metrics

### Portfolio
- `GET /api/portfolio` - Get user portfolio
- `POST /api/portfolio/add` - Add stock to portfolio
- `DELETE /api/portfolio/:id` - Remove from portfolio
- `PUT /api/portfolio/:id` - Update position

### Research
- `GET /api/research/:symbol` - AI-powered company research
- `GET /api/news/:symbol` - Latest news
- `GET /api/sentiment/:symbol` - Market sentiment analysis

### Watchlist
- `GET /api/watchlist` - Get user watchlist
- `POST /api/watchlist` - Add to watchlist
- `DELETE /api/watchlist/:id` - Remove from watchlist

## 💡 Key Concepts Implemented

### Technical Analysis
1. **Moving Averages** - SMA, EMA
2. **Momentum Indicators** - RSI, MACD, Stochastic
3. **Volatility** - Bollinger Bands, ATR
4. **Trend Analysis** - Support/Resistance, Trendlines
5. **Volume Analysis** - Volume trends, On-Balance Volume

### Fundamental Analysis
1. **Valuation Ratios** - P/E, P/B, PEG, EV/EBITDA
2. **Profitability** - ROE, ROA, Profit Margins
3. **Efficiency** - Asset Turnover, Receivables Turnover
4. **Liquidity** - Current Ratio, Quick Ratio
5. **Solvency** - Debt Ratios, Interest Coverage

### AI Research Features
- **Company Analysis** - Automatic company research using browser AI
- **Market Research** - Trend analysis and market research
- **News Analysis** - Sentiment analysis and news summarization
- **Risk Assessment** - Automated risk evaluation
- **Investment Recommendations** - AI-powered suggestions

## 🔐 Security

- JWT authentication via Supabase
- Row-Level Security (RLS) for Supabase
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Environment variable management

## 📈 Database Schema

### Tables
- `users` - User profiles
- `portfolios` - User portfolios
- `holdings` - Stock holdings
- `watchlists` - User watchlists
- `watchlist_items` - Stocks in watchlists
- `alerts` - Price alerts
- `research_notes` - AI research notes
- `transactions` - Trade history

## 🔄 Real-time Updates

- WebSocket connection for live price updates
- Real-time portfolio value changes
- Instant alert notifications
- Live market data streaming

## 📊 Data Sources

- Alpha Vantage (Free tier available)
- IEX Cloud
- Finnhub
- Financial news APIs
- Web scraping for additional data

## 🤖 AI Integration

The application integrates generative AI tools in **browser mode** for:
- Autonomous company research
- Market analysis and reports
- Investment insights
- Risk assessment
- News summarization

## 📝 Development Workflow

1. Feature branches from `main`
2. Pull request reviews
3. CI/CD pipeline with GitHub Actions
4. Automated testing
5. Deployment to production

## 🧪 Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# E2E tests
npm run test:e2e
```

## 📦 Deployment

- **Frontend**: Vercel or Netlify
- **Backend**: Railway, Render, or DigitalOcean
- **Database**: Supabase (hosted)
- **Caching**: Redis Cloud

## 📄 License

MIT License - feel free to use this project for commercial and personal purposes.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests.

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ for smart investors**
