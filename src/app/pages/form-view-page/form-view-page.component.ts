import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderNavbarComponent } from '../../navs/header-navbar/header-navbar.component';
import { ShowFormComponentComponent } from '../../components/show-form-component/show-form-component.component';

@Component({
  selector: 'app-form-view-page',
  standalone: true,
  imports: [RouterOutlet,HeaderNavbarComponent,ShowFormComponentComponent],
  templateUrl: './form-view-page.component.html',
  styleUrl: './form-view-page.component.css'
})
export class FormViewPageComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/login']);
    }
  }

}
