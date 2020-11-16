import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   * BTC Pay server values
   */
  readonly BTCPAY_SERVER_URL = 'http://pay.gamekings.tv:49392/api/v1/invoices';
  readonly STORE_ID = 'Dmy3sBstnR6HacuxdZHpwE5hufcaoeBeEjne32SfcUqA';
  readonly CHECKOUT_DESCRIPTION = 'Support de Bitcoin Show';
  readonly ORDER_ID = 'Donatie DBS';
  readonly NOTIFY_EMAIL = 'boris@debitcoinshow.nl';

  /**
   * Minimal allowed values
   */
  readonly BTC_MIN_VALUE = 0.00000001;
  readonly FIAT_MIN_VALUE = 0.01;

  /**
   * User input values
   */
  donationCurrency: string;
  donationValue: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.donationCurrency = 'BTC';
    this.donationValue = 0;
  }

  donate(): void {
    if ((this.donationCurrency === 'BTC' && this.donationValue >= this.BTC_MIN_VALUE) || this.donationValue >= this.FIAT_MIN_VALUE) {
      this.verifyDonationPopup();
      this.sendDonationRequest();
    } else {
      this.incorrectInputPopup();
    }
  }

  private verifyDonationPopup(): void {
    confirm(`Verifiëer dat je ${this.donationValue} ${this.donationCurrency} wilt doneren`);
  }

  private incorrectInputPopup(): void {
    alert(`Incorrecte invoer ontvangen: ${this.donationValue} ${this.donationCurrency}`);
  }

  private sendDonationRequest(): any {
    this.dataService.post(this.BTCPAY_SERVER_URL, ({
      storeId: this.STORE_ID,
      checkoutDesc: this.CHECKOUT_DESCRIPTION,
      orderId: this.ORDER_ID,
      notifyEmail: this.NOTIFY_EMAIL,
      currency: this.donationCurrency,
      price: this.donationValue
    }));
  }
}
