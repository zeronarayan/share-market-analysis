import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function Dashboard() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // TODO: Fetch market overview and trending stocks
    setStocks([
      { symbol: 'AAPL', price: 180.5, change: 2.5, changePercent: 1.4 },
      { symbol: 'GOOGL', price: 140.2, change: -1.2, changePercent: -0.8 },
      { symbol: 'MSFT', price: 380.1, change: 5.8, changePercent: 1.5 },
      { symbol: 'TSLA', price: 242.3, change: -8.5, changePercent: -3.4 },
    ]);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Market Overview & Analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Market Status</p>
          <p className="text-2xl font-bold text-green-600">Open</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Top Gainer</p>
          <p className="text-2xl font-bold text-green-600">MSFT +1.5%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Top Loser</p>
          <p className="text-2xl font-bold text-red-600">TSLA -3.4%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Portfolio Value</p>
          <p className="text-2xl font-bold text-blue-600">$45,230</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Trending Stocks</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Symbol</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Change</th>
                <th className="text-left py-3 px-4">% Change</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock: any) => (
                <tr key={stock.symbol} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-semibold">{stock.symbol}</td>
                  <td className="py-3 px-4">${stock.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className={stock.change > 0 ? 'text-green-600' : 'text-red-600'}>
                      {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={stock.changePercent > 0 ? 'text-green-600' : 'text-red-600'}>
                      {stock.changePercent > 0 ? <TrendingUp className="inline" /> : <TrendingDown className="inline" />}
                      {stock.changePercent.toFixed(2)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
