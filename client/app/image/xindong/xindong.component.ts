import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { XindongService } from './xindong.service';

@Component({
  selector: 'app-xindong',
  templateUrl: './xindong.component.html',
  styleUrls: ['./xindong.component.scss'],
  providers: [XindongService]
})
export class XindongComponent implements OnInit {

  pictures = [];
  number = 0;
  page = '1';

  constructor(
    private xindongService: XindongService,
    private router: Router
  ) { }

  ngOnInit() {
    this.page = '';
    let url_page = this.router.url.replace(/[^0-9]/ig,"");
    if(url_page!='') {
      this.page = url_page;
    }
    this.getPictures(this.page);
  }

  getPictures(page) {
    if(page == null || page == '')
      page = 1;
    this.xindongService.getPictures(page).subscribe (res=> {
      // console.log(res);
      this.pictures = [];
      this.pictures = res;
    });
  }

  viewThisPicture(id) {
    // console.log(id);
    this.router.navigate(['/image/view', {id: id}]);
  }

  goToLastPage() {
    let temp = 1;
    if (this.page!='1')
      temp = parseInt(this.page) - 1
    this.router.navigate(['/image/xinggan/' + temp]);
    this.getPictures(temp);
    this.page = temp.toString();
  }

  goToNextPage() {
    let temp = 1;
    temp = parseInt(this.page) + 1
    this.router.navigate(['/image/xianggan/' + temp]);
    this.getPictures(temp);
    this.page = temp.toString();
  }
}
