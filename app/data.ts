// Portfolio Data Configuration

import { SiUpwork } from "react-icons/si";

export const personalInfo = {
  name: "Chea Panhchakselavuth",
  title: "Web Junior Developer",
  tagline: "Ready to Innovate",
  description:
    "Creating an Innovative, Functional, and User-Friendly Website for Digital Solutions.",
  typingPhrases: [
    "Information Technology",
    "Software Engineering",
    "Web Developer",
  ],
  profileImage: "/img/pfp.jpg",
  bio: [
    "An Information Systems student with a great interest in the world of website development, digital technology, and technological innovation. I enjoy exploring how technology can be applied to solve real problems and create beneficial solutions.",
    "Currently, I continue to learn and develop myself in the field of web development and the digital world more broadly.",
  ],
  quote: "Utilizing AI as a professional tool, not a replacement.",
  cv: "/My_CV.pdf", // Add your CV file to public folder
};

export const socialLinks = {
  github: "https://github.com/lseaveylover-wq",
  instagram: "https://www.instagram.com/r.eiiiiiiiii/",
  SiUpwork:
    "https://www.upwork.com/freelancers/~019beb4f8915848602?mp_source=share",
  telegram: "https://t.me/im_ryjinnn",
};

export const socialHandles = {
  instagram: "Rei.",
  SiUpwork: "Chea Panhchakselavuth",
  github: "seavey.l",
  telegram: "@im_ryjinnn",
};

export const projects = [
  {
    title: "Task Manager Dashboard",
    category: "Productivity App",
    description:
      "A comprehensive task management system with dashboard overview, calendar scheduling, and detailed task tracking features...",
    fullDescription:
      "A modern task management application designed to help users organize, track, and complete their tasks efficiently. Features include an intuitive dashboard with progress statistics, calendar view for scheduling, detailed task cards with checklists, priority levels, and team collaboration tools.",
    technologies: "React, TypeScript, Tailwind CSS, Framer Motion, Chart.js",
    image: "/img/task-manager-1.png",
    images: [
      "/img/task-manager-1.png", // Dashboard Overview
      "/img/task-manager-2.png", // Task Details
      "/img/task-manager-3.png", // Calendar View
    ],
    details: [
      {
        title: "Dashboard Overview",
        content:
          "Get a quick summary of your tasks and overall progress with beautiful statistics cards showing total tasks (128), completed tasks (76), pending tasks (52), and overall progress (59%). The dashboard provides an at-a-glance view of your productivity with visual progress bars and real-time updates.",
      },
      {
        title: "Task Details & Management",
        content:
          "All the important info about a task in one place. Each task card includes a detailed description, checklist with progress tracking (2/4 completed), due dates (May 28, 2024), priority levels (High/Medium/Low), assignee information (Ava Smith), tags (UI, Dashboard, Frontend), and quick actions to edit or mark tasks as complete.",
      },
      {
        title: "Calendar / Schedule View",
        content:
          "See deadlines and plan your work efficiently with the integrated calendar view. Switch between week and month views, visualize tasks on specific dates with color-coded labels (Design Review, API Integration, Client Call, Dashboard Deadline, Testing Sprint, Project Demo), and never miss important deadlines with the intuitive scheduling interface.",
      },
    ],
    link: null,
    available: false,
  },
  {
    title: "News Portal Website",
    category: "Content Management System",
    description:
      "A modern news portal with homepage hero section, article pages with rich content, and comprehensive admin panel for content management...",
    fullDescription:
      "A fully-featured news portal website with responsive design, featuring a dynamic homepage with breaking news, top stories sidebar, trending articles section, detailed article pages with author information and social sharing, and a powerful admin content management system for creating, editing, and publishing articles with categories, tags, and scheduling capabilities.",
    technologies: "React, Next.js, TypeScript, Tailwind CSS, CMS Integration",
    image: "�",
    images: [
      "/img/news-portal-1.png", // Homepage / Hero Section
      "/img/news-portal-2.png", // Article Page
      "/img/news-portal-3.png", // Admin Content Management
    ],
    details: [
      {
        title: "Homepage / Hero Section",
        content:
          "Dynamic homepage featuring a prominent hero banner with breaking news (Global Leaders Meet to Discuss Climate Action Plan), top stories sidebar with thumbnails, and a trending now section showcasing the latest articles with beautiful imagery. The navigation includes categories like World, Business, Sports, Technology, and Community for easy content discovery.",
      },
      {
        title: "Article Page",
        content:
          "Engaging article layout with compelling headlines (AI Revolutionizing the Future of Work), author information (By Sarah Johnson, May 10, 2024, 6 min read), featured images of the content, rich text formatting, inspiring quotes ('The best way to predict the future is to invent it.' - Alan Kay), and social sharing options including Facebook, Twitter, LinkedIn, WhatsApp, and bookmark functionality.",
      },
      {
        title: "Admin Content Management",
        content:
          "Comprehensive admin dashboard with full content management capabilities. Features include article creation and editing with title, slug, category selection, tags, rich text editor with formatting tools (bold, italic, underline, lists, quotes, code, links), publish controls (Save Draft, Preview, Publish Now, Schedule), status management, and organized sidebar navigation for Dashboard, Articles, Media, Comments, Users, and Settings.",
      },
    ],
    link: null,
    available: false,
  },
  {
    title: "E-commerce Dashboard",
    category: "Business Analytics & Management",
    description:
      "A comprehensive e-commerce management system with analytics dashboard, order management, and secure payment checkout...",
    fullDescription:
      "A complete e-commerce admin platform featuring powerful analytics dashboard with sales tracking and insights, order management system for tracking customer orders with multiple status filters, and seamless payment checkout page with multiple payment options including cash on delivery, credit/debit cards, UPI, and wallet payments.",
    technologies: "React, TypeScript, Chart.js, Stripe API, Tailwind CSS",
    image: "🛒",
    images: [
      "/img/ecommerce-1.png", // Analytics Dashboard (Main)
      "/img/ecommerce-2.png", // Order Management
      "/img/ecommerce-3.png", // Payment & Checkout
    ],
    details: [
      {
        title: "Analytics Dashboard",
        content:
          "Track sales performance, top products, and key insights with comprehensive statistics cards showing Total Sales ($24,560 ↑18.6%), Total Orders (562 ↑12.4%), Visitors (12,845 ↑9.7%), and Conversion Rate (3.45% ↑5.1%). Features include Sales Overview chart comparing this month vs last month, Orders by Day bar chart showing daily order patterns, and Top Selling Products list (Wireless Headphones 421, Sneakers 315, Graphic T-Shirt 289, Classic Watch 198, Backpack 156).",
      },
      {
        title: "Order Management",
        content:
          "Admin view to manage and track customer orders with a comprehensive order table displaying Order ID, Customer name, Date, Payment status (Paid/COD), Shipping status (Delivered/Shipped/Processing/Pending), and Total amount. Features filter tabs for All Orders, Pending, Processing, Shipped, Delivered, and Cancelled. Recent orders include #ORD1005 (Ananya Sharma, $89.98, Delivered), #ORD1004 (Rohit Verma, $129.99, Shipped), #ORD1003 (Meera Patel, $49.99, Processing), and more with a 'View All Orders' button for complete order history.",
      },
      {
        title: "Payment & Checkout",
        content:
          "Enter details, choose payment method, and place your order with a user-friendly checkout interface. Left section features Shipping Address form (Full Name: Ananya Sharma, Address: 221B Baker Street, City: Mumbai, PIN Code: 400001, Phone: 98765 43210), Order Summary (Subtotal: $129.98, Shipping: $5.00, Total: $134.98). Right section offers Payment Method options including Cash on Delivery , Credit/Debit Card  (selected), UPI, and Wallet , with a prominent green 'Confirm Order' button to complete the purchase.",
      },
    ],
    link: null,
    available: false,
  },
];

export const education = [
  {
    title: " Bachelor Degree",
    subtitle:
      "Bachelor Degree of Software Engineering, at BELTEI International University ",
    period: "2022 - Present",
  },
  {
    title: "High School Diploma",
    subtitle: "Kampong Spue High School",
    period: "2021 - 2024",
  },
  {
    title: "Secondary School Diploma",
    subtitle: "Kampong Spue Secondary School",
    period: "2018 - 2020",
  },
  {
    title: "Elementary School",
    subtitle: "Ma Rum Khang Jerng Elementary School",
    period: "2010 - 2018",
  },
];

export const techStack = [
  { name: "HTML", color: "text-orange-500" },
  { name: "CSS", color: "text-blue-500" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "Tailwind CSS", color: "text-cyan-400" },
  { name: "Bootstrap", color: "text-purple-400" },
  { name: "PHP", color: "text-indigo-400" },
  { name: "Firebase", color: "text-orange-400" },
  { name: "Vercel", color: "text-orange-500" },
];

export const contactInfo = {
  location: "Phnom Penh, Cambodia",
  website: "https://personal-portfolio-lyseavey.vercel.app/",
  email: "l.seavey.lover@gmail.com",
};

export const footer = {
  copyright: "2024 Beelzebub. All rights reserved.",
  brandName: "Beelzebub.",
};
