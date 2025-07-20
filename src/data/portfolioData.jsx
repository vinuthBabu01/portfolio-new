import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma, FaCar, FaBrain, FaPlane, FaChartLine, FaShieldAlt, FaFutbol } from 'react-icons/fa'; // Example icons

export const personalInfo = {
  name: "Vinuth Kalmidi",
  phone: "+1-315-455-0180",
  title: "Full Stack Developer",
  email: "kvinuthbabu001@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinuth-kalmidi/",
  github: "https://github.com/vinuthBabu01",
  resumeLink: "/VinuthBabuKalmidi.pdf", // Make sure resume is in public/
  bio: "Full Stack Engineer with a strong focus on backend systems, APIs, and data-driven solutions. Skilled in Node.js, React, MongoDB, and Docker, with hands-on experience in IoT, NLP, and cloud-native development. Dedicated to delivering scalable and reliable software.",
  shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "Syracuse University,New York,US",
    degree: "Masters of Science in Computer Engineering",
    duration: "August 2023 – May 2025",
    score: "CGPA: 3.45/4",
  },
  {
    institution: "BNMIT, Bangalore, India",
    degree: "Bachelor of Engineering in Information Technology",
    duration: "August 2017 - August 2021",
    score: "CGPA: 3.0/4",
  }
];

export const projects = [
  {
    title: "IoT-Based Smart Parking System with Dynamic Pricing",
    tech: ["ESP32", "MicroPython", "MQTT", "Python","AWS IoT Core", "IoT", "Cloud Computing"],
    description: "An IoT-based smart parking solution that uses ESP32 microcontrollers, ultrasonic sensors, and AWS IoT Core (via MQTT) for real-time slot detection. Developed a Python-based dynamic pricing engine to optimize parking fees based on demand and availability. The system enables automated slot monitoring and revenue optimization for parking spaces.",
    date: "Jan 2025 - May 2025",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "IoT",
    icon: <FaCar size={24} className="text-accent-1" />
  },
  {
    title: "TechNERD - NLP & Machine Learning Pipeline",
    tech: ["Python", "RoBERTa", "BERT", "Scikit-learn", "Pandas", "NLP", ],
    description: "Built an NLP pipeline using RoBERTa and Hugging Face Transformers for Named Entity Recognition (NER) on technical Stack Exchange posts, achieving 74% cosine similarity. Implemented a predictive model (MSE: 9.11) to forecast post engagement based on input features. Automated data scraping, cleaning, and feature extraction pipelines to process large datasets efficiently.",
    date: "Sep 2024 - Dec 2024",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "NLP",
    icon: <FaBrain size={24} className="text-accent-1" />
  },
  {
    title: "Airline Management System with Weather API Integration",
    tech: ["Python", "JavaScript", "React", "OOP", "REST API", "JSON", "UML", "MongoDB"],
    description: "Designed a backend-driven airline management system with real-time Weather API integration for dynamic operational decisions. Built using object-oriented principles, it handles flight management, scheduling, and error handling. Supported by comprehensive system documentation including SRS, UML diagrams, and CRC cards for architecture clarity.",
    date: "Mar 2024 – May 2024",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "Software Design",
    icon: <FaPlane size={24} className="text-accent-1" />
  },
  {
    title: "Dev Insights — Developer Trends Dashboard",
    tech: ["Python", "Pandas", "Plotly", "Stack Overflow API", "Data Mining"],
    description: "A web-based dashboard that analyzes and visualizes developer trends from Stack Overflow and GitHub. Utilized Stack Overflow APIs and GitHub APIs for real-time data fetching and displayed interactive charts on programming trends, hot technologies, and community engagement.",
    date: "Sep 2023 – Dec 2023",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "Data Analytics",
    icon: <FaChartLine size={24} className="text-accent-1" />
  },
  {
    title: "Network Anomaly Detection",
    tech: ["Python", "Jupyter Notebook", "Matplotlib", "Machine Learning", "AWID Dataset"],
    description: "Implemented machine learning models to detect anomalies in Wi-Fi traffic using the AWID dataset. Preprocessed large-scale network data and visualized model performance using Matplotlib to highlight intrusion patterns and classification results.",
    date: "Aug 2020 – May 2021",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "Cybersecurity",
    icon: <FaShieldAlt size={24} className="text-accent-1" />
  },
  {
    title: "Goal-360 ",
    tech: ["JavaScript", "Angular", "HTML", "CSS", "REST API"],
    description: "Developed a real-time football scores web app by integrating live sports APIs to display current match data, team stats, and league information across multiple tournaments.",
    date: "Jan 2020 – Jun 2020",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "Web Development",
    icon: <FaFutbol size={24} className="text-accent-1" />
  }

];

// export const skills = {
//   languages: [
//     {
//       name: "JavaScript",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     },
//     {
//       name: "C/C++",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
//     },
//     {
//       name: "HTML5",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     },
//     {
//       name: "CSS3",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//     },
//     {
//       name: "Python",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//     },
//     {
//       name: "Go",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
//     },
//     {
//       name: "SQL",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//     },
//   ],
//   frameworksAndLibraries: [
//     {
//       name: "React",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     },
//     {
//       name: "Node.js",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     },
//     {
//       name: "Express.js",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
//     },
//   ],
//   toolsAndPlatforms: [
//     {
//       name: "MongoDB",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     },
//     {
//       name: "Postgresql",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//     },
//     {
//       name: "GitHub",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//     },
//     {
//       name: "VS Code",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
//     },
//     {
//       name: "Postman",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
//     },
//     {
//       name: "Docker",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//     },
//     {
//       name: "Google Cloud",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
//     },
//   ],
//   coreCompetencies: [
//     "Full-Stack Web Development",
//     "Backend Architecture & APIs",
//     "Database Design & Management",
//     "Cross-Functional Collaboration",
//     "Cloud & DevOps Tools",
//     "Debugging & Reliability Engineering",
//     "Automation & Process Efficiency",
//     "UI/UX Development",
//     "System Performance Optimization",
//     "Machine Learning & Data Projects",
//     "Software Design Principles",
//     "Growth Mindset & Learning "
//   ],
// };

export const skills = {
  frontend: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ],

  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "REST APIs", icon: "rest-api-blue-logo.svg" }, // No direct icon; fallback works
  ],

  databases: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],

  cloudAndDevOps: [
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    {name: "AWS IoT Core", icon :"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"},
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" }, 
    { name: "Netlify", icon: "Netlify.svg" },
  ],

  dataAndNLP: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }, // No icon in Devicon
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  ],

  toolsAndPlatforms: [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
 
  ],

  coreCompetencies: [
    "Full-Stack Web Development",
    "Backend Architecture & APIs",
    "Frontend Development with Modern Frameworks",
    "Database Design & Management",
    "Machine Learning Model Development",
    "Natural Language Processing (NLP)",
    "Applied AI for Automation & Personalization",
    "Large Language Model (LLM) Integration",
    "Cross-Functional Collaboration",
    "Cloud & DevOps Tools",
    "Automation & Process Efficiency",
    "UI/UX Development",
    "System Performance Optimization",
    "Software Design Principles",
    "Growth Mindset & Continuous Learning"
  ],
};


export const experience = [

 {
    role: 'Research Intern',
    organization: 'Syracuse University',
    duration: 'June 2025 – Present',
    description: 'Working on HireMate, an AI-powered job application assistant that automates the job search process using AI, NLP, and automation.',
    points: [
      'Currently developing an end-to-end automated job application system capable of parsing resumes, scraping job listings, and generating tailored application documents.',
      'Designing backend APIs with Python (Flask/FastAPI) to handle resume parsing, job scraping, and filtering based on user preferences and skills.',
      'Integrating large language models such as OpenAI GPT to dynamically generate personalized resumes and cover letters for each job.',
      'Building a React-based frontend to display job listings, job details, and provide downloadable, tailored documents.',
      'Implementing job scraping pipelines for platforms like LinkedIn and Indeed using Python automation tools such as Selenium and BeautifulSoup.',
      'Setting up deployment pipelines with Docker and GitHub Actions to deploy the application to a free-tier cloud platform.'
    ],
    techStack: [
      'Python', 'Flask', 'FastAPI', 'React', 'OpenAI GPT', 'spaCy', 'Pyresparser', 'BeautifulSoup', 'Selenium', 'Docker', 'GitHub Actions'
    ]
  
 },
  {
    role: 'Full Stack Software Engineer',
    organization: 'Byju’s',
    duration: 'Oct 2021 – Mar 2023',
    description:
      'As a Full Stack Engineer, I worked on Byju’s Loan Management Systems, contributing to backend API development, workflow automation, and partner integrations. My role focused on building scalable, production-grade systems that improved operational efficiency and financial data management.',
    points: [
      'Developed and optimized REST APIs and microservices using Node.js, Express, MongoDB, and PostgreSQL.',
      'Automated the Green Channel loan approval process, reducing processing time by 40%.',
      'Built a dynamic job assignment engine, improving task distribution efficiency by 30%.',
      'Led backend API integrations with CreditSaison, Propelld, and FinancePeer, reducing onboarding time by 25%.',
      'Delivered secure APIs for foreclosure and recovery workflows, improving compliance and reducing manual errors by 35%.',
      'Optimized backend services and database queries to reduce response time by 50% under load.',
      'Collaborated with cross-functional teams in Agile sprints, participating in code reviews and architecture discussions.',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'React.js',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      "Kafka",
      'Postman',
      'Git',
      'GitHub Actions',
      'REST APIs',
      'Microservices',
      'CI/CD',
    ],
  },
  {
    role: 'Software Developer Intern',
    organization: 'TechCiti Technologies',
    duration: 'Mar 2021 – May 2021',
    description:
      'Contributed to the development of a full-stack web application while gaining hands-on experience in API development, database management, and deployment workflows.',
    points: [
      'Built responsive frontend components with React.js and backend services with Node.js and Express.js.',
      'Designed and implemented MongoDB schemas to manage structured and semi-structured data.',
      'Created and maintained REST APIs for seamless data communication between frontend and backend.',
      'Implemented CI/CD pipelines with Git and GitHub Actions, automating the deployment process.',
      'Participated in sprint meetings, peer code reviews, and collaborated on solving technical challenges.',
    ],
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker',
      'Git',
      'Postman',
      'GitHub Actions',
      'REST APIs',
      'CI/CD',
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
