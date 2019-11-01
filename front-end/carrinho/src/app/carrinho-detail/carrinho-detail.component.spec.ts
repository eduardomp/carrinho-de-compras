import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoDetailComponent } from './carrinho-detail.component';

describe('CarrinhoDetailComponent', () => {
  let component: CarrinhoDetailComponent;
  let fixture: ComponentFixture<CarrinhoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
