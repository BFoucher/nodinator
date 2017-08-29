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
import { ArticleComponent } from './article/component/article.component';
import { BreadcrumbComponent } from './commun/layout/breadcrumb.component';
// import { RepositoryService } from "./commun/service/repository-service";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUserDataService } from "./commun/in-memory/in-memory.data";
import { UserListComponent } from "./user/component/userList.component";
import { UserService } from "./commun/service/user/user.service";
import { UserRepositoryService } from "app/commun/service/repository-service";
import { AppRoutingModule } from "./app.routing.module";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    UserListComponent,
    NavComponent,
    LoginComponent
    ContentComponent,
    BreadcrumbComponent,
    UserListComponent
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryArticleDataService)
  ],
  providers: [
    { provide: UserRepositoryService, useClass: UserService },
    UserService,
    HttpService,
    AuthService
  ],
  providers: [ InMemoryArticleDataService, ArticleService ],
  bootstrap: [AppComponent]

})
export class AppModule { }
