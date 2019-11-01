import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoFechadoComponent } from './carrinho-fechado.component';

describe('CarrinhoFechadoComponent', () => {
  let component: CarrinhoFechadoComponent;
  let fixture: ComponentFixture<CarrinhoFechadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoFechadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoFechadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
