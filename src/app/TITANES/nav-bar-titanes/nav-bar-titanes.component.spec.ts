import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarTITANESComponent } from './nav-bar-titanes.component';

describe('NavBarTITANESComponent', () => {
  let component: NavBarTITANESComponent;
  let fixture: ComponentFixture<NavBarTITANESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarTITANESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarTITANESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
