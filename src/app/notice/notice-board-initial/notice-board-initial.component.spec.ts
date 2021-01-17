import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardInitialComponent } from './notice-board-initial.component';

describe('NoticeBoardInitialComponent', () => {
  let component: NoticeBoardInitialComponent;
  let fixture: ComponentFixture<NoticeBoardInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeBoardInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeBoardInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
