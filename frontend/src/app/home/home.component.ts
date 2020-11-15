import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  readonly STORE_ID = 'Dmy3sBstnR6HacuxdZHpwE5hufcaoeBeEjne32SfcUqA';
  readonly CHECKOUT_DESCRIPTION = 'Support de Bitcoin Show';
  readonly ORDER_ID = 'Donatie DBS';
  readonly NOTIFY_EMAIL = 'boris@debitcoinshow.nl';

  readonly DEFAULT_DONATION_CURRENCY = 'BTC';
  readonly BTC_STEP_VALUE = 0.00000001;
  readonly FIAT_STEP_VALUE = 0.01;

  donationValue: number;
  donationCurrency: string;

  ngOnInit(): void {
    this.donationCurrency = this.DEFAULT_DONATION_CURRENCY;
    this.donationValue = 0;
  }

  donate(): void {
    if (this.donationCurrency === 'BTC' && this.donationValue > this.BTC_STEP_VALUE) {
      // TODO HTTP post request
    }
    else if (this.donationValue > this.FIAT_STEP_VALUE) {
      // TODO HTTP post request
    }
  }
}
