import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Article } from './../model/article.model';

@Injectable()
export class ArticleService {
    private ArticleUrl = 'api/Article';  // URL to web api
    constructor(private http: Http) { }

   getArticles(): Promise<Article[]> {
     return this.http.get(this.ArticleUrl)
                .toPromise()
                .then(response => response.json().data as Article[])
                .catch(this.handleError);
   }
    
   private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
   }
}