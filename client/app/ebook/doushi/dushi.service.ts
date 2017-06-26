/**
 * Created by aferica on 17-6-26.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DushiService {

  // private url = 'http://127.0.0.1:5000/api/book/findBook';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getBooks(): Observable<any> {
    return this.http.get('/api/cats').map(res => res.json());
  }

}
