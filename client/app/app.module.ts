import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MenubarModule, PanelMenuModule,InputTextModule, DataTableModule,PaginatorModule,DialogModule,GrowlModule,DataListModule,
  ButtonModule,MenuModule,TabViewModule,CalendarModule,DropdownModule,AutoCompleteModule,RadioButtonModule,DataGridModule,
  FileUploadModule,EditorModule,SharedModule,TooltipModule,MultiSelectModule,InputTextareaModule,CheckboxModule,
  PanelModule } from 'primeng/primeng'

import { AppComponent } from './app.component';
import { routing } from "./app.routing";

import { DoushiComponent } from "./ebook/doushi/doushi.component";
import { BookManageComponent } from './root/book_manage/book_manage.component';
import { ChapterManageComponent } from './root/book_manage/chapter_manage.component';
import { BtComponent } from './video/bt/bt.component';
import { OnlineComponent } from './video/online/online.component';
import { PlayerComponent } from './video/player/player.component';
import { QingchunComponent } from './image/qingchun/qingchun.component';
import { XingganComponent } from './image/xinggan/xinggan.component';
import { ZhenhanComponent } from './image/zhenhan/zhenhan.component';
import { XindongComponent } from './image/xindong/xindong.component';
import { ViewComponent } from './image/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    DoushiComponent,
    BookManageComponent,
    ChapterManageComponent,
    BtComponent,
    OnlineComponent,
    PlayerComponent,
    QingchunComponent,
    XingganComponent,
    ZhenhanComponent,
    XindongComponent,
    ViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule, HttpModule, JsonpModule,
    routing,
    MenubarModule, PanelMenuModule,InputTextModule, DataTableModule,PaginatorModule,DialogModule,GrowlModule,DataListModule,
    ButtonModule,MenuModule,TabViewModule,CalendarModule,DropdownModule,AutoCompleteModule,RadioButtonModule,DataGridModule,
    FileUploadModule,EditorModule,SharedModule,TooltipModule,MultiSelectModule,InputTextareaModule,CheckboxModule, PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
