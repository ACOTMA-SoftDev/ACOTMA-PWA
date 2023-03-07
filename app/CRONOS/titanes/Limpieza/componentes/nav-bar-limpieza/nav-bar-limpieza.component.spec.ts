import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLimpiezaComponent } from './nav-bar-limpieza.component';

describe('NavBarLimpiezaComponent', () => {
  let component: NavBarLimpiezaComponent;
  let fixture: ComponentFixture<NavBarLimpiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLimpiezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
