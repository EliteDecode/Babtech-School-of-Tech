import { FaCreditCard, FaBook } from "react-icons/fa";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Accessible,
  LibraryBooks,
  Book,
  History,
  Person,
  Event,
  Lightbulb,
  Support,
  Work,
  Group,
  Home,
  SportsEsports,
} from "@mui/icons-material";

import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";
import img4 from "../assets/slider4.jpg";
import img5 from "../assets/slider5.jpg";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupIcon from "@mui/icons-material/Group";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SchoolIcon from "@mui/icons-material/School";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import cert1 from "../assets/library1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/application1.jpg";
import { BsBuildingFillExclamation } from "react-icons/bs";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LanguageIcon from "@mui/icons-material/Language";
import AirplayIcon from "@mui/icons-material/Airplay";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import ga1 from "../assets/ga1.jpg";
import ga2 from "../assets/ga2.jpg";
import ga3 from "../assets/ga3.jpg";
import ga6 from "../assets/ga12.jpg";
import ga7 from "../assets/ga7.jpg";
import ga8 from "../assets/ga8.jpg";
import ga9 from "../assets/ga9.jpg";
import ga10 from "../assets/ga10.jpg";
import ga11 from "../assets/ga11.jpg";
import ga12 from "../assets/ga12.jpg";
import ga13 from "../assets/ga13.jpg";
import ga14 from "../assets/ga14.jpg";

export const sublinks = [
  {
    page: "Home",
    links: [
      { label: "All News", icon: <FaBook />, url: "Home" },
      { label: "Events", icon: <FaBook />, url: "Home" },
      { label: "Gallery", icon: <FaBook />, url: "Home" },
    ],
  },
  {
    page: "About",
    links: [
      {
        label: "Mission and Vision",
        icon: <FaCreditCard />,
        url: "About",
      },
      {
        label: "University Objectives",
        icon: <FaCreditCard />,
        url: "About",
      },
      { label: "Core Values", icon: <FaCreditCard />, url: "About" },
    ],
  },
  {
    page: "Diploma",
    links: [
      {
        label: "Colleges and Schools",
        icon: <FaBook />,
        url: "Diploma",
      },
      {
        label: "Academic Calender",
        icon: <FaBook />,
        url: "Diploma",
      },
      {
        label: "Academic Programmes",
        icon: <FaBook />,
        url: "Diploma",
      },
      { label: "Center of Excellence", icon: <FaBook />, url: "Diploma" },
      { label: "Academic Research", icon: <FaBook />, url: "Diploma" },
    ],
  },
  {
    page: "Admission",
    links: [
      { label: "How to Apply", icon: <FaBook />, url: "Admission" },
      { label: "Requirements", icon: <FaBook />, url: "Admission" },
      { label: "Tuition Fees", icon: <FaBook />, url: "Admission" },
    ],
  },
  {
    page: "Resources",
    links: [
      { label: "Human Resources", icon: <FaBook />, url: "Resources" },
      { label: "ICT Department", icon: <FaBook />, url: "Resources" },
      {
        label: "Student Affairs",
        icon: <FaBook />,
        url: "Resources/studentAffairs",
      },
    ],
  },
  // {
  //   page: "Student Life",
  //   links: [{ label: "Residence", icon: <FaBook />, url: "Student Life" }],
  // },
  // // {
  // //   page: "Updates",
  // //   links: [
  // //     { label: "News", icon: <FaBook />, url: "/products" },
  // //     { label: "Events", icon: <FaBook />, url: "/products" },
  // //   ],
  // // },
  // {
  //   page: "Public Information",
  //   links: [
  //     { label: "Policies", icon: <FaBook />, url: "Public Information" },
  //     { label: "Make Enquiries", icon: <FaBook />, url: "Public Information" },
  //     { label: "Our Patners", icon: <FaBook />, url: "Public Information" },
  //   ],
  // },
  {
    page: "Contact",
    links: [{ label: "info@hust.com", icon: <FaBook />, url: "Contact" }],
  },
  {
    page: "Contact",
    links: [
      { label: "enquiries@hust.edu.ng", icon: <FaBook />, url: "Contact" },

      { label: "contact@hust.com", icon: <FaBook />, url: "Contact" },
      { label: "+234 (901)-128-1920", icon: <FaBook />, url: "Contact" },
    ],
  },
];

export const mainLinks = [
  {
    page: "Home",
    sublinks: true,
  },
  {
    page: "About",
    sublinks: true,
  },
  {
    page: "Diploma",
    sublinks: true,
  },
  {
    page: "Admission",
    sublinks: true,
  },
  {
    page: "Resources",
    sublinks: true,
  },
  // {
  //   page: "Student Life",
  //   sublinks: true,
  // },
  // {
  //   page: "Updates",
  //   sublinks: true,
  // },
  // {
  //   page: "Public Information",
  //   sublinks: true,
  // },
  {
    page: "Contact",
    sublinks: true,
  },
];

export const TopLinks = [
  <Facebook sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "14px" }} />,
  <Instagram sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "14px" }} />,
  <LinkedIn sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "14px" }} />,
  <Twitter sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "14px" }} />,
];

/* Hero Content */

export const heroContents = [
  {
    class: "content-1",
    subtitle: "Welcome to",
    title: "Hillside Science and Technology",
    subtitle2:
      "Where Innovation Meets Education and Pioneering Excellence in Science and Technology Education",
    btn1: "Apply Now",
    btn2: "Academics",
  },
  {
    class: "content-2",
    subtitle: "Our Mission",
    title: "Shaping Futures In Science and Technology",
    subtitle2:
      "Dedicated to Excellence in Education, Inspiring a Passion for Learnin and Building a Foundation for Success",
    btn1: "About Us",
    btn2: "Latest News",
  },
  {
    class: "content-3",
    subtitle: "Our Expert Faculties",
    title: "Excellent in Sci-Tech Education",
    subtitle2:
      "Meet Our World-Class Faculties Igniting Innovation Through Research and Transforming Ideas into Solutions",
    btn1: "Explore ",
    btn2: "Contact Us",
  },
];

export const newsArray = [
  {
    title: "BST School Launches New STEM Program",
    description:
      "BST School is excited to announce the launch of its new STEM (Science, Technology, Engineering, and Mathematics) program. This comprehensive program is designed to prepare students for careers in science and technology by offering a wide range of courses and hands-on experiences. From robotics to advanced mathematics, students will have the opportunity to explore their interests and develop essential skills for the future. The launch of this program represents BST School's commitment to providing top-tier education in the STEM fields.",
    date: "October 15, 2023",
    image: img1,
  },
  {
    title: "BST School titled Among Top Science Schools",
    description:
      "We are proud to share that BST School has been recognized as one of the top science schools in the country. This prestigious recognition is a testament to our dedication to excellence in science education. Our world-class faculty, state-of-the-art facilities, and innovative curriculum have all contributed to this achievement. We continue to inspire and empower our students to excel in the fields of science and technology.",
    date: "September 5, 2023",
    image: img2,
  },
  {
    title: "Innovative Research Projects Showcase Student Talent",
    description:
      "Students at BST School showcased their innovative research projects at the annual Science and Technology Fair. From building autonomous drones to conducting groundbreaking experiments in chemistry and physics, our students demonstrated their passion for science and technology. The fair was a testament to their hard work, creativity, and dedication to pushing the boundaries of knowledge.",
    date: "August 20, 2023",
    image: img3,
  },
  {
    title: "New Science Building Opens at BST School",
    description:
      "BST School is proud to unveil its state-of-the-art science building. This modern facility is equipped with cutting-edge laboratories and technology to foster scientific exploration and discovery. Our commitment to providing top-notch resources for our students is evident in this new addition to our campus. The building will serve as a hub for scientific research, experimentation, and collaboration.",
    date: "July 10, 2023",
    image: img4,
  },
  {
    title: "BST School Receives Grant for STEM Scholarships",
    description:
      "Thanks to a generous grant from a philanthropic organization, BST School will provide scholarships to aspiring STEM (Science, Technology, Engineering, and Mathematics) students. This initiative aims to ensure that talented individuals have access to quality education in STEM fields, regardless of their financial circumstances. The scholarships will open doors to opportunities and empower students to pursue their dreams in science and technology.",
    date: "June 5, 2023",
    image: img5,
  },
  {
    title: "Celebrating Student Achievements in Science Olympiad",
    description:
      "BST School students achieved remarkable success at the National Science Olympiad, bringing home numerous awards and accolades for their scientific prowess. Our students' dedication to mastering scientific concepts and problem-solving skills has been truly impressive. We celebrate their achievements and look forward to nurturing their passion for science and technology in the years to come.",
    date: "May 12, 2023",
    image: img2,
  },
];

export const upcomingEvents = [
  {
    title: "Science Fair Showcase",
    date: "October 25, 2023",
  },
  {
    title: "Parent-Teacher Conference",
    date: "November 10, 2023",
  },
  {
    title: "STEM Workshop for Students",
    date: "December 5, 2023",
  },
  {
    title: "Career Day: Exploring STEM Careers",
    date: "January 15, 2024",
  },
  {
    title: "Annual Robotics Competition",
    date: "February 20, 2024",
  },
  {
    title: "Graduation Ceremony",
    date: "June 1, 2024",
  },
];

export const coreValues = [
  {
    value: "Innovation",
    icon: <InsertEmoticonIcon sx={{ color: "#c39a4b" }} />,
    subtitle: "Fostering Creativity",
  },
  {
    value: "Excellence",
    icon: <StarIcon sx={{ color: "#c39a4b" }} />,
    subtitle: "Our Culture",
  },
  {
    value: "Growth",
    icon: <PeopleIcon sx={{ color: "#c39a4b" }} />,
    subtitle: "Our Priority",
  },
  {
    value: "Integrity",
    icon: <VerifiedUserIcon sx={{ color: "#c39a4b" }} />,
    subtitle: "Honesty and Ethics",
  },

  {
    value: "Collaboration",
    icon: <LocationCityIcon sx={{ color: "#c39a4b" }} />,
    subtitle: "Building Connections",
  },
];

export const reasonsToChooseUs = [
  {
    key: 1,
    label: "Excellence in Education",
    children:
      "We are committed to providing a top-tier education that fosters academic excellence and prepares students for success  and technology.",
  },
  {
    key: 2,
    label: "Innovative Programs",
    children:
      "Our innovative  programs offer a wide range of courses and hands-on experiences to nurture young talents.",
  },
  {
    key: 3,
    label: "Diverse and Inclusive Community",
    children:
      "We celebrate diversity and create an inclusive learning environment where students from various backgrounds thrive and learn together.",
  },
  {
    key: 4,
    label: "Strong Emphasis on Integrity",
    children:
      "We instill a strong sense of integrity, ethics, and honesty in our students, preparing them for responsible and ethical careers in  technology.",
  },
  {
    key: 5,
    label: "Collaborative Teamwork",
    children:
      "Our emphasis on teamwork and collaboration prepares students to work effectively in interdisciplinary teams, a valuable skill in the modern world.",
  },
];

export const galleryImages = [
  {
    title: "Engineering Complex",
    description:
      "The Engineering Complex houses state-of-the-art laboratories, workshops, and classrooms dedicated to various engineering disciplines. It's where students turn innovative ideas into reality.",
    img: ga1,
  },
  {
    title: "Computer Science Center",
    description:
      "The Computer Science Center is a hub for computer science and technology education. It's equipped with advanced computing facilities and collaborative spaces for coding and research.",
    img: ga2,
  },
  {
    title: "Science Research Labs",
    description:
      "Our Science Research Labs are where groundbreaking discoveries happen. Students and faculty conduct experiments and research in physics, chemistry, biology, and more.",
    img: ga3,
  },
  {
    title: "Tech Innovation Hub",
    description:
      "The Tech Innovation Hub is a dynamic space for creativity and innovation. It fosters entrepreneurship, hosts tech startup incubators, and encourages students to think outside the box.",
    img: ga6,
  },
  {
    title: "Library and Learning Center",
    description:
      "The Library and Learning Center is a resource-rich facility with a vast collection of books, digital resources, and study spaces to support studen img: ga3,ts in their academic pursuits.",
    img: ga7,
  },
  {
    title: "Science Research Labs",
    description:
      "Our Science Research Labs are where groundbreaking discoveries happen. Students and faculty conduct experiments and research in physics, chemistry, biology, and more.",
    img: ga8,
  },
  {
    title: "Tech Innovation Hub",
    description:
      "The Tech Innovation Hub is a dynamic space for creativity and innovation. It fosters entrepreneurship, hosts tech startup incubators, and encourages students to think outside the box.",
    img: ga9,
  },
  {
    title: "Library and Learning Center",
    description:
      "The Library and Learning Center is a resource-rich facility with a vast collection of books, digital resources, and study spaces to support studen img: ga3,ts in their academic pursuits.",
    img: ga10,
  },
  {
    title: "Science Research Labs",
    description:
      "Our Science Research Labs are where groundbreaking discoveries happen. Students and faculty conduct experiments and research in physics, chemistry, biology, and more.",
    img: ga11,
  },
  {
    title: "Tech Innovation Hub",
    description:
      "The Tech Innovation Hub is a dynamic space for creativity and innovation. It fosters entrepreneurship, hosts tech startup incubators, and encourages students to think outside the box.",
    img: ga13,
  },
  {
    title: "Library and Learning Center",
    description:
      "The Library and Learning Center is a resource-rich facility with a vast collection of books, digital resources, and study spaces to support studen img: ga3,ts in their academic pursuits.",
    img: ga7,
  },
  {
    title: "Science Research Labs",
    description:
      "Our Science Research Labs are where groundbreaking discoveries happen. Students and faculty conduct experiments and research in physics, chemistry, biology, and more.",
    img: ga14,
  },
];

export const objectives = [
  {
    title: "Foster Technological Innovation",
    description:
      "Our primary objective is to foster technological innovation by providing cutting-edge education and resources to our students, enabling them to become pioneers in their chosen fields of technology.",
    icon: <CodeIcon />,
  },
  {
    title: "Empower Students for the Digital Age",
    description:
      "We aim to empower our students with the skills and knowledge necessary to thrive in the digital age. Our curriculum is designed to prepare them for careers in a rapidly evolving tech-driven world.",
    icon: <SchoolIcon />,
  },
  {
    title: "Promote Research and Development",
    description:
      "We encourage research and development activities among our faculty and students. Our objective is to contribute to advancements in technology through groundbreaking research projects and innovations.",
    icon: <BuildIcon />,
  },

  {
    title: "Enhance Collaboration and Networking",
    description:
      "We strive to create an environment that enhances collaboration and networking among students, faculty, and industry professionals. Our objective is to facilitate connections that lead to opportunities and partnerships in the tech sector.",
    icon: <GroupIcon />,
  },
];

export const courses = [
  {
    name: "CERTIFICATE COURSES",
    imageUrl: cert1,
    id: 1,
  },
  {
    name: "DIPLOMA COURSES",
    imageUrl: cert2,
    id: 2,
  },
  {
    name: "COPERATE TRAINING",
    imageUrl: cert3,
    id: 3,
  },
];

export const coursesPartitions = [
  {
    id: 1,
    name: "Frontend Development",
    course: "CERTIFICATE COURSES",
    description:
      "Embark on an exciting journey of learning coding with the latest technology and master the art of frontend web design. Our comprehensive course empowers you to create stunning and responsive user interfaces using a powerful stack of technologies. Dive into the world of web development with hands-on experience in HTML, CSS, and JavaScript, the foundational languages of the web. Explore the capabilities of React, a cutting-edge JavaScript library, and harness its potential to build dynamic and interactive user interfaces.",
    duration: "3 months",
    price: "N75,000 ($125)",
  },
  {
    id: 2,
    name: "Backend Development",
    course: "CERTIFICATE COURSES",
    description:
      "Dive into the world of backend development and elevate your coding skills with the latest technologies. Our comprehensive course takes you on a journey through the intricacies of server-side programming, where you'll learn to build robust and scalable web applications using PHP, Node.js, and Python",
    duration: "3 months",
    price: "N100,000 ($200)",
  },
  {
    id: 3,
    name: "Fullstack Development",
    course: "CERTIFICATE COURSES",
    description:
      "Embark on a comprehensive learning journey to master the intricacies of both frontend and server-side development. This course equips you with the skills to craft dynamic frontend interfaces using HTML, CSS, JavaScript, and React, while simultaneously delving into the realm of robust server-side applications with Node.js, MongoDB, and Express.js. By becoming proficient in this versatile stack, you'll emerge as a well-rounded coder capable of creating end-to-end web solutions. Git and GitHub integration will be seamlessly woven into your workflow, ensuring efficient version control and collaborative development. This holistic approach empowers you to excel in the dynamic landscape of web development, offering a skill set essential for creating seamless and engaging web applications.",
    duration: "6 months",
    price: "N180,000 ($300)",
  },
  {
    id: 4,
    name: "Data and Business Analysis",
    course: "CERTIFICATE COURSES",
    description:
      "Acquire a comprehensive skill set to thrive in the dynamic field of data analytics. This course is designed to equip you with the essential tools and knowledge required for effective data analysis. Delve into the intricacies of Advanced Excel, gaining proficiency in handling and manipulating complex datasets. Explore the powerful visualization capabilities of Power BI, allowing you to present insights in a compelling and accessible manner. Master SQL, the cornerstone of database management, enabling you to retrieve and analyze data with precision. Additionally, dive into the world of Python for Exploratory Data Analysis (EDA), leveraging its versatile libraries to extract meaningful patterns and trends from raw data. By the end of this program, you will possess a robust foundation in data analytics, empowering you to draw valuable insights and make informed decisions in various professional settings. Join us and unlock the potential to succeed in the ever-evolving landscape of data analysis.",
    duration: "3 months",
    price: "N90,000 ($150)",
  },
  {
    id: 5,
    name: "User Interface and User Design",
    course: "CERTIFICATE COURSES",
    description:
      "Immerse yourself in a transformative learning experience where theoretical knowledge meets hands-on practice, allowing you to gain invaluable practical experience and cultivate the skills essential for crafting exceptional user experiences. Our dynamic product design course goes beyond traditional learning, providing you with the tools and techniques to navigate the intricacies of user-centric design. Through interactive projects and real-world scenarios, you'll develop a deep understanding of the design process, honing skills in prototyping, wireframing, and user testing. Whether you're a novice or a seasoned designer, this course offers a unique opportunity to elevate your expertise and create designs that not only meet user needs but also exceed expectations. Join us on this journey and unlock the potential to shape the future of user experience with confidence and creativity.",
    duration: "2 months",
    price: "N75,000 ($125)",
  },
  {
    id: 6,
    name: "Developement Operations (DevOps)",
    course: "CERTIFICATE COURSES",
    description:
      "Immerse yourself in a transformative learning experience that goes beyond theory, providing you with hands-on expertise in the dynamic realm of automating workflows, deploying applications, and ensuring the reliability of modern tech systems. This comprehensive course empowers you to master the intricacies of leading cloud platforms such as Azure and AWS, enabling you to play a pivotal role in the critical landscape of IT operations. Through practical exercises and real-world scenarios, you'll develop proficiency in automating routine tasks, streamlining workflows, and deploying applications with efficiency. By the end of this program, you will be well-equipped to navigate the complexities of cloud computing, contributing to the seamless functioning and reliability of cutting-edge technological systems. Join us and unlock the potential to become a key player in the ever-evolving field of IT operations, where your skills in Azure, AWS, and system reliability will be in high demand.",
    duration: "3 months",
    price: "N250,000 ($415)",
  },
  {
    id: 7,
    name: "Cyber Security",
    course: "CERTIFICATE COURSES",
    description:
      "Embark on a transformative educational journey where you will acquire the expertise to become a master in the realm of digital defense. This course is meticulously crafted to equip you with a comprehensive skill set essential for safeguarding data and ensuring privacy in the digital landscape. From the fundamentals of threat detection to the intricacies of ethical hacking, you will delve into a wide spectrum of defensive strategies. By gaining hands-on experience and learning without boundaries, you'll be immersed in real-world scenarios, honing your ability to proactively identify and neutralize potential threats. This program not only imparts theoretical knowledge but emphasizes practical application, empowering you to navigate the ever-evolving landscape of cybersecurity with confidence. Join us and become a guardian of digital realms, where your skills in data protection and ethical hacking will be at the forefront of securing our digital future.",
    duration: "3 months",
    price: "N180,000 ($300)",
  },
  {
    id: 8,
    name: "Puthon for Data Science",
    course: "CERTIFICATE COURSES",
    description:
      "Embark on a transformative learning experience to become a proficient Full Stack Python coder specifically tailored for the realms of Data Science and Machine Learning. In this comprehensive course, you'll delve into the intricacies of Python, honing your skills to a level of expertise that goes beyond mere coding proficiency. Explore the dynamic landscape of Data Science and Machine Learning, where Python serves as the backbone for robust and innovative projects. From data preprocessing to model development and deployment, you'll gain practical insights and hands-on experience that will elevate you to greatness in the realm of Data Science and ML. By the end of this program, you will possess the knowledge and confidence to tackle complex projects, utilizing Python as a powerful tool to navigate the ever-evolving challenges of the data-driven world. Join us on this exciting journey and unlock the potential to excel in the dynamic fields of Data Science and Machine Learning with Full Stack Python proficiency.",
    duration: "2 months",
    price: "N100,000 ($165)",
  },
  {
    id: 9,
    name: "Software Engineering",
    course: "DIPLOMA COURSES",
    description:
      "Embark on a comprehensive journey into the world of Full Stack Development, where you will not only master Python—the versatile and powerful programming language—but also delve into the intricacies of version control with GIT/GitHub. Expand your horizons by exploring Cloud Infrastructure, gaining proficiency in deploying and managing applications in cloud environments. Complementing your technical prowess, this course equips you with essential Project Management skills, specifically centered around the Agile Methodology. Learn to navigate the entire software development lifecycle, from conceptualization to deployment, and become adept at adapting to changing project requirements. By the end of this immersive program, you will emerge as a well-rounded Full Stack Developer, ready to tackle the challenges of modern software development with a holistic understanding of both technical and project management aspects. Join us and unlock the potential to be a versatile and effective contributor to cutting-edge development projects.",
    duration: "9 months",
    price: "N300,000 ($500)",
  },
  {
    id: 10,
    name: "Product Design and Management",
    course: "DIPLOMA COURSES",
    description:
      "Learn the end-to-end process of product design and management, from ideation to launch.",
    duration: "6 months",
    price: "N250,000 ($420)",
  },
  {
    id: 11,
    name: "Cloud Engineering",
    course: "DIPLOMA COURSES",
    description:
      "Master cloud technologies and architecture for scalable and secure applications.",
    duration: "6 months",
    price: "N250,000 ($420)",
  },
  {
    id: 12,
    name: "Tech fluency for Leaders(AI)",
    course: "COPERATE TRAINING",
    description:
      "Equip leaders with the knowledge and understanding of AI technologies.",
    duration: "2 days",
    price: "N300,000 ($500)",
  },
  {
    id: 13,
    name: "Tech fluency for Leaders(SOFTWARE)",
    course: "COPERATE TRAINING",
    description:
      "Empower leaders with insights into software development trends and practices.",
    duration: "2 days",
    price: "N300,000 ($500)",
  },
];

export const studentAffairsPoints = [
  {
    icon: <Person />,
    title: "Personalized Support",
    description:
      "Our dedicated staff provides personalized support to address students' academic and personal needs. Whether you need academic guidance, counseling, or assistance with personal challenges, we are here to help you navigate your university journey and ensure your success.",
  },
  {
    icon: <Book />,
    title: "Academic Advising",
    description:
      "Academic advising is at the heart of our student support system. Our advisors work closely with you to choose the right courses, plan your degree, and develop academic success strategies. We are committed to helping you achieve your academic goals and make the most of your university experience.",
  },
  {
    icon: <Event />,
    title: "Student Events",
    description:
      "The university experience goes beyond the classroom. Our vibrant campus life offers a wide range of social, cultural, and extracurricular activities. Join clubs, attend cultural festivals, and engage in events that enrich your social life and create lasting memories.",
  },
  {
    icon: <Lightbulb />,
    title: "Leadership Opportunities",
    description:
      "Leadership development is a key focus at BST. We offer a variety of leadership programs, clubs, and student organizations that provide you with the chance to grow as a leader, foster valuable skills, and make a positive impact on your community.",
  },
  {
    icon: <Support />,
    title: "Wellness Support",
    description:
      "Your well-being is important to us. Our student affairs department provides access to counseling, health services, and resources to help you maintain your physical and mental well-being. We are here to support your holistic development.",
  },
  {
    icon: <Work />,
    title: "Career Services",
    description:
      "Your future career is as important to us as your current studies. Our career services team offers career guidance, job placement support, and internship opportunities. We aim to prepare you for a successful transition into the professional world.",
  },
  {
    icon: <LibraryBooks />,
    title: "Academic Resources",
    description:
      "Access a wealth of academic resources, including libraries, research centers, and laboratories. These resources are designed to enhance your learning and research experience, providing valuable tools for academic success.",
  },
  {
    icon: <Home />,
    title: "Housing Assistance",
    description:
      "Our housing assistance program helps students find safe and convenient living arrangements, both on and off-campus. We aim to provide comfortable living spaces that support your academic pursuits.",
  },
  {
    icon: <SportsEsports />,
    title: "Sports and Recreation",
    description:
      "Engage in sports and recreation activities to stay active and build a sense of community. We offer various sports facilities and opportunities for students to pursue their athletic interests and enjoy a healthy lifestyle.",
  },
];

export const residenceDetails = [
  {
    icon: <BsBuildingFillExclamation />,
    title: "Residence Halls",
    description:
      "Our campus features modern and comfortable residence halls, providing students with a safe and convenient place to live during their university experience. Explore a variety of room and housing options to suit your preferences and needs.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Classrooms and Labs",
    description:
      "Our state-of-the-art classrooms and well-equipped laboratories offer a conducive environment for academic learning and research. We provide the latest technology and resources to support your educational journey.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Hostel Accommodation",
    description:
      "Experience comfortable and attractive hostel accommodations that make you feel at home. Our hostels are designed to offer a welcoming and supportive environment for students.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Libraries and Resources",
    description:
      "Access extensive libraries and academic resources, including research materials, digital databases, and knowledgeable librarians to assist with your studies and research projects.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Dining Facilities",
    description:
      "Enjoy a variety of dining options on campus, from cafeterias to restaurants, offering delicious and nutritious meals to keep you fueled throughout the day.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Fitness and Recreation",
    description:
      "Stay active and healthy with our fitness and recreation facilities. We provide gyms, sports fields, and recreational spaces for students to engage in physical activities and maintain a balanced lifestyle.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Medical Services",
    description:
      "Your health is our priority. We offer medical services, clinics, and healthcare resources to address your health and well-being needs during your university journey.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Campus Security",
    description:
      "Our campus is equipped with security measures to ensure a safe and secure environment for all students. We take your safety seriously and provide 24/7 security services.",
  },
];

export const whyUsReasons = [
  {
    icon: <SchoolIcon sx={{ color: "#000066" }} />,
    title: "Comprehensive Programs",
    description:
      "We offer comprehensive diploma programs in Software Engineering, Data & AI, Product Design, and Management.",
  },
  {
    icon: <BusinessCenterIcon sx={{ color: "#000066" }} />,
    title: "Hands-On Learning",
    description:
      "Get hands-on with technology and learn everything related to your course.",
  },
  {
    icon: <PeopleIcon sx={{ color: "#000066" }} />,
    title: "Industry Experts",
    description:
      "Learn from exceptional industry experts and be mentored by seasoned professionals.",
  },
  {
    icon: <BusinessIcon sx={{ color: "#000066" }} />,
    title: "Industry Placement",
    description:
      "Access top-tier organizations leveraging our partnerships, recommendations, and network.",
  },
  {
    icon: <SecurityIcon sx={{ color: "#000066" }} />,
    title: "State-of-the-Art Facilities",
    description:
      "Our state-of-the-art facilities provide an ideal environment for learning and innovation.",
  },
  {
    icon: <LocalLibraryIcon sx={{ color: "#000066" }} />,
    title: "Cutting-Edge Curriculum",
    description:
      "We stay at the forefront of technological advancements, ensuring you learn the latest skills and technologies.",
  },
  {
    icon: <LanguageIcon sx={{ color: "#000066" }} />,
    title: "Global Community",
    description:
      "Join a diverse and global community of learners and professionals.",
  },
  {
    icon: <AirplayIcon sx={{ color: "#000066" }} />,
    title: "Interactive Learning",
    description:
      "Experience interactive learning methods that make education engaging and fun.",
  },
  {
    icon: <SportsSoccerIcon sx={{ color: "#000066" }} />,
    title: "Extracurricular Activities",
    description:
      "Participate in a variety of sports and extracurricular activities to balance your academic life.",
  },
  {
    icon: <AttachMoneyIcon sx={{ color: "#000066" }} />,
    title: "Affordable Tuition",
    description:
      "Quality education doesn't have to come at a high cost. We offer affordable tuition and financial aid options.",
  },
];

export const LearningProgressions = [
  {
    title: "Advanced Diploma",
    description:
      "Solid foundation in your chosen course, equipping you with essential skills and knowledge to kickstart your career with Advance Diploma",
    percent: 25,
    duration: "0-6 Months",
  },
  {
    title: "Professional Diploma",
    description:
      "Building on the foundation,specialized and advance coursework,deepening your expertise to gain competitive edge in your course.",
    percent: 50,
    duration: "7-12 Months",
  },
  {
    title: "International Diploma",
    description:
      "Our globally recognized program with cross-cultural perspectives that offers a comprehensive curriculum with standards that fosters global mindset",
    percent: 75,
    duration: "13-18 Months",
  },
  {
    title: "Entrepreneurship and IT",
    description:
      "Observe a compulsory 4 months Industrial Training with tech inclined organization, contribute, learn and network",
    percent: 100,
    duration: "2 + 4 Months",
  },
];
