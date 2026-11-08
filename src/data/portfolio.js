export const profile = {
  firstName: 'ISHIMWE',
  lastName: 'Promesse',
  fullName: 'ISHIMWE Promesse',
  role: 'Software Developer & Network Administrator',
  shortRole: 'Software Developer',
  location: 'Kigali, Rwanda',
  email: 'kleinthest@gmail.com',
  phone: '+250 795 480 647',
  phoneHref: '+250795480647',
  telegram: '+250 792 829 045',
  telegramHref: 'https://t.me/+250792829045',
  instagram: '@ishimwe.otw',
  instagramHref: 'https://instagram.com/ishimwe.otw',
  availability: 'Available for new opportunities',
  experience: '2+ years',
  company: 'Origin Group Ltd',
  photo: {
    alt: 'Portrait of ISHIMWE Promesse, software developer and network administrator',
    width: 608,
    height: 1736,
    src: '/images/ishimwe-promesse-profile-608.jpg',
    webpSrcSet:
      '/images/ishimwe-promesse-profile-320.webp 320w, /images/ishimwe-promesse-profile-480.webp 480w, /images/ishimwe-promesse-profile-608.webp 608w',
    jpgSrcSet:
      '/images/ishimwe-promesse-profile-320.jpg 320w, /images/ishimwe-promesse-profile-480.jpg 480w, /images/ishimwe-promesse-profile-608.jpg 608w',
  },
  intro:
    'I build clean, fast web applications — and keep the networks behind them secure, stable and ready for real work.',
  about: [
    "I'm a software developer and network administrator based in Kigali, Rwanda, with two years of hands-on experience at Origin Group Ltd. My work sits between two worlds: building the interfaces people use every day, and making sure the infrastructure underneath never gets in their way.",
    'On the development side I work mostly with React, JavaScript and Tailwind CSS, connecting clean front ends to reliable APIs and databases. On the infrastructure side I configure and troubleshoot LAN/WAN networks, routers, switches and firewalls, and I take documentation and security as seriously as uptime.',
    'I care about the details that make software feel effortless — clear layouts, quick load times, readable code and systems that behave predictably. If something can be simpler, faster or more reliable, that is the version I want to ship.',
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '2+', label: 'Years of experience', note: 'Origin Group Ltd' },
  { value: '12+', label: 'Projects built', note: 'Web & internal tools' },
  { value: '15+', label: 'Tools & technologies', note: 'Across dev and IT' },
]

export const highlights = [
  'Responsive, component-driven React interfaces',
  'REST API and database integration',
  'LAN/WAN setup, monitoring and troubleshooting',
  'Network security and access control',
  'Clear documentation and dependable support',
]

export const experiences = [
  {
    role: 'Software Developer & Network Administrator',
    company: 'Origin Group Ltd',
    period: '2024 — Present',
    duration: '2+ years',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    summary:
      'A dual role spanning product development and IT infrastructure — building internal web tools while keeping the company network secure, fast and available.',
    points: [
      'Build and maintain responsive web applications using React, JavaScript and Tailwind CSS.',
      'Develop and integrate REST APIs with Node.js and relational databases.',
      'Configure and troubleshoot LAN/WAN infrastructure, routers, switches and firewalls.',
      'Monitor network performance, respond to incidents and enforce security best practices.',
      'Support colleagues with hardware, software and connectivity issues, and document every fix.',
    ],
    tags: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Networking', 'IT Support'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Independent projects',
    period: '2023 — Present',
    duration: 'Ongoing',
    location: 'Remote',
    type: 'Freelance',
    summary:
      'Designing and shipping custom websites and dashboards for small businesses, from the first wireframe to deployment and handover.',
    points: [
      'Turn business requirements into clean, accessible interfaces and reusable components.',
      'Handle deployments, domains, SSL and basic server administration end to end.',
      'Work directly with clients to scope, iterate and deliver on time.',
    ],
    tags: ['React', 'Tailwind CSS', 'Vite', 'Deployment'],
  },
  {
    role: 'Continuous Learning',
    company: 'Always in beta',
    period: '2023 — Present',
    duration: 'Ongoing',
    location: 'Self-directed',
    type: 'Growth',
    summary:
      'Keeping pace with modern development and infrastructure — because good engineers never stop being students.',
    points: [
      'Deepening React and Node.js through hands-on personal builds.',
      'Exploring cloud fundamentals and practical network security.',
      'Sharpening UI craft: layout, motion, accessibility and performance.',
    ],
    tags: ['React', 'Node.js', 'Cloud basics', 'Security'],
  },
]

export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: 'monitor',
    description: 'Interfaces that feel fast, look sharp and work on every screen.',
    skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite', 'Responsive UI'],
  },
  {
    title: 'Backend & Data',
    icon: 'server',
    description: 'Clean APIs and well-structured data behind every screen.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP', 'MySQL', 'MongoDB basics'],
  },
  {
    title: 'Networking',
    icon: 'network',
    description: 'Infrastructure that stays connected, monitored and secure.',
    skills: ['LAN / WAN', 'TCP/IP', 'Router & switch config', 'Firewalls', 'DNS & DHCP', 'Network monitoring'],
  },
  {
    title: 'Tools & Systems',
    icon: 'wrench',
    description: 'The everyday toolkit that keeps delivery smooth.',
    skills: ['Git & GitHub', 'Linux', 'Windows Server', 'VS Code', 'Figma', 'Hosting & cPanel'],
  },
]

export const proficiency = [
  { label: 'React & Frontend', value: 92 },
  { label: 'Network Administration', value: 88 },
  { label: 'Node.js & APIs', value: 80 },
  { label: 'UI / UX & Tailwind CSS', value: 90 },
]

export const services = [
  {
    title: 'Web Development',
    icon: 'code',
    description:
      'Modern, responsive websites and web applications built with React and Tailwind CSS — fast, accessible and easy to maintain.',
  },
  {
    title: 'Network Administration',
    icon: 'network',
    description:
      'Set up, configure and monitor your network. Routers, switches, firewalls, DNS and DHCP kept clean, documented and healthy.',
  },
  {
    title: 'IT Support & Maintenance',
    icon: 'wrench',
    description:
      'Hands-on troubleshooting for hardware, software and connectivity issues, with clear documentation and a quick turnaround.',
  },
  {
    title: 'API & Database Integration',
    icon: 'database',
    description:
      'Connect your front end to reliable REST APIs and well-structured databases that keep data accurate and workflows smooth.',
  },
]

export const projects = [
  {
    title: 'Business Operations Dashboard',
    category: 'Web Application',
    year: '2025',
    icon: 'dashboard',
    description:
      'A central dashboard giving teams a live view of sales, inventory and daily operations — with role-based access and clean reporting.',
    tags: ['React', 'Tailwind CSS', 'REST API', 'Chart.js'],
    featured: true,
  },
  {
    title: 'Network Health Monitor',
    category: 'IT Infrastructure',
    year: '2025',
    icon: 'activity',
    description:
      'A lightweight monitoring tool that tracks device uptime, bandwidth usage and alerts the IT team before small issues become outages.',
    tags: ['Node.js', 'SNMP', 'Linux', 'MySQL'],
  },
  {
    title: 'Commerce Storefront',
    category: 'E-commerce',
    year: '2024',
    icon: 'bag',
    description:
      'A fast, mobile-first storefront with product filtering, a smooth cart and a checkout flow designed to reduce friction and convert.',
    tags: ['React', 'Tailwind CSS', 'Stripe', 'Vite'],
  },
  {
    title: 'Corporate Website Redesign',
    category: 'Website',
    year: '2024',
    icon: 'globe',
    description:
      'A complete redesign focused on clarity, speed and search visibility, with a simple content structure the team can maintain.',
    tags: ['React', 'Tailwind CSS', 'SEO', 'Figma'],
  },
]

export const contactLinks = [
  {
    label: 'Phone',
    value: '+250 795 480 647',
    href: 'tel:+250795480647',
    icon: 'phone',
    copy: '+250795480647',
  },
  {
    label: 'Email',
    value: 'kleinthest@gmail.com',
    href: 'mailto:kleinthest@gmail.com',
    icon: 'mail',
    copy: 'kleinthest@gmail.com',
  },
  {
    label: 'Telegram',
    value: '+250 792 829 045',
    href: 'https://t.me/+250792829045',
    icon: 'telegram',
    external: true,
  },
  {
    label: 'Instagram',
    value: '@ishimwe.otw',
    href: 'https://instagram.com/ishimwe.otw',
    icon: 'instagram',
    external: true,
  },
]
