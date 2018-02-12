import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home-component/home.component";
import { ArticleComponent } from "../article-component/article.component";
import { NewsComponent } from "../news-component/news.component";
import { NavComponent } from './../Nav-Component/nav.component';
import { NotFoundComponent } from "../notFound-component/notfound.component";

const app_routes: Routes =[
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'articles',
        component: ArticleComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
   
]
 export const routers : ModuleWithProviders = RouterModule.forRoot(app_routes);