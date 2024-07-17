import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-form-component',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './show-form-component.component.html',
  styleUrls: ['./show-form-component.component.css']
})
export class ShowFormComponentComponent implements OnInit {


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.getFormById(Number(id));
  }
  form: any;
  fields : any

  getFormById(id: number) {
    this.http.get<any>(`https://localhost:7073/api/Form/getFormByIdWithFields/${id}`)
      .subscribe(response => {
        console.log(response);
        this.form = response;
        this.fields = response.fields;
        console.log(this.fields)

      }, error => {
        console.error('Error fetching form:', error);
      });
  }
}
