import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSieteComponent } from './contenedor-siete.component';

describe('ContenedorSieteComponent', () => {
  let component: ContenedorSieteComponent;
  let fixture: ComponentFixture<ContenedorSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorSieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
