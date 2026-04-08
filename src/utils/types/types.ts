export type Experience = {
    date: string;
    role: string;
    company: string;
    description: string[];
    skills?: string[];
};

export type Skill = {
    name: string;
    rating: number;
};

export type Project = {
    name: string;
    type: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    image?: string;
    problem?: string;
    solution?: string;
    impact?: string[];
    features?: string[];
}

export type Institute = {
    degree: string;
    school: string;
    duration: string;
    grade: string;
    highlights: string[];
    location: string;
};

export type PersonalInfo = {
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    totalYoE: number;
    socials: {
        linkedin?: string;
        github?: string;
        twitter?: string;
        facebook?: string;
        instagram?: string;
        [key: string]: string | undefined;
    };
}

export type NavElement = {
    name: string;
    slug: string;
}

export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    category: string;
    coverImage?: string;
}
