/**
 * Created by aferica on 17-6-26.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DushiService {

  private url = 'http://api.zhuishushenqi.com/book/by-categories';
  private headers = new Headers({ 
    'Content-Type': 'application/jsonp',
    'charset': 'UTF-8', 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'Content-Type' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getBooks(): Observable<any> {

    return this.http.get(this.url + '?major=' + '都市').map(res => res.json());
  }

}
