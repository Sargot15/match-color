import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiderbarMenuComponent } from './components/siderbar-menu/siderbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SiderbarMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
