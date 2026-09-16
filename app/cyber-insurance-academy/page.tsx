import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CIAHero from '@/components/sections/cia/CIAHero';
import CIAWhy from '@/components/sections/cia/CIAWhy';
import CIAWhatIs from '@/components/sections/cia/CIAWhatIs';
import CIAIndividual from '@/components/sections/cia/CIAIndividual';
import CIACorporate from '@/components/sections/cia/CIACorporate';
import CIACurriculum from '@/components/sections/cia/CIACurriculum';
import CIACertification from '@/components/sections/cia/CIACertification';
import CIAWhyBarbon from '@/components/sections/cia/CIAWhyBarbon';
import CIAPartner from '@/components/sections/cia/CIAPartner';
import CIAFAQ from '@/components/sections/cia/CIAFAQ';
import CIAFinalCTA from '@/components/sections/cia/CIAFinalCTA';

const baseUrl = 'https://barbon.tech';
const pageUrl = `${baseUrl}/cyber-insurance-academy`;

export const metadata: Metadata = {
  title: 'Cyber Insurance Academy | Cyber Insurance Training & Certification | Barbon',
  description:
    'Professional cyber insurance training and certification for insurers, brokers, underwriters and risk professionals. Build cyber insurance knowledge across Africa and beyond.',
  keywords: [
    'cyber insurance training',
    'cyber insurance course',
    'cyber insurance certification',
    'cyber insurance academy',
    'cyber risk training',
    'cyber insurance training for insurance professionals',
    'cyber underwriting training',
    'cyber insurance for brokers',
    'cyber risk management training',
    'cyber insurance education',
    'cyber insurance professionals',
    'cyber insurance courses in Africa',
    'cyber insurance training in Africa',
    'cyber insurance Kenya',
    'cyber insurance Africa',
    'cyber risk and insurance',
    'cybersecurity and insurance',
    'cyber insurance underwriting',
    'cyber insurance claims',
    'technology risk insurance',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Cyber Insurance Academy | Cyber Insurance Training & Certification | Barbon',
    description:
      'Professional cyber insurance training and certification for insurers, brokers, underwriters and risk professionals across Africa and beyond.',
    siteName: 'Barbon',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Barbon CIA - Cyber Insurance Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Insurance Academy | Cyber Insurance Training & Certification | Barbon',
    description:
      'Professional cyber insurance training and certification for insurers, brokers, underwriters and risk professionals across Africa and beyond.',
    images: [`${baseUrl}/og-image.png`],
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────

const structuredData = [
  // BreadcrumbList
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cyber Insurance Academy',
        item: pageUrl,
      },
    ],
  },

  // EducationalOrganization
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Barbon Cyber Insurance Academy',
    alternateName: 'Barbon CIA',
    url: pageUrl,
    description:
      'Barbon CIA is the professional education initiative of Barbon Insurance Technologies, providing structured cyber insurance training and certification for insurance professionals.',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Barbon Insurance Technologies',
      url: baseUrl,
    },
  },

  // Course — Foundation
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'CIA Foundation — Introduction to Cyber Insurance',
    description:
      'An introductory cyber insurance course covering cyber risk fundamentals, cyber threats and business impact, cyber insurance terminology, products, coverage areas, exclusions and policy understanding.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Barbon Cyber Insurance Academy',
      url: pageUrl,
    },
    url: 'https://lms.barbon.tech/courses/foundation',
    educationalLevel: 'Foundation',
    courseMode: 'online',
    inLanguage: 'en',
  },

  // Course — Professional
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'CIA Professional — Cyber Insurance for Insurance Professionals',
    description:
      'A professional-level cyber insurance course for underwriters, brokers and risk professionals. Covers cyber risk assessment, underwriting, questionnaires, risk selection, policy construction, claims, accumulation risk, supply chain risk, data protection, AI-related risks and cyber risk for SMEs.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Barbon Cyber Insurance Academy',
      url: pageUrl,
    },
    url: 'https://lms.barbon.tech/courses/professional',
    educationalLevel: 'Professional',
    courseMode: 'online',
    inLanguage: 'en',
  },

  // Course — Advanced
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'CIA Advanced — Cyber Insurance for Specialists',
    description:
      'An advanced cyber insurance course for experienced underwriters, specialist brokers, claims professionals and risk specialists. Covers portfolio cyber risk, accumulation, scenario analysis, cyber risk modelling, reinsurance, incident response, silent cyber, parametric cyber insurance and emerging technology risks.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Barbon Cyber Insurance Academy',
      url: pageUrl,
    },
    url: 'https://lms.barbon.tech/courses/advanced',
    educationalLevel: 'Advanced',
    courseMode: 'online',
    inLanguage: 'en',
  },

  // FAQPage
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Barbon CIA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Barbon CIA is the Cyber Insurance Academy — the professional education initiative of Barbon Insurance Technologies. It offers structured cyber insurance training and certification for insurance professionals, including individual enrolment and corporate team training.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is cyber insurance training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cyber insurance training is structured professional education that helps insurance professionals understand cyber risk, cyber threats and cyber insurance products. It covers topics such as cyber risk assessment, underwriting, policy construction, claims and coverage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should take a cyber insurance course?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Barbon CIA courses are suited to insurance underwriters, brokers, claims professionals, risk managers, compliance officers, insurance sales teams, corporate insurance teams and professionals looking to specialise in cyber insurance. No prior cybersecurity background is needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I receive a certificate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Professionals who successfully complete a Barbon CIA course and pass the associated assessment receive a Barbon Cyber Insurance Academy certificate. The certificate records the course name, your name, the certificate ID and the date of completion.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the certificates accredited?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Barbon CIA certificates represent successful completion of Barbon\'s courses and assessments. They are not a regulatory qualification and do not imply external accreditation unless separately stated.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can an insurance company train an entire team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Barbon offers corporate training for insurance companies, brokers and other organisations. Teams can complete structured cyber insurance training programmes using the CIA curriculum.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is cyber insurance available in Africa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Cyber insurance is available in a number of African markets, including Kenya. The market is at an early stage of development in many countries, which is one of the reasons Barbon CIA exists — to build the professional knowledge base that will help the market grow sustainably.',
        },
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function CyberInsuranceAcademyPage() {
  return (
    <>
      {/* Structured data */}
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />
      <main id="main-content">
        {/* 1. Hero */}
        <CIAHero />

        {/* 2. Why Cyber Insurance Education Matters */}
        <CIAWhy />

        {/* 3. What is Barbon CIA? */}
        <CIAWhatIs />

        {/* 4. Individual Learning */}
        <CIAIndividual />

        {/* 5. Corporate Training */}
        <CIACorporate />

        {/* 6. Curriculum / Learning Pathways */}
        <CIACurriculum />

        {/* 7. Certification */}
        <CIACertification />

        {/* 8. Why Barbon CIA */}
        <CIAWhyBarbon />

        {/* 9. Partner With Us */}
        <CIAPartner />

        {/* 10. FAQ */}
        <CIAFAQ />

        {/* 11. Final CTA */}
        <CIAFinalCTA />
      </main>
      <Footer />
    </>
  );
}
