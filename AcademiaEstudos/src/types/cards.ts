export type MethodologyCard = {
    id: number;
    icon: string;
    title: string;
    description: string;
};


export type BadgeVariant = "open" | "waiting" | "predicted";

export type ExamCard = {    
    id: number;

    acronym: string;
    name: string;
    badge: BadgeVariant;
    requirements: string[];
    fases: string[];
    subjects: string[];
    url: string;
    badgeLabel: string;

};


