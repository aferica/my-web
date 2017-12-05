import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoOnlineService {

  private url = 'http://39.108.63.38:3000/api/video/online/getVideoOnline';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getVideoOnlines(): Observable<any> {
    return this.http.get(this.url).map(res => res.json());
  }

}