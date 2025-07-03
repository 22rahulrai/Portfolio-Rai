import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  Homehaven,
  python_project,
  snake_ladder,


  mysql,
  express,
  aws,
  mui,

  Csharp,

  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,

  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  java,
  python,
  ms_sql_server,
  dotnet,
} from '../assets'


// Import brigelabz logo separately
import bridge_logo from "../assets/company/company_logo.png";

import portfolio from '../assets/proj1.webp';


export const navLinks = [
  {
    id: "about",
    title: "About",

  },
  {
    id: "Resume",
    title: "Resume",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DotNet Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "dotnet",
    icon: dotnet,
  },


  {
    name: "Csharp",
    icon: Csharp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },

  // Database Technologies

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MS SQL Server",
    icon: ms_sql_server,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },






  //  {
  //     name: "gsap",
  //     icon: gsap,
  //   },
  //   {
  //     name: "framer",
  //     icon: framer,
  //   },
  //   {
  //     name: "Three JS",
  //     icon: threejs,
  //   },
  //   {
  //     name: "figma",
  //     icon: figma,
  //   },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },

];

const experiences = [
  {
    title: "Software Developer Engineer",
    company_name: "BridgeLabz Solutions Pvt Ltd",
    icon: bridge_logo,
    iconBg: "#383E56",
    date: "Feb 2025 - Apr 2025",
    points: [
      "Participating in a comprehensive .NET training program focused on building web applications using C# and ASP.NET Core.",
      "Learning and applying industry-standard best practices for modern .NET development.",
      "Collaborating with a team of fellows on small-scale coding projects and real-world challenges to build teamwork and problem-solving skills.",
      "Engaging in weekly code reviews and feedback sessions to enhance code quality and programming techniques.",
      "Improving understanding of clean code principles, design patterns, and professional software development workflows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];



const projects = [
  {
    name: "Home Haven",
    description:
      "Home Haven is a web application that allows listing and booking rental properties. Users can list their spaces, while others can seamlessly browse, explore, and book accommodations with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "white-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: Homehaven,
    source_code_link: "https://github.com/22rahulrai/Home-Haven",
    deployment_link: "https://home-haven-nu.vercel.app/",
  },
  {
    name: "True Face",
    description:
      "A Python app for automated attendance using real-time face recognition with OpenCV and KNN. Attendance data is stored in SQLite and CSV, with voice feedback on success.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "knn",
        color: "pink-text-gradient",
      },
      {
        name: "sqlite",
        color: "white-text-gradient",
      },
    ],
    image: python_project,
    source_code_link: "https://github.com/22rahulrai/Face_Recognition_2110992016",
    deployment_link: "",
  },
  {
    name: "Algorithm Visualizer",
    description:
      "An interactive web application that visualizes various sorting and searching algorithms using real-time animations. It helps users understand how algorithms work ,dynamic visual representations of their execution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "white-text-gradient",
      },
      {
        name: "visualization",
        color: "green-text-gradient",
      },
    ],
    image: "https://github.com/user-attachments/assets/a521f4ed-26ad-4e3d-b301-d7301e5a55be",
    source_code_link: "https://github.com/22rahulrai/Algorithm-Visualizer",
    deployment_link: "https://algorithm-visualizer-tau-steel.vercel.app/",
  },

  // in future i will add this project
  {
    name: "Snake-Ladder Game",
    description:
      " A simple, interactive two-player Snakes & Ladders game for the console, built with C# and .NET 8. Play head-to-head, roll the dice, and race to 100!",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "dotnet",
        color: "green-text-gradient",
      },
      {
        name: "console",
        color: "pink-text-gradient",
      },
    ],
    image: snake_ladder, // Using your existing logo as a placeholder
    source_code_link: "https://github.com/22rahulrai/Console-Snakes-Ladders-2player",
    // deployment_link: "https://github.com/22rahulrai/Console-Snakes-Ladders-2player",
  },

];

export { services, technologies, experiences, testimonials, projects, portfolio };
