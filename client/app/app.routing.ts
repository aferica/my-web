
import { Routes, RouterModule } from "@angular/router";

import { DoushiComponent } from "./ebook/doushi/doushi.component";
import { BookManageComponent } from './root/book_manage/book_manage.component';
import { ChapterManageComponent } from './root/book_manage/chapter_manage.component';
import { BtComponent } from './video/bt/bt.component';
import { OnlineComponent } from './video/online/online.component';
import { PlayerComponent } from './video/player/player.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/ebook/doushi', pathMatch: 'full'},
  { path: 'ebook/doushi', component: DoushiComponent },
  { path: 'video/bt', component: BtComponent },
  { path: 'video/online', component: OnlineComponent },
  { path: 'video/player', component: PlayerComponent },
  { path: 'root/book_manage', component: BookManageComponent },
  { path: 'root/chapter_manage', component: ChapterManageComponent },
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
