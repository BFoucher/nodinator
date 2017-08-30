export class Article {
    id: number;
    title: String;
    content: String;
    slug: String;
    status: typeStatus;

    constructor(
        id: number,
        title: String,
        content: String,
        slug: String,
        status: typeStatus) { }
}
export declare type typeStatus = 'publish' | 'draft' ;
