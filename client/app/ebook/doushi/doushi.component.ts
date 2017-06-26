import { Component, OnInit } from "@angular/core";
import { DushiService } from './dushi.service';

@Component({
  selector: 'doushi',
  templateUrl: './doushi.html',
  providers: [DushiService]
})

export class DoushiComponent implements OnInit{

  constructor(
    private doushiService: DushiService
  ){}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
      this.doushiService.getBooks().subscribe (res=> {
        console.log(res)
      })
  }
}
