import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorTresComponent } from './contenedor-tres.component';

describe('ContenedorTresComponent', () => {
  let component: ContenedorTresComponent;
  let fixture: ComponentFixture<ContenedorTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
