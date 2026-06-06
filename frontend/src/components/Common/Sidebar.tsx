import { BarChart3, TrendingUp, Briefcase, BookmarkCheck, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BarChart3 /> StockPro
        </h1>
        <p className="text-sm text-gray-400">Smart Market Analysis</p>
      </div>

      <nav className="space-y-2">
        <NavItem icon={<TrendingUp />} label="Dashboard" href="/" />
        <NavItem icon={<Briefcase />} label="Portfolio" href="/portfolio" />
        <NavItem icon={<BookmarkCheck />} label="Watchlist" href="/watchlist" />
        <NavItem icon={<Lightbulb />} label="Research" href="/research" />
      </nav>
    </aside>
  );
}

function NavItem({ icon, label, href }: any) {
  return (
    <Link
      to={href}
      className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition"
    >
      {icon}
      {label}
    </Link>
  );
}
