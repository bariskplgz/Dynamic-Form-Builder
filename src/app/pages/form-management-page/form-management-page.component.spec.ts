import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormManagementPageComponent } from './form-management-page.component';

describe('FormManagementPageComponent', () => {
  let component: FormManagementPageComponent;
  let fixture: ComponentFixture<FormManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormManagementPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
