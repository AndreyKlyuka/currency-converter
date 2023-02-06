import {Component, OnInit} from '@angular/core';
import {ICurrency} from "../../interfaces/currency.interface";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-converter-item',
  templateUrl: './converter-item.component.html',
  styleUrls: ['./converter-item.component.scss']
})
export class ConverterItemComponent implements OnInit{
  currencies: ICurrency[]= [];
  selectedCurrency!: ICurrency
  value!:number

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.geAllCurrencies().subscribe(
      data => {
        this.currencies = data
      }
    )
  }
}
