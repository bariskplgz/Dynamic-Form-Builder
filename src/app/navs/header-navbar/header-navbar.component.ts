import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.css'
})
export class HeaderNavbarComponent {
  constructor(private router: Router) { }

  logout() : void{
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
  goToFormManagement() : void{
    this.router.navigate(['/formManagement']);
  }
}
