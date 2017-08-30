import { Article } from '../../commun/model/article.model';
import { ArticleService } from '../../commun/service/article/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nod-article-list',
    templateUrl: './articleList.component.html'
})
export class ArticleListComponent implements OnInit {
    private articles: Article[];
    
    constructor(private serv: ArticleService) {}
    
    ngOnInit(): void {
        this.serv.getArticles().subscribe(articles => this.articles = articles);
    }
}