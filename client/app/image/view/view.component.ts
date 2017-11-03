import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ViewService } from './view.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [ViewService]
})
export class ViewComponent implements OnInit {

  images = [];
  tags = [];
  title = '';
  
  constructor(
    private viewService: ViewService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.params['value']['id'];
    this.getPictures(id);
  }

  getPictures(id) {
    this.viewService.getView(id).subscribe (res=> {
      // console.log(res);
      this.title = res[0].title;
      this.tags = res[0].tags;
      this.images = res[0].image_url;
    });
  }
}
