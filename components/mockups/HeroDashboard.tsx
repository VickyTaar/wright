'use client';

import { useEffect, useState, useRef } from 'react';
import {
  TrendingUp, TrendingDown, Bell, Search, Settings,
  LayoutDashboard, ShieldCheck, Brain, BarChart3,
  ChevronRight, AlertCircle, CheckCircle2, Clock, CircleDot,
} from 'lucide-react';

/* ─── Static data ─────────────────────────────────────── */

const ALL_ORGS = [
  { id: 'ORG-2024-0291', name: 'Acacia Holdings Ltd',     sector: 'Financial',    score: '82 / 100',  status: 'stable',   risk: 'low'    },
  { id: 'ORG-2024-0287', name: 'Meridian Corp',            sector: 'Technology',   score: '54 / 100',  status: 'elevated', risk: 'high'   },
  { id: 'ORG-2024-0281', name: 'Rho Transport Group',      sector: 'Logistics',    score: '71 / 100',  status: 'stable',   risk: 'medium' },
  { id: 'ORG-2024-0276', name: 'Port Logistics Ltd',       sector: 'Maritime',     score: '48 / 100',  status: 'critical', risk: 'high'   },
  { id: 'ORG-2024-0264', name: 'Greenfield Holdings',      sector: 'Real Estate',  score: '89 / 100',  status: 'stable',   risk: 'low'    },
];

const STATUS_CFG = {
  stable:   { label: 'Stable',   color: 'bg-[#ecfdf5] text-[#059669]' },
  elevated: { label: 'Elevated', color: 'bg-[#fffbeb] text-[#b45309]' },
  critical: { label: 'Critical', color: 'bg-[#fef2f2] text-[#dc2626]' },
} as const;

const RISK_CFG = {
  low:    'bg-[#ecfdf5] text-[#059669]',
  medium: 'bg-[#fffbeb] text-[#b45309]',
  high:   'bg-[#fef2f2] text-[#dc2626]',
} as const;

const ACTIVITIES = [
  { icon: AlertCircle,  text: 'Credential exposure detected - Meridian Corp',   time: '3m ago',  color: '#dc2626' },
  { icon: CheckCircle2, text: 'Posture improving - Acacia Holdings (+6 pts)',    time: '9m ago',  color: '#059669' },
  { icon: Clock,        text: 'Underwriting report generated - ORG-0281',        time: '17m ago', color: '#6b7280' },
  { icon: CircleDot,    text: 'New AI system detected - Port Logistics Ltd',     time: '24m ago', color: '#0165FC' },
];

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard',    active: true },
  { icon: ShieldCheck,     label: 'Risk Register' },
  { icon: AlertCircle,     label: 'Cyber Signals' },
  { icon: Brain,           label: 'AI Assurance'  },
  { icon: BarChart3,       label: 'Analytics'     },
];

const MONTHS = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];

/* ─── Animation frames ────────────────────────────────── */

type Frame = {
  metrics: { label: string; value: string; change: string; trend: 'up' | 'down' }[];
  bars: number[];
  orgCount: number;
  activityCount: number;
  highlight: number | null;
};

const FRAMES: Frame[] = [
  {
    metrics: [
      { label: 'Portfolio Risk Score',  value: '74 / 100', change: '+4.1pts', trend: 'up'   },
      { label: 'Monitored Orgs',        value: '142',       change: '+8.2%',  trend: 'up'   },
      { label: 'Active Threat Signals', value: '1,847',     change: '-12.3%', trend: 'down' },
      { label: 'Posture Improving',     value: '68.4%',     change: '+5.2pp', trend: 'up'   },
    ],
    bars: [42, 68, 55, 78, 62, 85, 71, 90, 76, 88, 94, 82],
    orgCount: 2,
    activityCount: 1,
    highlight: 0,
  },
  {
    metrics: [
      { label: 'Portfolio Risk Score',  value: '75 / 100', change: '+4.8pts', trend: 'up'   },
      { label: 'Monitored Orgs',        value: '144',       change: '+9.0%',  trend: 'up'   },
      { label: 'Active Threat Signals', value: '1,821',     change: '-13.7%', trend: 'down' },
      { label: 'Posture Improving',     value: '69.1%',     change: '+5.9pp', trend: 'up'   },
    ],
    bars: [42, 68, 55, 78, 62, 85, 71, 90, 76, 88, 94, 96],
    orgCount: 3,
    activityCount: 2,
    highlight: 1,
  },
  {
    metrics: [
      { label: 'Portfolio Risk Score',  value: '75 / 100', change: '+4.8pts', trend: 'up'   },
      { label: 'Monitored Orgs',        value: '144',       change: '+9.0%',  trend: 'up'   },
      { label: 'Active Threat Signals', value: '1,809',     change: '-14.4%', trend: 'down' },
      { label: 'Posture Improving',     value: '69.1%',     change: '+5.9pp', trend: 'up'   },
    ],
    bars: [42, 68, 55, 78, 62, 85, 71, 90, 76, 88, 94, 99],
    orgCount: 5,
    activityCount: 3,
    highlight: 2,
  },
  {
    metrics: [
      { label: 'Portfolio Risk Score',  value: '76 / 100', change: '+5.1pts', trend: 'up'   },
      { label: 'Monitored Orgs',        value: '147',       change: '+9.7%',  trend: 'up'   },
      { label: 'Active Threat Signals', value: '1,794',     change: '-15.1%', trend: 'down' },
      { label: 'Posture Improving',     value: '70.3%',     change: '+7.1pp', trend: 'up'   },
    ],
    bars: [42, 68, 55, 78, 62, 85, 71, 90, 76, 88, 94, 99],
    orgCount: 5,
    activityCount: 4,
    highlight: 3,
  },
];

const FRAME_DURATION = 2200;

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
  void prevIndex;

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
              <span className="text-[12px] font-semibold text-[#0a0a0b]">Barbon</span>
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
              <div className="w-6 h-6 rounded-full bg-[#0165FC] flex items-center justify-center text-white text-[9px] font-bold">SP</div>
              <div>
                <p className="text-[10px] font-medium text-[#0a0a0b]">S. Patel</p>
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
              <span className="text-[11px] text-[#9ca3af]">Search organizations, risks...</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bell size={14} className="text-[#6b7280]" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#dc2626] rounded-full text-[7px] text-white flex items-center justify-center font-bold">
                  4
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
                <h2 className="text-[13px] font-semibold text-[#0a0a0b]">Risk Intelligence Dashboard</h2>
                <p className="text-[10px] text-[#9ca3af]">June 2024 · All monitored organizations</p>
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
                <p className="text-[11px] font-semibold text-[#0a0a0b]">Risk Signal Volume</p>
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

            {/* ── Risk queue (rows fade in) ─────────── */}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#e5e7eb]">
                <p className="text-[11px] font-semibold text-[#0a0a0b]">Risk Register</p>
                <button type="button" className="flex items-center gap-0.5 text-[10px] text-[#0165FC]">
                  View all <ChevronRight size={9} />
                </button>
              </div>
              <div className="divide-y divide-[#f7f8fa]">
                {ALL_ORGS.slice(0, frame.orgCount).map((org, i) => (
                  <div
                    key={org.id}
                    className="flex items-center gap-2 px-3 py-2"
                    style={{
                      opacity: 1,
                      animation: `fadeSlideIn 0.35s ease-out ${i * 60}ms both`,
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#6b7280]">{org.id}</span>
                        <span className="text-[9px] text-[#9ca3af]">·</span>
                        <span className="text-[10px] text-[#6b7280]">{org.sector}</span>
                      </div>
                      <p className="text-[11px] font-medium text-[#0a0a0b] truncate">{org.name}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[11px] font-semibold text-[#0a0a0b]">{org.score}</p>
                      <div className="flex items-center gap-1 justify-end mt-0.5">
                        <span className={`text-[8px] px-1 py-0.5 rounded-[2px] font-medium ${RISK_CFG[org.risk as keyof typeof RISK_CFG]}`}>
                          {org.risk.toUpperCase()}
                        </span>
                        <span className={`text-[8px] px-1 py-0.5 rounded-[2px] font-medium ${STATUS_CFG[org.status as keyof typeof STATUS_CFG].color}`}>
                          {STATUS_CFG[org.status as keyof typeof STATUS_CFG].label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Activity feed (rows appear) ─────────── */}
            <div className="bg-white border border-[#e5e7eb] rounded-[6px] p-3">
              <p className="text-[11px] font-semibold text-[#0a0a0b] mb-2">Intelligence Feed</p>
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
