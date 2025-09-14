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
    "date": "Jan 2024 - Jun 2025",
    "role": "Software Developer - Payabbhi",
    "company": "RS Software",
    "description": [
        "Contributed to Payabbhi’s payment system features (Auth, Sale, Refund, Void) integrated with card networks like VISA, Mastercard, etc, and processors such as TSYS and WorldPay, supporting up to 10M+ transactions per second.",
        "Developed a virtual terminal portal and Hosted Payment Page to enable secure card transactions and oversee user payment sessions, utilising Redis TTL for an efficient and smooth payment experience.",
        "Implemented features like Instalment, Recurring Payments, and Multi-shipping, for both customers & merchants, enhancing feature adoption for Card Present (CP) and Card Not Present (CNP) situations.",
        "Improved Batch Settlement (Clearing) system by 40% of its previous version, supports up to 1500 transactions per batch by introducing a clearance table & refined recursion-based function.",
        "Developed a Kafka-based Notification Service handling 1M+ monthly events of sending email, sms for payment receipts, reports, orders, etc.",
        "Introduced a Quartz-based job scheduler to centrally manage over 50 recurring tasks centrally, reducing manual job failures by 90%."
    ],
    "skills": ["Java", "Spring Boot", "JPA", "Kafka", "Redis", "Docker", "Github", "Jenkins", "Maven", "IntelliJ", "Jira"]
}, {
    "date": "Sep 2021 - Jul 2023",
    "role": "Programmer Analyst - AIG Insurance Europe",
    "company": "Cognizant",
    "description": [
        "Migrated key insurance modules, such as booking and binding, into Spring Boot, boosting system performance by 25% and enhancing user experience.",
        "Developed scalable microservices and UI features using REST APIs, Spring Boot, and JavaScript, reducing claim delays by 15% and ensuring regulatory compliance.",
        "Achieved a 95%+ sprint delivery rate in an onsite-offshore model, modernising legacy systems and cutting maintenance costs by 18%."
    ],
    "skills": ["Java", "Spring Boot", "React", "Github", "Jenkins", "Maven", "IntelliJ", "Rest Assured", "Rally"]
}, {
    "date": "Mar 2021 - Aug 2021",
    "role": "Internship - MainSpring",
    "company": "Cognizant",
    "description": [
        "Played a key role in Cognizant’s Internal Framework Hub (MainSpring) by developing and enhancing features, optimising workflows, and improving system efficiency to support internal business processes and client-facing applications."
    ],
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Github", "Maven", "IntelliJ"]
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

