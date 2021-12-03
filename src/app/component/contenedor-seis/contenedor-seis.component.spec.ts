import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSeisComponent } from './contenedor-seis.component';

describe('ContenedorSeisComponent', () => {
  let component: ContenedorSeisComponent;
  let fixture: ComponentFixture<ContenedorSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorSeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
