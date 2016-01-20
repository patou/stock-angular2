import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'stock-angular2',
    templateUrl: 'app/template.html',
    styleUrls: ['app/style.css'],
    directives: [NgFor]
})
export class StockAngular2 {
  stocks: any[];

  constructor() {
    this.stocks = [{
        "id": 0,
        "article": "ut",
        "stock": 923.85,
        "date": "Fri Dec 04 2015 19:46:03 GMT+0100 (Paris, Madrid)"
      },
      {
        "id": 1,
        "article": "et",
        "stock": 563.47,
        "date": "Sat May 02 2015 12:20:30 GMT+0200 (Paris, Madrid (heure d’été))"
      },
      {
        "id": 2,
        "article": "magna",
        "stock": 300.83,
        "date": "Tue Feb 03 2015 03:49:41 GMT+0100 (Paris, Madrid)"
      },
      {
        "id": 3,
        "article": "Lorem",
        "stock": 345.62,
        "date": "Wed Jul 29 2015 09:15:55 GMT+0200 (Paris, Madrid (heure d’été))"
      },
      {
        "id": 4,
        "article": "consequat",
        "stock": 700.91,
        "date": "Fri Mar 27 2015 12:53:31 GMT+0100 (Paris, Madrid)"
      },
      {
        "id": 5,
        "article": "nulla",
        "stock": 341.83,
        "date": "Fri May 15 2015 14:29:55 GMT+0200 (Paris, Madrid (heure d’été))"
      }];
  }
}
