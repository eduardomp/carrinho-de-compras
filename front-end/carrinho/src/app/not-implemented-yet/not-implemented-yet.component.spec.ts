import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImplementedYetComponent } from './not-implemented-yet.component';

describe('NotImplementedYetComponent', () => {
  let component: NotImplementedYetComponent;
  let fixture: ComponentFixture<NotImplementedYetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotImplementedYetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotImplementedYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
