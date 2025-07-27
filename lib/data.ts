import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import sunbonn from "@/public/sunbonn.jpeg";
import hyperinventive from "@/public/hyperinventiveLogo.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Fullstack engineer",
    location: "Sunbonn",
    description:
      "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for mechants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2025 - Present",
    logo: sunbonn
  },
  {
    title: "Frontend Engineer",
    location: "Hyperinventive",
    description:
      "Worked as a frontend developer, delivering high-quality projects on time while leveraging cutting-edge web technologies like Next.js, React.js, Tailwind CSS, and Material UI. Successfully developed 10+ projects with 90% optimization and client satisfaction. Additionally, managed full project lifecycles, including client meetings, requirement gathering, and collaborating with teammates, while actively contributing as a frontend engineer.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - August 2025",
    logo: hyperinventive
  },
] as const;

export const projectsData = [
  {
    title: "Developer Job Matching Portal",
    description:
      "Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
    ],
    imageUrl: ozdevsImg,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/ben04rogers/ozdevs-v2",
  },
  {
    title: "Crypto Sentiment Analysis",
    description:
      "Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:aws",
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:express",
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "Company Asset Trading",
    description:
      "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
    tags: ["Java", "MariaDB", "Swing"],
    icons: ["logos:java", "logos:mariadb-icon"],
    imageUrl: assetTradingImg,
    githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  {
    title: "Computer Auction",
    description:
      "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/ben04rogers/computer-auction",
    // urlLink: "https://techprowl.herokuapp.com",
  },
  {
    title: "Task Manager Console App",
    description:
      "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
    tags: ["C#"],
    icons: ["devicon:csharp"],
    imageUrl: taskManagerImg,
    githubLink: "https://github.com/ben04rogers/task-manager",
  },
  {
    title: "Family Tree Relationship Path Finder",
    description:
      "Python program that computes the shortest paths in a family tree using a breadth-first search algorithm. Problem was to calculate the shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
    tags: ["Python"],
    icons: ["logos:python"],
    imageUrl: familyTreeImg,
    githubLink: "https://github.com/ben04rogers/breadth-first-search",
    demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  },
  {
    title: "Arduino Binary Game",
    description:
      "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
    tags: ["C"],
    icons: ["devicon:c"],
    imageUrl: binaryGameImg,
    githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
    demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  },
] as const;

// lib/data.ts
export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Javascript", icon: "logos:javacript-icon" },
      { name: "Python", icon: "logos:python" },
      { name: "SQL" },
      { name: "Oracle" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "REST APIs", icon: "material-symbols:api-outline" },
    ],
  }, 
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Material UI", icon: "logos:material-ui" },
      { name: "Webpack", icon: "logos:webpack" },
      { name: "Single Page Applications" },
      { name: "Responsive Design" }
    ],
  }, 
  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "CI/CD" },
      { name: "Infrastructure as Code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design" },
      { name: "Event‑driven architecture" },
      { name: "Agile" },
      { name: "Scrum" },
      { name: "Object Oriented Programming (OOP)" },
      { name: "Test Driven Development (TDD)" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Sentry", icon: "logos:sentry-icon" },
      { name: "New Relic", icon: "logos:new-relic-icon" },
      { name: "Grafana", icon: "logos:grafana" },
    ],
  },
];

