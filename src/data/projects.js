/**
 * Projects (source: CV → Projects).
 *
 * `image` is the preview shown in each project card (files in public/images/projects).
 *
 * Links: none yet, on purpose. When you have real URLs, add them like:
 *    links: { live: 'https://…', github: 'https://…' }
 * and the project block will render the buttons automatically.
 */
export const projects = [
  {
    id: 'she-commerce',
    image: { src: '/images/projects/she-commerce.webp', src960: '/images/projects/she-commerce-960.webp', width: 1536, height: 1024 },
    title: 'She Commerce',
    category: 'Women Artisan Marketplace / Full-Stack E-Commerce',
    description:
      'A full-stack e-commerce marketplace connecting women artisans from Sindh with buyers across Pakistan.',
    features: [
      'Secure JWT authentication with role-based access for Guest, Buyer, Seller and Admin users',
      'Product management, shopping cart and order management modules',
      'Admin dashboard for oversight of the marketplace',
      'RESTful APIs on MongoDB for secure, efficient data management',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    visualAlt:
      'She Commerce: desktop storefront with a hero banner of handmade Sindhi crafts, category circles and featured products, beside the mobile app.',
    featured: true,
    links: {},
  },
  {
    id: 'tender-management',
    image: { src: '/images/projects/tender-management.webp', src960: '/images/projects/tender-management-960.webp', width: 1757, height: 895 },
    title: 'AI-Powered Tender Management System',
    category: 'AI-Assisted Workflow / Enterprise Dashboard',
    description:
      'An AI-assisted tender management system with document parsing and submission workflows.',
    features: [
      'Responsive, user-friendly interface with real-time tender status tracking',
      'Backend APIs for user authentication and the complete tender lifecycle',
    ],
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    visualAlt:
      'AI-Powered Tender Management System: dashboard with tender status chart, bid value trend, tender pipeline table and document parsing panel.',
    featured: false,
    links: {},
  },
  {
    id: 'employee-management',
    image: { src: '/images/projects/employee-management.webp', src960: '/images/projects/employee-management-960.webp', width: 1757, height: 895 },
    title: 'Employee Management System',
    category: 'HR Management / CRUD Application',
    description:
      'A full-stack Employee Management System for managing employee records efficiently through RESTful APIs.',
    features: [
      'CRUD operations through RESTful APIs',
      'Responsive web interface for adding, updating, deleting and viewing employee information',
    ],
    technologies: ['Node.js', 'Express.js', 'MySQL', 'HTML5', 'CSS3'],
    visualAlt:
      'Employee Management System: HR dashboard with employee growth chart, department distribution, employee table and an employee details panel.',
    featured: false,
    links: {},
  },
  {
    id: 'restaurant-menu',
    image: { src: '/images/projects/restaurant-menu.webp', src960: '/images/projects/restaurant-menu-960.webp', width: 1757, height: 895 },
    title: 'Restaurant Menu Web App',
    category: 'Frontend / Interactive Menu',
    description:
      'A responsive restaurant menu application with dynamic category-based filtering.',
    features: [
      'Dynamic category-based menu filtering',
      'Reusable React components with state managed through React Hooks',
      'Clean UI and responsive layouts across devices',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3'],
    visualAlt:
      'Dastarkhwan restaurant menu web app: desktop menu page with a biryani hero banner and dish cards, beside the mobile view.',
    featured: false,
    links: {},
  },
  {
    id: 'personal-portfolio',
    image: { src: '/images/projects/portfolio-website.webp', src960: '/images/projects/portfolio-website-960.webp', width: 1672, height: 941 },
    title: 'Personal Portfolio Website',
    category: 'Frontend / Performance',
    description:
      'A responsive personal portfolio showcasing projects, skills and technical expertise, hosted on Netlify.',
    features: [
      'Multiple themes and custom SVG skill icons',
      'Performance optimizations for fast loading',
      'Cross-browser compatibility',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
    visualAlt:
      'Hamza Khan portfolio website shown on a laptop and a phone, with the hero section and key stats.',
    featured: false,
    links: {},
  },
]
