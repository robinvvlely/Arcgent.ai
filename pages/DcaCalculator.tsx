import React, { useMemo, useState } from 'react';
import { TrendingUp, DollarSign, CalendarDays, PiggyBank, Info, ArrowRight } from 'lucide-react';

// Real S&P 500 (^GSPC) month-open levels — the price you'd buy at on the 1st of each month.
// Source: Yahoo Finance historical data, snapshot 2026-05-19.
interface PricePoint { date: string; price: number; }

const SP500_MONTH_OPEN: PricePoint[] = [
  { date: '2024-06-01', price: 5297.15 },
  { date: '2024-07-01', price: 5471.08 },
  { date: '2024-08-01', price: 5537.84 },
  { date: '2024-09-01', price: 5623.89 },
  { date: '2024-10-01', price: 5757.73 },
  { date: '2024-11-01', price: 5723.22 },
  { date: '2024-12-01', price: 6040.11 },
  { date: '2025-01-01', price: 5903.26 },
  { date: '2025-02-01', price: 5969.65 },
  { date: '2025-03-01', price: 5968.33 },
  { date: '2025-04-01', price: 5597.53 },
  { date: '2025-05-01', price: 5625.14 },
  { date: '2025-06-01', price: 5896.68 },
  { date: '2025-07-01', price: 6187.25 },
  { date: '2025-08-01', price: 6287.28 },
  { date: '2025-09-01', price: 6401.51 },
  { date: '2025-10-01', price: 6664.92 },
  { date: '2025-11-01', price: 6882.32 },
  { date: '2025-12-01', price: 6812.30 },
  { date: '2026-01-01', price: 6878.11 },
  { date: '2026-02-01', price: 6916.64 },
  { date: '2026-03-01', price: 6824.36 },
  { date: '2026-04-01', price: 6556.56 },
  { date: '2026-05-01', price: 7234.54 },
];

const LATEST = { date: '2026-05-19', price: 7343.63 };

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

const pct = (n: number) => `${n >= 0 ? '+' : ''}${n.toFixed(2)}%`;

// Money-weighted return (XIRR). Cash flows: negative contributions on each buy date,
// positive total portfolio value on the valuation date. Returns the annual rate.
function xirr(flows: { date: string; amount: number }[]): number {
  const t0 = new Date(flows[0].date).getTime();
  const yearsFrom = (d: string) =>
    (new Date(d).getTime() - t0) / (365 * 24 * 3600 * 1000);
  const npv = (r: number) =>
    flows.reduce((s, f) => s + f.amount / Math.pow(1 + r, yearsFrom(f.date)), 0);

  let lo = -0.9999;
  let hi = 10;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (npv(mid) > 0) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

const DcaCalculator: React.FC = () => {
  const [monthly, setMonthly] = useState(1000);
  const [months, setMonths] = useState(12);

  const result = useMemo(() => {
    const amount = Number.isFinite(monthly) && monthly > 0 ? monthly : 0;
    const window = SP500_MONTH_OPEN.slice(-months);

    let totalShares = 0;
    const rows = window.map((p) => {
      const shares = amount / p.price;
      totalShares += shares;
      return {
        ...p,
        shares,
        invested: amount,
        valueNow: shares * LATEST.price,
      };
    });

    const totalInvested = amount * window.length;
    const currentValue = totalShares * LATEST.price;
    const gain = currentValue - totalInvested;
    const totalReturnPct = totalInvested > 0 ? (gain / totalInvested) * 100 : 0;

    const flows = [
      ...window.map((p) => ({ date: p.date, amount: -amount })),
      { date: LATEST.date, amount: currentValue },
    ];
    const annual = totalInvested > 0 ? xirr(flows) : 0;
    const monthlyRate = (Math.pow(1 + annual, 1 / 12) - 1) * 100;

    return {
      rows,
      totalInvested,
      currentValue,
      gain,
      totalReturnPct,
      monthlyRate,
      annualPct: annual * 100,
      first: window[0]?.date,
      last: window[window.length - 1]?.date,
    };
  }, [monthly, months]);

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[100px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-accent-50/60 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-semibold mb-8 shadow-sm">
            <TrendingUp className="w-4 h-4 mr-2 text-brand-600" />
            S&amp;P 500 Dollar-Cost Averaging Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight leading-tight">
            What if you'd invested{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">
              every month
            </span>
            ?
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Buying a fixed amount of the S&amp;P 500 on the 1st of every month, using
            real historical index levels. Adjust the inputs to see how your
            contributions would have grown.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100 overflow-hidden mb-10">
          <div className="h-2 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500"></div>
          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">
                Monthly investment (USD)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                <input
                  type="number"
                  min={0}
                  step={50}
                  value={monthly}
                  onChange={(e) => setMonthly(parseFloat(e.target.value))}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none"
                  placeholder="1000"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">
                Look-back period
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                <select
                  value={months}
                  onChange={(e) => setMonths(parseInt(e.target.value, 10))}
                  className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none appearance-none cursor-pointer"
                >
                  <option value={6}>Last 6 months</option>
                  <option value={12}>Last 12 months</option>
                  <option value={18}>Last 18 months</option>
                  <option value={24}>Last 24 months</option>
                </select>
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center mb-4">
              <PiggyBank size={22} />
            </div>
            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
              Total invested
            </p>
            <p className="text-2xl font-extrabold text-stone-900">
              {usd(result.totalInvested)}
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
              <DollarSign size={22} />
            </div>
            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
              Value today
            </p>
            <p className="text-2xl font-extrabold text-stone-900">
              {usd(result.currentValue)}
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                result.gain >= 0
                  ? 'bg-green-50 text-green-600'
                  : 'bg-accent-50 text-accent-600'
              }`}
            >
              <TrendingUp size={22} />
            </div>
            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
              Total gain
            </p>
            <p
              className={`text-2xl font-extrabold ${
                result.gain >= 0 ? 'text-green-600' : 'text-accent-600'
              }`}
            >
              {usd(result.gain)}
            </p>
            <p className="text-sm font-semibold text-stone-500 mt-1">
              {pct(result.totalReturnPct)} on contributions
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
              <CalendarDays size={22} />
            </div>
            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
              Return / month
            </p>
            <p
              className={`text-2xl font-extrabold ${
                result.monthlyRate >= 0 ? 'text-green-600' : 'text-accent-600'
              }`}
            >
              {pct(result.monthlyRate)}
            </p>
            <p className="text-sm font-semibold text-stone-500 mt-1">
              {pct(result.annualPct)} annualized
            </p>
          </div>
        </div>

        {/* Per-month breakdown */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold text-stone-900 mb-1">
              Month-by-month breakdown
            </h3>
            <p className="text-stone-500 text-sm mb-8">
              Each {usd(Number.isFinite(monthly) ? monthly : 0)} buys shares at that
              month's opening level, then valued at today's level ({LATEST.price.toLocaleString('en-US')}).
            </p>
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-sm min-w-[520px]">
                <thead>
                  <tr className="text-left text-stone-500 border-b border-stone-200">
                    <th className="py-3 px-2 font-semibold">Buy date</th>
                    <th className="py-3 px-2 font-semibold text-right">S&amp;P level</th>
                    <th className="py-3 px-2 font-semibold text-right">Shares</th>
                    <th className="py-3 px-2 font-semibold text-right">Value today</th>
                    <th className="py-3 px-2 font-semibold text-right">Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((r) => {
                    const g = r.valueNow - r.invested;
                    return (
                      <tr
                        key={r.date}
                        className="border-b border-stone-100 last:border-0 hover:bg-stone-50/60 transition-colors"
                      >
                        <td className="py-3 px-2 font-medium text-stone-800">
                          {r.date}
                        </td>
                        <td className="py-3 px-2 text-right text-stone-600 tabular-nums">
                          {r.price.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                          })}
                        </td>
                        <td className="py-3 px-2 text-right text-stone-600 tabular-nums">
                          {r.shares.toFixed(5)}
                        </td>
                        <td className="py-3 px-2 text-right text-stone-800 tabular-nums">
                          {usd(r.valueNow)}
                        </td>
                        <td
                          className={`py-3 px-2 text-right font-semibold tabular-nums ${
                            g >= 0 ? 'text-green-600' : 'text-accent-600'
                          }`}
                        >
                          {pct((g / r.invested) * 100)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex items-start gap-3 text-sm text-stone-500 bg-white/60 border border-stone-100 rounded-2xl p-5">
          <Info className="w-5 h-5 shrink-0 text-stone-400 mt-0.5" />
          <p>
            Uses real S&amp;P 500 (^GSPC) month-open levels, snapshot {LATEST.date}.
            Calculations exclude dividends, fees and taxes. The "return / month" is
            the money-weighted (XIRR) rate &mdash; lower than total return ÷ months
            because recent contributions were invested for less time. Past
            performance is not indicative of future results. Not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DcaCalculator;
