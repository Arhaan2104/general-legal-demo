export const SITE_CONFIG = {
  name: "General Legal",
  tagline: "AI-Native Law Firm",
  description:
    "Commercial contract review, negotiation, and legal advice by experienced U.S.-barred attorneys.",
  price: "$500",
  priceDescription: "Per Contract Review",
};

export const NAV_LINKS = [
  { label: "The Firm", href: "/the-firm" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

export const HERO_CONTENT = {
  badge: "AI-Native Law Firm",
  headline: "The AI Native\nLaw Firm\nfor the Growth Stage",
  subheadline:
    "Our experienced attorneys manage your contracts from review to signature for $500/contract. Turns in 3 hours or less.",
  primaryCta: "Review My Contract",
  secondaryCta: "See How It Works",
  trustText: "Trusted by 500+ companies",
};

// Legacy - keeping for backwards compatibility
export const PROBLEM_CONTENT = {
  headline: "Legal Shouldn't Be a Black Box",
  problems: [] as { title: string; description: string; icon: string }[],
};

export const COMPARISON_CONTENT = {
  headline: "General Legal vs Traditional Law Firm",
  generalLegal: {
    title: "General Legal",
    points: [
      "$500 per contract",
      "Contract turns done in hours by experienced attorneys",
      "Work directly with your lawyer in Slack",
      "Experienced, U.S.-barred attorneys on every contract",
    ],
  },
  traditional: {
    title: "Traditional Law Firm",
    points: [
      "$1,000-$5,000+ per contract, billed hourly with unpredictable costs",
      "Days or weeks to turn a contract",
      "Email chains, handoffs, and unclear ownership",
      "Junior-heavy staffing and slow reviews",
    ],
  },
};

export const HOW_IT_WORKS_CONTENT = {
  headline: "How It Works",
  subheadline:
    "General Legal pairs experienced contract law attorneys with technology built for speed, clarity, and better results.",
  steps: [
    {
      number: "01",
      title: "Free Consultation with a Lawyer",
      description:
        "Start with a short consultation to explain your contract and business context. The lawyer will outline scope, timing, and pricing.",
      icon: "Users",
    },
    {
      number: "02",
      title: "Attorney-Led Contract Review",
      description:
        "Your lawyer drafts, reviews, or negotiates the contract directly. AI tools support speed and accuracy, but an experienced attorney is responsible for every deliverable.",
      icon: "FileText",
    },
    {
      number: "03",
      title: "Flat, Predictable Pricing",
      description:
        "You'll know the price up front for each contract. Most standard commercial contracts are turned in about one hour.",
      icon: "DollarSign",
    },
  ],
};

export const SERVICES_CONTENT = {
  headline: "Contracts We Review",
  services: [
    {
      title: "SaaS Agreements",
      description:
        "Software licensing, subscription terms, and service level agreements.",
    },
    {
      title: "NDAs & Confidentiality",
      description:
        "Non-disclosure agreements to protect your sensitive information.",
    },
    {
      title: "Employment Contracts",
      description: "Offer letters, employment agreements, and contractor terms.",
    },
    {
      title: "Vendor Agreements",
      description: "Supplier contracts, procurement terms, and service agreements.",
    },
    {
      title: "Partnership Agreements",
      description: "Joint ventures, collaborations, and business partnerships.",
    },
    {
      title: "Terms of Service",
      description: "Website terms, privacy policies, and user agreements.",
    },
  ],
};

export const PRICING_CONTENT = {
  headline: "Simple, Transparent Pricing",
  subheadline:
    "No hidden fees. No hourly billing surprises. Just straightforward pricing for quality legal work.",
  services: [
    {
      service: "Contract Review",
      scope: "Review, redline, and negotiate a contract between 3 and 50 pages",
      price: "$500",
      unit: "/ contract",
    },
    {
      service: "Short Contract Review",
      scope: "3 pages or fewer",
      price: "$250",
      unit: "/ contract",
    },
    {
      service: "Long Contract Review",
      scope: "50+ pages",
      price: "$10",
      unit: "/ page",
    },
    {
      service: "Contract Drafting",
      scope: "Draft a contract from scratch",
      price: "$2,000",
      unit: "/ contract",
    },
  ],
  cta: "Questions about pricing?",
  ctaLink: "Contact us",
};

export const AI_ADVANTAGE_CONTENT = {
  headline: "The AI-Native Difference",
  description:
    "We combine the precision of AI with the judgment of experienced attorneys. The result? Better outcomes at a fraction of traditional costs.",
  points: [
    {
      title: "AI catches what humans miss",
      description:
        "Our AI analyzes every clause against thousands of contract patterns, flagging risks that could be overlooked.",
    },
    {
      title: "Attorneys provide judgment AI can't",
      description:
        "Real lawyers review every finding, applying business context and strategic thinking.",
    },
    {
      title: "You get both at a fraction of the cost",
      description:
        "Traditional firms charge $500/hour. We charge $500 total. Same expertise, better value.",
    },
  ],
};

export const TESTIMONIALS = [
  {
    quote:
      "General Legal reviewed our vendor contract in 24 hours. The report was incredibly detailed and helped us negotiate better terms.",
    name: "Sarah Chen",
    title: "CEO",
    company: "TechFlow",
  },
  {
    quote:
      "Finally, legal services that make sense for a growing startup. Fixed pricing means we can budget properly.",
    name: "Marcus Johnson",
    title: "Founder",
    company: "Launchpad Labs",
  },
  {
    quote:
      "The combination of AI analysis and attorney review gives us confidence that nothing slips through the cracks.",
    name: "Emily Rodriguez",
    title: "COO",
    company: "ScaleUp",
  },
];

export const FAQ_CONTENT = {
  headline: "Frequently Asked Questions",
  faqs: [
    {
      question: "What are the hours of operation?",
      answer:
        "Our standard operating hours are 5:00 AM–6:00 PM PT, Monday through Friday, excluding federal holidays. During these hours, we typically deliver contract turns within one hour and guarantee a response and initial turn in under three hours. Outside of operating hours, we do our best to respond as quickly as possible, but turnaround times are not guaranteed.",
    },
    {
      question: "What kinds of agreements can you help with?",
      answer:
        "We can help with any standard commercial agreements, including MSAs, DPAs, NDAs, vendor agreements, ToSs, EULAs, and more. Email us to setup a consultation.",
    },
    {
      question: "In what jurisdictions do you practice?",
      answer:
        "For commercial agreements, we currently support companies doing business in all US states.",
    },
    {
      question: "How will I work with my lawyer?",
      answer:
        "Our lawyers work where you work. Many of our clients use Slack and our lawyers can work with you or your legal team directly in your Slack. We can also support you over email, video-conference, or phone.",
    },
    {
      question: "What is included in the contract review price?",
      answer:
        "Everything. For our flat review price, our firm will support your contract through every turn all the way to signature. Our lawyers can even join a negotiation with the other side. We don't bill by the hour, there are no surprise fees, and no minimums. See our pricing for details.",
    },
    {
      question: "Can you draft a contract from scratch?",
      answer:
        "Yes, we're happy to draft new commercial agreements. See our pricing page for our flat rate drafting fee.",
    },
    {
      question: "Is my lawyer an AI?",
      answer:
        "No, we're a law firm that hires only highly-qualified, US barred attorneys. Our attorneys are trained to use our AI platforms to accelerate their work but all agreements handled by our firm are reviewed by an experienced human attorney.",
    },
  ],
};

export const FINAL_CTA_CONTENT = {
  headline:
    "Experienced attorneys on your contracts from review to signature for $500/contract. Turns in 3 hours or less.",
  cta: "Get Started",
  hasEmailInput: true,
};

export const FOOTER_CONTENT = {
  tagline: "AI-native legal services for modern businesses.",
  services: [
    { label: "Contract Review", href: "/#services" },
    { label: "Negotiation Support", href: "/#services" },
    { label: "Legal Consultation", href: "/contact" },
  ],
  company: [
    { label: "The Firm", href: "/the-firm" },
    { label: "Attorneys", href: "/attorneys" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Bar Information", href: "/bar" },
  ],
  contact: {
    email: "info@general.legal",
  },
  social: {
    linkedin: "https://linkedin.com/company/general-legal",
    twitter: "https://twitter.com/gen_legal_inc",
  },
};

// Page Content for Subpages
export const THE_FIRM_CONTENT = {
  hero: {
    headline: "The Firm",
    subheadline:
      "An AI-native law firm providing flat-fee commercial contract review, negotiation, and legal advice by experienced U.S.-barred attorneys.",
  },
  mission: {
    headline: "Built for the Modern Business",
    description:
      "General Legal was founded with a simple belief: legal services should be fast, transparent, and affordable. We combine experienced attorneys with AI-powered tools to deliver exceptional results at a fraction of traditional costs.",
  },
  services: {
    headline: "What We Do",
    items: [
      {
        title: "Commercial Contract Review",
        description:
          "Expert review of SaaS agreements, vendor contracts, NDAs, and more. Every contract is reviewed by experienced U.S.-barred attorneys.",
      },
      {
        title: "Contract Negotiation",
        description:
          "We negotiate on your behalf, working directly with counterparties to secure favorable terms while protecting your interests.",
      },
      {
        title: "Business Law",
        description:
          "General legal counsel for growing businesses, from entity formation to compliance questions.",
      },
      {
        title: "Outside Counsel Services",
        description:
          "Flexible legal support that scales with your business. No retainers, no minimum hours—just quality legal work when you need it.",
      },
    ],
  },
  cta: {
    headline: "Ready to get started?",
    description:
      "Schedule a free consultation to discuss your contract needs.",
    button: "Contact Us",
  },
};

export const ATTORNEYS_CONTENT = {
  hero: {
    headline: "Our Attorneys",
    subheadline:
      "Every contract at General Legal is handled by experienced, U.S.-barred attorneys who combine legal expertise with modern tools.",
  },
  team: {
    headline: "Experienced Legal Professionals",
    description:
      "Our attorneys bring years of experience from top law firms and in-house legal departments. They're trained to use AI-powered tools to work faster and more accurately—but every decision, every negotiation, and every deliverable is the work of a qualified human attorney.",
    highlights: [
      {
        title: "U.S.-Barred Attorneys",
        description:
          "Every attorney on our team is licensed to practice law in the United States.",
      },
      {
        title: "Commercial Contract Specialists",
        description:
          "Our team focuses exclusively on commercial agreements, building deep expertise in the contracts that matter to growing businesses.",
      },
      {
        title: "Technology-Enabled",
        description:
          "Our attorneys are trained to leverage AI tools for speed and accuracy, while maintaining the judgment that only experienced lawyers can provide.",
      },
    ],
  },
  cta: {
    headline: "Work with our team",
    description: "Get started with a free consultation.",
    button: "Get in Touch",
  },
};

export const CONTACT_CONTENT = {
  hero: {
    headline: "Contact Us",
    subheadline:
      "Have questions about our services? Ready to get started? We'd love to hear from you.",
  },
  info: {
    email: "info@general.legal",
    hours: "5:00 AM – 6:00 PM PT, Monday – Friday",
    response: "We typically respond within one business day.",
  },
  form: {
    headline: "Send us a message",
    fields: {
      name: "Your Name",
      email: "Email Address",
      company: "Company Name",
      message: "How can we help?",
    },
    button: "Send Message",
  },
  social: {
    headline: "Connect with us",
    linkedin: "https://linkedin.com/company/general-legal",
    twitter: "https://twitter.com/gen_legal_inc",
  },
};

export const CAREERS_CONTENT = {
  hero: {
    headline: "Careers",
    subheadline:
      "Join an AI-native law firm that's reimagining how legal services are delivered.",
  },
  culture: {
    headline: "Why General Legal",
    description:
      "We're building the future of legal services—combining experienced attorneys with cutting-edge AI to deliver better outcomes for growing businesses. If you're excited about transforming an industry, we'd love to hear from you.",
    values: [
      {
        title: "Innovation First",
        description:
          "We embrace technology to work smarter, not harder. Our attorneys use AI tools to deliver faster, more accurate results.",
      },
      {
        title: "Client Obsessed",
        description:
          "We measure success by client outcomes. Transparent pricing, fast turnarounds, and exceptional quality are non-negotiable.",
      },
      {
        title: "Continuous Learning",
        description:
          "The legal industry is evolving rapidly. We invest in our team's growth and stay at the forefront of legal technology.",
      },
    ],
  },
  openings: {
    headline: "Open Positions",
    empty:
      "We don't have any open positions at the moment, but we're always interested in hearing from talented attorneys and legal professionals.",
    cta: "Send your resume to careers@general.legal",
  },
  cta: {
    headline: "Interested in joining us?",
    description:
      "Even if we don't have an open role that matches your background, we'd love to hear from you.",
    button: "Get in Touch",
  },
};
