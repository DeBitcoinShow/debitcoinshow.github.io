import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private date: Date;

  ngOnInit(): void {
    this.date = new Date();
  }

  getYear(): number {
    return this.date.getFullYear();
  }
}
