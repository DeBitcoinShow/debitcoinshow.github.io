import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private navbarOpen = false;
  private socialbarOpen = false;

  closeAllBars(): void {
    this.navbarOpen = false;
    this.socialbarOpen = false;
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
    this.socialbarOpen = false;
  }

  toggleSocialBar(): void {
    this.socialbarOpen = !this.socialbarOpen;
  }

  isNavbarOpen(): boolean {
    return this.navbarOpen;
  }

  isSocialBarOpen(): boolean {
    return this.socialbarOpen;
  }
}
