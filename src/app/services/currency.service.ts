import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICurrency} from "../interfaces/currency.interface";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange'

  constructor(private http: HttpClient) {
  }

  getCurrencyByCodeAndDate(code: string, date: string) {
    return this.http.get<ICurrency[]>(`${this.url}?valcode=${code}&date=${date}&json`)

  }

  geAllCurrencies() {
    return this.http.get<ICurrency[]>(`${this.url}?json`)
  }
}
