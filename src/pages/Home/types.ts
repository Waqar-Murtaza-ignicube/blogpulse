export type SingleArticle = {
    id: number;
    name: string,
    body: string,
    author: string,
    date: string,
    duration: string,
    category: string,
    image: string
}

export type SingleAuthor = {
    profile: string;
    name: string;
    role: string;
    city: string;
}