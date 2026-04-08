import {Experience, Institute, NavElement, PersonalInfo, Project, Skill, BlogPost} from "@/utils/types/types";

export const navElements: NavElement[] = [{
    name: "Home", slug: "/"
}, {
    name: "Skills", slug: "/skills"
}, {
    name: "Experience", slug: "/experience"
}, {
    name: "Projects", slug: "/projects"
}, {
    name: "Education", slug: "/education"
}, {
    name: "Blog", slug: "/blog"
}, {
    name: "Contact", slug: "/contact"
},];

export const skillsData: Record<string, Skill[]> = {
    "Programming Languages": [{name: "Java", rating: 5}, {name: "C/C++", rating: 4}, {name: "JavaScript", rating: 4},],
    "Frameworks & Tools": [{name: "Spring Boot", rating: 5}, {name: "React", rating: 4}, {
        name: "Next.js",
        rating: 4
    }, {name: "Tailwind CSS", rating: 4}, {name: "Git", rating: 5}, {name: "Maven", rating: 4}, {
        name: "Jenkins",
        rating: 4
    }, {name: "Docker", rating: 4}, {name: "Swagger", rating: 4}, {name: "IntelliJ", rating: 5}, {
        name: "Postman",
        rating: 5
    },],
    Databases: [{name: "MySQL", rating: 5}, {name: "PostgreSQL", rating: 4}, {
        name: "MongoDB",
        rating: 4
    }, {name: "Kafka", rating: 3}, {name: "Redis", rating: 4},],
};


export const experiences: Experience[] = [
    {
        date: "Jan 2024 - Jun 2025",
        role: "Software Developer - Payabbhi",
        company: "RS Software",
        description: [
            "Engineered core payment flows — Authorization, Sale, Refund, and Void — integrating with major card networks (VISA, Mastercard) and processors (TSYS, WorldPay), supporting production workloads in the thousands of TPS range.",
            "Redesigned the batch settlement pipeline by introducing a clearance table and a recursive settlement handler, improving throughput by 40% and enabling batches to reliably handle 1,500+ transactions.",
            "Developed a Kafka-driven Notification Service that processes over 1M+ monthly events across emails, SMS, reports, and downstream operations.",
            "Built a Redis-backed virtual terminal and hosted payment page with TTL-based session handling, reducing stale payment sessions by 30% and improving transaction reliability.",
            "Collaborated with DevOps to containerize services using Docker and integrate CI/CD workflows with Jenkins, reducing deployment time from hours to minutes.",
            "Mentored junior developers, reviewed PRs, and introduced static analysis practices to improve code quality and consistency across services."
        ],
        skills: [
            "Java", "Spring Boot", "JPA", "Kafka", "Redis", "Docker",
            "GitHub", "Jenkins", "Maven", "IntelliJ", "Jira"
        ]
    },
    {
        date: "Sep 2021 - Jul 2023",
        role: "Programmer Analyst - AIG Insurance Europe",
        company: "Cognizant",
        description: [
            "Modernised critical insurance modules (booking, binding, claims) by migrating them from monolithic Java EE applications to Spring Boot microservices, reducing average API latency by 25%.",
            "Designed and implemented RESTful APIs enabling policy creation, updates, and renewals, increasing claim processing accuracy and reducing operational turnaround by 15%.",
            "Collaborated with onsite architects and a 6+ member offshore team under an agile model, consistently achieving a 95%+ sprint delivery rate across multiple releases."
        ],
        skills: [
            "Java", "Spring Boot", "React", "GitHub",
            "Jenkins", "Maven", "IntelliJ", "Rest Assured", "Rally"
        ]
    },
    {
        date: "Mar 2021 - Aug 2021",
        role: "Internship - MainSpring",
        company: "Cognizant",
        description: [
            "Developed and enhanced features for Cognizant's Internal Framework Hub (MainSpring), improving workflow efficiency for internal business processes and client-facing applications.",
            "Worked cross-functionally to document APIs and streamline framework usability for internal engineering teams."
        ],
        skills: ["Java", "Spring Boot", "PostgreSQL", "GitHub", "Maven", "IntelliJ"]
    }
];


export const projects: Project[] = [
    {
        name: "Quill Quest",
        type: "Personal Project",
        description: "A secure blog platform built with Spring Security, JWT, and MySQL, featuring full CRUD operations and comment functionality.",
        tech: ["java", "spring boot", "mysql", "swagger", "Git"],
        github: "https://github.com/rak626/QuillQuest",
        live: "#",
        image: "/photos/projects/quill-quest.png",
        problem: "Creating a personal blog platform that needed secure authentication, user management, and a smooth writing experience without relying on third-party platforms.",
        solution: "Built a full-stack application with JWT-based authentication, role-based access control, and a clean REST API. Implemented MySQL for data persistence with proper indexing for search performance.",
        impact: [
            "Learned Spring Security best practices",
            "Implemented secure password hashing and JWT token management",
            "Created a reusable admin dashboard for content management"
        ],
        features: [
            "User registration and login with JWT tokens",
            "Blog post CRUD with rich text editor",
            "Comment system with nested replies",
            "Category and tag management",
            "Search functionality"
        ]
    },
    {
        name: "Pressio",
        type: "Freelance Project",
        description: "A printing press order and delivery tracking platform built using Java, Spring Boot, React, and Next.js.",
        tech: ["java", "spring boot", "react", "next.js"],
        github: "https://github.com/rak626/PressioUI",
        live: "https://pressio-ui.vercel.app/",
        image: "/photos/projects/pressio.png",
        problem: "Local printing businesses struggled with order management, customer tracking, and timely delivery notifications. Manual processes led to errors and customer dissatisfaction.",
        solution: "Designed and developed a full-stack application with real-time order tracking, SMS notifications via Twilio, and an intuitive dashboard for order management.",
        impact: [
            "Reduced order processing time by 40%",
            "Improved customer satisfaction with real-time updates",
            "Enabled mobile access for delivery personnel"
        ],
        features: [
            "Order placement with file upload",
            "Real-time order status tracking",
            "SMS notifications for status updates",
            "Admin dashboard for order management",
            "Customer order history"
        ]
    },
    {
        name: "Personal Portfolio",
        type: "Personal Project",
        description: "A modern, responsive portfolio website to showcase projects and skills. Built with Next.js 15, Tailwind CSS, and Framer Motion.",
        tech: ["react", "tailwind css", "next.js"],
        github: "https://github.com/rak626/rakesh-portfolio",
        live: "https://www.rakeshghosh.co.in/",
        image: "/photos/projects/portfolio.png",
        problem: "Needed a professional online presence that stands out, showcases technical skills, and provides an easy way for recruiters to learn about my work.",
        solution: "Built a single-page portfolio with smooth scrolling, dark mode support, and interactive animations. Used Next.js for SEO optimization and Vercel for fast deployment.",
        impact: [
            "Improved professional visibility",
            "Demonstrates frontend development skills",
            "Provides easy contact channel for recruiters"
        ],
        features: [
            "Dark/Light mode with system preference detection",
            "Smooth scroll navigation",
            "Animated section reveals",
            "Responsive design for all devices",
            "Contact form integration"
        ]
    },
    {
        name: "RealTime Pizza Delivery",
        type: "Personal Project",
        description: "A real-time pizza delivery application built with Node.js, Express, and Socket.io.",
        tech: ["node.js", "express", "socket.io"],
        github: "https://github.com/rak626/Realtime-Pizza-Delivary-App#",
        live: "https://realtime-pizza-delivary-app.onrender.com/",
        image: "/photos/projects/pizza-delivery.png",
        problem: "Traditional food ordering systems lacked real-time updates. Customers had no visibility into order preparation and delivery status.",
        solution: "Created a real-time application using Socket.io for instant updates. Implemented order tracking, live location updates, and instant status changes.",
        impact: [
            "Gained expertise in real-time communication",
            "Learned Socket.io patterns for live updates",
            "Created seamless user experience with instant feedback"
        ],
        features: [
            "Real-time order tracking",
            "Live delivery status updates",
            "Interactive menu with customization",
            "Cart management",
            "Order history"
        ]
    }];


export const institutions: Institute[] = [{
    degree: "Bachelor of Technology (B.Tech), Computer Science and Engineering",
    school: "BP Poddar Institute of Management & Technology",
    location: "Kolkata, India",
    duration: "2017 - 2021",
    grade: "CGPA: 8.47/10",
    highlights: ["Specialization in Data Structures and Algorithms.", "Mastered core subjects like Operating Systems, Database Management, and Software Engineering.", "Led a team project to develop a campus event management system, enhancing organizational skills.", "Active member of the Coding Club, organizing hackathons and coding competitions.",],
}, {
    degree: "Higher Secondary (Class 12th), Science",
    school: "Midnapore Collegiate School",
    location: "Midnapore, West Bengal, India",
    duration: "2015 - 2017",
    grade: "Percentage: 80%",
    highlights: ["Focused on Physics, Chemistry, and Mathematics.", "Participated in inter-school science fairs and secured 2nd place in the regional level competition.", "Volunteered for community service programs, fostering teamwork and leadership skills.",],
}, {
    degree: "Secondary (Class 10th)",
    school: "Midnapore Collegiate School",
    location: "Midnapore, West Bengal, India",
    duration: "2015",
    grade: "Percentage: 89.4%",
    highlights: ["Excelled in Mathematics and Science subjects.", "Active participant in extracurricular activities like sports, Science Fair etc.",],
}];

export const personalInfo: PersonalInfo = {
    name: "Rakesh Ghosh",
    role: "Software Engineer",
    email: "rakeshacot@gmail.com",
    phone: "7001074104",
    address: "Kolkata, India",
    socials: {
        linkedin: "https://www.linkedin.com/in/ghoshrakesh626/",
        github: "https://github.com/rak626",
        twitter: "https://x.com/RakeshG51567945",
        facebook: "https://www.facebook.com/rakesh.ghosh.777363",
        instagram: "https://www.instagram.com/rakesh_ghosh_400/",
    },
    totalYoE: 4,
}

export const resumeData = {
    name: "Rakesh_Ghosh_Resume_4YoE.pdf",
}

export const blogPosts: BlogPost[] = [
    {
        slug: "getting-started-with-microservices",
        title: "Getting Started with Microservices Architecture",
        excerpt: "A comprehensive guide to understanding microservices, their benefits, and how to get started with building your first microservice application.",
        date: "2024-03-15",
        readingTime: "8 min read",
        category: "Backend"
    },
    {
        slug: "spring-boot-best-practices",
        title: "Spring Boot Best Practices for Production",
        excerpt: "Essential best practices for building robust, scalable Spring Boot applications that are ready for production environments.",
        date: "2024-02-20",
        readingTime: "12 min read",
        category: "Java"
    },
    {
        slug: "building-real-time-applications",
        title: "Building Real-Time Applications with Socket.io",
        excerpt: "Learn how to implement real-time features like live notifications, chat, and tracking in your web applications.",
        date: "2024-01-10",
        readingTime: "10 min read",
        category: "Node.js"
    }
];
