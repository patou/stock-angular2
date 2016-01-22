import {Component, OnInit} from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {Stock} from './stock.bean'


@Component({
    template: `<form *ngIf="stock" class="form-horizontal">
    <div class="form-group"><label class="col-sm-2 control-label">id: </label>
        <div class="col-sm-8">{{stock.id}}</div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">Article: </label>
      <div class="col-sm-8">
        <input [(ngModel)]="stock.article" placeholder="Article" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">Stock: </label>
      <div class="col-sm-8">
        <input [(ngModel)]="stock.stock" type="number" placeholder="Stock" class="form-control"/>
      </div>
    </div>
  </form>`,
  inputs: ['stock'],
  directives: [CORE_DIRECTIVES],
  selector: 'stock-detail'
})
export class StockDetail {
    public stock: Stock;
}