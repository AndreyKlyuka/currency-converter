import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../interfaces/currency.interface";
import {Observable} from "rxjs";
import {CurrencyService} from "../../services/currency.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss']
})
export class CurrencyItemComponent implements OnInit{
  @Input()
  currencyCC!: string
  @Input()
  currentDate!: string
  currencyData$!: Observable<ICurrency[]>

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(){
    this.currencyData$ = this.currencyService.getCurrencyByCodeAndDate(
      this.currencyCC,
      this.currentDate
    )
  }
}
