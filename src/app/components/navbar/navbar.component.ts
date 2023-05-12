import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isCartSideBarOpen = false;
  public isMobileMenuOpen = false;
  public data: any;
  public isLoading: boolean; // TODO

  // constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.isLoading = false;
  }

  public toggleCartSideBar(): void {
    this.isCartSideBarOpen = !this.isCartSideBarOpen;
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public handleSearchSubmit(): void {
    console.log('Search!', this.data);
  }

  public handleInputChange(value: string): void {
    this.data = value;
  }
}
