import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorCuatroComponent } from './contenedor-cuatro.component';

describe('ContenedorCuatroComponent', () => {
  let component: ContenedorCuatroComponent;
  let fixture: ComponentFixture<ContenedorCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
