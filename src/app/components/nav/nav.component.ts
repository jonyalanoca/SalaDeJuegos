// import { Component } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @ViewChild('mobileNav') mobileNav!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  public isLoged: boolean = true;

  public usuario: any;
  constructor(private Auth: AuthService) {
    this.isLoged = this.Auth.isLoged;
  }
  toggleNav(): void {
    this.navbar.nativeElement.classList.toggle("active");
    this.mobileNav.nativeElement.classList.toggle("hamburger-active");
  }
  out() {
    this.Auth.logout();
  }
  
}
