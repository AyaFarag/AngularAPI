import { Component } from '@angular/core'
import { AppService } from "../app-services/app.service";

@Component({

    selector: 'news-component',
    templateUrl: './news.html',
    styleUrls: ['./news.css',],
    providers: [AppService],

})


export class NewsComponent {
    photos: any;
    constructor(private __photoserv: AppService) {

        this.__photoserv.getphotos()
            .subscribe(
            data => {
                this.photos = data;
            },

        );

    }

}