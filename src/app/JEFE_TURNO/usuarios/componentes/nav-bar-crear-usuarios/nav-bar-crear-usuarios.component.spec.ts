import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCrearUsuariosComponent } from './nav-bar-crear-usuarios.component';

describe('NavBarCrearUsuariosComponent', () => {
  let component: NavBarCrearUsuariosComponent;
  let fixture: ComponentFixture<NavBarCrearUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarCrearUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarCrearUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
