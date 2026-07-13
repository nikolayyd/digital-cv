import { type CVData } from '../types/cv';

export const cvData: CVData = {
  name: 'Nikolay Dragostinov',
  title: 'Application Systems Engineer',
  summary:
    'Full-stack developer experienced in building internal web applications from scratch to production. Skilled in developing front-end features, writing back-end services, working with PostgreSQL databases, and deploying the final applications to Linux environments.',
  contact: {
    email: 'nikolayddragostinov@gmail.com',
    phone: '+359897582777',
    github: 'https://github.com/nikolayyd',
    linkedin: 'linkedin.com',
  },
  skills: [
    {
      category: 'Programming Languages',
      items: ['JavaScript(ES6+)', 'TypeScript', 'C++', 'PHP', 'Python'],
    },
    {
      category: 'Technologies & Frameworks',
      items: [
        'React',
        'Vite',
        'Tailwind CSS/Bootstrap',
        'Node.js & Express',
        'Objection.js & Knex',
        'Azure Maps',
        'Pandas & SQLAlchemy',
      ],
    },
    {
      category: 'Environments & Databases',
      items: ['PostgreSQL', 'REST APIs', 'Apache', 'Linux', 'Git'],
    },
  ],
  experience: [
    {
      role: 'Application Systems Engineer',
      company: 'Electricity System Operator (ESO) - Bulgaria',
      startDate: 'October 2025',
      endDate: 'Present',
      key_responsibilities: [
        'Contributed to end-to-end development of internal web applications from implementation to production deployment.',
        'Built modular frontend components with React and TypeScript.',
        'Implemented backend services in PHP and integrated REST APIs',
        'Worked on PostgreSQL schema design and query optimization.',
        'Deployed applications to test and production Linux environments-specific configurations.',
      ],
    },
  ],
  education: [
    {
      degree: 'Secondary Education Diploma',
      school: 'II ELS "Thomas Jefferson"',
      startDate: 'September 2016',
      endDate: 'June 2021',
    },
    {
      degree: 'Bachelor of Information systems',
      school: 'Sofia University "St. Kliment Ohridski" - FMI',
      startDate: 'October 2021',
      endDate: 'July 2026',
    },
  ],
};

export const projectsData = [
  {
    title: 'Issues Tracker',
    description: 'Project and Ticket Management Application (Group project).',
    role: 'Contributed to both front-end and back-end development, database management.',
    features: [
      'User authentication and authorization',
      'Projects and tickets workflow for status management',
      'Filtering and sorting of tickets based on various criteria',
      'Project sharing with other users',
    ],
    technologies: ['React', 'TypeScript', 'Objection.js & Knex', 'PostgreSQL'],
    projectType: 'group' as const,
    githubLink: 'https://github.com/andrei1k/Issues-Tracker',
  },
  {
    title: 'Interactive Map',
    description:
      'Developed an interactive Azure Maps application that retrieves spatial data from PostgreSQL to visualize stations and polylines with layered styling, type legends, and a custom search feature.',
    technologies: ['React(TypeScript)', 'PHP', 'PostgreSQL', 'Azure Maps SDK'],
    projectType: 'commercial' as const,
    liveLink: 'https://webapps.eso.bg/joining/public/map',
  },
  {
    title: 'User Authentication System',
    features: [
      'User registration and login with password hashing',
      'Email verification functionality for account activation',
      'JWT-based authentication with expiration for secure API access',
      'Protected routes (outlets) and middleware for user authorization',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    projectType: 'personal' as const,
    githubLink: 'https://github.com/nikolayyd/outlet-auth',
  },
  {
    title: 'Movies ETL Pipeline',
    features: [
      'Loaded raw movie data from a CSV file into staging tables in PostgreSQL.',
      'Cleaned and transformed the data using SQL queries to ensure consistency and accuracy.',
      'Transformed columns into normalized tables for better data organization and retrieval.',
      'Ensure idempodent execution of the ETL process to avoid duplicate data insertion.',
    ],
    technologies: ['Python', 'Pandas', 'SQLAlchemy', 'PostgreSQL'],
    projectType: 'personal' as const,
    githubLink: 'https://github.com/nikolayyd/movies-pipeline',
  },
];
