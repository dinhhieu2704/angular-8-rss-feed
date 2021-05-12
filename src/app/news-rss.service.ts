import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsRssService {

  requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
  constructor(
    private http: HttpClient
  ) { }

  getData(): Promise<any> {
    return this.http.get<any>("https://gadgets.ndtv.com/rss/feeds", this.requestOptions).toPromise();
  }

}