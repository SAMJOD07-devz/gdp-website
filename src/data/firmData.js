export const FIRM_DETAILS = {
  name: "GD Pandya Associates",
  tagline: "Advocates, Legal Consultants & Notary (Govt. of India)",
  shortDescription: "Committed to Justice. Dedicated to Protecting Your Rights.",
  founder: "Advocate Gaurav D. Pandya",
  qualifications: "B.Com, L.L.B., DLLP",
  designations: [
    "Advocate (Bar Council of Gujarat, 2007)",
    "Government of India Notary",
    "Registered Trade Mark Attorney",
    "Jamnagar Bar Association Member"
  ],
  phone: "+91 98985 98184",
  phoneRaw: "919898598184",
  email: "advocate_pandya@hotmail.com",
  secondaryEmail: "contact@advocate-pandya.com",
  officeAddress: {
    room: "Office No. 241, 2nd Floor",
    building: "Madhav Square",
    landmark: "Limda Lane Corner, Indira Marg",
    city: "Jamnagar",
    state: "Gujarat",
    pincode: "361001",
    country: "India",
    full: "Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner, Jamnagar - 361001, Gujarat, India"
  },
  hours: "Monday - Saturday: 9:30 AM - 1:30 PM & 5:00 PM - 9:00 PM",
  experienceYears: "18+",
  casesHandled: "2,500+",
  successRate: "94%",
  social: {
    whatsapp: "https://wa.me/919898598184?text=Hello%20Advocate%20Pandya%2C%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.",
    phone: "tel:+919898598184",
    email: "mailto:advocate_pandya@hotmail.com",
    maps: "https://maps.google.com/?q=Madhav+Square+Limda+Lane+Corner+Jamnagar"
  }
};

export const PRACTICE_AREAS = [
  {
    id: "litigation",
    title: "Civil & Criminal Litigation",
    icon: "Scale",
    shortDesc: "Vigorous representation before the District & Sessions Court Jamnagar and the High Court of Gujarat.",
    fullDesc: "From complex civil property suits, recovery proceedings, and injunctions to bail applications, criminal trials, and appellate advocacy, our firm provides aggressive, ethical, and meticulous court representation.",
    points: [
      "Regular & Anticipatory Bail Proceedings",
      "Civil Injunctions & Declaration Suits",
      "Criminal Defense & Trial Representation",
      "Appeals & Revisions before Gujarat High Court",
      "Consumer Dispute Redressal"
    ]
  },
  {
    id: "trademark-ip",
    title: "Trademarks & Intellectual Property",
    icon: "ShieldCheck",
    badge: "Specialized Practice",
    shortDesc: "Comprehensive trademark registration, brand protection, copyright advisory, and opposition proceedings.",
    fullDesc: "As a Registered Trademark Attorney, Advocate Gaurav Pandya provides turnkey brand protection from search clearance to final registration, opposition handling, and trademark licensing across India.",
    points: [
      "Trademark Search & Clearance Reports",
      "National Trademark Filing & Prosecution",
      "Handling Examination Reports & Hearing Appearances",
      "Opposition, Rectification & Infringement Notices",
      "Copyright Filing & IP Licensing"
    ]
  },
  {
    id: "banking-finance",
    title: "Banking & Financial Recovery",
    icon: "Landmark",
    badge: "Panel Counsel",
    shortDesc: "Empanelled advocate for premier nationalized and commercial banks handling debt recovery and SARFAESI.",
    fullDesc: "Trusted legal counsel for premier financial institutions including Central Bank of India, Union Bank of India, and Oriental Bank of Commerce. Specialized in Section 138 Negotiable Instruments Act and commercial debt recovery.",
    points: [
      "Cheque Bounce Prosecutions (Sec 138 N.I. Act)",
      "SARFAESI Act Notices & Security Enforcement",
      "Commercial Loan Recovery Suits",
      "Banking Title Search & Legal Audit Reports",
      "DRT (Debt Recovery Tribunal) Representation"
    ]
  },
  {
    id: "property-real-estate",
    title: "Real Estate & Title Clearance",
    icon: "Home",
    shortDesc: "Title scrutiny reports, 30-year search verification, conveyance deeds, and agricultural land documentation.",
    fullDesc: "Protect your real estate investments against title defects and disputes. We conduct thorough 30-year revenue and registry search reports, drafting watertight sale deeds, gift deeds, release deeds, and lease agreements.",
    points: [
      "30-Year Title Search & Clearance Certificate",
      "Sale Deed, Lease Deed & Mortgage Drafting",
      "Agricultural to Non-Agricultural (NA) Regularization",
      "Public Notice Publication & Objection Resolution",
      "RERA Advisory & Land Revenue Litigation"
    ]
  },
  {
    id: "family-matrimonial",
    title: "Family & Matrimonial Law",
    icon: "Users",
    shortDesc: "Compassionate, confidential counsel for divorce, child custody, domestic disputes, and maintenance claims.",
    fullDesc: "Family disputes require legal expertise balanced with deep empathy and discretion. We prioritize amicable settlements and mediation while safeguarding your financial rights and custodial interests.",
    points: [
      "Mutual Consent & Contested Divorce Petitions",
      "Child Custody & Guardianship Applications",
      "Maintenance & Alimony Claims (Sec 125 CrPC)",
      "Domestic Violence Protection Orders",
      "Ancestral Property Partition & Succession"
    ]
  },
  {
    id: "corporate-trust",
    title: "Corporate, Trust & Labor Laws",
    icon: "Briefcase",
    shortDesc: "Advising institutional bodies, educational trusts, partnership firms, and compliance under labor statutes.",
    fullDesc: "Offering comprehensive legal counsel to public boards, statutory universities, and commercial enterprises. From partnership formation and trust registrations to industrial disputes and employee agreements.",
    points: [
      "Public Charitable Trust Registration (BPT Act)",
      "Partnership Firm Drafting & Registrar Filing",
      "Labor & Industrial Dispute Management",
      "Institutional Compliance & Advisory",
      "Contract Drafting, Review & Negotiation"
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    id: "gaurav-pandya",
    name: "Adv. Gaurav D. Pandya",
    role: "Founder & Principal Advocate",
    qualifications: "B.Com, L.L.B., DLLP",
    credentials: "Govt. of India Notary · Regd. Trade Mark Attorney",
    enrollment: "Bar Council of Gujarat (2007) · Jamnagar Bar Association",
    image: "/assets/team/gaurav-pandya.jpeg",
    officeImage: "/assets/team/gaurav-pandya-office.jpeg",
    featured: true,
    bio: "With over 18 years of distinguished legal practice across the Gujarat High Court and Jamnagar District Court, Advocate Gaurav D. Pandya is a premier authority in litigation, banking law, and intellectual property. Empanelled with leading public sector institutions and nationalized banks, he combines courtroom mastery with strategic legal counsel.",
    specialties: ["Civil & Criminal Litigation", "Trademark & IP Law", "Banking Recovery", "Notary Public"],
    phone: "+91 98985 98184",
    email: "advocate_pandya@hotmail.com"
  },
  {
    id: "falguni-pandya",
    name: "Adv. Falguni Pandya",
    role: "Partner & Senior Counsel",
    qualifications: "B.A., L.L.B.",
    credentials: "Senior Legal Advocate",
    enrollment: "Bar Council of Gujarat",
    image: "/assets/team/falguni-pandya.jpg",
    featured: false,
    bio: "Advocate Falguni Pandya brings profound experience in matrimonial jurisprudence, civil disputes, family property settlements, and consumer litigation. Her client-first approach emphasizes strategic dispute resolution and confidential counseling.",
    specialties: ["Family & Matrimonial Law", "Civil Writs", "Consumer Protection", "Succession & Wills"],
    phone: "+91 98985 98184",
    email: "advocate_pandya@hotmail.com"
  },
  {
    id: "dhruv-ajudiya",
    name: "Adv. Dhruv Ajudiya",
    role: "Legal Associate",
    qualifications: "B.Com, L.L.B.",
    credentials: "High Court & District Court Advocate",
    enrollment: "Bar Council of Gujarat",
    image: "/assets/team/dhruv-ajudiya.png",
    featured: false,
    bio: "Key litigation associate focusing on criminal trials, bail applications, NI Act Section 138 cheque bounce proceedings, and real estate registry documentation.",
    specialties: ["Criminal Trial Defense", "Cheque Bounce Matters", "Title Search", "Contract Drafting"],
    phone: "+91 98985 98184",
    email: "advocate_pandya@hotmail.com"
  },
  {
    id: "drashti-abhangi",
    name: "Adv. Drashti Abhangi",
    role: "Legal Associate",
    qualifications: "B.B.A., L.L.B.",
    credentials: "Legal Researcher & Counsel",
    enrollment: "Bar Council of Gujarat",
    image: "/assets/team/drashti-abhangi.jpg",
    featured: false,
    bio: "Specializes in intellectual property filings, trademark examination replies, corporate document verification, and commercial agreement drafting.",
    specialties: ["Trademark Examination", "Corporate Compliance", "Commercial Contracts", "IP Research"],
    phone: "+91 98985 98184",
    email: "advocate_pandya@hotmail.com"
  },
  {
    id: "khyati-bhatt",
    name: "Adv. Khyati Bhatt",
    role: "Legal Associate",
    qualifications: "B.A., L.L.B.",
    credentials: "Civil & Commercial Advocate",
    enrollment: "Bar Council of Gujarat",
    image: "/assets/team/khyati-bhatt.jpg",
    featured: false,
    bio: "Focuses on civil suits, revenue court documentation, land title clearance reports, and family dispute arbitration proceedings.",
    specialties: ["Civil Documentation", "Revenue Matters", "Title Search Reports", "Arbitration"],
    phone: "+91 98985 98184",
    email: "advocate_pandya@hotmail.com"
  },
  {
    id: "alifiya-vaghela",
    name: "Adv. Alifiya Vaghela",
    role: "Legal Associate",
    qualifications: "L.L.B.",
    credentials: "Litigation & Research Associate",
    enrollment: "Bar Council of Gujarat",
    image: "/assets/team/alifiya-vaghela.jpg",
    featured: false,
    bio: "Assists in High Court writ petitions, legal notice drafting, case research, client consultations, and consumer complaint preparation.",
    specialties: ["Legal Notices & Pleadings", "Case Precedent Research", "Consumer Forum", "Client Advisory"],
    phone: "+91 98985 98184",
    email: "advocate_pandya@hotmail.com"
  }
];

export const INSTITUTIONAL_CLIENTS = [
  {
    name: "Gujarat Ayurved University",
    type: "Statutory State University",
    role: "Panel Legal Counsel"
  },
  {
    name: "Gujarat Water Supply & Sewerage Board",
    type: "Government of Gujarat Undertaking",
    role: "Panel Legal Counsel"
  },
  {
    name: "Central Bank of India",
    type: "Nationalized Public Sector Bank",
    role: "Panel Advocate & Recovery Counsel"
  },
  {
    name: "Union Bank of India",
    type: "Nationalized Public Sector Bank",
    role: "Panel Advocate & Title Search Counsel"
  },
  {
    name: "Oriental Bank of Commerce",
    type: "Banking & Financial Institution",
    role: "Legal Panel Advocate"
  }
];

export const STATS = [
  { label: "Years of Practice", value: "18+", desc: "Continuous Bar Council enrollment since 2007" },
  { label: "Cases & Matters", value: "2,500+", desc: "Represented across civil, criminal & IP domains" },
  { label: "Trademark Registrations", value: "650+", desc: "Protecting brands across diverse industries" },
  { label: "Public & Banking Panels", value: "5+", desc: "Nationalized banks & statutory institutions" }
];

