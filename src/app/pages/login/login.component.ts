import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserLoginDto } from '../../models/userLoginDto';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,RouterOutlet]
})


export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message: string = '';
  constructor(private http: HttpClient,private router: Router) { }

  login(formData: UserLoginDto): void {
    this.http.post<any>('https://localhost:7073/api/Auth/login', formData)
      .subscribe(response => {
        this.message = 'Giriş yapıldı';
        localStorage.setItem('token', response.Data);
        this.router.navigate(['/formManagement']);
      }, error => {
        this.message = 'Giriş başarısız';
      });
  }
  ngOnInit(): void {
    localStorage.removeItem("token");
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.login(formData);
    }


  }
}
