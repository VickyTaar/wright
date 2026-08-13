export interface VendorRisk {
  rank: number;
  vendor: string;
  category: string;
  vulnerabilities: number;
  exploitabilityScore: number;
  weightedScore: number;
  change: 'up' | 'down' | 'same';
}

export const RISKY_TECH_VENDORS: VendorRisk[] = [
  { rank: 1, vendor: 'Microsoft', category: 'Operating System & Enterprise Software', vulnerabilities: 3210, exploitabilityScore: 0.06, weightedScore: 190.5, change: 'up' },
  { rank: 2, vendor: 'Apple', category: 'Consumer & Enterprise Devices', vulnerabilities: 2033, exploitabilityScore: 0.06, weightedScore: 131.7, change: 'same' },
  { rank: 3, vendor: 'Linux', category: 'Kernel & Server Infrastructure', vulnerabilities: 6654, exploitabilityScore: 0.02, weightedScore: 113.9, change: 'up' },
  { rank: 4, vendor: 'Google', category: 'Browser & Cloud Ecosystem', vulnerabilities: 2409, exploitabilityScore: 0.04, weightedScore: 106.4, change: 'up' },
  { rank: 5, vendor: 'Oracle', category: 'Database & Middleware', vulnerabilities: 633, exploitabilityScore: 0.06, weightedScore: 40.6, change: 'down' },
  { rank: 6, vendor: 'Adobe', category: 'Creative & PDF Productivity', vulnerabilities: 793, exploitabilityScore: 0.04, weightedScore: 32.4, change: 'same' },
  { rank: 7, vendor: 'Cisco', category: 'Networking & Hardware', vulnerabilities: 311, exploitabilityScore: 0.10, weightedScore: 30.1, change: 'up' },
  { rank: 8, vendor: 'Tenda', category: 'IoT & Consumer Networking', vulnerabilities: 660, exploitabilityScore: 0.04, weightedScore: 29.5, change: 'up' },
  { rank: 9, vendor: 'Apache', category: 'Web Server & Open Source', vulnerabilities: 535, exploitabilityScore: 0.05, weightedScore: 25.9, change: 'same' },
  { rank: 10, vendor: 'Fortinet', category: 'Network Security & Firewalls', vulnerabilities: 173, exploitabilityScore: 0.12, weightedScore: 20.5, change: 'up' },
  { rank: 11, vendor: 'Totolink', category: 'Embedded Networking Devices', vulnerabilities: 297, exploitabilityScore: 0.05, weightedScore: 16.2, change: 'down' },
  { rank: 12, vendor: 'D-Link', category: 'Consumer Routers & Switches', vulnerabilities: 385, exploitabilityScore: 0.04, weightedScore: 15.9, change: 'same' },
  { rank: 13, vendor: 'IBM', category: 'Enterprise Mainframe & Software', vulnerabilities: 618, exploitabilityScore: 0.03, weightedScore: 15.6, change: 'down' },
  { rank: 14, vendor: 'Openclaw', category: 'Open Source Security Tools', vulnerabilities: 539, exploitabilityScore: 0.02, weightedScore: 13.1, change: 'same' },
  { rank: 15, vendor: 'n8n', category: 'Workflow Automation', vulnerabilities: 88, exploitabilityScore: 0.12, weightedScore: 10.9, change: 'up' },
  { rank: 16, vendor: 'Red Hat', category: 'Enterprise Linux Ecosystem', vulnerabilities: 381, exploitabilityScore: 0.02, weightedScore: 9.3, change: 'down' },
  { rank: 17, vendor: 'PHPGurukul', category: 'Web Applications', vulnerabilities: 250, exploitabilityScore: 0.03, weightedScore: 8.6, change: 'same' },
  { rank: 18, vendor: 'Ivanti', category: 'IT Asset & Endpoint Management', vulnerabilities: 80, exploitabilityScore: 0.10, weightedScore: 8.3, change: 'up' },
  { rank: 19, vendor: 'Mozilla', category: 'Web Browsers & Rendering Engines', vulnerabilities: 377, exploitabilityScore: 0.02, weightedScore: 8.2, change: 'down' },
  { rank: 20, vendor: 'F5 Networks', category: 'Application Delivery & ADC', vulnerabilities: 129, exploitabilityScore: 0.06, weightedScore: 8.1, change: 'same' },
];

export const VENDOR_SCORE_TREND = [
  { period: 'Q2 2025', score: 0.145, formattedScore: '0.145' },
  { period: 'Q3 2025', score: 0.170, formattedScore: '0.170' },
  { period: 'Q4 2025', score: 0.198, formattedScore: '0.198' },
  { period: 'Q1 2026', score: 0.235, formattedScore: '0.235' },
  { period: 'Q2 2026', score: 0.280, formattedScore: '0.280' },
];

export const VULNERABILITY_TREND = [
  { period: 'Q2 2025', count: 42500, label: '42.5K' },
  { period: 'Q3 2025', count: 47200, label: '47.2K' },
  { period: 'Q4 2025', count: 51800, label: '51.8K' },
  { period: 'Q1 2026', count: 55400, label: '55.4K' },
  { period: 'Q2 2026', count: 58098, label: '58.1K' },
];
