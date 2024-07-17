import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Form } from '../../models/form';
import { FormDto } from '../../models/FormDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-crud-component',
  standalone: true,
  imports: [TableModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './forms-crud-component.component.html',
  styleUrls: ['./forms-crud-component.component.css']
})
export class FormsCrudComponentComponent implements OnInit {
  createForm!: FormGroup;
  forms!: Form[];
  filterText: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.initializeForm();
    this.getAllProducts();
  }

  initializeForm() {
    this.createForm = this.fb.group({
      formName: ['', Validators.required],
      formDescription: ['', Validators.required],
      formFields: this.fb.array([]) 
    });
  }

  get formFields(): FormArray {
    return this.createForm.get('formFields') as FormArray;
  }

  addField() {
    this.formFields.push(this.fb.group({
      fieldName: [''],
      fieldType: [''],
      isFieldRequired: ['']
    }));
  }
  filterForms() {
    this.forms = this.forms.filter(form => form.name.toLowerCase().includes(this.filterText.toLowerCase()));
  }

  getAllProducts() {
    this.http.get<any>("https://localhost:7073/api/Form/getForms")
      .subscribe(response => {
        this.forms = response.data;
      }, error => {
        console.error('Error fetching products:', error);
      });
  }
  openForm(id :any){
    this.router.navigate(['/forms', id]);
  }

  onSubmit(): void {
    console.log(this.createForm.valid)
    if (this.createForm.valid) {
      const formData = this.createForm.value;

      const formDto: FormDto = {
        Name: formData.formName,
        Description: formData.formDescription,
        fields: formData.formFields.map((field: any) => ({
          Name: field.fieldName,
          DataType: field.fieldType,
          Required: Boolean(field.isFieldRequired)
        }))
      };

      this.http.post<any>("https://localhost:7073/api/Form/addForm", formDto)
        .subscribe(response => {
          console.log('Form successfully submitted', response);
          this.getAllProducts();
        }, error => {
          console.error('Error submitting form:', error);
          if (error.error && error.error.errors) {
            console.error('Validation errors:', error.error.errors);
          }
        });
    }
  }

}
