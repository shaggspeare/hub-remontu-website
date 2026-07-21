export interface ProjectShortInfo {
    id: string;
    image?: any; // or use { url?: string } if your Media type includes a `url` field
    title: string;
    link: string;
    category: string;
    type: string;
    realizedLink?: string; // link to the finished renovation of the same object (design projects only)
}