/**
 * Created by aferica on 17-6-26.
 */
import { Injectable } from '@angular/core';
import { Jsonp, Headers, RequestOptions, Response, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DushiService {

  private API = 'http://39.108.63.38:3000/api/getboook/byurl';
  private headers = new Headers({ 
    'Content-Type': 'application/json',
    'charset': 'UTF-8'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private jsonp: Jsonp,
              private http: Http) { }
  

  getBooks(): Observable<any> {

    let params = new URLSearchParams;
    let url = 'http://api.zhuishushenqi.com/book/by-categories?major=%E9%83%BD%E5%B8%82';
    return this.http.get(this.API + '?url=' + url)
      .map(res => res.json());
  }

  

}
