import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isMenuOpen :boolean = false;
  hide :boolean = true;

  openMenu() {
    this.isMenuOpen = true;
    this.hide = false;
  }
  closeMenu() {
    this.isMenuOpen = false;
    this.hide = true;
  }

}
