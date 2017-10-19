import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BtService {

  private url = 'http://127.0.0.1:3000/api/video/bt/getVideoBt';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getBts(): Observable<any> {
    return this.http.get(this.url).map(res => res.json());
  }

}