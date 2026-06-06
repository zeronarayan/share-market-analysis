import { useState, useEffect } from 'react';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // TODO: Fetch watchlist from Supabase
    setWatchlist([
      { id: 1, symbol: 'TSLA', price: 242.3, change: -8.5, changePercent: -3.4 },
      { id: 2, symbol: 'AMZN', price: 170.5, change: 3.2, changePercent: 1.9 },
      { id: 3, symbol: 'NFLX', price: 445.2, change: 12.1, changePercent: 2.8 },
    ]);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Watchlist</h1>
        <p className="text-gray-600 mt-2">Follow your favorite stocks</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Watched Stocks</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            + Add Stock
          </button>
        </div>
        <div className="grid gap-4">
          {watchlist.map((stock: any) => (
            <div key={stock.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <p className="font-semibold text-lg">{stock.symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">${stock.price.toFixed(2)}</p>
                <p className={stock.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
