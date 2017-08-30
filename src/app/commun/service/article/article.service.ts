import { ArticleRepositoryService } from '../article-repository-service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article, typeStatus } from '../../model/article.model';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class ArticleService extends ArticleRepositoryService {

  private _status: typeStatus[] = ['publish', 'draft'];
  
      constructor(private _http: Http) {
          super();
      }
      public getArticles(): Observable<Article[]> {
          return this._http.get('/api/articles')
              .map((res: Response) => {
                  return res.json().data;
              })
              .catch(err => {
                  console.log(err);
                  return Observable.throw(err);
              });
      }
  
      /*public getArticle(id: number): Article {
          let articles: Article[] = this.getArticles();
          let article: Article;
          articles.forEach(a => a.id === id? a)
          return 
      }*/
  
}