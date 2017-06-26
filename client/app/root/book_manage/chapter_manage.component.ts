/**
 * Created by aferica on 17-6-26.
 */
import { Component } from "@angular/core";
import { ChapterManageService } from './chapter_manage.service';

@Component({
  selector: 'book_manage',
  providers: [ChapterManageService],
  templateUrl: './chapter_manage.html'
})

export class ChapterManageComponent {
  chapter_name: string;
  detail: string;
  introduction: string;
  name: string;
  author: string;
  downloadUrl: string;

  constructor(
    private bms : ChapterManageService
  ) {}

  addChapter() {
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
