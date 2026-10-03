/**
 * Services shown as the card deck. Every card maps to work or skills on the CV
 * (MERN stack, REST APIs, MongoDB / MySQL, JWT + RBAC, and the projects listed there).
 * `art` picks the illustration in src/components/ServiceArt.jsx.
 */
export const services = [
  {
    id: 'web',
    title: 'Web Development',
    text: 'Fast, responsive websites that look right on every screen and stay easy to maintain.',
    art: 'web',
  },
  {
    id: 'webapp',
    title: 'Web Applications',
    text: 'Full-stack MERN applications, from the interface to the API and the database.',
    art: 'webapp',
  },
  {
    id: 'custom',
    title: 'Custom Software',
    text: 'Systems shaped around how you work, such as tender tracking or employee records.',
    art: 'custom',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platforms',
    text: 'Marketplaces with product, cart and order management for buyers and sellers.',
    art: 'shop',
  },
  {
    id: 'api',
    title: 'REST APIs & Backend',
    text: 'Node.js and Express services with clean endpoints and MVC structure.',
    art: 'api',
  },
  {
    id: 'database',
    title: 'Databases',
    text: 'Schema design and data modelling in MongoDB and MySQL.',
    art: 'db',
  },
  {
    id: 'auth',
    title: 'Authentication & Access',
    text: 'JWT sign-in and role-based access for Guest, Buyer, Seller and Admin users.',
    art: 'auth',
  },
  {
    id: 'admin',
    title: 'Admin Dashboards',
    text: 'Management screens for tracking records, statuses and day-to-day operations.',
    art: 'dash',
  },
  {
    id: 'ui',
    title: 'Responsive Interfaces',
    text: 'React components that adapt cleanly from phone to desktop.',
    art: 'ui',
  },
]
