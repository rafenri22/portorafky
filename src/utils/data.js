import {
  Code2,
  GraduationCap,
  Briefcase,
  Rocket,
  Coffee,
  BookOpen,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";

export const SKILLS_CATEGORY = [
  {
    tittle: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces.",
    skills: [
      { name: "React", level: 88, color: "bg-blue-500" },
      { name: "TypeScript", level: 80, color: "bg-blue-600" },
      { name: "Next.js", level: 80, color: "bg-gray-500" },
      { name: "Flutter", level: 90, color: "bg-cyan-500" },
      { name: "Tailwind CSS", level: 90, color: "bg-pink-500" },
    ],
  },
  {
    tittle: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 89, color: "bg-blue-500" },
      { name: "Python", level: 75, color: "bg-blue-500" },
      { name: "Rest API", level: 70, color: "bg-blue-500" },
      { name: "Java", level: 80, color: "bg-blue-500" },
      { name: "Express", level: 85, color: "bg-blue-500" },
    ],
  },
  {
    tittle: "Database",
    icon: Database,
    description: "Designing and implementing efficient databases",
    skills: [
      { name: "Supabase", level: 90, color: "bg-blue-500" },
      { name: "Firebase", level: 75, color: "bg-blue-500" },
      { name: "Redis", level: 70, color: "bg-blue-500" },
      { name: "Prisma", level: 75, color: "bg-blue-500" },
      { name: "PostgreSQL", level: 80, color: "bg-blue-500" },
    ],
  },
  {
    tittle: "DevOps",
    icon: Cloud, // Changed from DevOps to Cloud as DevOps icon is not available in lucide-react
    description: "Ensuring smooth deployment and scaling",
    skills: [
      { name: "Docker", level: 75, color: "bg-blue-500" },
      { name: "Kubernetes", level: 70, color: "bg-blue-500" },
      { name: "AWS", level: 70, color: "bg-blue-500" },
      { name: "Azure", level: 70, color: "bg-blue-500" },
      { name: "Google Cloud", level: 70, color: "bg-blue-500" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML",
  "CSS",
  "React",
  "Flutter",
  "Figma",
  "Vite",
];

export const STATS = [
  { number: "2+", label: "Years of experience" },
  { number: "10+", label: "Projects completed" },
  { number: "2+", label: "Awards received" },
  { number: "1000+", label: "Hours of coding" },
];

export const PROJECT = [
  {
    id: 1,
    title: "Inventory Management System",
    description:
      "A full-featured web application designed to manage product stocks, track inventory levels, and generate real-time reports for efficient warehouse operations.",
    image: PROJECT_IMG_1,
    tags: ["Next.js", "Express", "Neon"],
    liveUrl: "https://myaccountants.netlify.app/",
    githubUrl: "https://github.com/rafenri22/myaccountant-frontend",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Custom Hat E-Commerce",
    description:
      "An e-commerce website for ordering personalized hats with custom designs, built with a modern tech stack.",
    image: PROJECT_IMG_4,
    tags: ["Next.js", "Neon", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/rafenri22/miderahatsv3",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Bus Management App",
    description:
      "A Flutter-based mobile app to manage buses, employees, and routes for a transportation company.",
    image: PROJECT_IMG_3,
    tags: ["Flutter", "Supabase", "Provider"],
    liveUrl: "#",
    githubUrl: "https://github.com/rafenri22/TJA-Mobile",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Company Profile Website",
    description:
      "A responsive and modern company profile website built with Next.js, React, and Tailwind CSS to showcase business information, services, and contact details.",
    image: PROJECT_IMG_5,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/rafenri22/tja-profile",
    featured: false,
    category: "Profile",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website to showcase my projects, skills, and experience.",
    image: PROJECT_IMG_2,
    tags: ["Vite", "React", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/rafenri22/portorafky",
    featured: false,
    category: "Portfolio",
  },
  {
    id: 6,
    title: "Stock Opname Warehouses App",
    description:
      "An Android application built with Java for performing real-time stock opname and inventory tracking in warehouses or retail environments.",
    image: PROJECT_IMG_6,
    tags: ["Java", "Firebase", "Android Studio"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Mobile",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2025",
    title: "Android Developer",
    company: "PT Petra Sejahtera Abadi",
    description:
      "Developed and maintained native Android applications with a focus on performance, scalability, and seamless user experience using Kotlin and Java.",
    icon: Briefcase,
    color: "bg-purple-500",
  },
  {
    year: "2024",
    title: "E-Commerce Application Outreach",
    company: "SMK Negeri 2 Kota Depok",
    description:
      "Conducted training and outreach sessions on utilizing e-commerce applications to boost online sales for small and medium businesses.",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "PT Trijaya Agung Lestari",
    description:
      "Led a cross-functional team in building and deploying scalable web applications, overseeing both frontend and backend development with modern technologies like React, Node.js, and cloud infrastructure.",
    icon: Briefcase,
    color: "bg-yellow-500",
  },
];

export const PASSION = [
  {
    icon: Rocket,
    title: "Innovation & Problem Solving",
    description:
      "Passionate about finding creative solutions to complex challenges and building impactful products.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Always eager to learn new technologies and improve existing skills to stay ahead in the industry.",
  },
  {
    icon: Coffee,
    title: "Creating Impact",
    description:
      "Enjoy contributing to open-source projects and sharing knowledge with the developer community.",
  },
];

export const SOCIAL_LINK = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/rafenri22",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com/",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
];

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Emaill",
    value: "rafkyferdian2574@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 857 5932 8890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "South Tangerang, Indonesia",
  },
];
