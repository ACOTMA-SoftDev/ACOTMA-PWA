import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTitanesComponent } from './menu-titanes.component';

describe('MenuTitanesComponent', () => {
  let component: MenuTitanesComponent;
  let fixture: ComponentFixture<MenuTitanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTitanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTitanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
