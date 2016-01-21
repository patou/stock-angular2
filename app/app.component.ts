import {Component, OnInit} from 'angular2/core'
import {NgFor} from 'angular2/common'
import {Observable} from 'rxjs/Observable'
import {DataService} from './data.service'

@Component({
    selector: 'stock-angular2',
    templateUrl: 'app/template.html',
    styleUrls: ['app/style.css'],
    directives: [NgFor],
    providers : [DataService]
})
export class StockAngular2 implements OnInit {
  stocks: Array<any>;

  constructor(private _dataService : DataService) {}

  getData() {
    this.stocks = this._dataService.getData();
  }

  ngOnInit() {
    this.getData();
  }
}
