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
  diab,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dlk,
  pantech,
  uniq,
  codebind,
  amazon,
  brainwave,
  superlink,
  lets,
  myg,
  girl,
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
    title: "React Native , Next JS Developer",
    icon: mobile,
  },
  {
    title: "Frontened Developer",
    icon: backend,
  },
  {
    title: "Predictive Analytics Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
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
    title: "Artificial Intelligence Intern",
    company_name: "DLK Technologies",
    icon: dlk,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Practical Project Experience: I gained a deeper understanding of AI principles and approaches by working on real-world AI projects where I applied machine learning algorithms to address challenging challenges.",
      "Preprocessing and Data Analysis: Acquired expertise in gathering, cleaning, and preprocessing data to guarantee high-quality datasets for model testing and training.",
      "Model Development and Optimization: To increase accuracy and performance, I helped create and optimize machine learning models using tools like TensorFlow and Python.",
      "Cooperation and Learning: Worked together with a group of knowledgeable experts, taking part in information-sharing meetings and learning about cutting-edge AI developments and industry best practices.",
    ],
  },
  {
    title: "Cyber Security Intern",
    company_name: "Pantech E Learning",
    icon: pantech,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Feb 2024",
    points: [
      "Gained the fundamentals of cyber security, such as risk assessment, threat modeling, and security best practices.",
      "Practical Experience with Tools: Acquired hands-on experience with security tools and software, helping with basic penetration testing activities and vulnerability scanning.",
      "Security Awareness: Created and took part in brief security awareness training that covered prevalent cyberthreats and staff prevention strategies.",
      "Collaborative Learning: I worked on active projects with seasoned professionals, which improved my comprehension of actual cyber security problems and solutions.",
    ],
  },
  {
    title: "Python Intern",
    company_name: "Uniq Technologies",
    icon: uniq,
    iconBg: "#383E56",
    date: "Jan 2024 - Jan 2024",
    points: [
      "Developed a core understanding of Python programming, emphasizing data structures, grammar, and fundamental algorithms to address real-world issues.",
      "Project Assistance: Using good coding techniques, I helped a project by building scripts and automating operations to increase process efficiency.",
      "Data Handling: Acquired knowledge on how to efficiently analyze and visualize data by gaining experience with data manipulation using libraries like Pandas and NumPy.",
      "Learning and Mentoring: I worked directly with senior engineers and was given mentorship that improved my knowledge of software development and coding best practices.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "CodeBind Technologies",
    icon: codebind,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Jan 2024",
    points: [
      "Front-end development: Contributed to the creation and execution of user-friendly online interfaces by gaining practical experience with front-end technologies including HTML, CSS, and JavaScript.",
      "In order to guarantee that web applications run smoothly on a range of devices and screen sizes, responsive design principles were studied and put into practice.",
      "Cooperation on Projects: Gained knowledge of the web development lifecycle and improved cooperation abilities by working with a group of developers on ongoing projects.",
      "Overview of Version Control: I became familiar with Git and other version control systems, took part in code reviews, and realized how crucial code management and teamwork are.   ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I act as a liaison between students and the platform, encouraging the growth of skills and cultivating a learning community. I encourage peers to improve their technical proficiency and professional preparation by actively engaging them in workshops and activities.",
    name: "Adhitya S",
    designation: "Student Ambassador",
    company: "Let's Upgrade",
    image: lets,
  },
  {
    testimonial:
      "I facilitate a culture of learning and creativity by acting as a link between the organization and my college. In order to improve students' technical proficiency and give them access to important resources for professional advancement, I plan seminars and events.",
    name: "Adhitya S",
    designation: "Campus Ambassador",
    company: "myGov",
    image: myg,
  },
  {
    testimonial:
      "I regularly work on open-source initiatives that encourage aspiring developers, particularly women in the IT industry. In order to create a welcoming community, my efforts are concentrated on improving project functionality and encouraging inclusive programming techniques.",
    name: "Adhitya S",
    designation: "Contributor",
    company: "GirlScript Summer Of Code",
    image: girl,
  },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "Using HTML, CSS, and JavaScript, a front-end clone of the Amazon e-commerce website was created, displaying responsive design and intuitive navigation. This project demonstrates my capacity to develop aesthetically pleasing user interfaces and include interactive elements into online applications.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient", // Updated to reflect actual technology used
      },
      {
        name: "CSS",
        color: "green-text-gradient", // Updated to reflect actual technology used
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/Adhitya-S/Amazon-Clone",
    deployed_link: "https://amazon-clone02.vercel.app",
  },
  
  {
    name: "Diabetes Risk Predictor",
    description:
      "TensorFlow and Streamlit were used to create an interactive online application that uses user data inputs to forecast the risk of diabetes. This app gives customers instant health insights and showcases my expertise in machine learning and efficient web construction.",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient"
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
    ],
    image: diab,
    source_code_link: "https://github.com/Adhitya-S/Diabetes-Risk-Predictor",
    deployed_link: "https://diabetes-predictor-24.streamlit.app",
    
  },
  {
    name: "BrainWave Web",
    description:
      "Created a responsive Brainwave website with an easy-to-use UI for precise predictions utilizing Tailwind CSS, JavaScript, and React. This project demonstrates my capacity to develop aesthetically pleasing and useful online applications that improve user experience.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "blue-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "hhttps://github.com/Adhitya-S/BrainWave-Responsive-Website-",
    deployed_link: "https://brainwave02.vercel.app",
  },
  {
    name: "Plant Health Monitoring",
    description:
      "Developed a web application called Plant Health Monitoring that uses TensorFlow and Streamlit to precisely identify plant illnesses from photos that users input. Providing users with crucial information for efficient plant care, this project showcases my abilities in web development and machine learning.",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Adhitya-S/plant-health-monitoring",
    deployed_link: "https://plant-health-monitoring.streamlit.app",
  },
  {
    name: "Superlink Camp",
    description:
      "Utilizing Next.js, React, and Tailwind CSS, the Super Link Camp website was developed, with a modern layout and smooth navigation. My proficiency in contemporary web programming is demonstrated by this project, which offers dynamic content management and an interesting user experience.",
    tags: [
      {
        name: "Next Js",
        color: "black-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
    ],
    image: superlink,
    source_code_link: "https://github.com/Adhitya-S/superlinkcamp",
    deployed_link: "https://superlinkcamp.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
