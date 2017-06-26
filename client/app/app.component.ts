
import { Component,AfterViewInit,ElementRef } from '@angular/core';

declare var Ultima: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  layoutCompact: boolean = true;

  layoutMode: string = 'static';

  darkMenu: boolean = false;

  profileMode: string = 'inline';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    Ultima.init(this.el.nativeElement);
  }
}

