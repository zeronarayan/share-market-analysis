import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function StockDetail() {
  const { symbol } = useParams();
  const [stock, setStock] = useState<any>(null);

  useEffect(() => {
    // TODO: Fetch detailed stock data
    setStock({
      symbol,
      name: 'Apple Inc.',
      price: 180.5,
      change: 2.5,
      changePercent: 1.4,
      highToday: 182.3,
      lowToday: 178.9,
      volume: 52300000,
      marketCap: '2.8T',
      peRatio: 28.5,
      dividendYield: 0.42,
    });
  }, [symbol]);

  if (!stock) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">{stock.symbol}</h1>
          <p className="text-gray-600">{stock.name}</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold">${stock.price.toFixed(2)}</p>
          <p className={stock.change > 0 ? 'text-green-600' : 'text-red-600'}>
            {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">High Today</p>
          <p className="text-2xl font-bold">${stock.highToday.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Low Today</p>
          <p className="text-2xl font-bold">${stock.lowToday.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Volume</p>
          <p className="text-2xl font-bold">{(stock.volume / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Market Cap</p>
          <p className="text-2xl font-bold">{stock.marketCap}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Technical Analysis</h2>
        {/* TODO: Add technical indicators chart */}
        <p className="text-gray-600">RSI, MACD, Moving Averages, Bollinger Bands will be displayed here</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Fundamental Analysis</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-gray-600 text-sm">P/E Ratio</p>
            <p className="text-2xl font-bold">{stock.peRatio}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Dividend Yield</p>
            <p className="text-2xl font-bold">{stock.dividendYield}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
