import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {ICurrency} from "../../interfaces/currency.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDate: Date = new Date()
  currenciesToShow: string[] = ['usd', 'eur']


  constructor() {
  }
  ngOnInit() {

  }
}
