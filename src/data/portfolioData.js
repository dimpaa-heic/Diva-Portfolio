// ⚙️ Edit everything in this file to update the site's content.

export const profile = {
  name: 'Diva Clara Rosiana Marpaung',
  roles: ['Data Analyst', 'Web Developer', 'QA Engineer', 'Graphic Designer'],
  greeting: "Hi, I'm",
  tagline:
    "I like turning messy data and rough ideas into things that actually work - dashboards that make sense, interfaces that don't break, designs that don't feel like an afterthought.",
  location: 'Cikarang, West Java, Indonesia',
  email: 'divaclarm20@gmail.com', // TODO: replace with your real email
  resumeUrl: '/resume.pdf', // TODO: drop your CV PDF into /public and update this path
  photo: '/photos/dimpa_ungu2.jpeg', // TODO: e.g. '/photo.jpg' — put the file in /public and set the path here
  socials: {
    github: 'https://github.com/dimpaa-heic',
    linkedin: 'www.linkedin.com/in/diva-clara-rosiana-marpaung-905659319',
    instagram: 'https://instagram.com/divamrp_',
  },
}

export const about = {
  bio: "I'm an Information Systems student at President University, concentrating in Data Science. I like turning messy things into something that makes sense - a raw dataset into a clear dashboard, a rough flow into an interface people don't have to think about. My work spans data analytics, web development, and QA, and I also design as a graphic designer on the side -mostly event visuals and social media content.",
  goal: 'Gain real professional experience through an internship, work alongside people I can learn from, and keep building knowledge across data, web development, and QA - while contributing something genuinely useful to the team I join.',
  passion: "I'm most excited by the process itself - picking up something new, connecting it to what I already know, and slowly turning confusion into clarity, whether that's in a dataset, a codebase, or a design.",
  interests: ['Data Analytics', 'Business Intelligence', 'Data Visualization', 'UI/UX Design',  'Graphic Designer', 'Quality Assurance',]
}

export const education = [
  {
    school: 'President University',
    major: 'Information Systems | Data Science Concentration',
    period: '2024 - Present',
  },
    {
    school: 'SMA Negeri 2 Kotabumi',
    major: 'IPA',
    period: '2021 - 2024',
  },
]

export const skills = {
  technical: [
    { name: 'JavaScript', level: 70 },
    { name: 'React / Vite', level: 70 },
    { name: 'Node.js', level: 70 },
    { name: 'FastAPI', level: 70 },
    { name: 'Django', level: 65 },
    { name: 'SQL', level: 70 },
    { name: 'Python (Data Analysis)', level: 70 },
  ],
  design: [
    { name: 'Figma', level: 80 },
    { name: 'Design Systems', level: 70 },
    { name: 'UI Prototyping', level: 70 },
  ],
  soft: ['Problem Solving', 'Attention to Detail', 'Communication', 'Time Management', 'Team Collaboration'],
}

export const projects = [
  {
    id: 'declarai',
    name: 'DeclarAI',
    category: 'UI/UX Designer and Front-End Developer',
    description:
      'A customs declaration management system built for Cikarang Dry Port, redesigned with a modern glass UI on top of a React/Vite codebase.',
    tech: ['React', 'Vite', 'Node.js', 'REST API'],
    image: '/photos/cdp.png',
    live: '',
    github: '',
    overview:
      'DeclarAI helps operators at Cikarang Dry Port manage customs declarations end-to-end - from intake to status tracking - replacing a slower, paper-heavy workflow.',
    problem: 'The existing declaration process was fragmented across spreadsheets and manual handoffs, making it slow to track status and error-prone at scale.',
    solution: 'Built a centralized dashboard with a refined design-token system (deep navy/brand blue palette, warm accents) layered on the existing logic, covering navigation, auth, and declaration views.',
    features: ['Login / Register split-layout flow', 'Declaration dashboard with live status', 'Role-based navigation', 'Consistent design system across pages'],
    learned: 'How to introduce a full design system into an existing production codebase without breaking working logic - and how to negotiate scope with real operational constraints.',
  },
  {
  id: 'kitchen-equipment-sales-dashboard',
  name: 'Kitchen Equipment Sales Analysis Dashboard',
  category: 'Data Analytics',
  description: 'End-to-end retail sales analysis on 10,000+ kitchen equipment transactions - from SQL data cleaning to an interactive Looker Studio dashboard with business recommendations.',
  tech: ['Google BigQuery', 'SQL', 'Python (Pandas)', 'Google Looker Studio'],
  image: '/photos/kitchen.png', // taruh screenshot di public/projects/
  live: '',    // link Looker Studio kalau ada
  github: '',  // link repo/notebook kalau ada

  overview: 'A retail sales analysis project built on a dataset of 10,000+ kitchen equipment sales transactions, turning raw data into actionable business insights through SQL, Python, and interactive visualization.',
  problem: 'The raw transaction data was unstructured and scattered - there was no clear view of sales trends, top-performing products, or regional performance to guide business decisions.',
  solution: 'Cleaned and transformed the dataset using SQL and Python, then ran exploratory data analysis with Pandas to surface trends. Queries were written in Google BigQuery for extraction, filtering, and aggregation, and the results were visualized in an interactive Google Looker Studio dashboard.',
  features: [
    'Total Sales, Total Orders & Completed Rate KPI cards',
    'Monthly sales trend visualization',
    'Sales contribution by category',
    'Top 5 products breakdown',
    'Sales by city map/chart',
  ],
  learned: 'How to take a large, messy dataset from raw SQL queries all the way to a polished, decision-ready dashboard - and how to translate analysis into business recommendations, not just charts.',
},
{
  id: 'sales-performance-excel-dashboard',
  name: 'Sales Performance Dashboard (Excel)',
  category: 'Data Analytics',
  description: 'An interactive Excel dashboard analyzing 10,000+ sales records, built with Pivot Tables, Pivot Charts, and VBA Macro automation for faster reporting.',
  tech: ['Microsoft Excel', 'Pivot Table', 'Pivot Chart', 'VBA Macro'],
  image: '/photos/sales.png',
  live: '',
  github: '',

  overview: 'An interactive sales dashboard built entirely in Microsoft Excel, combining advanced formulas, Pivot Tables/Charts, and VBA automation to analyze business performance.',
  problem: 'Manually digging through 10,000+ raw sales records for every report was slow and made it hard to consistently track performance across products, cities, and categories.',
  solution: 'Processed the dataset with advanced Excel formulas, summarized performance using Pivot Tables and Pivot Charts, and added VBA Macro buttons so the dashboard could be navigated and refreshed without manual digging.',
  features: [
    'Pivot Table & Pivot Chart sales summaries by product, city, and category',
    'VBA Macro buttons for automated navigation',
    'Dynamic, refreshable sales reports',
    'Visualized key business metrics at a glance',
  ],
  learned: 'How much automation (even simple VBA macros) can speed up repetitive reporting — and how far you can push Excel as a real analytics tool, not just a spreadsheet.',
},
  {
  id: 'dvd-rental-genai-dashboard',
  name: 'DVD Rental Customer Behavior Dashboard (GenAI Edition)',
  category: 'AI & Web Development',
  description: 'An AI-enhanced business analytics dashboard with a chatbot assistant (Aria) for natural language interaction, built collaboratively with FastAPI and the Claude API.',
  tech: ['Python', 'FastAPI', 'Claude API', 'PostgreSQL', 'Vanilla JS', 'Scikit-learn', 'Plotly'],
  image: '/photos/genai.png',
  live: '',
  github: '',

  overview: 'A collaborative AI-enhanced analytics dashboard for DVD rental customer behavior, featuring an AI chatbot assistant (Aria) that lets users query business insights in natural language.',
  problem: 'Traditional dashboards require users to already know what to look for - non-technical stakeholders often struggle to dig into customer behavior or revenue data on their own.',
  solution: 'Built the Growth Opportunities analytics module, analyzing customer behavior, revenue trends, and business opportunities, and connected it to a Claude API-powered chatbot so users could ask questions in plain language instead of navigating charts manually.',
  features: [
    'Aria — AI chatbot assistant for natural language queries',
    'Growth Opportunities analytics module',
    'Customer segmentation & revenue analysis',
    'Root-cause analysis visualizations',
    'Interactive Plotly data visualizations',
  ],
  learned: 'How to combine a GenAI layer (Claude API) with traditional analytics - and how to design an analytics module that actually holds up when demoed live in front of an audience.',
},
{
  id: 'dvd-rental-analytics-dashboard',
  name: 'DVD Rental Customer Behavior Analytics Dashboard',
  category: 'Data Analytics',
  description: 'A Django-based analytics dashboard analyzing DVD rental customer transactions to surface behavior patterns, revenue trends, and growth opportunities.',
  tech: ['Python', 'Django', 'PostgreSQL', 'Scikit-learn', 'Plotly'],
  image: '/photos/growth.png',
  live: '',
  github: '',

  overview: 'An analytics dashboard built on DVD rental transaction data, focused on identifying customer behavior patterns and revenue opportunities for the business.',
  problem: 'Raw transaction data in PostgreSQL held valuable signals about customer behavior and revenue, but there was no accessible way to explore or present those insights.',
  solution: 'Built the Growth Opportunities analytics module — queried and processed transaction data with SQL and Python, then visualized the results through an interactive Django + Plotly dashboard.',
  features: [
    'Growth Opportunities analytics module',
    'Customer behavior & revenue trend analysis',
    'SQL-driven data processing pipeline',
    'Interactive Plotly visualizations',
  ],
  learned: 'How to go from raw relational data to a specific, presentable analytics module — and how to scope one clear piece of a larger dashboard rather than trying to cover everything at once.',
},
{
  id: 'khasanah-sari-bakery-ais',
  name: 'Khasanah Sari Bakery — Accounting Information System',
  category: 'Frontend Development',
  description: 'Frontend for a web-based Accounting Information System supporting sales, inventory, and financial management for a bakery business.',
  tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Railway'],
  image: '/photos/bakery.png',
  live: '',
  github: '',

  overview: 'A web-based Accounting Information System (AIS) built for Khasanah Sari Bakery, covering sales, inventory, and financial management workflows.',
  problem: 'The business needed a reliable interface for staff to handle day-to-day accounting operations — sales entry, inventory tracking, and financial reporting — without friction.',
  solution: 'Developed the React frontend end-to-end: responsive, user-friendly pages for each operational area, working closely with the backend and database team to wire everything up to the Express/PostgreSQL system.',
  features: [
    'Sales management interface',
    'Inventory tracking pages',
    'Financial management & reporting views',
    'Responsive design across devices',
  ],
  learned: 'How to build frontend components that stay usable and consistent while integrating tightly with backend logic built by a separate team — and how much testing and small UX fixes matter once real users touch the system.',
},
{
  id: 'campus-event-management-app',
  name: 'Event Management Application',
  category: 'Mobile Development',
  description: 'A full-stack Android app letting students discover, register for, and manage campus events by organization and major, built with Firebase.',
  tech: ['Java', 'Android Studio', 'Firebase Firestore', 'Firebase Authentication'],
  image: '/photos/eventz.png',
  live: '',
  github: '',

  overview: 'A full-stack Android mobile application that helps students discover, register for, and manage campus events, filtered by organization and major.',
  problem: 'Campus event information was scattered across different organizations, making it hard for students to find events relevant to their major or interests in one place.',
  solution: 'Built a native Android app with Firebase Authentication for sign in/sign up and Firestore for real-time data sync across events, users, and registrations, with dynamic filtering by major and organization.',
  features: [
    'Firebase Auth sign in / sign up flow',
    'Real-time event registration sync via Firestore',
    'Home Event, My Events, Organization Events & Profile screens',
    'Dynamic filtering by major and organization',
  ],
  learned: 'How to design real-time data flows across multiple Firestore collections (events, users, registrations) so the app stays consistent — and what it takes to plan a full mobile app around 4 core screens without feature creep.',
},
]

export const experience = [
  {
    role: 'Head of Multimedia, Design & Documentation Division',
    org: 'President University Major Association, Information System (PUMA IS)',
    period: 'Oct 2025 — Present',
    points: [
      'Lead and coordinate the MTDD division in managing visual content, documentation, and digital media activities.',
      'Supervise team members in designing materials and event publications.',
      'Collaborate with other divisions to support organizational events and programs.',
      'Ensure timely delivery of creative and technical assets for organizational needs.',
    ],
  },
  {
    role: 'Member - Multimedia, Design & Documentation',
    org: 'President University Major Association, Information System (PUMA IS)',
    period: 'Oct 2024 — Sep 2025',
    points: [
      'Designed Instagram feed content to support event promotion and organizational branding.',
      'Created visual content for social media platforms, ensuring consistency with organizational identity and communication goals.',
    ],
  },
  {
    role: 'Selected Event Involvement',
    org: 'PUMA IS & Faculty-Level Events',
    period: '2024 — 2026',
    points: [
      'TechSprint 2026 3IN1 (PUMA IS) - PIC, Design | Jan – Jun 2026',
      'Istrumental 2025 (PUMA IS) - PIC, Multimedia, Design & Documentation | Oct – Dec 2025',
      'Computer Science Atmosphere x PT KAI (PUFA Compsci) - Design | Feb – Oct 2025',
      'Company Visit: Bank Indonesia 2025 (PUMA IS) - PIC, Multimedia, Design & Documentation | Dec 2024 – Sep 2025',
      'Golden Code Hackathon, President University x UNITAR Malaysia - Design | Dec 2024 – May 2025',
      'Temu Alumni Information System (PUMA IS) - Public Relations, External | Jan – Mar 2025',
      'EXPORA PUMA Information System (PUMA IS) - Multimedia, Design & Documentation | Nov 2024 – Mar 2025',
      'Istrumental 2024 (PUMA IS) - Liaison Officer | Oct 2024 – Jun 2025',
    ],
  },
]

export const certificates = [
  {
    id: 'cert-1',
    title: 'Data Analytics Certificate',
    issuer: 'KarirNex x PT Ebiz Prima Nusa',
    date: '2026',
    image: '/photos/daai.jpg', // TODO: put certificate image path here, e.g. '/certs/cert-1.jpg'
  },
  {
    id: 'cert-2',
    title: 'Microsoft Excel Bootcamp',
    issuer: 'KarirNex x PT Ebiz Prima Nusa',
    date: '2026',
    image: '/photos/excel.jpg',
  },
  {
    id: 'cert-3',
    title: 'Junior Web Developer (JWD)',
    issuer: 'BNSP & BPPTIK',
    date: '2025',
    image: '/photos/bnsp.jpeg',
  },
]

// Categories shown as filter tabs. Keep this in sync with the `category`
// values you use below — "All" is added automatically, don't include it here.
export const creativeCategories = ['Event Design', 'Social Media', 'UI/UX Design']

export const creativeWork = [
  { id: 'c1', title: 'DeclarAI', category: 'UI/UX Design', image: '/photos/declar.png' },
  { id: 'c2', title: ' TechSprint Instagram Feeds', category: 'Social Media', image: '/photos/ts2.jpeg' },
  { id: 'c3', title: 'Regenesys Instagram Feeds', category: 'Social Media', image: '/photos/instagram-post.jpg' },
  { id: 'c4', title: 'PUMA IS Instagram Feeds', category: 'Social Media', image: '/photos/pumais.png' },
  { id: 'c5', title: 'digiaksi4change Instagram Feeds', category: 'Social Media', image: '/photos/digiaksiig.png' },
  { id: 'c6', title: 'TechSprint 2026', category: 'Event Design', image: '/photos/techspr.png' },
  { id: 'c7', title: 'Istrumental 2025', category: 'Event Design', image: '/photos/istru.png' },
  { id: 'c8', title: 'Computer Atmosphere x PT KAI', category: 'Event Design', image: '/photos/compsh.png' },
  { id: 'c9', title: 'Company Visit Bank Indonesia (PUMA IS)', category: 'Event Design', image: '/photos/comvis.png' },
  { id: 'c10', title: 'Digiaksi (Social Project)', category: 'Event Design', image: '/photos/digiaksi.png' },
  { id: 'c11', title: 'EXPORA PUMA IS', category: 'Event Design', image: '/photos/expora.png' },
]
