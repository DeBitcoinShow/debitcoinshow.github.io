import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightning',
  templateUrl: './lightning.component.html',
  styleUrls: ['./lightning.component.css']
})
export class LightningComponent {

  readonly LIGHTNING_ADDRESS = 'Lightning adres';

  // TODO
  getLightningQrCodeString(): string {
    return 'ImplementQrCodeString';
  }

}
