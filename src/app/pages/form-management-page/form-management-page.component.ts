import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderNavbarComponent } from '../../navs/header-navbar/header-navbar.component';
import { FormsCrudComponentComponent } from '../../components/forms-crud-component/forms-crud-component.component';
@Component({
  selector: 'app-form-management-page',
  standalone: true,
  imports: [RouterOutlet, HeaderNavbarComponent,FormsCrudComponentComponent],
  templateUrl: './form-management-page.component.html',
  styleUrls: ['./form-management-page.component.css']
})
export class FormManagementPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/login']);
    }
  }
}
