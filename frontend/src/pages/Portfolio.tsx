import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    // TODO: Fetch portfolio from Supabase
    setHoldings([
      { id: 1, symbol: 'AAPL', quantity: 10, buyPrice: 150, currentPrice: 180.5, value: 1805 },
      { id: 2, symbol: 'GOOGL', quantity: 5, buyPrice: 135, currentPrice: 140.2, value: 701 },
    ]);
  }, []);

  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);
  const totalInvested = holdings.reduce((sum, h) => sum + (h.quantity * h.buyPrice), 0);
  const totalGain = totalValue - totalInvested;
  const gainPercent = ((totalGain / totalInvested) * 100).toFixed(2);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
        <p className="text-gray-600 mt-2">Manage your stock holdings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Total Value</p>
          <p className="text-3xl font-bold text-blue-600">${totalValue.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm">Total Invested</p>
          <p className="text-3xl font-bold">${totalInvested.toFixed(2)}</p>
        </div>
        <div className={`bg-white p-6 rounded-lg shadow`}>
          <p className="text-gray-600 text-sm">Total Gain/Loss</p>
          <p className={`text-3xl font-bold ${totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${totalGain.toFixed(2)} ({gainPercent}%)
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Holdings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Symbol</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">Buy Price</th>
                <th className="text-left py-3 px-4">Current Price</th>
                <th className="text-left py-3 px-4">Total Value</th>
                <th className="text-left py-3 px-4">Gain/Loss</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding: any) => {
                const gain = holding.value - (holding.quantity * holding.buyPrice);
                const gainPercent = ((gain / (holding.quantity * holding.buyPrice)) * 100).toFixed(2);
                return (
                  <tr key={holding.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold">{holding.symbol}</td>
                    <td className="py-3 px-4">{holding.quantity}</td>
                    <td className="py-3 px-4">${holding.buyPrice.toFixed(2)}</td>
                    <td className="py-3 px-4">${holding.currentPrice.toFixed(2)}</td>
                    <td className="py-3 px-4">${holding.value.toFixed(2)}</td>
                    <td className={`py-3 px-4 ${gain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${gain.toFixed(2)} ({gainPercent}%)
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
