import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorDosComponent } from './contenedor-dos.component';

describe('ContenedorDosComponent', () => {
  let component: ContenedorDosComponent;
  let fixture: ComponentFixture<ContenedorDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
