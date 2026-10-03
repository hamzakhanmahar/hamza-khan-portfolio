/**
 * Services shown as the card deck. Every card maps to work or skills on the CV
 * (MERN stack, REST APIs, MongoDB / MySQL, JWT + RBAC, and the projects listed there).
 * `art` picks the illustration in src/components/ServiceArt.jsx.
 */
export const services = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    text: 'Responsive web applications built end to end, from the interface to the API and the database.',
    art: 'webapp',
  },
  {
    id: 'custom',
    title: 'Custom Software Development',
    text: 'I develop custom software solutions tailored to specific business requirements, combining modern frontend interfaces, robust backend systems, REST APIs, authentication, databases, and scalable architecture.',
    art: 'system',
  },
  {
    id: 'dashboard',
    title: 'Dashboard Development',
    text: 'I build responsive and intuitive dashboards for managing data, operations, analytics, employees, and business workflows, with clean interfaces and scalable backend integration.',
    art: 'dashboard',
  },
  {
    id: 'mern',
    title: 'MERN Stack Development',
    text: 'Applications built on MongoDB, Express.js, React.js and Node.js, with one JavaScript stack from client to server.',
    art: 'mern',
  },
  {
    id: 'api',
    title: 'REST API Development',
    text: 'Node.js and Express services with clean endpoints and MVC structure.',
    art: 'api',
  },
  {
    id: 'auth',
    title: 'Authentication & Role-Based Systems',
    text: 'JWT sign-in and role-based access for Guest, Buyer, Seller and Admin users.',
    art: 'auth',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platforms',
    text: 'Marketplaces with product, cart and order management for buyers and sellers.',
    art: 'shop',
  },
  {
    id: 'database',
    title: 'Databases',
    text: 'Schema design and data modelling in MongoDB and MySQL.',
    art: 'db',
  },
  {
    id: 'ui',
    title: 'Responsive Interfaces',
    text: 'React components that adapt cleanly from phone to desktop.',
    art: 'ui',
  },
]
