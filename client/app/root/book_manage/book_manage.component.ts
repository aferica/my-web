/**
 * Created by aferica on 17-6-21.
 */
import { Component } from "@angular/core";
import { BookManageService } from './book_manage.service';

@Component({
  selector: 'book_manage',
  providers: [BookManageService],
  templateUrl: './book_manage.html'
})

export class BookManageComponent {
  chapter_name: string;
  detail: string;
  introduction: string;
  name: string;
  author: string;
  downloadUrl: string;

  constructor(
    private bms : BookManageService
  ) {}

  addBook() {
    let args = {
      name: this.name,
      author: this.author,
      downloadUrl: this.downloadUrl,
      introduction: this.introduction,
      createBy: 'root'
    }

    this.bms.addBook(JSON.stringify(args)).subscribe( res => {
      if(res != null) {
        console.log('success')
      }
    })
  }
}
