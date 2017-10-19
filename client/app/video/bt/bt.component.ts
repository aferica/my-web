import { Component, OnInit } from '@angular/core';
import { BtService } from './bt.service';

@Component({
  selector: 'app-bt',
  templateUrl: './bt.component.html',
  styleUrls: ['./bt.component.scss'],
  providers: [BtService]
})
export class BtComponent implements OnInit {

  bts: Bt[];

  constructor(
    private btService: BtService
  ) { }

  ngOnInit() {
    this.btService.getBts().subscribe (res=> {
      console.log(res);
      this.bts = res;
    })
  }

}

interface Bt {
  VideoID;
  Img;
  ACtress;
  Magnet;
}
