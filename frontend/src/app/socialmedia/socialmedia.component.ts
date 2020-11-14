import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent {
  @Input()
  private link: string;

  @Input()
  private image: string;

  redirect(): void {
    window.open(this.link);
  }

  getImage(): string {
    return this.image;
  }
}
