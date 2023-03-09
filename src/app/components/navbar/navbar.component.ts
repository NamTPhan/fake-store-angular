import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isCartSideBarOpen = false;
  public isMobileMenuOpen = false;

  public toggleCartSideBar(): void {
    this.isCartSideBarOpen = !this.isCartSideBarOpen;
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
