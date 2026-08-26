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
    "Currently, I continue to learn and develop myself in the field of web development and the digital world more broadly. (The One Who wear Glasses)",
  ],
  quote: "Utilizing AI as a professional tool, not a replacement.",
  cv: "/Chea-Panhchakselavuth-CV.pdf", // Add your CV file to public folder
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
    title: "E-Commerce Demo Project",
    category: "E-Commerce Website",
    description:
      "A comprehensive gaming marketplace platform for buying and selling game accounts...",
    fullDescription:
      "A comprehensive gaming marketplace platform for buying and selling game accounts, featuring user and seller management, secure escrow payments, seller verification, account listings, automated order processing, and a dedicated admin dashboard for marketplace management.",
    technologies: "React, TypeScript, Tailwind CSS, Framer Motion, Laravel (Blade), Python (payment-service)",
    image: "/img/anx-market-1.png",
    images: [
      "/img/anx-market-1.png",
      "/img/anx-market-2.png",
      "/img/anx-market-3.png",
    ],
    details: [
      {
        title: "Marketplace Home Page",
        content:
          "A modern gaming marketplace homepage where users can browse available game accounts, explore different categories, search for products, and quickly find accounts available for purchase.",
      },
      {
        title: "Browse Our Product",
        content:
          "A detailed product page showing game account information, pricing, product details, seller information, and purchase options. Sensitive account details remain protected until the purchase process is completed.",
      },
      {
        title: "Admin Dashboard",
        content:
          "A dedicated dashboard for managing marketplace activities, including products, orders, sellers, users, and account inventory. The dashboard provides organized management tools and an overview of important marketplace information.",
      },
    ],
    link: "https://anx-market.vercel.app/",
    available: true,
  },
  {
    title: "3d Landing website product (MacBook Pro)",
    category: "3d Landing Page",
    description:
      "A highly interactive 3D landing page for a MacBook Pro, featuring scroll-triggered animations, volumetric lighting effects, and a modern bento box grid layout.",
    fullDescription:
      "This project showcases advanced frontend development techniques by recreating a premium product landing page. It features a stunning hero section with glowing text and volumetric lighting, a complex asymmetrical bento box layout built with CSS Grid, and highly interactive scroll-triggered 3D parallax animations. The project leverages modern tools like GSAP, Lenis for smooth scrolling, and advanced CSS techniques to deliver an immersive user experience.",
    technologies: "React, Vite, Typescript, Tailwind CSS, GSAP, Three.js,",
    image: "/img/3d-web-1.png",
    images: [
      "/img/3d-web-1.png", // Hero Section
      "/img/3d-web-2.png", // Bento Box
      "/img/3d-web-3.png", // Parallax Animation
    ],
    details: [
      {
        title: "Hero Section (Glowing Text & Laptop)",
        content:
          "This section utilizes a centered layout within a full-height viewport. The multi-colored text is achieved using a CSS linear-gradient background clipped to the text. The intense volumetric glow is created using absolutely positioned pseudo-elements with radial gradients and heavy CSS blur filters to create a dispersed lighting effect.",
      },
      {
        title: "Bento Box Grid Layout",
        content:
          "Built using a robust CSS Grid architecture for an asymmetrical layout. Cards use varying grid column and row spans. They feature consistent border-radius, hidden overflow, and subtle inner borders. The top-right card's glowing animated border is likely a rotating conic-gradient pseudo-element spinning behind the dark card content.",
      },
      {
        title: "Scroll-Triggered Parallax Windows",
        content:
          "This section relies on scroll animation libraries like GSAP paired with sticky positioning. Inside a pinned container, the UI windows are absolutely positioned. As the user scrolls, Javascript calculates progress and applies varying 3D transforms (translate3d, scale) to each window, moving them outward from the center at different speeds to create parallax depth.",
      },
    ],
    link: "https://macbookprogsaplanding.vercel.app/",
    available: true,
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
    period: "2024 - Present",
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
