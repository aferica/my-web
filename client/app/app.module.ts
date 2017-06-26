import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenubarModule, PanelMenuModule,InputTextModule, DataTableModule,PaginatorModule,DialogModule,GrowlModule,
  ButtonModule,MenuModule,TabViewModule,CalendarModule,DropdownModule,AutoCompleteModule,RadioButtonModule,
  FileUploadModule,EditorModule,SharedModule,TooltipModule,MultiSelectModule,InputTextareaModule,CheckboxModule } from 'primeng/primeng'

import { AppComponent } from './app.component';
import { routing } from "./app.routing";

import { DoushiComponent } from "./ebook/doushi/doushi.component";
import { BookManageComponent } from './root/book_manage/book_manage.component';

@NgModule({
  declarations: [
    AppComponent,
    DoushiComponent,
    BookManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpModule,
    routing,
    MenubarModule, PanelMenuModule,InputTextModule, DataTableModule,PaginatorModule,DialogModule,GrowlModule,
    ButtonModule,MenuModule,TabViewModule,CalendarModule,DropdownModule,AutoCompleteModule,RadioButtonModule,
    FileUploadModule,EditorModule,SharedModule,TooltipModule,MultiSelectModule,InputTextareaModule,CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
