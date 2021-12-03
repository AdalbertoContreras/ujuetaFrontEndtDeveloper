import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFullWidthComponent } from './menu-full-width.component';

describe('MenuFullWidthComponent', () => {
  let component: MenuFullWidthComponent;
  let fixture: ComponentFixture<MenuFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFullWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
