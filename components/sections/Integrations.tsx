import { CreditCard, Landmark, MessageSquare, Mail, MessageCircle, ShieldCheck, BookOpen, Users, Building, Globe, Brain, Code2, Webhook, Package } from 'lucide-react';

const integrations = [
  {
    category: 'Payments',
    icon: CreditCard,
    items: ['Stripe', 'Flutterwave', 'Paystack', 'M-Pesa', 'Interswitch'],
  },
  {
    category: 'Banking',
    icon: Landmark,
    items: ['Open Banking APIs', 'Bank Statement Fetch', 'Direct Debit', 'SWIFT'],
  },
  {
    category: 'SMS & Messaging',
    icon: MessageSquare,
    items: ['Twilio', 'Africa\'s Talking', 'Termii', 'Bulk SMS'],
  },
  {
    category: 'Email',
    icon: Mail,
    items: ['SendGrid', 'Mailgun', 'Amazon SES', 'Custom SMTP'],
  },
  {
    category: 'WhatsApp',
    icon: MessageCircle,
    items: ['WhatsApp Business API', 'Meta Cloud API', 'Twilio WhatsApp'],
  },
  {
    category: 'Identity & KYC',
    icon: ShieldCheck,
    items: ['Smile Identity', 'Onfido', 'Jumio', 'Government ID APIs'],
  },
  {
    category: 'Accounting',
    icon: BookOpen,
    items: ['Sage', 'QuickBooks', 'Xero', 'Dynamics 365'],
  },
  {
    category: 'CRM',
    icon: Users,
    items: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Custom CRM'],
  },
  {
    category: 'ERP',
    icon: Building,
    items: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite'],
  },
  {
    category: 'Government',
    icon: Globe,
    items: ['NHIA', 'NAICOM', 'IRA', 'Insurance Registries'],
  },
  {
    category: 'AI Models',
    icon: Brain,
    items: ['OpenAI', 'Anthropic', 'Google Vertex', 'Custom Models'],
  },
  {
    category: 'REST APIs',
    icon: Code2,
    items: ['Full REST API', 'OpenAPI 3.0 Spec', 'OAuth 2.0', 'API Keys'],
  },
  {
    category: 'Webhooks',
    icon: Webhook,
    items: ['Event-driven hooks', 'Retry logic', 'Signature verification', 'Log viewer'],
  },
  {
    category: 'SDKs',
    icon: Package,
    items: ['JavaScript / TypeScript', 'Python', 'PHP', 'Mobile SDKs'],
  },
];

export default function Integrations() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="integrations-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Integrations
          </p>
          <h2
            id="integrations-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Connects to everything
            <br />
            you already use.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Barbon OS is API-first by design. Connect to payment processors,
            government registries, identity providers, AI models, and your
            existing enterprise stack — without custom development.
          </p>
        </div>

        {/* Integration grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden"
          role="list"
        >
          {integrations.map((integration) => (
            <div
              key={integration.category}
              role="listitem"
              className="bg-white p-5 hover:bg-[#f7f8fa] transition-colors group cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-[5px] bg-[#f7f8fa] border border-[#e5e7eb] flex items-center justify-center flex-shrink-0 group-hover:border-[#c7d8fd] group-hover:bg-[#e8f0fe] transition-colors">
                  <integration.icon size={14} className="text-[#6b7280] group-hover:text-[#0165FC] transition-colors" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#0a0a0b]">
                  {integration.category}
                </h3>
              </div>
              <ul className="space-y-1">
                {integration.items.map((item) => (
                  <li key={item} className="text-[11px] text-[#9ca3af] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#d1d5db] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* API note */}
        <div className="mt-8 p-4 border border-[#e5e7eb] rounded-[6px] bg-[#f7f8fa] flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <Code2 size={14} className="text-[#0165FC]" />
            <span className="text-[13px] font-semibold text-[#0a0a0b]">OpenAPI 3.0 — fully documented</span>
          </div>
          <div className="sm:ml-auto font-mono text-[11px] text-[#6b7280] bg-white border border-[#e5e7eb] px-3 py-1.5 rounded-[4px]">
            GET /api/v1/policies/{'{'}policyId{'}'}
          </div>
        </div>
      </div>
    </section>
  );
}
