import {Component} from '@angular/core'
import { AppService } from './../app-services/app.service';
@Component({

    selector:'article-component',
    templateUrl:'./article.html',
    styleUrls:['./article.css' , ],
    providers: [AppService],

})


export class ArticleComponent 

{
        posts: any[];
    constructor(private __appServ: AppService){

        this.__appServ.getposts()
                       .subscribe(
                           data =>{
                               this.posts = data;
                           },
                           
                       );

    }
    
}