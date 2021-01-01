import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent {

  readonly BANK_NUMBER = 'Rekeningnummer';

  // Refer to https://epc-qr.eu/ for more information
  getBankQrCodeString(): string {
    return 'BCD\n' +               // Service tag
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
