import { Project, Technology, TechLevel, DetailTechList, CarrierTimeline, Contact } from "@/types";

export const HERO_DESCRIPTION =
  "I'm Naveed Abdullah, a Computer Science graduate and Full-Stack Web Developer with a knack for crafting dazzling web applications and user-centric interfaces. With a fusion of frontend finesse and backend wizardry, I turn ideas into seamless, user-engaging online experiences.";
export const PROJECTS: Project[] = [
  {
    name: "PNR Portal",
    date: "August-2019",
    description:
      "A portal used by International Islamic University to manage all the Final Year Projects and Research. This portal digitalized the whole process of project management",
    technologies: ["react", "nodejs", "mongodb", "express"],
    githubLink: "https://github.com/naveed-niazi",
    websiteLink: "http://pnr.iiu.edu.pk:64469",
    image: "/PNR.png",
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    name: "HTML, CSS, SCSS",
    eg: "(e.g, Bootstrap, Tailwind, MUI, AntD)",
    level: TechLevel.Advanced,
  },
  {
    name: "PROGRAMMING LANGUAGES ",
    eg: "(e.g, Javascript, Typescript)",
    level: TechLevel.Advanced,
  },
  {
    name: "FRONTEND DEVELOPMENT",
    eg: "(e.g, ReactJS, NextJS, AstroJS)",
    level: TechLevel.Advanced,
  },
  {
    name: "BACKEND DEVELOPMENT",
    eg: " (e.g, Nodejs, Express, NestJS)",
    level: TechLevel.Advanced,
  },
  {
    name: "CLOUD DEVELOPMENT",
    eg: "(e.g, AWS, GCP)",
    level: TechLevel.Proficient,
  },
  {
    name: "MOBILE APP DEVELOPMENT ",
    eg: "(e.g, React Native)",
    level: TechLevel.Proficient,
  },
];

export const DETAIL_TECH_LIST: DetailTechList[] = [
  {
    techName: "Frontend Technologies:",
    listing: [
      "HTML5, CSS3, and preprocessors (e.g., Sass)",
      "JavaScript (ES6+), Typescript ",
      "Frontend frameworks (e.g., React, NextJS, Astro, React Native)",
      "Server-side rendering (SSR), CSR, ISR, SSG",
      "State management libraries (e.g., Redux, Redux Toolkit, Zustand, Context API)",
      "Responsive and mobile-first design ",
      "CSS frameworks (e.g., Bootstrap, Tailwind)",
      "UI libraries (e.g., Antd, Material UI, Semantic UI, Core UI)",
      "Web performance optimization techniques ",
      "Cross-browser compatibility and debugging",
    ],
  },
  {
    techName: "Backend Technologies:",
    listing: [
      "Programming languages (e.g., Node.js)",
      "Web frameworks (e.g., Express.js, Nest JS, Flask)",
      "RESTful API, GraphQL API design and development",
      "Database systems (e.g., MySQL, PostgreSQL, MongoDB)",
      "ORM/ODM libraries (e.g., Mongoose, PG, Prisma)",
      "Authentication and authorization (e.g., JWT, OAuth, Keycloak, Auth0)",
      "Server configuration and deployment (e.g., Nginx, Apache, PM2)",
      "Caching mechanisms (e.g., Redis)",
      "Headless CMS (e.g., Strapi, Hasura, keystone.js)",
    ],
  },
  {
    techName: "DevOps and Deployment:",
    listing: [
      "Version control systems (e.g., Git)",
      "Continuous Integration/Continuous Deployment (CI/CD) pipelines",
      "Containerization (e.g., Docker)",
      "Web server configuration and maintenance",
      "Security best practices",
    ],
  },
  {
    techName: "Cloud Platforms:",
    listing: [
      "Amazon Web Services (AWS) EC2, S3, Lambda, RDS, DynamoDB, SNS, Event Bridge, SES",
      "Google Cloud Platform (GCP) Compute Engine, Cloud Storage, Firebase",
      "Cloud Functions, Firestore",
    ],
  },
  {
    techName: "Other Skills:",
    listing: [
      "Cross-functional collaboration with designers, product managers, and other developers",
      "Worked in Agile teams on Scrum and Kanban",
      "Tools like Jira, Trello, Slack, Microsoft Teams",
      "Problem-solving and debugging skills",
      "Versioning and documentation (e.g., GitHub, GitLab, Bitbucket)",
      "Familiarity with design tools (e.g., Figma, Sketch)",
      "Understanding of UX/UI principles",
      "Familiarity with performance optimization techniques",
      "Knowledge of SEO best practices",
      "Server Management & Linux",
    ],
  },
];

export const SOCIAL_LINKS = {
  githubUrl: "https://github.com/naveed-niazi",
  linkedinUrl: "https://www.linkedin.com/in/naveedniazi",
  mediumURL: "https://medium.com/@naveedniazi",
  upworkURL: "https://www.upwork.com/freelancers/~01a5e6ab918567d37d",
};

export const CARRIER_TIMELINE: CarrierTimeline[] = [
  {
    date: "June 2023 - Present",
    company: "NESL-IT",
    position: "Senior Full Stack Web Developer",
    jobDescription:
      "As the Team Lead at NESL-IT, I play a pivotal role in driving the development of high-quality web applications and services. My responsibilities include leading and mentoring a team of developers, ensuring adherence to best practices, and optimizing code for scalability and performance. I actively contribute to architectural decisions and collaborate closely with cross-functional teams to deliver exceptional digital solutions.",
  },
  {
    date: "Oct 2021 - May 2023",
    company: "Micromerger",
    position: "Full Stack Web Developer",
    jobDescription:
      "At Micromerger, I took on the role of a Full Stack Web Developer, where I contributed to the development of large-scale web and mobile applications. Leveraging cloud technologies and best coding practices, I was responsible for building robust, user-friendly interfaces, optimizing application performance, and ensuring seamless integration between front-end and back-end systems. My role required me to work closely with product managers, designers, and stakeholders to translate project requirements into tangible, high-impact solutions.",
  },
  {
    date: "Oct 2017 - Present",
    company: "Upwork",
    position: "Web Developer",
    jobDescription:
      "During my tenure as a Web Developer on Upwork, I honed my skills in JavaScript development and established myself as a versatile developer with expertise in creating custom web solutions. My role involved collaborating with a diverse clientele on various projects, from website enhancements and front-end optimizations to building interactive web applications. I acquired proficiency in problem-solving and debugging, ensuring that projects met client specifications and delivered exceptional user experiences.",
  },
];

export const CONTACT: Contact = {
  phoneNumber: "+92 302-1711192",
  email: "naveed@naremis.com",
  skype: "live:naveedabdullah700",
};
