import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";


@Injectable()

export class AppService {

    constructor(private _http: Http, private __photos: Http) {

    }

    getposts() {
         return this._http.get("http://localhost/productgallary/proservice.php")
                           .map(res=>res.json());
    }
    getphotos() {
        return this.__photos.get("https://jsonplaceholder.typicode.com/photos")
                             .map(res=>res.json());
    }
}