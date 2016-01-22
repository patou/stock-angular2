import {Component, OnInit} from 'angular2/core'
import {NgFor, DatePipe} from 'angular2/common'
import {Observable} from 'rxjs/Observable'
import {DataService} from './data.service'
import {Stock} from './stock.bean'
import {StockDetail} from './stock.detail'

@Component({
    selector: 'stock-angular2',
    templateUrl: 'app/template.html',
    styleUrls: ['app/style.css'],
    directives: [NgFor, StockDetail],
    providers : [DataService],
    pipes: [DatePipe]
})
export class StockAngular2 implements OnInit {
  stocks: Array<Stock>;
  selected: Stock;

  constructor(private _dataService : DataService) {}

  getData() {
    this.stocks = this._dataService.getData();
  }

  ngOnInit() {
    this.getData();
  }
  onSelect(stock: Stock) {
      this.selected = stock;
  }
}
