export type Experience = {
    date: string;
    role: string;
    company: string;
    description: string[];
    skills?: string[];
};

export type Skill = {
    name: string;
    rating: number; // 1-5
};

export type Project = {
    name: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    image?: string;
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
    socials: {
        linkedin?: string;
        github?: string;
        twitter?: string;
        facebook?: string;
        instagram?: string;
        [key: string]: string | undefined; // For any additional social links
    };
}

export type NavElement = {
    name: string;
    slug: string;
}