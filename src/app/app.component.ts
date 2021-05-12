import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';
import { NewsRssService } from "./news-rss.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  RssData: any;
  constructor(private _newsRssService: NewsRssService) {}
  ngOnInit() {
    this.GetRssFeedData();
  }
  
  GetRssFeedData() {
    this._newsRssService.getData().then(data => {
        xml2js.parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
          console.log(this.RssData);
        });
      });
  }

  get sortData() {
    return this.RssData?.rss.channel[0].item.sort((a, b) => {
      return <any>new Date(b.pubDate) - <any>new Date(a.pubDate);
    })
  }
}

export interface IRssData {}
