import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputextareaComponent } from './inputextarea.component';

describe('InputextareaComponent', () => {
  let component: InputextareaComponent;
  let fixture: ComponentFixture<InputextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
