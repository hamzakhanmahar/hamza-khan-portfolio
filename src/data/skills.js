/**
 * Technologies — every item appears on the CV.
 * `si` = brand icon key in src/components/TechIcon.jsx (simple-icons).
 * `icon` = lucide icon name, used for concepts and tools without a brand mark.
 */
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    span: 'lg:col-span-3',
    items: [
      { name: 'React.js', si: 'react', mark: 'Re', note: 'Component-driven UIs and SPAs' },
      { name: 'HTML5', si: 'html5', mark: 'H5', note: 'Semantic, accessible markup' },
      { name: 'CSS3', si: 'css', mark: 'C3', note: 'Responsive, custom layouts' },
      { name: 'Tailwind CSS', si: 'tailwind', mark: 'Tw', note: 'Utility-first styling' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    span: 'lg:col-span-3',
    items: [
      { name: 'Node.js', si: 'node', mark: 'No', note: 'Server-side JavaScript runtime' },
      { name: 'Express.js', si: 'express', mark: 'Ex', note: 'Web server and routing' },
      { name: 'REST API Development', icon: 'Network', mark: 'API', note: 'Clean frontend–backend contracts' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    span: 'lg:col-span-2',
    items: [
      { name: 'MongoDB', si: 'mongodb', mark: 'Mo', note: 'Document database' },
      { name: 'Mongoose', si: 'mongoose', mark: 'Mg', note: 'Schemas and models' },
      { name: 'MySQL', si: 'mysql', mark: 'My', note: 'Relational database' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    span: 'lg:col-span-2',
    items: [
      { name: 'JavaScript (ES6+)', si: 'javascript', mark: 'JS', note: 'Modern JavaScript' },
      { name: 'Python (Basics)', si: 'python', mark: 'Py', note: 'Foundational knowledge' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    span: 'lg:col-span-2',
    items: [
      { name: 'Git', si: 'git', mark: 'Gi', note: 'Version control' },
      { name: 'GitHub', si: 'github', mark: 'Gh', note: 'Collaborative workflows' },
      { name: 'Postman', si: 'postman', mark: 'Pm', note: 'API testing' },
      { name: 'VS Code', icon: 'Code', mark: 'VS', note: 'Daily editor' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Concepts',
    span: 'lg:col-span-6',
    wide: true,
    items: [
      { name: 'JWT Authentication', icon: 'KeyRound', note: 'Secure, token-based sign-in' },
      { name: 'Role-Based Access Control', icon: 'ShieldCheck', note: 'Guest, Buyer, Seller, Admin' },
      { name: 'MVC Architecture', icon: 'Layers', note: 'Separation of concerns' },
      { name: 'REST APIs', icon: 'Network', note: 'Resource-oriented endpoints' },
      { name: 'Responsive Web Design', icon: 'Smartphone', note: 'Every screen size' },
    ],
  },
]
