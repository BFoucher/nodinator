import { ArticleComponent } from './article/component/article.component';
import { AuthService } from './commun/service/auth-gard-service';
import { LoginComponent } from './commun/login/login.component';
import { HttpService} from './commun/http/http.service';
import { NavComponent } from './commun/layout/nav/nav.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from "./commun/layout/layout.component";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUserDataService } from "./commun/in-memory/in-memory.data";
import { UserListComponent } from "./user/component/userList.component";
import { UserService } from "./commun/service/user/user.service";
import { UserRepositoryService } from "app/commun/service/repository-service";
import { ArticleService } from './commun/service/article/article.service';
import { ArticleListComponent } from './article/component/articleList.component';
import { FooterComponent } from './commun/layout/footer/footer.component';
import { UserComponent } from './user/component/user.component';
import { AppRoutingModule } from "./app.routing.module";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    ArticleComponent,
    ArticleListComponent,
    UserListComponent,
    NavComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: UserRepositoryService, useClass: UserService },
    UserService, ArticleService,
    HttpService,
    AuthService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
