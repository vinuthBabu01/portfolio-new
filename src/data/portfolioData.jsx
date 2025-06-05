import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma, FaCar, FaBrain, FaPlane, FaChartLine, FaShieldAlt, FaFutbol } from 'react-icons/fa'; // Example icons

export const personalInfo = {
  name: "Vinuth Kalmidi",
  phone: "+1-315-455-0180",
  title: "Full Stack Developer",
  email: "kvinuthbabu001@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinuth-babu/",
  github: "https://github.com/vinuthBabu01",
  resumeLink: "/VinuthKalmidiResume.pdf", // Make sure your resume is in public/
  bio: "Versatile Full Stack Engineer with a strong foundation in backend systems and data-driven applications. Passionate about building scalable, user-focused solutions and always eager to learn, grow, and contribute to collaborative engineering teams.",
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
    tech: ["ESP32", "MicroPython", "MQTT", "AWS IoT Core", "Python", "IoT", "Cloud Computing"],
    description: "Engineered a smart parking system using ESP32 and AWS IoT Core to enable real-time vehicle detection and slot monitoring. Integrated a Python-based dynamic pricing engine to adjust rates based on occupancy, optimizing space utilization and boosting efficiency of urban infrastructure.",
    date: "Jan 2025 - May 2025",
    githubLink: null,
    liveLink: null,
    category: "IoT",
    icon: <FaCar size={24} className="text-accent-1" />
  },
  {
    title: "TechNERD",
    tech: ["Python", "RoBERTa", "BERT", "Scikit-learn", "Hugging Face Transformers", "Pandas", "NLP"],
    description: "Built a two-stage NLP pipeline using transformer models (RoBERTa, BERT) to extract technical terms and predict user engagement on Stack Exchange posts. Achieved 74% cosine similarity in NER and a low MSE of 9.11 in engagement prediction, revealing key post trends from 2016–2024.",
    date: "Sep 2024 - Dec 2024",
    githubLink: null,
    liveLink: null,
    category: "NLP",
    icon: <FaBrain size={24} className="text-accent-1" />
  },
  {
    title: "Airline Management System",
    tech: ["Python", "JavaScript", "React.js", "OOP", "REST API", "JSON", "UML", "MongoDB"],
    description: "Designed a full-stack Airline Management System demonstrating object-oriented principles and agile practices. Integrated real-time weather APIs to enhance flight safety and operational coordination, supported by UML diagrams and comprehensive SRS documentation.",
    date: "Mar 2024 – May 2024",
    githubLink: null,
    liveLink: null,
    category: "Software Design",
    icon: <FaPlane size={24} className="text-accent-1" />
  },
  {
    title: "Dev Insights",
    tech: ["Python", "Pandas", "Plotly", "Stack Overflow API", "Data Mining"],
    description: "Developed a data mining pipeline to analyze 100K+ Stack Overflow posts, uncovering developer sentiment and tech trends. Built an interactive dashboard using Plotly to deliver predictive insights for curriculum planning and tooling decisions.",
    date: "Sep 2023 – Dec 2023",
    githubLink: null,
    liveLink: null,
    category: "Data Analytics",
    icon: <FaChartLine size={24} className="text-accent-1" />
  },
  {
    title: "Network Anomaly Detection",
    tech: ["Python", "Jupyter Notebook", "Matplotlib", "Machine Learning", "AWID Dataset"],
    description: "Implemented machine learning models to detect anomalies in Wi-Fi traffic using the AWID dataset. Preprocessed large-scale network data and visualized model performance using Matplotlib to highlight intrusion patterns and classification results.",
    date: "Aug 2020 – May 2021",
    githubLink: null,
    liveLink: null,
    category: "Cybersecurity",
    icon: <FaShieldAlt size={24} className="text-accent-1" />
  },
  {
    title: "Goal-360 ",
    tech: ["JavaScript", "Angular", "HTML", "CSS", "REST API"],
    description: "Developed a real-time football scores web app by integrating live sports APIs to display current match data, team stats, and league information across multiple tournaments.",
    date: "Jan 2020 – Jun 2020",
    githubLink: null,
    liveLink: null,
    category: "Web Development",
    icon: <FaFutbol size={24} className="text-accent-1" />
  }

];

export const skills = {
  languages: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "C/C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Go",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
  frameworksAndLibraries: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  toolsAndPlatforms: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Postgresql",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Google Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
  ],
  coreCompetencies: [
    "Full-Stack Web Development",
    "Backend Architecture & APIs",
    "Database Design & Management",
    "Cross-Functional Collaboration",
    "Cloud & DevOps Tools",
    "Debugging & Reliability Engineering",
    "Automation & Process Efficiency",
    "UI/UX Development",
    "System Performance Optimization",
    "Machine Learning & Data Projects",
    "Software Design Principles",
    "Growth Mindset & Learning "
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    organization: "Byjus, India",
    duration: "October 2021 - March 2023",
    points: [
      "Built scalable microservices and automated loan workflows that reduced processing time by 40% and improved operational efficiency by 30% for enterprise-grade Loan Management Systems.",
      "Optimized core backend APIs using Node.js and Kafka, resulting in 50% faster response times, improved performance during peak load, and reliable real-time data sync.",
      "Integrated APIs with financial institutions (e.g., ABFL, CreditSaison) to automate onboarding and foreclosure workflows, reducing borrower onboarding time by 25% and manual errors by 35%.",
      "Designed and implemented a dynamic job assignment engine based on user availability and skillsets, improving customer service turnaround and reducing SLA violations.",
      "Refactored legacy services into modular, testable microservices and collaborated with DevOps to implement CI/CD pipelines, cutting deployment time and post-release bugs by 40%.",
      "Investigated and resolved production-critical issues including batch job failures and database inconsistencies, ensuring 99.9% system uptime and uninterrupted loan operations.",
      "Collaborated across product, QA, and engineering teams to align technical design with business goals, contributing to a platform serving 10,000+ users with high reliability."
    ],
  },
  {
    role: "Intern - Web Developer",
    organization: "TechCiti Technologies Private Limited",
    duration: "March 2021 - May 2021",
    points: [
      "Engineered a responsive full-stack web application using React, JavaScript, and Bootstrap, elevating cross-platform usability and enhancing overall UI performance.",
      "Implemented and integrated features across the front-end and back-end, strengthening database interactions and contributing to efficient project delivery in a production setting.",
    ],
  }
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};