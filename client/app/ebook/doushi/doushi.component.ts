import { Component, OnInit } from "@angular/core";
import { DushiService } from './dushi.service';

import { Book } from '../book';

@Component({
  selector: 'doushi',
  templateUrl: './doushi.html',
  providers: [DushiService]
})

export class DoushiComponent implements OnInit{

  books = [];

  constructor(
    private doushiService: DushiService
  ){}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
      this.doushiService.getBooks().subscribe (res=> {
        // console.log(res)
        let temp = {};
        for(let book of res.books) {
          console.log(book);
          temp = {
            'title': book.title,
            'author': book.author,
            'cover': 'http://statics.zhuishushenqi.com' + book.cover,
            'tags': book.tags,
            'shortIntro': book.shortIntro,
            '_id': book._id,
            'lastChapter': book.lastChapter,
            'minorCate': book.minorCate,
            'majorCate': book.majorCate,
            'retentionRatio': book.retentionRatio
          };
          this.books.push(temp);
          console.log(this.books);
        }
      })
  }
}


