import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {

  @Input()
  qrValue: string;

  @Input()
  textValue: string;

  copyToClipboard(input: HTMLInputElement): void {
    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0, 0);
  }
}
