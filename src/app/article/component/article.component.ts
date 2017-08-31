import { Router, ActivatedRoute, Params} from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../commun/model/article.model';
import { ArticleService } from '../../commun/service/article/article.service';

@Component({
    selector: 'nod-article',
    templateUrl: 'article.component.html'
})
export class ArticleComponent implements OnInit {

    private article: Article;
    private articleId: number;
    private submitted: boolean = false;
    
    constructor(private _repo: ArticleService, private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.articleId = +params['id'];
        });

        this._repo.getArticles().subscribe((articles: Article[]) => {
            articles.forEach(article => {
                if(article.id === this.articleId) {
                    this.article = article;
                }
            });
        });

        //this._repo.add().subscribe()
    }

    

    //@Input() article: Article;

    
}
