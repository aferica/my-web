/**
 * Created by aferica on 17-6-26.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChapterManageService {

  private url = 'http://127.0.0.1/api/project/book';  // URL to web api

  constructor(private http: Http) {
  }

  addBook(args) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + '/addBook', args , {headers: headers})
      .map(res => res.json());
    // .catch(this.handleError);
  }



  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
