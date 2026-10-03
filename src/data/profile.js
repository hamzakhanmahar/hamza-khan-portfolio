/**
 * Single source of truth for personal details.
 * Everything here comes from Hamza's CV, except where marked TODO.
 */
export const profile = {
  name: 'Hamza Khan',
  firstName: 'Hamza',
  title: 'MERN Stack Developer',
  statement: 'Building scalable, modern and user-focused web experiences.',
  location: 'Karachi, Pakistan',
  timeZone: 'Asia/Karachi',
  email: '786hkmhr@gmail.com',
  whatsapp: {
    label: '+92 340 2204607',
    href: 'https://wa.me/923402204607',
  },
  resume: {
    href: '/resume/Hamza-Khan-Resume.pdf',
    fileName: 'Hamza-Khan-Resume.pdf',
  },
  photo: {
    src: '/images/hamza-khan-profile.webp',
    src480: '/images/hamza-khan-profile-480.webp',
    width: 960,
    height: 1200,
    alt: 'Portrait of Hamza Khan, MERN Stack Developer, wearing a dark suit and navy tie',
  },
}

/**
 * Social / contact links.
 *  - LinkedIn + GitHub URLs were read from the hyperlinks embedded in the CV PDF.
 */
export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'hamza-khan-0889ba275',
    url: 'https://www.linkedin.com/in/hamza-khan-0889ba275',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'hamzakhanmahar',
    url: 'https://github.com/hamzakhanmahar',
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

/** All page sections in order; `nav` says which nav item should be highlighted. */
export const sections = [
  { id: 'home', nav: 'home' },
  { id: 'about', nav: 'about' },
  { id: 'experience', nav: 'experience' },
  { id: 'services', nav: 'services' },
  { id: 'projects', nav: 'projects' },
  { id: 'skills', nav: 'skills' },
  { id: 'education', nav: 'skills' },
  { id: 'contact', nav: 'contact' },
]
