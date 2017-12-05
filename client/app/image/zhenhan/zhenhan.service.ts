import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ZhenhanService {

  private url = 'http://39.108.63.38:3000/api/picture/getPictureByTagsOr';
  private headers = new Headers({ 'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPictures(page): Observable<any> {
    return this.http.get(this.url + '?tags=美胸,美臀,大胸女神,爆乳&page=' + page, { headers: this.headers }).map(res => res.json());
  }

}