import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class XingganService {

  private url = 'http://10.30.4.110:3000/api/picture/getPictureByTagsOr';
  private headers = new Headers({ 'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPictures(page): Observable<any> {
    return this.http.get(this.url + '?tags=性感,推女神&page=' + page, this.options).map(res => res.json());
  }
}