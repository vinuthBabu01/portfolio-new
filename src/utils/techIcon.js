const techNameMap = {
  JavaScript: 'javascript',
  'AWS IoT Core': 'amazonwebservices',
  Python: 'python',
  'C++': 'cplusplus',
  'C#': 'csharp',
  HTML: 'html5',
  CSS: 'css3',
  MicroPython: 'python',
  'React.js': 'react',
  React: 'react',
  Angular: 'angular',
  Node: 'nodejs',
  'Node.js': 'nodejs',
  NodeJS: 'nodejs',
  Express: 'express',
  'Express.js': 'express',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Docker: 'docker',
  'Google Cloud': 'googlecloud',
  MQTT: 'mqtt',
  'Stack Overflow API': 'stackoverflow',
  GitHub: 'github',
  'GitHub Actions': 'githubactions',
  Postman: 'postman',
  'Jupyter Notebook': 'jupyter',
  Pandas: 'pandas',
  NumPy: 'numpy',
  'Scikit-learn': 'scikitlearn',
  'Hugging Face': 'huggingface',
  RoBERTa: 'roberta',
  BERT: 'bert',
  Matplotlib: 'matplotlib',
  Plotly: 'plotly',
  'AWID Dataset': 'dataset',
  'REST API': 'rest-api-blue-logo',
  'REST APIs': '',
  JS: 'javascript',
  TS: 'typescript',
  SQL: 'mysql',
  AWS: 'amazonwebservices',
  Kafka: 'apachekafka',
  Temporal: 'temporal',
  Tavily: 'tavily',
  'Anthropic Claude': 'anthropic-claude',
  'Machine Learning': 'MachineLearning',
  'Data Mining': 'DataMining',
  'Cloud Computing': 'cloudflare',
};

/**
 * Returns { cdnUrl, localUrl } for a given tech name.
 * Falls back to a local /public SVG if the CDN URL fails.
 */
export const getTechIconUrls = (techName) => {
  const mapped = techNameMap[techName] || techName;

  if (!mapped || typeof mapped !== 'string' || mapped.trim() === '') {
    return { cdnUrl: '', localUrl: '' };
  }

  const formatted = mapped.toLowerCase().replace(/\s+/g, '');
  const cdnUrl =
    formatted === 'amazonwebservices'
      ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${formatted}/${formatted}-plain-wordmark.svg`
      : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${formatted}/${formatted}-original.svg`;

  const localUrl = `/${mapped}.svg`;

  return { cdnUrl, localUrl };
};

/**
 * Returns a single CDN URL (no local fallback). Used where only one src is needed.
 */
export const getTechIconUrl = (techName) => {
  const { cdnUrl } = getTechIconUrls(techName);
  return cdnUrl;
};
