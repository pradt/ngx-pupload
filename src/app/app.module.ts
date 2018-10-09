//Using instructions from https://www.techiediaries.com/angular-elements-web-components/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import  { createCustomElement } from '@angular/elements';
//import { AppComponent } from './app.component';
import { NgxPUploadComponent } from './ngx-upload/ngx-upload.component';

@NgModule({
  declarations: [
    //AppComponent,
    NgxPUploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent],
  entryComponents: [
    NgxPUploadComponent
  ]
})
export class AppModule { 
  
  constructor(private injector : Injector){
    const el = createCustomElement(NgxPUploadComponent, {injector : this.injector});
    customElements.define('ngx-pupload',el);

  }
  
  ngDoBootstrap(){
  }

}
