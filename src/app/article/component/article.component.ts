import { Component } from '@angular/core';
import { Article } from '../../commun/model/article.model';
import { ArticleService } from '../../commun/service/article/article.service';

@Component({
    selector: 'nod-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent {
    title = 'mon composant Article';
}
