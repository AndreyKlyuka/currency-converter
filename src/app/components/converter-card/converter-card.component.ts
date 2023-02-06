import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-converter-card',
  templateUrl: './converter-card.component.html',
  styleUrls: ['./converter-card.component.scss']
})
export class ConverterCardComponent implements OnInit {

  // currencies$!: Observable<ICurrency[]>

  // constructor(private currencyService: CurrencyService) {
  // }

  ngOnInit() {
    // this.currencies$ = this.currencyService.geAllCurrencies()
  }
}
