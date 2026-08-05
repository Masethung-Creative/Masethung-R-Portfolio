/** Content for the home grid and the /work index. */

export interface Project {
  title: string;
  caption: string;
  /** Path under src/assets — resolved by the glob in index.astro. */
  image: string;
}

/** The 3x3 grid on the home page. Swap the SVGs for real work. */
export const selectedWork: Project[] = [
  { title: 'Caspa', caption: 'ui/ux design', image: '01.svg' },
  { title: 'Brand identity', caption: 'logo system', image: '02.svg' },
  { title: 'Bskilling', caption: 'lms platform', image: '03.svg' },
  { title: 'NASSCOM', caption: 'campaign', image: '04.svg' },
  { title: 'SFJ website', caption: 'web design', image: '05.svg' },
  { title: 'Catalog mockups', caption: 'nobroker', image: '06.svg' },
  { title: 'Festival creatives', caption: 'social', image: '07.svg' },
  { title: 'Event highlights', caption: 'video edit', image: '08.svg' },
  { title: 'Presentation deck', caption: 'collateral', image: '09.svg' },
];

/** Highlighted under "Currently building" on the home page. */
export const currentlyBuilding = {
  title: 'Caspa',
  href: '/work/caspa',
  description:
    "SFJ's internal database management platform. I led the UI/UX end to end — wireframes, visual design, and the launch creatives that went with it.",
};

export interface Entry {
  title: string;
  href: string;
  /** ISO date, or omit and use `meta` for things like "In progress". */
  date?: string;
  meta?: string;
  description: string;
  external?: boolean;
  tags?: string[];
}

/**
 * Case studies now live in src/content/projects/*.md — add a markdown file
 * there and it appears on /work automatically.
 */

export const tools: Entry[] = [
  {
    // TODO: add your Fiverr profile URL here.
    title: 'Fiverr — Level 1 Seller',
    href: 'https://www.fiverr.com/',
    external: true,
    description:
      '400+ projects for 94+ clients across nine countries, at a 4.9-star rating.',
    tags: ['#branding', '#logo', '#freelance'],
  },
  {
    title: 'GitHub',
    href: 'https://github.com/Masethung-Creative',
    external: true,
    description: 'Code and side projects — where the build side of my work lives.',
    tags: ['#code', '#projects'],
  },
];
