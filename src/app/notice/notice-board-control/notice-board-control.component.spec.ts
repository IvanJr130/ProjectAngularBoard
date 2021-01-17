import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardControlComponent } from './notice-board-control.component';

describe('NoticeBoardControlComponent', () => {
  let component: NoticeBoardControlComponent;
  let fixture: ComponentFixture<NoticeBoardControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeBoardControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeBoardControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
