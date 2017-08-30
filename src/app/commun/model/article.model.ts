export class Article {
    constructor(id: number,
        title: String,
        content: String,
        slug: String,
        status: typeStatus) { }

    id: number;
    title: String;
    content: String;
    slug: String;
    status: typeStatus;
}
export declare type typeStatus = 'publish' | 'draft' ;
