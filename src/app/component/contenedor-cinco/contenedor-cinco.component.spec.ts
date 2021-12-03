import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorCincoComponent } from './contenedor-cinco.component';

describe('ContenedorCincoComponent', () => {
  let component: ContenedorCincoComponent;
  let fixture: ComponentFixture<ContenedorCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
