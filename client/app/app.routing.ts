
import { Routes, RouterModule } from "@angular/router";
import { DoushiComponent } from "./ebook/doushi/doushi.component";
import { BookManageComponent } from './root/book_manage/book_manage.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/ebook/doushi',
    pathMatch: 'full'
  },
  {
    path: 'ebook/doushi',
    component: DoushiComponent
  },
  {
    path: 'root/book_manage',
    component: BookManageComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
