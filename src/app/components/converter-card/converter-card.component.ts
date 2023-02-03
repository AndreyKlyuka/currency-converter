import {Component, OnInit} from '@angular/core';
import {ICurrency} from "../../interfaces/currency.interface";
import {CurrencyService} from "../../services/currency.service";



@Component({
  selector: 'app-converter-card',
  templateUrl: './converter-card.component.html',
  styleUrls: ['./converter-card.component.scss']
})


export class ConverterCardComponent implements OnInit {

  currencies: ICurrency[] =[]

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.geAllCurrencies().subscribe(
      data => {
        this.currencies = data
        console.log(this.currencies)
      })
  }


}
