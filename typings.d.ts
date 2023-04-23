interface SanityBody { // every sanity object have this elements
    _updatedAt: string;
    _createdAt: string;
    _rev: string;
    _id: string;
}

interface Image {
    _type: "image";
    assets: {
        _ref: string;
        _type: "reference";
    };
}

export interface Social extends SanityBody {
    url: string
    _type: "social"
    title: string
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo"
    profileImage: Image
    backgroundInformation: string
    name: string
    role: string
    heroImage: Image
    address: string
    email: string
    phoneNumber: string
}

export interface Technology extends SanityBody {
    _type: "skill"
    title: string
    image: Image
    progress: number;
}

export interface Skill extends SanityBody {
    _type: "skill"
    title: string
    image: Image
    progress: number;
}

export interface Experience extends SanityBody {
    _type: "experience"
    company: string
    companyImage: Image
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    jobTitle: string;
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: "project"
    title: string
    image: Image
    linkToBuild: string;
    progress: number;
    summary: string;
    technologies: Technology[];
}