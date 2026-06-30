import { Lock, Key, Users, ClipboardList, Globe, HardDrive, RefreshCw, ShieldOff, LogIn, Smartphone, Code2, Scale } from 'lucide-react';

const securityCapabilities = [
  {
    icon: Lock,
    name: 'Encryption',
    description: 'AES-256 encryption at rest. TLS 1.3 in transit. Field-level encryption for sensitive PII.',
  },
  {
    icon: Key,
    name: 'Identity Management',
    description: 'Centralised identity with SCIM provisioning, directory sync, and lifecycle management.',
  },
  {
    icon: Users,
    name: 'Role-Based Access',
    description: 'Fine-grained RBAC with attribute-level permissions. Least-privilege by default across every module.',
  },
  {
    icon: ClipboardList,
    name: 'Audit Logs',
    description: 'Immutable, tamper-evident logs for every action — searchable, exportable, and retention-configurable.',
  },
  {
    icon: Globe,
    name: 'Data Residency',
    description: 'Choose where your data lives. Region-locked storage with no cross-border replication without explicit consent.',
  },
  {
    icon: HardDrive,
    name: 'Backup & Recovery',
    description: 'Automated daily backups with point-in-time recovery. RTO < 1 hour. RPO < 15 minutes.',
  },
  {
    icon: RefreshCw,
    name: 'Disaster Recovery',
    description: 'Active-passive failover across availability zones. Tested quarterly. Documented runbooks.',
  },
  {
    icon: ShieldOff,
    name: 'Zero Trust',
    description: 'No implicit trust. Every request authenticated, authorised, and inspected — regardless of network origin.',
  },
  {
    icon: LogIn,
    name: 'SSO',
    description: 'SAML 2.0 and OIDC-based single sign-on. Integrates with Okta, Azure AD, Google Workspace, and others.',
  },
  {
    icon: Smartphone,
    name: 'MFA',
    description: 'Enforced multi-factor authentication with TOTP, WebAuthn, and push notifications.',
  },
  {
    icon: Code2,
    name: 'API Security',
    description: 'OAuth 2.0, rate limiting, IP allowlisting, request signing, and anomaly detection on every API endpoint.',
  },
  {
    icon: Scale,
    name: 'Compliance',
    description: 'SOC 2 Type II, ISO 27001, GDPR, NDPR. Shared responsibility model with full evidence packs available.',
  },
];

export default function Security() {
  return (
    <section
      className="section-spacing bg-[#0a0a0b]"
      aria-labelledby="security-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Security
          </p>
          <h2
            id="security-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-white mb-5"
          >
            Enterprise security.
            <br />
            Not bolted on. Built in.
          </h2>
          <p className="text-[17px] text-[#9ca3af] leading-[1.7]">
            Barbon OS is designed for regulated industries where a security
            incident is not an option. Every layer of the stack — from API
            gateway to database — is hardened, monitored, and auditable.
          </p>
        </div>

        {/* Security grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#27272a] border border-[#27272a] rounded-[8px] overflow-hidden mb-10"
          role="list"
        >
          {securityCapabilities.map((cap) => (
            <div
              key={cap.name}
              role="listitem"
              className="bg-[#111113] p-5 hover:bg-[#18181b] transition-colors group cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-[5px] bg-[#27272a] border border-[#3f3f46] flex items-center justify-center flex-shrink-0 group-hover:border-[#0165FC] group-hover:bg-[#001f6b] transition-colors">
                  <cap.icon size={14} className="text-[#71717a] group-hover:text-[#0165FC] transition-colors" />
                </div>
                <h3 className="text-[13px] font-semibold text-white">{cap.name}</h3>
              </div>
              <p className="text-[12px] text-[#71717a] leading-[1.55]">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications row */}
        <div className="border border-[#27272a] rounded-[6px] p-5 bg-[#111113]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#71717a] mb-4">
            Certifications & Standards
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'SOC 2 Type II',
              'ISO 27001:2022',
              'GDPR',
              'NDPR (Nigeria)',
              'PCI DSS Level 1',
              'HIPAA Ready',
              'OWASP Top 10',
              'NIST CSF',
            ].map((cert) => (
              <span
                key={cert}
                className="text-[12px] px-3 py-1.5 bg-[#0a0a0b] border border-[#27272a] text-[#a1a1aa] rounded-[4px] font-mono"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
