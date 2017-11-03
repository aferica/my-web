import { Component, OnInit } from '@angular/core';
import { Router }                 from '@angular/router';

import { VideoOnlineService } from './online.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss'],
  providers: [VideoOnlineService]
})
export class OnlineComponent implements OnInit {

  videos=[];

  constructor(
    private videoOnlineService: VideoOnlineService,
    private router: Router
  ) { }

  ngOnInit() {
    this.videoOnlineService.getVideoOnlines().subscribe (res=> {
      // console.log(res);
      this.videos = res;
    })
  }

  playThisVideo(url) {
    console.log(url);
    this.router.navigate(['/video/player', {testId: url}]);
  }

}
