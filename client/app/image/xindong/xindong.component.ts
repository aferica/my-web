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
  
    constructor(
      private xindongService: XindongService,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.getPictures();
    }
  
    getPictures() {
      this.xindongService.getPictures().subscribe (res=> {
        this.pictures = res;
      });
    }

    viewThisPicture(id) {
      // console.log(id);
      this.router.navigate(['/image/view', {id: id}]);
    }
}
