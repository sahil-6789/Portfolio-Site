import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  food,
  expense,
  jobshala,
  tripguide,
  threejs,
  academy,
  todo,
  shopping,
  tindog
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ Programer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
   {
    title: "DSA Teaching Assistant",
    company_name: "10X Academy",
     icon: academy,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
     " Assisted in teaching and mentoring students on Data Structures and Algorithm topics.",
"Conducted code reviews,provide feedback,and helped students improve their coding skills."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food App",
    description:
      "Web-based platform that allows users to add items in their cart and then place their order and then store the details of customers and their order in firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/sahil-6789/food-ordering-app",
  },
  {
    name: "JobShala",
    description:
      "Web application that enables users to post blue collar jobs and other users can apply for that job by registering them  .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/sahil-6789/Jobshala-backend",
  },
  {
    name: "Shopkart",
    description:
      "A fully fleged ecommerce MERN website with JWT authentication and payment gateway ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "red-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
    ],
    image: shopping,
    source_code_link: "https://github.com/sahil-6789/shopkart",
  },
  {
    name: "Tindog",
    description:
      "A Simple website for stray animals that can help them to get new homes ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    
    ],
    image: shopping,
    source_code_link: "https://github.com/sahil-6789/tindog",
  },
  {
    name: "Todo List",
    description:
      "Web application that enables users to create a list of their upcoming tasks and delete them when completetd  .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/sahil-6789/TodoList",
  },
  
];

export { services, technologies, experiences, testimonials, projects };


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sahil-6789/Portfolio-Site.git
// git push -u origin main