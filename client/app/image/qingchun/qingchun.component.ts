import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { QingchunService } from './qingchun.service';

@Component({
  selector: 'app-qingchun',
  templateUrl: './qingchun.component.html',
  styleUrls: ['./qingchun.component.scss'],
  providers: [QingchunService]
})
export class QingchunComponent implements OnInit {

  pictures = [];
  number = 0;
  page = '1';

  constructor(
    private qingchunService: QingchunService,
    private router: Router,
    private params: ActivatedRoute
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
    this.qingchunService.getPictures(page).subscribe (res=> {
      // console.log(res);
      this.pictures = [];
      this.pictures = res;
    });
  }

  getPictureNumber() {
    this.qingchunService.getPictureNumber().subscribe (res=> {
      // console.log(res);
      this.number = res.or;
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
    this.router.navigate(['/image/qingchun/' + temp]);
    this.getPictures(temp);
    this.page = temp.toString();
  }

  goToNextPage() {
    let temp = parseInt(this.page) + 1
    this.router.navigate(['/image/qingchun/' + temp]);
    this.getPictures(temp);
    this.page = temp.toString();
  }
}
