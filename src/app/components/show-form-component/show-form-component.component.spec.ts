import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormComponentComponent } from './show-form-component.component';

describe('ShowFormComponentComponent', () => {
  let component: ShowFormComponentComponent;
  let fixture: ComponentFixture<ShowFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFormComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
