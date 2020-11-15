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
  readonly MINIMUM_VALUE = 0.00000001;
  readonly MAXIMUM_VALUE = 21000000;

  donationValue: number;
  donationCurrency: string;

  ngOnInit(): void {
    this.donationValue = this.MINIMUM_VALUE;
    this.donationCurrency = this.DEFAULT_DONATION_CURRENCY;
  }

  // TODO HTTP post request and input validation
  donate(): void {
    if (this.donationValue < this.MAXIMUM_VALUE && this.donationValue > this.MINIMUM_VALUE) {
      console.log(this.STORE_ID, this.CHECKOUT_DESCRIPTION, this.ORDER_ID, this.NOTIFY_EMAIL, this.donationValue, this.donationCurrency);
    }
  }
}
