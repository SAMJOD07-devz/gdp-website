import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import PracticeAreas from '../components/home/PracticeAreas';
import AboutSnippet from '../components/home/AboutSnippet';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TeamShowcase from '../components/home/TeamShowcase';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  const { openConsultation } = useOutletContext();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of cases does GD Pandya Associates handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GD Pandya Associates handles civil and criminal litigation, trademark registration, cheque bounce cases (Section 138 NI Act), property title clearance, banking recovery, family and matrimonial law, and High Court writ petitions in Jamnagar, Gujarat."
        }
      },
      {
        "@type": "Question",
        "name": "Where is GD Pandya Associates located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The firm is located at Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner, Jamnagar – 361001, Gujarat, India. Consultation hours are Monday–Saturday, 9:30 AM to 9:00 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Is Advocate Gaurav Pandya a registered Trademark Attorney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Advocate Gaurav D. Pandya is a Registered Trade Mark and Copyright Attorney accredited with the Controller General of Patents, Designs and Trade Marks (CGPDTM), Government of India."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a consultation with GD Pandya Associates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a consultation by calling or WhatsApp messaging +91 98985 98184, emailing advocate_pandya@hotmail.com, or filling the consultation form on this website."
        }
      },
      {
        "@type": "Question",
        "name": "Which courts does GD Pandya Associates practice in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The firm practices before the District & Sessions Court Jamnagar, Gujarat High Court, and various civil courts across Saurashtra region. Advocate Pandya is enrolled with the Bar Council of Gujarat since 2007."
        }
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gaurav Dineshchandra Pandya",
    "givenName": "Gaurav",
    "familyName": "Pandya",
    "jobTitle": "Advocate, Government of India Notary & Registered Trademark Attorney",
    "worksFor": {
      "@type": "LegalService",
      "name": "GD Pandya Associates",
      "url": "https://advocate-pandya.com"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Saurashtra University, Shah Law College"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor of Commerce (B.Com)",
        "credentialCategory": "degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor of Laws (L.L.B.)",
        "credentialCategory": "degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Diploma in Labour Laws and Practice (DLLP)",
        "credentialCategory": "diploma"
      }
    ],
    "knowsAbout": ["Civil Litigation", "Criminal Litigation", "Trademark Law", "Banking Recovery Law", "Property Law", "Family Law", "Notarial Services"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner",
      "addressLocality": "Jamnagar",
      "addressRegion": "Gujarat",
      "postalCode": "361001",
      "addressCountry": "IN"
    },
    "telephone": "+919898598184",
    "email": "advocate_pandya@hotmail.com",
    "url": "https://advocate-pandya.com/about"
  };

  return (
    <>
      <Helmet>
        <title>GD Pandya Associates | Advocates & Legal Consultants, Jamnagar, Gujarat</title>
        <meta name="description" content="Premier law firm in Jamnagar, Gujarat led by Advocate Gaurav D. Pandya (B.Com, L.L.B., DLLP). 18+ years in litigation, trademark law, banking recovery & property law. Govt. Notary & Regd. Trademark Attorney." />
        <meta name="keywords" content="Advocate Jamnagar, GD Pandya Associates, Law Firm Jamnagar Gujarat, High Court Advocate Gujarat, Trademark Attorney Jamnagar, Notary Jamnagar, Cheque Bounce Lawyer Jamnagar, Property Lawyer Jamnagar" />
        <link rel="canonical" href="https://advocate-pandya.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocate-pandya.com/" />
        <meta property="og:title" content="GD Pandya Associates | Advocates & Legal Consultants, Jamnagar" />
        <meta property="og:description" content="18+ Years of Legal Mastery in Jamnagar & Gujarat High Court. Civil & Criminal Litigation, Trademarks, Banking Recovery, and Property Law." />
        <meta property="og:image" content="https://advocate-pandya.com/assets/team/gaurav-pandya-office.webp" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
    <div>
      <HeroSection onOpenConsultation={openConsultation} />
      <PracticeAreas onOpenConsultation={openConsultation} />
      <AboutSnippet />
      <WhyChooseUs onOpenConsultation={openConsultation} />
      <TeamShowcase onOpenConsultation={openConsultation} />
      <ContactCTA onOpenConsultation={openConsultation} />
    </div>
    </>
  );
}
