import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorOchoComponent } from './contenedor-ocho.component';

describe('ContenedorOchoComponent', () => {
  let component: ContenedorOchoComponent;
  let fixture: ComponentFixture<ContenedorOchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorOchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorOchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
