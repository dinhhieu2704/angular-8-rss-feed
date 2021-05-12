import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsRssService } from './news-rss.service';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NewsRssService]
})
export class AppModule { }
