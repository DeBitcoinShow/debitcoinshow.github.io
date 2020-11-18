import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  readonly BITCOIN_ADDRESS = 'Bitcoin adres';
  readonly BANK_NUMBER = 'Rekeningnummer';

  // Search online for more information
  getBitcoinQrCodeString(): string {
    return 'bitcoin' +                // Currency
           ':' +                      // Colon
           this.BITCOIN_ADDRESS;      // Recipient
  }

  // Refer to https://epc-qr.eu/ for more information
  getBankQrCodeString(): string {
  return 'BCD\n' +                    // Service tag
         '002\n' +                    // Version
         '1\n' +                      // Character set
         'SCT\n' +                    // Identification
         '\n' +                       // BIC
         'DBS\n' +                    // Name
         this.BANK_NUMBER + '\n' +    // IBAN
         '\n' +                       // Amount
         '\n' +                       // Reference
         'Donatie DBS';               // Information
  }
}
