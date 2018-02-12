import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './../Nav-Component/nav.component';
import { ArticleComponent } from "../article-component/article.component";
import { NewsComponent } from "../news-component/news.component";
import { HomeComponent } from "../home-component/home.component";
import { routers } from "../routing-component/app.routing";
import { NotFoundComponent } from "../notFound-component/notfound.component";
import { AngularComponent } from "../angular-component/angular.component";
import { HttpModule } from "@angular/http";





@NgModule({
  imports:      [ BrowserModule, routers, HttpModule ],
  declarations: [ NavComponent, ArticleComponent, NewsComponent, HomeComponent ,NotFoundComponent, AngularComponent ],
  bootstrap:    [ AngularComponent ],
})
export class AppModule { }
