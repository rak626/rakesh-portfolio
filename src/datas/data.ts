import {Experience, Institute, NavElement, PersonalInfo, Project, Skill} from "@/utils/types/types";

export const navElements: NavElement[] = [{
    name: "Home", slug: "/"
}, {
    name: "Skills", slug: "/skills"
}, {
    name: "Experiences", slug: "/experiences"
}, {
    name: "Projects", slug: "/projects"
}, {
    name: "Education", slug: "/education"
}, {
    name: "Contact Me", slug: "/contact"
},];

// Skills data categorized, need to update icons in iconUtils if skills are changed
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


export const experiences: Experience[] = [{
    "date": "Jan 2024 – Jun 2025",
    "role": "Software Engineer",
    "company": "RS Software",
    "description": ["Designed a high-performance Virtual Terminal Portal using Java, Spring Boot, and JPA, improving transaction response time by 50%.", "Integrated a payment gateway with VISA, Mastercard, TSYS, and WorldPay, handling 10M+ transactions/sec with high reliability.", "Built event-driven microservices with Kafka, reducing average query processing time by 60%.", "Developed customer/merchant features (Installments, Recurring Payments, Multi-shipping), boosting adoption across CP & CNP channels.", "Developed a Kafka-based Notification Service processing 1M+ monthly events.", "Centralized Quartz job scheduling for 50+ recurring tasks, reducing manual failures by 90%.", "Optimized wallet and customer allocation modules, achieving 2x faster repeat transactions.", "Collaborated with cross-functional teams using Agile methodologies (Jira) to gather requirements, deliver multiple projects on time, and ensure high code quality."],
    skills: ["Java", "Spring Boot", "JPA", "Kafka", "Redis", "Docker", "Github", "Jenkins", "Maven", "IntelliJ", "Jira"]
}, {
    "date": "Sep 2021 – Jul 2023",
    "role": "Programmer Analyst",
    "company": "Cognizant",
    "description": ["Developed a merchant onboarding portal from scratch using Spring Boot and React, streamlining onboarding and increasing client delivery speed by 50%.", "Created a reusable automation framework with Spring Boot and Rest Assured, saving over 1500 hours of manual testing.", "Led a team of 3 developers, maintaining 90%+ sprint velocity (Rally) and ensuring smooth offshore collaboration."],
    skills: ["Java", "Spring Boot", "React", "Github", "Jenkins", "Maven", "IntelliJ", "Rest Assured", "Rally"],
}, {
    "date": "Mar 2021 – Aug 2021",
    "role": "Programmer Analyst Trainee – (Internship)",
    "company": "Cognizant",
    "description": ["Developed an internal portal, MainSpring, using Spring Boot and PostgreSQL, streamlining internal workflows and improving data accessibility.", "Implemented RESTful APIs to automate data retrieval and reporting, reducing manual effort by 40%.", "Collaborated with team members & mentor to gather and developed each requirements."],
    skills: ["Java", "Spring Boot", "PostgreSQL", "Github", "Maven", "IntelliJ"],
}]


export const projects: Project[] = [
    {
        name: "Quill Quest",
        type: "Personal Project",
        description: "A secure blog platform built with Spring Security, JWT, and MySQL, featuring full CRUD operations and comment functionality. Integrated Swagger for API documentation to streamline development and testing.",
        tech: ["java", "spring boot", "mysql", "swagger"],
        github: "https://github.com/rak626/QuillQuest",
        live: "#",
        image: "/photos/projects/quill-quest.png",
    },
    {
        name: "Pressio",
        type: "Freelance Project",
        description: "A printing press order and delivery tracking platform built using Java, Spring Boot, React, and Next.js. Features include timeline tracking with SMS notifications, improving customer engagement.",
        tech: ["java", "spring boot", "react", "next.js"],
        github: "https://github.com/rak626/PressioUI",
        live: "https://pressio-ui.vercel.app/",
        image: "/photos/projects/pressio.png",
    },
    {
        name: "Personal Portfolio Website",
        type: "Personal Project",
        description: "A modern, responsive portfolio website to showcase my projects and skills. Built with React, Tailwind CSS, and Next.js for optimal performance and SEO.",
        tech: ["react", "tailwind css", "next.js"],
        github: "https://github.com/rak626/rakesh-portfolio",
        live: "https://www.rakeshghosh.co.in/",
        image: "/photos/projects/portfolio.png",
    },
    {
        name: "RealTime Pizza Delivery Application",
        type: "Personal Project",
        description: "A real-time pizza delivery application built with Node.js, Express, and Socket.io. " +
            "Features include live order tracking, real-time updates, and a user-friendly interface for seamless ordering experience.",
        tech: ["node.js", "express", "socket.io"],
        github: "https://github.com/rak626/Realtime-Pizza-Delivary-App#",
        live: "https://realtime-pizza-delivary-app.onrender.com/",
        image: "/photos/projects/pizza-delivery.png",
    },];


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
},];

export const personalInfo: PersonalInfo = {
    name: "Rakesh Ghosh",
    role: "Software Engineer",
    email: "rakeshacot@gmail.com",
    phone: "+91 7003272222",
    address: "Kolkata, India",
    socials: {
        linkedin: "https://www.linkedin.com/in/ghoshrakesh626/",
        github: "https://github.com/rak626",
        twitter: "https://x.com/RakeshG51567945",
        facebook: "https://www.facebook.com/rakesh.ghosh.777363",
        instagram: "https://www.instagram.com/rakesh_ghosh_400/",
    }
}

