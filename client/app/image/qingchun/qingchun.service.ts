import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QingchunService {

  private url = 'http://10.30.4.110:3000/api/picture/getPictureByTagsOr';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPictures(): Observable<any> {
    return this.http.get(this.url + '?tags=小清新,萌妹').map(res => res.json());
  }

}