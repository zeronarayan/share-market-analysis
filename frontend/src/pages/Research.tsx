import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Research() {
  const { symbol } = useParams();
  const [research, setResearch] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch AI-powered research using browser-mode generative AI
    setLoading(true);
    setTimeout(() => {
      setResearch({
        symbol,
        companyOverview: 'This is where AI-generated company overview will appear',
        businessModel: 'Detailed business model analysis',
        competitiveAdvantage: 'Unique competitive advantages',
        risks: ['Market competition', 'Regulatory changes', 'Economic downturn'],
        opportunities: ['Market expansion', 'Product innovation', 'Strategic partnerships'],
        investment_thesis: 'AI-generated investment thesis',
        sentiment: 'Bullish',
        sentimentScore: 0.75,
      });
      setLoading(false);
    }, 2000);
  }, [symbol]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-xl text-gray-600">🤖 AI Research in progress...</p>
          <p className="text-gray-500 mt-2">Analyzing {symbol} using advanced AI tools</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Research: {symbol}</h1>
        <p className="text-gray-600 mt-2">AI-Powered Analysis & Insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Market Sentiment</p>
          <p className={`text-3xl font-bold ${research.sentiment === 'Bullish' ? 'text-green-600' : 'text-red-600'}`}>
            {research.sentiment}
          </p>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${research.sentimentScore * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Company Overview</h2>
          <p className="text-gray-700">{research.companyOverview}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Business Model</h2>
          <p className="text-gray-700">{research.businessModel}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Competitive Advantages</h2>
          <p className="text-gray-700">{research.competitiveAdvantage}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Investment Thesis</h2>
          <p className="text-gray-700">{research.investment_thesis}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Risks</h2>
          <ul className="space-y-2">
            {research.risks.map((risk: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Opportunities</h2>
          <ul className="space-y-2">
            {research.opportunities.map((opp: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">{opp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
