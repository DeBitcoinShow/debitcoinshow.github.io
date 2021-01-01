import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent {

  readonly BITCOIN_ADDRESS = 'Bitcoin adres';

  // Search online for more information
  getBitcoinQrCodeString(): string {
    return 'bitcoin' +                // Currency
      ':' +                           // Colon
      this.BITCOIN_ADDRESS;           // Recipient
  }
}
