'use client';

import { useEffect, useState, useRef } from 'react';
import {
  TrendingUp, TrendingDown, Bell, Search, Settings,
  LayoutDashboard, FileText, Users, ShieldCheck, BarChart3,
  ChevronRight, AlertCircle, CheckCircle2, Clock, CircleDot,
} from 'lucide-react';

/* ─── Static data ─────────────────────────────────────── */

const ALL_CLAIMS = [
  { id: 'CLM-2024-8841', type: 'Motor',    insured: 'Acacia Holdings',   amount: '$14,200',  status: 'review',   risk: 'low'    },
  { id: 'CLM-2024-8840', type: 'Property', insured: 'Meridian Corp',     amount: '$82,500',  status: 'pending',  risk: 'high'   },
  { id: 'CLM-2024-8838', type: 'Health',   insured: 'J. Mensah',         amount: '$3,100',   status: 'approved', risk: 'low'    },
  { id: 'CLM-2024-8835', type: 'Marine',   insured: 'Port Logistics Ltd', amount: '$220,000', status: 'review',   risk: 'medium' },
  { id: 'CLM-2024-8834', type: 'Motor',    insured: 'Rho Transport',     amount: '$9,800',   status: 'approved', risk: 'low'    },
];

const STATUS_CFG = {
  review:   { label: 'In Review', color: 'bg-[#fffbeb] text-[#b45309]' },
  pending:  { label: 'Pending',   color: 'bg-[#fef2f2] text-[#dc2626]' },
  approved: { label: 'Approved',  color: 'bg-[#ecfdf5] text-[#059669]' },
} as const;

const RISK_CFG = {
  low:    'bg-[#ecfdf5] text-[#059669]',
  medium: 'bg-[#fffbeb] text-[#b45309]',
  high:   'bg-[#fef2f2] text-[#dc2626]',
} as const;

const ACTIVITIES = [
  { icon: CheckCircle2, text: 'Policy #POL-48291 renewed',      time: '2m ago',  color: '#059669' },
  { icon: AlertCircle,  text: 'High-risk claim flagged by AI',  time: '8m ago',  color: '#dc2626' },
  { icon: Clock,        text: 'Underwriting report generated',  time: '15m ago', color: '#6b7280' },
  { icon: CircleDot,    text: 'New broker portal submission',   time: '22m ago', color: '#0165FC' },
];

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FileText,        label: 'Policies'  },
  { icon: ShieldCheck,     label: 'Claims'    },
  { icon: Users,           label: 'Customers' },
  { icon: BarChart3,       label: 'Analytics' },
];

const MONTHS = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];

/* ─── Animation frames ────────────────────────────────── */

// Each "frame" represents a snapshot the animation cycles through.
type Frame = {
  metrics: { label: string; value: string; change: string; trend: 'up' | 'down' }[];
  bars: number[];          // 12 bar heights (0–100)
  claimCount: number;      // how many claims to show in queue
  activityCount: number;   // how many activity rows to show
  highlight: number | null; // which metric card is highlighted (-1 = none)
};

const FRAMES: Frame[] = [
  // Frame 0 — initial load (sparse)
  {
    metrics: [
      { label: 'Active Policies', value: '24,819', change: '+3.2%', trend: 'up' },
      { label: 'Premium (MTD)',   value: '$4.2M',  change: '+8.1%', trend: 'up' },
      { label: 'Open Claims',     value: '1,247',  change: '-5.4%', trend: 'down' },
      { label: 'Loss Ratio',      value: '58.3%',  change: '-1.1pp', trend: 'down' },
    ],
    bars: [42, 68, 55, 78, 62, 85, 71, 90, 76, 88, 94, 82],
    claimCount: 2,
    activityCount: 1,
    highlight: 0,
  },
  // Frame 1 — more data, chart updates
  {
    metrics: [
      { label: 'Active Policies', value: '24,836', change: '+3.3%', trend: 'up' },
      { label: 'Premium (MTD)',   value: '$4.3M',  change: '+9.0%', trend: 'up' },
      { label: 'Open Claims',     value: '1,241',  change: '-5.9%', trend: 'down' },
      { label: 'Loss Ratio',      value: '57.9%',  change: '-1.5pp', trend: 'down' },
    ],
    bars: [42, 68, 55, 78, 62, 85, 71, 90, 76, 88, 94, 96],
    claimCount: 3,
    activityCount: 2,
    highlight: 1,
  },
  // Frame 2 — full queue, new activity
  {
    metrics: [
      { label: 'Active Policies', value: '24,836', change: '+3.3%', trend: 'up' },
      { label: 'Premium (MTD)',   value: '$4.3M',  change: '+9.0%', trend: 'up' },
      { label: 'Open Claims',     value: '1,235',  change: '-6.3%', trend: 'down' },
      { label: 'Loss Ratio',      value: '57.9%',  change: '-1.5pp', trend: 'down' },
    ],
    bars: [42, 68, 55, 78, 62, 85, 71, 90, 76, 88, 94, 99],
    claimCount: 5,
    activityCount: 3,
    highlight: 2,
  },
  // Frame 3 — all activity visible, steady state
  {
    metrics: [
      { label: 'Active Policies', value: '24,851', change: '+3.4%', trend: 'up' },
      { label: 'Premium (MTD)',   value: '$4.3M',  change: '+9.0%', trend: 'up' },
      { label: 'Open Claims',     value: '1,230',  change: '-6.7%', trend: 'down' },
      { label: 'Loss Ratio',      value: '57.7%',  change: '-1.7pp', trend: 'down' },
    ],
    bars: [42, 68, 55, 78, 62, 85, 71, 90, 76, 88, 94, 99],
    claimCount: 5,
    activityCount: 4,
    highlight: 3,
  },
];

const FRAME_DURATION = 2200; // ms per frame

/* ─── Component ───────────────────────────────────────── */

export default function HeroDashboard() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [prevIndex, setPrevIndex]   = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFrameIndex((i) => {
        setPrevIndex(i);
        return (i + 1) % FRAMES.length;
      });
    }, FRAME_DURATION);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const frame = FRAMES[frameIndex];
  void prevIndex; // suppress unused warning

  return (
    <div
      className="w-full h-full rounded-lg border border-[#e5e7eb] bg-white overflow-hidden shadow-sm select-none"
      style={{ fontFamily: 'var(--font-geist-sans)' }}
      aria-hidden="true"
    >
      <div className="flex h-full" style={{ minHeight: 540 }}>

        {/* ── Sidebar ──────────────────────────────────── */}
        <div className="hidden lg:flex flex-col w-[160px] border-r border-[#e5e7eb] bg-[#f7f8fa] flex-shrink-0">
          {/* Logo */}
          <div className="px-4 py-4 border-b border-[#e5e7eb]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#0165FC] rounded-[4px] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 3h8M2 6h5M2 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[12px] font-semibold text-[#0a0a0b]">Barbon OS</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-0.5 p-2 pt-3">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2.5 py-2 rounded-[5px] ${
                  item.active
                    ? 'bg-white border border-[#e5e7eb] text-[#0a0a0b]'
                    : 'text-[#6b7280]'
                }`}
              >
                <item.icon size={13} className={item.active ? 'text-[#0165FC]' : ''} />
                <span className="text-[12px] font-medium">{item.label}</span>
              </div>
            ))}
          </nav>

          {/* User */}
          <div className="mt-auto p-3 border-t border-[#e5e7eb]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#0165FC] flex items-center justify-center text-white text-[9px] font-bold">AK</div>
              <div>
                <p className="text-[10px] font-medium text-[#0a0a0b]">A. Kamara</p>
                <p className="text-[9px] text-[#6b7280]">Underwriter</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main content ─────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e7eb] bg-white">
            <div className="flex items-center gap-2 bg-[#f7f8fa] border border-[#e5e7eb] rounded-[5px] px-2.5 py-1.5 w-48">
              <Search size={11} className="text-[#9ca3af]" />
              <span className="text-[11px] text-[#9ca3af]">Search policies, claims...</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bell size={14} className="text-[#6b7280]" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#dc2626] rounded-full text-[7px] text-white flex items-center justify-center font-bold">
                  3
                </span>
              </div>
              <Settings size={14} className="text-[#6b7280]" />
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-hidden p-4 bg-[#f7f8fa] space-y-3">

            {/* Page header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[13px] font-semibold text-[#0a0a0b]">Operations Dashboard</h2>
                <p className="text-[10px] text-[#9ca3af]">June 2024 · All branches</p>
              </div>
              <div className="flex items-center gap-1.5">
                <select className="text-[10px] bg-white border border-[#e5e7eb] rounded-[4px] px-2 py-1 text-[#6b7280]">
                  <option>This Month</option>
                </select>
                <button type="button" className="text-[10px] bg-[#0165FC] text-white px-2 py-1 rounded-[4px]">Export</button>
              </div>
            </div>

            {/* ── Metric cards (animated) ──────────────── */}
            <div className="grid grid-cols-2 gap-2">
              {frame.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="bg-white border rounded-[6px] p-3 transition-all duration-500"
                  style={{
                    borderColor: frame.highlight === i ? '#0165FC' : '#e5e7eb',
                    boxShadow: frame.highlight === i ? '0 0 0 1px #0165FC20' : 'none',
                  }}
                >
                  <p className="text-[10px] text-[#9ca3af] mb-1">{m.label}</p>
                  <p
                    key={`${m.value}-${frameIndex}`}
                    className="text-[16px] font-bold text-[#0a0a0b] leading-none mb-1 transition-all duration-300"
                  >
                    {m.value}
                  </p>
                  <div className={`flex items-center gap-0.5 ${m.trend === 'up' ? 'text-[#059669]' : 'text-[#dc2626]'}`}>
                    {m.trend === 'up' ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
                    <span className="text-[9px] font-medium">{m.change} vs last month</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Chart (animated bars) ───────────────── */}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] p-3">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-semibold text-[#0a0a0b]">Premium Collections</p>
                <span className="text-[9px] text-[#9ca3af]">Last 12 months</span>
              </div>
              <div className="flex items-end gap-1 h-14">
                {frame.bars.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div
                      className="rounded-[2px] w-full transition-all duration-700 ease-out"
                      style={{
                        height: `${(h / 100) * 56}px`,
                        backgroundColor: i === frame.bars.length - 1 ? '#0165FC' : '#e8f0fe',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {MONTHS.map((m) => (
                  <span key={m} className="text-[8px] text-[#9ca3af]">{m}</span>
                ))}
              </div>
            </div>

            {/* ── Claims queue (rows fade in) ─────────── */}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#e5e7eb]">
                <p className="text-[11px] font-semibold text-[#0a0a0b]">Claims Queue</p>
                <button type="button" className="flex items-center gap-0.5 text-[10px] text-[#0165FC]">
                  View all <ChevronRight size={9} />
                </button>
              </div>
              <div className="divide-y divide-[#f7f8fa]">
                {ALL_CLAIMS.slice(0, frame.claimCount).map((claim, i) => (
                  <div
                    key={claim.id}
                    className="flex items-center gap-2 px-3 py-2"
                    style={{
                      opacity: 1,
                      animation: `fadeSlideIn 0.35s ease-out ${i * 60}ms both`,
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#6b7280]">{claim.id}</span>
                        <span className="text-[9px] text-[#9ca3af]">·</span>
                        <span className="text-[10px] text-[#6b7280]">{claim.type}</span>
                      </div>
                      <p className="text-[11px] font-medium text-[#0a0a0b] truncate">{claim.insured}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[11px] font-semibold text-[#0a0a0b]">{claim.amount}</p>
                      <div className="flex items-center gap-1 justify-end mt-0.5">
                        <span className={`text-[8px] px-1 py-0.5 rounded-[2px] font-medium ${RISK_CFG[claim.risk as keyof typeof RISK_CFG]}`}>
                          {claim.risk.toUpperCase()}
                        </span>
                        <span className={`text-[8px] px-1 py-0.5 rounded-[2px] font-medium ${STATUS_CFG[claim.status as keyof typeof STATUS_CFG].color}`}>
                          {STATUS_CFG[claim.status as keyof typeof STATUS_CFG].label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Activity feed (rows appear) ─────────── */}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] p-3">
              <p className="text-[11px] font-semibold text-[#0a0a0b] mb-2">Recent Activity</p>
              <div className="space-y-2">
                {ACTIVITIES.slice(0, frame.activityCount).map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2"
                    style={{ animation: `fadeSlideIn 0.3s ease-out ${i * 50}ms both` }}
                  >
                    <a.icon size={11} style={{ color: a.color }} className="flex-shrink-0" />
                    <span className="text-[10px] text-[#6b7280] flex-1">{a.text}</span>
                    <span className="text-[9px] text-[#9ca3af] flex-shrink-0">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>{/* /body */}
        </div>{/* /main */}
      </div>{/* /shell */}

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
