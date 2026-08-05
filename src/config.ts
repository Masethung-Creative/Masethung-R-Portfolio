/**
 * Single source of truth for site-wide content.
 */

export const site = {
  name: 'Masethung',
  fullName: 'Masethung R',
  shortName: 'Masethung R',
  role: 'Graphic Designer & Brand Identity Specialist',
  location: 'Bengaluru, India',
  title: 'Masethung R, graphic designer & brand identity specialist',
  description:
    'Masethung R: graphic designer and brand identity specialist in Bengaluru. 400+ projects for 94+ clients across 9 countries.',
  /** Must match `site` in astro.config.mjs. */
  url: 'https://masethung.vercel.app',
  email: 'masethung2618@gmail.com',
  twitterHandle: '@masethung',
  ogImage: '/og.png',
} as const;

/** Prefilled mailto used by the dock and the social row. */
export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Let's connect",
)}&body=${encodeURIComponent(
  "Hey Masethung! I'd love to connect about a project, a collaboration, or anything else.\n\n",
)}`;

export const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/xsenzedesigns/',
    icon: 'instagram' as const,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/masethungr',
    icon: 'linkedin' as const,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Masethung-Creative',
    icon: 'github' as const,
  },
];
