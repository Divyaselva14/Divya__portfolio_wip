export interface PersonalInfo {
  name: string;
  jobTitles: string[];
  tagline: string;
  email: string;
  location: string;
  availability: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  impact: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  previewImage?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  views: number;
  slug: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Divya Selva Prabhu",
  jobTitles: [
    "Data Engineer",
    "Analytics Engineer",
    "Building Reliable Data Systems",
    "Pipeline Architect",
  ],
  tagline: "Building scalable data infrastructure for modern analytics",
  email: "your.email@example.com",
  location: "San Francisco, CA",
  availability: "Open to new opportunities",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/Divyaselva14",
  linkedinUrl: "https://linkedin.com/in/yourusername",
};

// Experience
export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Company Inc.",
    role: "Senior Data Engineer",
    period: "2022 - Present",
    description:
      "Leading data infrastructure initiatives and building scalable data pipelines for real-time analytics.",
    impact: [
      "Reduced data processing latency by 70% through optimized pipeline architecture",
      "Built real-time data platform processing 10TB+ daily",
      "Implemented data quality framework catching 95% of anomalies",
    ],
    technologies: [
      "Apache Spark",
      "Airflow",
      "AWS",
      "Snowflake",
      "Python",
      "dbt",
    ],
  },
  {
    id: "exp-2",
    company: "Data Startup Co.",
    role: "Data Engineer",
    period: "2020 - 2022",
    description:
      "Designed and implemented ETL pipelines and data warehousing solutions for analytics teams.",
    impact: [
      "Architected data warehouse serving 100+ analysts",
      "Reduced infrastructure costs by 40% through optimization",
      "Built automated testing framework for data pipelines",
    ],
    technologies: ["Python", "PostgreSQL", "Redshift", "Kafka", "Docker"],
  },
  {
    id: "exp-3",
    company: "Analytics Firm",
    role: "Junior Data Engineer",
    period: "2018 - 2020",
    description:
      "Developed data pipelines and reporting infrastructure for business intelligence.",
    impact: [
      "Created 50+ automated data workflows",
      "Improved report generation speed by 3x",
      "Built data quality monitoring dashboards",
    ],
    technologies: ["SQL", "Python", "Tableau", "MySQL", "Pandas"],
  },
];

// Projects
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Real-Time Analytics Platform",
    description:
      "Distributed data processing system handling millions of events per second",
    longDescription:
      "Built a scalable real-time analytics platform using Apache Flink and Kafka, processing over 10 million events per second with sub-second latency. Implemented custom windowing functions and stateful stream processing.",
    image: "/projects/analytics-platform.jpg",
    previewImage: "/projects/analytics-platform-preview.jpg",
    technologies: ["Apache Flink", "Kafka", "Kubernetes", "TimescaleDB"],
    githubUrl: "https://github.com/yourusername/realtime-analytics",
    metrics: [
      "10M+ events/sec",
      "Sub-second latency",
      "99.99% uptime",
    ],
  },
  {
    id: "proj-2",
    title: "Data Quality Framework",
    description:
      "Automated data validation and monitoring system for production pipelines",
    longDescription:
      "Open-source framework for automated data quality checks across data pipelines. Features include schema validation, anomaly detection, and automated alerting.",
    image: "/projects/data-quality.jpg",
    previewImage: "/projects/data-quality-preview.jpg",
    technologies: ["Python", "Great Expectations", "Airflow", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/data-quality-framework",
    metrics: [
      "95% anomaly detection",
      "50+ validation rules",
      "Zero production incidents",
    ],
  },
  {
    id: "proj-3",
    title: "Metadata Management System",
    description:
      "Centralized data catalog and lineage tracking for enterprise data assets",
    longDescription:
      "Enterprise metadata management platform providing automated lineage tracking, data discovery, and governance capabilities across the data ecosystem.",
    image: "/projects/metadata-system.jpg",
    previewImage: "/projects/metadata-system-preview.jpg",
    technologies: ["TypeScript", "React", "Neo4j", "Python", "FastAPI"],
    githubUrl: "https://github.com/yourusername/metadata-system",
    liveUrl: "https://metadata-demo.example.com",
    metrics: [
      "1000+ data assets",
      "Automatic lineage",
      "Enterprise scale",
    ],
  },
  {
    id: "proj-4",
    title: "Serverless ETL Pipeline",
    description:
      "Cost-efficient data transformation pipeline using serverless architecture",
    image: "/projects/serverless-etl.jpg",
    previewImage: "/projects/serverless-etl-preview.jpg",
    technologies: ["AWS Lambda", "Step Functions", "S3", "Glue", "Python"],
    githubUrl: "https://github.com/yourusername/serverless-etl",
    metrics: [
      "70% cost reduction",
      "Auto-scaling",
      "5TB+ processed daily",
    ],
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building Resilient Data Pipelines: Lessons from Production",
    excerpt:
      "Key patterns and practices for building data pipelines that don't fail at 3am.",
    date: "2024-12-15",
    readTime: "8 min read",
    views: 2340,
    slug: "resilient-data-pipelines",
    tags: ["Data Engineering", "Best Practices", "Reliability"],
  },
  {
    id: "blog-2",
    title: "The Modern Data Stack: What Works and What Doesn't",
    excerpt:
      "A pragmatic look at modern data tools after building production systems.",
    date: "2024-11-28",
    readTime: "12 min read",
    views: 3120,
    slug: "modern-data-stack",
    tags: ["Data Stack", "Tools", "Architecture"],
  },
  {
    id: "blog-3",
    title: "Real-Time vs Batch: Choosing the Right Processing Model",
    excerpt:
      "Understanding trade-offs between real-time and batch processing for data workloads.",
    date: "2024-10-22",
    readTime: "10 min read",
    views: 1890,
    slug: "realtime-vs-batch",
    tags: ["Stream Processing", "Architecture", "Performance"],
  },
  {
    id: "blog-4",
    title: "Data Quality: The Problem Nobody Talks About",
    excerpt:
      "Why data quality is the hardest problem in data engineering and how to tackle it.",
    date: "2024-09-15",
    readTime: "15 min read",
    views: 4560,
    slug: "data-quality-problem",
    tags: ["Data Quality", "Engineering", "Best Practices"],
  },
];

// Skills
export const skills: SkillCategory[] = [
  {
    category: "Data Modeling",
    skills: [
      "Dimensional Modeling",
      "Data Vault 2.0",
      "Event Modeling",
      "Schema Design",
    ],
  },
  {
    category: "Data Pipelines",
    skills: [
      "Apache Spark",
      "Apache Flink",
      "Airflow",
      "Kafka",
      "dbt",
      "Dagster",
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      "AWS",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    category: "Data Stores",
    skills: [
      "Snowflake",
      "BigQuery",
      "Redshift",
      "PostgreSQL",
      "ClickHouse",
      "Redis",
    ],
  },
  {
    category: "Programming",
    skills: [
      "Python",
      "SQL",
      "Scala",
      "TypeScript",
      "Go",
    ],
  },
  {
    category: "Analytics & BI",
    skills: [
      "Looker",
      "Tableau",
      "Metabase",
      "Superset",
      "dbt",
    ],
  },
];
