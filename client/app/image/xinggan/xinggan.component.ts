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
  
  constructor(
    private xingganService: XingganService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPictures();
  }

  getPictures() {
    this.xingganService.getPictures().subscribe (res=> {
      this.pictures = res;
    });
  }

  viewThisPicture(id) {
    // console.log(id);
    this.router.navigate(['/image/view', {id: id}]);
  }
}
