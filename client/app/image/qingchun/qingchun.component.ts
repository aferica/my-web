import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QingchunService } from './qingchun.service';

@Component({
  selector: 'app-qingchun',
  templateUrl: './qingchun.component.html',
  styleUrls: ['./qingchun.component.scss'],
  providers: [QingchunService]
})
export class QingchunComponent implements OnInit {

  pictures = [];

  constructor(
    private qingchunService: QingchunService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPictures();
  }

  getPictures() {
    this.qingchunService.getPictures().subscribe (res=> {
      // console.log(res);
      this.pictures = res;
    });
  }


  viewThisPicture(id) {
    // console.log(id);
    this.router.navigate(['/image/view', {id: id}]);
  }
}
