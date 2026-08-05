/** Content for the /about experience accordion. */

export interface Position {
  title: string;
  /** e.g. "Full-time · 2024 - 26" */
  meta: string;
  icon: string;
  /** Highlights this role in the accent colour. */
  current?: boolean;
  bullets: string[];
  link?: { href: string; label: string; external?: boolean };
  skills: string[];
}

export interface Company {
  name: string;
  /** Location, or a link rendered in muted text. */
  meta: string;
  metaHref?: string;
  /** Renders the accent dot next to the company name. */
  isCurrent?: boolean;
  positions: Position[];
}

export const companies: Company[] = [
  {
    name: 'SFJ Business Solutions',
    meta: 'Bengaluru',
    isCurrent: true,
    positions: [
      {
        title: 'Graphic Designer',
        meta: 'Full-time · 2025 - Now',
        icon: 'solar:compass-linear',
        current: true,
        bullets: [
          'Sole designer across five business verticals, delivering 500+ assets a month.',
          'UI/UX for five digital products: the SFJ and Bskilling sites, an LMS, Caspa, and an ATS.',
          'Led the full UI/UX design of Caspa, an internal database management app, from wireframes to launch.',
          '104+ proposals and 260+ presentations a month for client pitches.',
          'Campaign assets for NASSCOM and FutureSkills, plus 40+ recruitment posters a month.',
        ],
        skills: [
          'Graphic design',
          'Visual communication',
          'Brand identity',
          'Layout & typography',
          'Social media graphics',
          'Presentation design',
          'Infographics',
          'Marketing collateral',
          'Adobe Creative Suite',
          'UI/UX',
          'Figma',
          'Design systems',
        ],
      },
    ],
  },
  {
    name: 'NoBroker',
    meta: 'Nexus Studio · Bengaluru',
    positions: [
      {
        title: 'Graphic Designer & Branding Specialist',
        meta: 'Full-time · 2024 - 25',
        icon: 'solar:pen-linear',
        bullets: [
          '500+ assets in six months: 70+ catalog mockups and 15+ event creatives a month.',
          'Worked with four teams — Interior Design, Principal Design, HR, and Marketing.',
          'Held brand guideline compliance across every internal and external piece.',
        ],
        skills: [
          'Graphic design',
          'Branding',
          'Catalog mockups',
          'Event creatives',
          'Print & digital',
          'Photoshop',
          'Illustrator',
          'InDesign',
          'Brand guidelines',
          'Cross-team collaboration',
        ],
      },
    ],
  },
  {
    name: 'Fiverr',
    meta: 'Level 1 Seller · Remote',
    positions: [
      {
        title: 'Freelance Graphic Designer & Video Editor',
        meta: 'Self-employed · 2022 - Now',
        icon: 'solar:lightbulb-linear',
        bullets: [
          '400+ projects for 94+ clients across nine countries, at a 4.9-star rating.',
          'Logos, brand identities, social graphics, brochures, and catalogs.',
          'AI tools — Firefly, Midjourney, DALL·E — folded into the workflow to hit tight deadlines.',
          'Ran every project end to end: brief, ideation, revisions, delivery, and follow-up.',
        ],
        skills: [
          'Logo design',
          'Brand identity',
          'Social media graphics',
          'Brochures & catalogs',
          'Posters & banners',
          'CorelDRAW',
          'AI workflows',
          'Client management',
        ],
      },
    ],
  },
  {
    name: 'Anna University',
    meta: 'Chennai',
    positions: [
      {
        title: 'Graphic Designer & Video Editor',
        meta: 'Internship · 2022 - 23',
        icon: 'solar:stars-linear',
        bullets: [
          'Sole visual content creator for college events, departments, and social channels.',
          '165+ event creatives and 22+ edited videos over eleven months.',
          'Rebuilt the media team workflow around content calendars and event deadlines.',
        ],
        skills: [
          'Event creatives',
          'Video editing',
          'Premiere Pro',
          'After Effects',
          'Content calendars',
        ],
      },
    ],
  },
];

export const education = [
  {
    period: '2019 - 23',
    detail: 'B.E. Electronics & Communication Engineering, Anna University, Chennai.',
  },
];

export const certifications = [
  'Using AI for Accessible Design Workflows',
  'Optimize Your LinkedIn Profile to Stand Out',
  'Fiverr Level 1 Seller — Quality, On-Time Delivery & Client Satisfaction (2025)',
];
