import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataModule } from './data/data.module';

@NgModule({
  declarations: [AppComponent, DataComponent],
  imports: [BrowserModule, DataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
