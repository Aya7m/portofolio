export const projects = [
  {
    id: 1,
    slug: "healthy-diet-system",
    title: "Healthy Diet System",
    description:
      "Personalized nutrition platform that recommends meal plans based on user body data and fitness goals.",
    image: "/nlogin.png",

    gallery: [
      "/ndash.png",
      "/nlogin.png",
      "/nmeal.png",
      "/nwatwe.png",
      "/nfav.png",
    ],

    metrics: [
      "3 User Roles",
      "8 Core Modules",
      "20+ API Endpoints",
      "100% Responsive",
    ],
    role: "Full Stack Developer",
    frontend: "React",
    backend: "Express.js",
    database: "MongoDB",
    year: "2026",
    status: "Completed",

    liveDemo: "https://nutritin-frontend.vercel.app",
    frontendGithub: "https://github.com/Aya7m/nutritin-frontend",
    backendGithub: "https://github.com/Aya7m/nutrition-backend",
    stack: ["React", "Express.js", "MongoDB", "Mongoose", "JWT"],
    overview:
      "A full-stack nutrition platform that helps users get personalized diet recommendations based on weight, height, and fitness goals.",
    features: [
      "User authentication",
      "BMI calculation",
      "Personalized meal plans",
      "Goal-based recommendations",
      "User dashboard",
      "Progress tracking",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Express.js", "Node.js"],
      database: ["MongoDB", "Mongoose"],
      tools: ["Git", "GitHub", "Postman", "Cloudinary"],
    },
    timeline: [
      {
        title: "Planning",
        description:
          "Defined requirements and designed the application structure.",
      },
      {
        title: "Frontend Development",
        description:
          "Built responsive user interfaces and reusable components.",
      },
      {
        title: "Backend Development",
        description: "Created REST APIs, authentication, and business logic.",
      },
      {
        title: "Database Design",
        description:
          "Designed collections, relationships, and data validation.",
      },
      {
        title: "Testing & Deployment",
        description:
          "Tested features and prepared the application for production.",
      },
    ],
    challenge:
      "The main challenge was converting user health data into meaningful meal recommendations while keeping the user experience simple and clear.",
    learned:
      "I improved my skills in business logic implementation, form handling, backend API design, and creating data-driven user experiences.",
  },
  {
    id: 2,
    slug: "school-management-system",
    title: "School Management System",
    description:
      "Complete school management platform for students, teachers, classes, attendance, grades, and administration.",
    image: "/scover.png",
    gallery: [
      "/sadmin.png",
      "/addstudent.png",
      "/addTeacher.png",
      "/stdash.png",
      "/teacherdb.png",
      "/takeAttanch.png",
    ],
    liveDemo: "https://school-management-frontend-psi-sepia.vercel.app/login",
    frontendGithub: "https://github.com/Aya7m/school",
    backendGithub: "https://github.com/Aya7m/backend-school-management",
    stack: ["React", "Express.js", "MongoDB", "Mongoose", "JWT"],
    role: "Full Stack Developer",
    frontend: "React",
    backend: "Express.js",
    database: "MongoDB",
    year: "2026",
    status: "Completed",

    metrics: [
      "2 User Roles",
      "5 Core Modules",
      "20+ API Endpoints",
      "100% Responsive",
    ],
    overview:
      "A full-stack school management system built to centralize school operations through dashboards for admins, teachers, and students.",
    features: [
      "Role-based authentication",
      "Admin dashboard",
      "Student management",
      "Teacher management",
      "Class management",
      "Attendance tracking",
      "Grades and results",
      "File uploads",
      "Notifications",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Express.js", "Node.js"],
      database: ["MongoDB", "Mongoose"],
      tools: ["Git", "GitHub", "Postman", "Cloudinary"],
    },
    timeline: [
      {
        title: "Planning",
        description:
          "Defined requirements and designed the application structure.",
      },
      {
        title: "Frontend Development",
        description:
          "Built responsive user interfaces and reusable components.",
      },
      {
        title: "Backend Development",
        description: "Created REST APIs, authentication, and business logic.",
      },
      {
        title: "Database Design",
        description:
          "Designed collections, relationships, and data validation.",
      },
      {
        title: "Testing & Deployment",
        description:
          "Tested features and prepared the application for production.",
      },
    ],
    challenge:
      "The main challenge was designing a role-based permission system so each user type could access only the actions and data related to their role.",
    learned:
      "I learned how to structure a dashboard-based application, design MongoDB schemas, build protected APIs, and manage role-based access in a real-world system.",
  },
  {
    id: 3,
    slug: "english-learning-platform",
    title: "English Learning Platform",
    description:
      "A gamified English learning platform with levels, missions, quizzes, XP, streaks, badges, leaderboard, and admin content management.",

    gallery: [
      "/english/admin.png",
      "/english/dashbard.png",
      "/english/leader.png",
      "/english/levels.png",
      "/english/login.png",
      "/english/register.png",
      "/english/profile.png",
      "/english/quize.png",
      "/english/mission.png",
      "/english/achivmnt.png",
    ],

    role: "Full Stack Developer",
    frontend: "Next.js",
    backend: "NestJS",
    database: "PostgreSQL",
    year: "2026",
    status: "Completed",

    metrics: [
      "2 User Roles",
      "8+ Core Modules",
      "20+ API Endpoints",
      "100% Responsive",
    ],

    image: "/english/cover.png",
    liveDemo: "https://engliah-learn-frontend.vercel.app",
    frontendGithub: "https://github.com/Aya7m/engliahLearn-frontend",
    backendGithub: "https://github.com/Aya7m/englishLearn-backend",

    stack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Swagger",
      "Cloudinary",
      "Tailwind CSS",
    ],

    overview:
      "English Learning Platform is a full-stack gamified education app that helps users learn English through structured levels, missions, quizzes, progress tracking, achievements, and competitive learning features.",

    features: [
      "JWT authentication and refresh tokens",
      "Role-based access control for Student and Admin",
      "Learning levels and missions",
      "Interactive quiz experience",
      "XP, streaks, ranks, and daily goals",
      "Achievements and badges system",
      "Leaderboard",
      "User profile and avatar upload",
      "Admin dashboard",
      "Admin content management for missions and questions",
    ],

    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Axios"],
      backend: ["NestJS", "Node.js", "Prisma", "JWT"],
      database: ["PostgreSQL", "Neon"],
      tools: ["Git", "GitHub", "Swagger", "Cloudinary", "Docker"],
    },

    timeline: [
      {
        title: "Planning",
        description:
          "Defined the learning flow, user roles, gamification features, and application structure.",
      },
      {
        title: "Frontend Development",
        description:
          "Built responsive pages, reusable components, dashboard UI, quiz flow, profile, achievements, and admin screens.",
      },
      {
        title: "Backend Development",
        description:
          "Created REST APIs using NestJS, implemented authentication, authorization, progress logic, badges, leaderboard, and admin operations.",
      },
      {
        title: "Database Design",
        description:
          "Designed relational database models using Prisma for users, levels, missions, questions, options, progress, badges, and roles.",
      },
      {
        title: "Testing & Deployment",
        description:
          "Tested the main user and admin flows, prepared environment variables, Docker setup, and deployment configuration.",
      },
    ],

    challenge:
      "The main challenge was building a clear gamified learning flow where users can progress through levels, complete missions, earn rewards, and stay engaged while keeping the backend logic secure and scalable.",

    learned:
      "I gained hands-on experience in full-stack architecture, NestJS API design, Prisma relational modeling, JWT authentication, role-based authorization, frontend-backend integration, gamification logic, file uploads, Swagger documentation, and deployment preparation.",
  },

  {
id: 4,
slug: "luxe-e-commerce",
title: "Luxe E-Commerce",
description:
"A full-stack clothing e-commerce platform with product management, shopping cart, checkout, order tracking, Stripe payments, Cloudinary image uploads, and user-admin chat.",

gallery: [
"/luxe/home.png",
"/luxe/products.png",
"/luxe/product-details.png",
"/luxe/cart.png",
"/luxe/checkout.png",
"/luxe/orders.png",
"/luxe/chat.png",
"/luxe/admin-dashboard.png",
"/luxe/admin-products.png",
"/luxe/admin-orders.png",
],

role: "Full Stack Developer",
frontend: "React.js",
backend: "Express.js",
database: "MongoDB",
year: "2026",
status: "Completed",

metrics: [
"2 User Roles",
"7+ Core Modules",
"20+ API Endpoints",
"100% Responsive",
],

image: "/luxe/home.png",
liveDemo: "https://luxe-e-commerce-frontend-lke6.vercel.app",
frontendGithub: "https://github.com/Aya7m/luxe-e-commerce-frontend",
backendGithub: "https://github.com/Aya7m/luxe-e-comerce-backend",

stack: [
"React.js",
"Vite",
"TypeScript",
"Tailwind CSS",
"TanStack Query",
"Express.js",
"MongoDB",
"Mongoose",
"JWT",
"Stripe",
"Multer",
"Cloudinary",
],

overview:
"Luxe E-Commerce is a full-stack clothing store that allows users to browse products, add items to cart, place orders, choose cash or Stripe payment, track order status, and communicate with the admin through chat. The admin can manage products, update orders, and handle customer requests from the dashboard.",

features: [
"JWT authentication and authorization",
"Role-based access control for User and Admin",
"Product listing and product details",
"Product filtering, searching, sorting, and pagination",
"Shopping cart management",
"Checkout with cash on delivery and Stripe payment",
"Order tracking with status updates",
"User order history",
"User-admin chat",
"Admin dashboard",
"Admin product management: create, update, delete",
"Product image upload using Multer and Cloudinary",
"Responsive UI with Tailwind CSS",
],

techStack: {
frontend: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "TanStack Query", "Axios"],
backend: ["Node.js", "Express.js", "TypeScript", "JWT", "Stripe"],
database: ["MongoDB", "Mongoose"],
tools: ["Git", "GitHub", "Vercel", "Render", "Cloudinary", "Multer"],
},

timeline: [
{
title: "Planning",
description:
"Defined the e-commerce flow, user roles, product structure, order lifecycle, payment options, and admin dashboard requirements.",
},
{
title: "Frontend Development",
description:
"Built responsive pages, reusable components, product browsing, filters, cart, checkout, orders page, chat UI, and admin screens using React and Tailwind CSS.",
},
{
title: "Backend Development",
description:
"Created REST APIs using Express.js for authentication, products, cart, orders, payments, image uploads, and chat functionality.",
},
{
title: "Database Design",
description:
"Designed MongoDB models using Mongoose for users, products, orders, cart items, payments, and chat messages.",
},
{
title: "Testing & Deployment",
description:
"Tested the main user and admin flows, configured environment variables, deployed the frontend on Vercel, and prepared the backend for deployment.",
},
],

challenge:
"The main challenge was connecting a complete e-commerce workflow from product management to checkout, payment, order tracking, and chat while keeping the admin and user flows secure, organized, and responsive.",

learned:
"I gained hands-on experience in building a real-world MERN stack application, REST API integration, authentication, role-based authorization, Stripe payments, image uploads with Cloudinary, TanStack Query for server state management, admin dashboards, and deployment workflows.",
}

];

export type Project = (typeof projects)[number];
