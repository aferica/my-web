import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZhenhanService} from './zhenhan.service';

@Component({
  selector: 'app-zhenhan',
  templateUrl: './zhenhan.component.html',
  styleUrls: ['./zhenhan.component.scss'],
  providers: [ZhenhanService]
})
export class ZhenhanComponent implements OnInit {

  pictures = [];
  
  constructor(
    private zhenhanService: ZhenhanService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPictures();
  }

  getPictures() {
    this.zhenhanService.getPictures().subscribe (res=> {
      this.pictures = res;
    });
  }

  viewThisPicture(id) {
    // console.log(id);
    this.router.navigate(['/image/view', {id: id}]);
  }
}
