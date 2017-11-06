import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XingganService } from './xinggan.service';

@Component({
  selector: 'app-xinggan',
  templateUrl: './xinggan.component.html',
  styleUrls: ['./xinggan.component.scss'],
  providers: [XingganService]
})
export class XingganComponent implements OnInit {

  pictures = [];
  number = 0;
  page = '1';
  
  constructor(
    private xingganService: XingganService,
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
    this.xingganService.getPictures(page).subscribe (res=> {
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
    let temp = parseInt(this.page) + 1
    this.router.navigate(['/image/xianggan/' + temp]);
    this.getPictures(temp);
    this.page = temp.toString();
  }
}
