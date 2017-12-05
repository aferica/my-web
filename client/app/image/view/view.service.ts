import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ViewService {

  private url = 'http://39.108.63.38:3000/api/picture/getPicture';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getView(id): Observable<any> {
    return this.http.get(this.url + '?_id=' + id).map(res => res.json());
  }

}