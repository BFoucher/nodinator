import { Router } from '@angular/router';
import { Article } from '../../commun/model/article.model';
import { ArticleService } from '../../commun/service/article/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nod-article-list',
    templateUrl: './articleList.component.html'
})
export class ArticleListComponent implements OnInit {
    private articles: Article[];
    private selectedArticle: Article;
    
    constructor(private serv: ArticleService, private router: Router) {}
    
    ngOnInit(): void {
        this.serv.getArticles().subscribe(articles => this.articles = articles);
    }

    gotoDetail(article: Article): void {
        this.selectedArticle = article;
        this.router.navigate(['articles/detail/', this.selectedArticle.id]);
    }

    addArticle(): void {
        this.router.navigate(['articles/detail', 0]);
    }
}