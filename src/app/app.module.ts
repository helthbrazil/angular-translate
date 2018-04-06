import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule} from 'ng2-translate';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot()
  ],
  exports: [
    TranslateModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
