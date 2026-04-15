import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCar, FaBrain, FaPlane, FaChartLine, FaShieldAlt, FaFutbol, FaHome } from 'react-icons/fa';

export const personalInfo = {
  name: "Vinuth Kalmidi",
  phone: "+1-315-455-0180",
  title: "Full Stack Developer",
  email: "kvinuthbabu001@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinuth-kalmidi/",
  github: "https://github.com/vinuthBabu01",
  resumeLink: "/VinuthKalmidiResume.pdf",
  bio: "Full Stack Engineer with a strong focus on backend systems, APIs, and data driven solutions. Skilled in Node.js, React, MongoDB, and Docker, with hands-on experience in IoT, NLP, and cloud-native development. Dedicated to delivering scalable and reliable software.",
  shortBio: "I build things for the web.",
  location: "Based in the U.S.",
  availability: "Open to full-time software engineering roles",
  heroStats: [
    { label: "Years building", value: "3+" },
    { label: "Production focus", value: "APIs + Backend" },
    { label: "Domains", value: "IoT, AI, Data" },
  ]
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
    title: "RentAgent: AI Rental Search Assistant",
    tech: ["Temporal", "Anthropic Claude", "Tavily", "Node.js", "Express.js", "React.js", "Vite"],
    description: "Currently building an AI-powered rental search assistant that helps renters discover stronger matches faster by searching across multiple sources, filtering irrelevant listings, checking landlord reputation, and returning a ranked shortlist based on user preferences.",
    date: "Currently Building",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "AI Agents",
    icon: <FaHome size={24} className="text-accent-1" />,
    highlight: "Durable multi-step rental search agent with web search, vetting, and ranking workflows",
    outcomes: ["5-step workflow pipeline", "Landlord reputation checks", "Curated ranked property matches"],
    accent: "from-emerald-300/30 via-cyan-400/10 to-transparent",
  },
  {
    title: "IoT-Based Smart Parking System with Dynamic Pricing",
    tech: ["ESP32", "MicroPython", "MQTT", "Python","AWS IoT Core", "IoT", "Cloud Computing"],
    description: "An IoT-based smart parking solution that uses ESP32 microcontrollers, ultrasonic sensors, and AWS IoT Core (via MQTT) for real-time slot detection. Developed a Python-based dynamic pricing engine to optimize parking fees based on demand and availability. The system enables automated slot monitoring and revenue optimization for parking spaces.",
    date: "Jan 2025 - May 2025",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "IoT",
    icon: <FaCar size={24} className="text-accent-1" />,
    highlight: "Real-time parking intelligence with dynamic pricing",
    outcomes: ["Live slot detection", "Demand-based pricing", "AWS IoT messaging"],
    accent: "from-cyan-400/30 via-emerald-400/10 to-transparent",
  },
  {
    title: "TechNERD - NLP & Machine Learning Pipeline",
    tech: ["Python", "RoBERTa", "BERT", "Scikit-learn", "Pandas", "NLP", ],
    description: "Built an NLP pipeline using RoBERTa and Hugging Face Transformers for Named Entity Recognition (NER) on technical Stack Exchange posts, achieving 74% cosine similarity. Implemented a predictive model (MSE: 9.11) to forecast post engagement based on input features. Automated data scraping, cleaning, and feature extraction pipelines to process large datasets efficiently.",
    date: "Sep 2024 - Dec 2024",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "NLP",
    icon: <FaBrain size={24} className="text-accent-1" />,
    highlight: "Transformer pipeline for extracting signals from developer text",
    outcomes: ["74% cosine similarity", "Automated data pipeline", "Engagement prediction model"],
    accent: "from-fuchsia-400/30 via-rose-400/10 to-transparent",
  },
  {
    title: "Airline Management System with Weather API Integration",
    tech: ["Python", "JavaScript", "React", "OOP", "REST API", "JSON", "UML", "MongoDB"],
    description: "Designed a backend-driven airline management system with real-time Weather API integration for dynamic operational decisions. Built using object-oriented principles, it handles flight management, scheduling, and error handling. Supported by comprehensive system documentation including SRS, UML diagrams, and CRC cards for architecture clarity.",
    date: "Mar 2024 – May 2024",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "Software Design",
    icon: <FaPlane size={24} className="text-accent-1" />,
    highlight: "Operations-aware system design backed by weather data",
    outcomes: ["Weather API integration", "OOP architecture", "System documentation"],
    accent: "from-sky-400/30 via-blue-400/10 to-transparent",
  },
  {
    title: "Dev Insights — Developer Trends Dashboard",
    tech: ["Python", "Pandas", "Plotly", "Stack Overflow API", "Data Mining"],
    description: "A web-based dashboard that analyzes and visualizes developer trends from Stack Overflow and GitHub. Utilized Stack Overflow APIs and GitHub APIs for real-time data fetching and displayed interactive charts on programming trends, hot technologies, and community engagement.",
    date: "Sep 2023 – Dec 2023",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "Data Analytics",
    icon: <FaChartLine size={24} className="text-accent-1" />,
    highlight: "Dashboarding live developer trends across communities",
    outcomes: ["Interactive charts", "API-driven insights", "Trend visualization"],
    accent: "from-amber-300/30 via-orange-400/10 to-transparent",
  },
  {
    title: "Network Anomaly Detection",
    tech: ["Python", "Jupyter Notebook", "Matplotlib", "Machine Learning", "AWID Dataset"],
    description: "Implemented machine learning models to detect anomalies in Wi-Fi traffic using the AWID dataset. Preprocessed large-scale network data and visualized model performance using Matplotlib to highlight intrusion patterns and classification results.",
    date: "Aug 2020 – May 2021",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "Cybersecurity",
    icon: <FaShieldAlt size={24} className="text-accent-1" />,
    highlight: "ML-based traffic anomaly detection for wireless networks",
    outcomes: ["AWID preprocessing", "Intrusion pattern analysis", "Model comparison visuals"],
    accent: "from-red-400/30 via-orange-400/10 to-transparent",
  },
  {
    title: "Goal-360 ",
    tech: ["JavaScript", "Angular", "HTML", "CSS", "REST API"],
    description: "Developed a real-time football scores web app by integrating live sports APIs to display current match data, team stats, and league information across multiple tournaments.",
    date: "Jan 2020 – Jun 2020",
    githubLink: `https://github.com/vinuthBabu01?tab=repositories`,
    liveLink: null,
    category: "Web Development",
    icon: <FaFutbol size={24} className="text-accent-1" />,
    highlight: "Live sports interface for match data and league updates",
    outcomes: ["Real-time score updates", "Multi-tournament coverage", "REST API integration"],
    accent: "from-lime-300/30 via-emerald-400/10 to-transparent",
  }

];

export const skills = {
  frontend: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ],

  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "REST APIs", icon: "/rest-api-blue-logo.svg" },
    { name: "Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ],

  databases: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],

  cloudAndDevOps: [
    { name: "Temporal", icon: "/temporal.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
    { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
    { name: "AWS IoT Core", icon :"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"},
    { name: "Netlify", icon: "/Netlify.svg" },
  ],

  dataAndNLP: [
    { name: "Anthropic Claude", icon: "/anthropic-claude.svg" },
    { name: "Tavily", icon: "/tavily.svg" },
    { name: "OpenAI GPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg" },
    { name: "spaCy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pyresparser", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "BeautifulSoup", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }, // No icon in Devicon
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  ],

  toolsAndPlatforms: [
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],

  coreCompetencies: [
    "Backend Systems & API Design",
    "Full-Stack Application Development",
    "Workflow Automation",
    "Database Design & Query Optimization",
    "Partner API Integration",
    "Production Issue Resolution",
    "AI & LLM Integration",
    "Resume Parsing & Job Matching Systems",
    "Web Scraping & Automation",
    "Cross-Functional Collaboration",
    "CI/CD & Deployment Workflows",
    "System Reliability & Maintainability",
    "Product-Focused Engineering"
  ],
};


export const experience = [
// Contract Role and doesnt align with the profile - so not showcasing on profilr
  // {
  //   role: 'AI Data Associate',
  //   organization: 'META (via RWS Group)',
  //   duration: 'Nov 2025 – Present',
  //   description: 'Evaluate and refine AI-generated responses while auditing and optimizing LLM outputs to enhance accuracy, reliability, and reasoning quality.',
  //   points: [
  //     'Evaluate and improve AI-generated responses across diverse domains to raise factual accuracy, reasoning quality, and instruction alignment.',
  //     'Analyze prompt behavior, identify failure patterns, and provide targeted feedback that supports model tuning and response-quality improvements.',
  //     'Rewrite low-quality outputs into clearer, more reliable answers that help strengthen training data standards at scale.'
  //   ],
    
  // },

 {
    role: 'AI Software Engineer',
    organization: 'Syracuse University',
    duration: 'Jun 2025 – Present',
    description: 'Working on HireMate, an AI-powered job application assistant that automates the job search process using AI, NLP, and automation.',
    points: [
      'Built an AI-powered job application platform automating resume parsing, job matching, and application generation, reducing manual effort and improving application efficiency.',
      'Developed backend services in Python with FastAPI and designed REST APIs to process unstructured resume data into structured formats for accurate matching and end-to-end workflow management.',
      'Integrated LLM-based pipelines to generate personalized resumes and cover letters from job descriptions, implementing prompt workflows and validation layers to improve output consistency and reliability.'
    ],
    techStack: [
      'Python', 'FastAPI', 'REST APIs', 'OpenAI GPT', 'spaCy', 'Pyresparser', 'BeautifulSoup', 'Selenium', 'Docker', 'GitHub Actions'
    ]
  
 },
  {
    role: 'Full Stack Software Engineer',
    organization: 'Byju’s',
    duration: 'Aug 2021 – Jul 2023',
    description:
      'Worked on Byju’s loan management systems, contributing to backend API development, workflow automation, and partner integrations for production financial operations.',
    points: [
      'Built backend systems for a loan management platform, designing APIs and workflow engines to support the end-to-end loan lifecycle from initiation and approval to foreclosure across multiple lending partners.',
      'Developed and optimized workflows to process 1,000+ loan applications daily, reducing manual intervention and improving operational turnaround time for teams operating across India.',
      'Designed and implemented Green Channel, a rule-based automation service that removed a manual approval step and accelerated processing for eligible applications.',
      'Owned production systems supporting business-critical financial operations, resolving 100+ production issues and improving reliability for operations and BI teams.',
      'Integrated external partner APIs and maintained consistent data flow across services, enabling seamless processing across multiple financial partners.'
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
    role: 'Software Developer',
    organization: 'TechCiti Technologies',
    duration: 'Jan 2021 – June 2021',
    description:
      'Contributed to the development of a full-stack web application while gaining hands-on experience in API development, database management, and deployment workflows.',
    points: [
      'Built a case management system to digitize legal records, developing backend services using Node.js and PostgreSQL for structured data storage and retrieval.',
      'Designed REST APIs to enable efficient querying and management of case data, improving accessibility and consistency across teams.',
      'Developed Angular-based frontend components to streamline case tracking and simplify day-to-day workflows for legal users.'
    ],
    techStack: [
      'Node.js',
      'Angular',
      'PostgreSQL',
      'Postman',
      'REST APIs',
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
